import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth(); // Function from AuthContext
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      verificationCode: ["", "", "", ""], // Array for 4-digit code
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      verificationCode: Yup.array()
        .of(
          Yup.string()
            .matches(/^\d$/, "Each digit must be a number")
            .required("Required")
        )
        .length(4, "Verification code must be 4 digits"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const verificationCode = values.verificationCode.join(""); // Combine the 4 digits
        await resetPassword(values.email, verificationCode, values.password);
        toast.success("Password reset successful!");
        navigate("/login");
      } catch (err) {
        toast.error(err?.response?.data?.message || "Error resetting password");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleCodeChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const updatedCode = [...formik.values.verificationCode || ["", "", "", ""]];
      updatedCode[index] = value;
      formik.setFieldValue("verificationCode", updatedCode);

      // Automatically move to the next input
      if (value && index < 3) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl font-extrabold text-center text-yellow-600 mb-6">Reset Password</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-2 block w-full px-4 py-2 border rounded-lg shadow-sm ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Verification Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Verification Code
            </label>
            <div className="flex justify-between gap-4 mt-2">
              {formik.values.verificationCode.map((code, index) => (
                <input
                  key={index}
                  id={`code-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={code || ""}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-xl font-bold border-2 rounded-full focus:outline-none shadow-sm bg-gray-50 text-gray-800 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              ))}
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`mt-2 block w-full px-4 py-2 border rounded-lg shadow-sm ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`mt-2 block w-full px-4 py-2 border rounded-lg shadow-sm ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
              }`}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg shadow-md text-white font-bold ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500"
              }`}
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-500 hover:text-yellow-600 font-medium"
          >
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

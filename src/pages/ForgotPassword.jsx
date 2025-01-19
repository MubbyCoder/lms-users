import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await axios.post(
          `${apiUrl}/auth/forgot-password`,
          { email: values.email },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status === 200) {
          toast.success("Verification code sent to your email.");
          localStorage.setItem("email", values.email);
          navigate("/verifyCode");
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-3xl font-extrabold text-center text-yellow-600 mb-4">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email address to receive a verification code.
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm ${
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
          <div>
            <button
              type="submit"
              className={`w-full py-2 px-4 text-white font-bold rounded-lg shadow-md transition-colors ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-700"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Verification Code"}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-500 hover:text-yellow-600 font-medium transition-colors"
          >
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

/* eslint-disable no-unused-vars */
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import "../index.css";
import * as Yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import UseShowPassword from "../hooks/useShowPassword";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const { signup } = useAuth();
  const { showPassword, handleShowPassword } = UseShowPassword();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      firstname: Yup.string().required("Firstname is required"),
      lastname: Yup.string().required("Lastname is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Minimum of 6 characters"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true); // Disable button
      try {
        await signup(values);
        toast.success("Signup successful!");
      } catch (error) {
        toast.error("Signup failed. Please try again.");
      } finally {
        setIsSubmitting(false); // Re-enable button
      }
    },
  });

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-[500px] mx-auto mt-12 p-6  rounded-lg shadow-lg bg-gray-700">
        <div className="text-center mb-4">
          <p className="text-yellow-200 font-semibold text-sm">
            Please sign up to get started
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-yellow-300"
            >
              Email address:
            </label>
            <input
              className="appearance-none border border-yellow-400 rounded w-full py-3 px-4 mt-2 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 placeholder-gray-500 text-yellow-200"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-600 text-sm">{formik.errors.email}</p>
            )}
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-sm font-semibold text-yellow-300"
            >
              Firstname:
            </label>
            <input
              className="appearance-none border border-gray-600 rounded w-full py-3 px-4 mt-2 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 placeholder-gray-500"
              type="text"
              placeholder="Enter your firstname"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <p className="text-red-600 text-sm">{formik.errors.firstname}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-sm font-semibold text-yellow-300"
            >
              Lastname:
            </label>
            <input
              className="appearance-none border border-gray-600 rounded w-full py-3 px-4 mt-2 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 placeholder-gray-500"
              type="text"
              placeholder="Enter your lastname"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <p className="text-red-600 text-sm">{formik.errors.lastname}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-yellow-300"
            >
              Password:
            </label>
            <input
              className="appearance-none border border-gray-600 rounded w-full py-3 px-4 mt-2 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 placeholder-gray-600 text-yellow-200"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className="absolute right-4 transform -translate-y-1/2 cursor-pointer top-12">
              {showPassword ? (
                <FaEyeSlash  size={20} onClick={handleShowPassword} className="text-yellow-300" />
              ) : (
                <FaEye size={20} onClick={handleShowPassword}className="text-yellow-300" />
              )}
            </span>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-600 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Signup"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              className="text-yellow-400 font-medium hover:underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Signup;

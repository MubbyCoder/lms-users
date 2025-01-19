import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import "../index.css";
import * as Yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import UseShowPassword from "../hooks/useShowPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { login, loading } = useAuth();
  const { showPassword, handleShowPassword } = UseShowPassword();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Minimum of 6 characters"),
    }),
    onSubmit: async (values) => {
      try {
        // Only call login; remove toast here
        await login(values);
      } catch (error) {
        // Show error toast only in case of failure
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-gray-700 text-yellow-200 rounded-lg shadow-lg px-6 py-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-yellow-300">Welcome Back</h2>
          <p className="text-gray-400">Sign in to your account to continue.</p>
          <div className="border-t-2 border-yellow-400 mt-4 w-12 mx-auto"></div>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-yellow-300"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-800 text-yellow-200 placeholder-gray-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-400 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-yellow-300"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-800 text-yellow-200 placeholder-gray-500"
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer top-6"
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <FaEyeSlash size={20} className="text-yellow-300" />
              ) : (
                <FaEye size={20} className="text-yellow-300" />
              )}
            </span>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-4 sm:mt-2">
            <Link
              to="/forgot_password"
              className="text-sm text-yellow-400 hover:underline sm:inline-block sm:px-2 sm:py-1"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 disabled:bg-yellow-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/"
              className="text-yellow-400 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000} 
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

export default Login;

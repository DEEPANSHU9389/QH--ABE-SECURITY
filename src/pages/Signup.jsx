import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Create a QEncrypt Account
        </h2>

        <form className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Gmail"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 text-center text-gray-500 dark:text-gray-400">OR</div>

        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white">
            <FcGoogle size={20} />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white">
            <FaApple size={18} />
            Sign up with Apple
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white">
            <FaFacebookF size={18} className="text-blue-600" />
            Sign up with Facebook
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


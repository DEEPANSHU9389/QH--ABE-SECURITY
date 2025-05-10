import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const mockUser = {
      name: "QEncrypt User",
      email: "user@example.com",
    };
    login(mockUser);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Login to QEncrypt
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Gmail"
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
          >
            Login
          </button>
        </form>

        <div className="my-6 text-center text-gray-500 dark:text-gray-400">OR</div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleLogin()}
            className="flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white"
          >
            <FcGoogle size={20} />
            Login with Google
          </button>
          <button
            onClick={() => handleLogin()}
            className="flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white"
          >
            <FaApple size={18} />
            Login with Apple
          </button>
          <button
            onClick={() => handleLogin()}
            className="flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white"
          >
            <FaFacebookF size={18} className="text-blue-600" />
            Login with Facebook
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


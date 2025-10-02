import { Link } from "react-router-dom";

function UserLogin() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">User Login</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Email or Mobile"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/user/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;

import { Link } from "react-router-dom";

function ProviderLogin() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Provider Login</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Email or Mobile"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
          />
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/provider/signup" className="text-green-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ProviderLogin;

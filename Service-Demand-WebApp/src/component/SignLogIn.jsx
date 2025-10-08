// AuthModal.jsx
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function SignLogIn({ SignLogInOpen, setSignLogInOpen }) {
  const [isSignup, setIsSignup] = useState(true);
  const [userType, setUserType] = useState("user");

  if (!SignLogInOpen) return null; 

  return (
    <div className="fixed inset-0 bg-[#012b39]/50 backdrop-blur-md z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative text-black shadow-xl">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-green-600"
          onClick={() => setSignLogInOpen(false)}
        >
          <IoMdClose size={24} />
        </button>

        {/* User/Provider Switching */}
        <div className="flex justify-center space-x-4 mb-5">
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              userType === "user"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setUserType("user")}
          >
            User
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              userType === "provider"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setUserType("provider")}
          >
            Provider
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isSignup
            ? userType === "user"
              ? "User Sign Up"
              : "Provider Sign Up"
            : userType === "user"
            ? "User Log In"
            : "Provider Log In"}
        </h2>

        <form className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />
          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
          )}

          {/* Provider Category Dropdown */}
          {isSignup && userType === "provider" && (
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Service Category
              </option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="carpenter">Carpenter</option>
              <option value="painter">Painter</option>
              <option value="cleaner">Cleaner</option>
              <option value="mechanic">Mechanic</option>
            </select>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition-all"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            className="text-green-600 font-medium hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

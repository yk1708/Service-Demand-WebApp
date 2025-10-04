import { useState } from "react";
import { FaSearch, FaGlobe, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [userType, setUserType] = useState("user");

  const navItems = [
    "Products",
    "Industries",
    "Learning",
    "Support",
    "Partners",
    "Company",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#206880] text-white shadow-md">
        <div className="mx-auto flex items-center px-6 py-3 justify-between max-w-7xl">
          <div className="flex items-center">
            <span className="text-3xl font-bold">
              service<span className="text-green-500">now</span>
            </span>
          </div>

          {/* Desktop Menu Items */}
          <ul className="hidden md:flex space-x-6 text-m font-medium">
            {navItems.map((item) => (
              <li key={item} className="hover:text-green-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-5">
            <FaSearch
              className="cursor-pointer text-lg hover:text-green-400 w-6 h-6"
              onClick={() => setSearchOpen(true)}
            />
            <FaGlobe className="cursor-pointer text-lg hover:text-green-400" />

            <button
              className="bg-[#f1f2f7] hover:bg-green-600 text-black font-semibold px-4 py-1.5 rounded-full text-sm"
              onClick={() => setAuthOpen(true)}
            >
              Sign / Log In
            </button>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#206880] bg-opacity-95 z-50 flex flex-col items-center justify-start pt-16 px-8 md:hidden">
          <button
            className="absolute top-4 right-4 text-white hover:text-green-400 p-2 rounded-full"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <IoMdClose size={30} />
          </button>

          <ul className="flex flex-col space-y-8 text-xl font-semibold mt-2">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-green-400 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-[#012b39]/70 backdrop-blur-md z-50 flex flex-col items-center justify-start pt-10 px-6">
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Search across ServiceNow"
              className="w-full px-4 py-3 rounded-md border-2 border-green-500 bg-transparent text-white placeholder-gray-400 outline-none"
            />
            <button
              className="absolute top-0 right-0 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full"
              onClick={() => setSearchOpen(false)}
            >
              <IoMdClose size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Authentication (Login/Signup) Modal */}
      {authOpen && (
        <div className="fixed inset-0 bg-[#012b39]/50 backdrop-blur-md z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative text-black shadow-xl">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-green-600"
              onClick={() => setAuthOpen(false)}
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
      )}
    </>
  );
}

import { useState } from "react";
import { FaSearch, FaGlobe, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import SignLogIn from "./SignLogIn";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

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
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 max-w-7xl">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" aria-label="ServiceNow Home">
              <span className="text-2xl sm:text-3xl font-bold">
                service<span className="text-green-500">now</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu Items */}
          <ul className="hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-green-400 cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Icons & Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5">
            {/* Search Icon */}
            <button
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
              className="hover:text-green-400 transition-colors duration-200"
            >
              <FaSearch className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Globe Icon */}
            <button
              aria-label="Change language"
              className="hover:text-green-400 transition-colors duration-200"
            >
              <FaGlobe className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Sign / Log In Button */}
            <button
              className="hidden sm:block bg-[#f1f2f7] hover:bg-green-600 text-black font-semibold px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition-colors duration-200"
              onClick={() => setAuthOpen(true)}
            >
              Sign / Log In
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden hover:text-green-400 transition-colors duration-200"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#206880] bg-opacity-95 z-50 flex flex-col items-center justify-start pt-16 px-4 sm:px-6 md:hidden overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-white hover:text-green-400 p-2 rounded-full transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <IoMdClose className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          {/* Mobile Nav Items */}
          <ul className="flex flex-col space-y-6 sm:space-y-8 text-lg sm:text-xl font-semibold mt-4 w-full max-w-md">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-green-400 cursor-pointer transition-colors duration-200 text-center"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Sign/In Button (shown only on mobile menu) */}
          <button
            className="mt-8 w-full max-w-xs bg-[#f1f2f7] hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-full text-sm sm:text-base transition-colors duration-200"
            onClick={() => {
              setMenuOpen(false);
              setAuthOpen(true);
            }}
          >
            Sign / Log In
          </button>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-[#012b39]/80 backdrop-blur-md z-50 flex flex-col items-center justify-start pt-8 sm:pt-12 px-4 sm:px-6 overflow-y-auto">
          <div className="w-full max-w-xl sm:max-w-2xl relative">
            <input
              type="text"
              placeholder="Search across ServiceNow..."
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-2 border-green-500 bg-transparent text-white placeholder-gray-300 outline-none text-base sm:text-lg focus:border-green-400 transition-colors duration-200"
              autoFocus
            />
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <IoMdClose className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Optional: Search Suggestions Placeholder */}
          <div className="mt-6 w-full max-w-xl sm:max-w-2xl text-gray-300 text-sm sm:text-base">
            <p className="text-center">Start typing to see suggestions...</p>
          </div>
        </div>
      )}

      {/* Authentication Modal */}
      <SignLogIn SignLogInOpen={authOpen} setSignLogInOpen={setAuthOpen} />
    </>
  );
}
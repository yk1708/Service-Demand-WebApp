import { useState } from "react";
import { FaSearch, FaGlobe, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Nav items for easier reuse
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
          {/* Logo */}
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

          {/* Right Section */}
          <div className="flex items-center space-x-5">
            {/* Search Button */}
            <FaSearch
              className="cursor-pointer text-lg hover:text-green-400 w-6 h-6"
              onClick={() => setSearchOpen(true)}
            />

            <FaGlobe className="cursor-pointer text-lg hover:text-green-400" />

            <button className="bg-[#f1f2f7] hover:bg-green-600 text-black font-semibold px-4 py-1.5 rounded-full text-sm">
              Get Started
            </button>

            {/* Hamburger for mobile */}
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

      {/* Mobile Menu Overlay */}
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
        <div className="fixed inset-0 bg-[#012b39] bg-opacity-95 z-50 flex flex-col items-center justify-start pt-10 px-6">
          <div className="w-full max-w-2xl relative">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search across ServiceNow"
              className="w-full px-4 py-3 rounded-md border-2 border-green-500 bg-transparent text-white placeholder-gray-400 outline-none"
            />
            {/* Close Button */}
            <button
              className="absolute top-0 right-0 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <IoMdClose size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

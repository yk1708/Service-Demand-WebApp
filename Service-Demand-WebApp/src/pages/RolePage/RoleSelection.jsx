import React from "react";
// import { useNavigate } from "react-router-dom";

function RoleSelection() {
  // const navigate = useNavigate(); 

  return (
    <>
      {/* Existing Section */}
      <section className="max-w-full px-6 sm:px-8 lg:px-26 py-16 bg-[#e2e6eb]"> {/* Adjusted padding for responsiveness */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#012b39] mb-6">
          Service Demand Management
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
          Collect and analyze customer feedback in real time to monitor satisfaction, identify improvement areas, and drive data-backed decisions.
        </p>
      </section>

      {/* New Section: Replicating the provided image content */}
      <div className="max-w-full bg-[#f9fafb] ">
        {/* Header Navigation */}
        <nav className="flex flex-wrap items-center justify-between px-26 py-2 max-w-screen-xl"> {/* Added flex-wrap and adjusted padding for responsiveness */}
          <div className="flex flex-col space-y-2 text-lg font-medium text-gray-700 md:flex-row md:space-y-0 md:space-x-8"> {/* Navigation links stack on small screens, then go horizontal */}
            <a href="#" className="relative group text-[#012B39]">
              Benefits
              <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-[#6BD54C] rounded-full"></span>
            </a>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="max-w-7xl px-26 py-16"> {/* Adjusted padding for responsiveness */}
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#012B39]  mb-16 leading-tight"> 
            Benefits of Demand Management
          </h2>

          {/* Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center md:text-left px-4 sm:px-0"> {/* Adjusted gap and added horizontal padding for small screens */}
            {/* Card 1: Invest strategically */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#012B39] mb-4">Invest strategically</h3> {/* Adjusted text size for responsiveness */}
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed"> {/* Adjusted text size for responsiveness */}
                Align future investment choices to business needs. Monitor and validate decisions.
              </p>
            </div>
            {/* Card 2: Improve the demand process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#012B39] mb-4">Improve the demand process</h3> {/* Adjusted text size for responsiveness */}
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed"> {/* Adjusted text size for responsiveness */}
                Collect, organize, score, and prioritize demand based on value to the enterprise.
              </p>
            </div>
            {/* Card 3: Increase insights and understanding */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#012B39] mb-4">Increase insights and understanding</h3> {/* Adjusted text size for responsiveness */}
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed"> {/* Adjusted text size for responsiveness */}
                Gain visibility to help assess, track, manage, and forecast demand for products and services.
              </p>
            </div>
          </div>
        </main>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col space-y-3 sm:space-y-4 z-50"> {/* Adjusted position and spacing for responsiveness, added z-index */}
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-[#6BD54C] text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 w-32 sm:w-36 text-sm sm:text-base"> {/* Adjusted button size and text for responsiveness */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9H7v2h2V9z" clipRule="evenodd"></path>
            </svg>
            Contact
          </button>
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-[#6BD54C] text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 w-32 sm:w-36 text-sm sm:text-base"> {/* Adjusted button size and text for responsiveness */}
            {/* Standard laptop icon for Demo */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Demo
          </button>
        </div>
      </div>
    </>
  );
}

export default RoleSelection;
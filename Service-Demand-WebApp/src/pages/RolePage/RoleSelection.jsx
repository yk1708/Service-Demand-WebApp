import React from "react";

function RoleSelection() {

  return (
    <>
      <section className="max-w-full px-6 sm:px-8 lg:px-26 py-16 bg-[#e2e6eb]">
        {" "}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#012b39] mb-6">
          Service Demand Management
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
          Collect and analyze customer feedback in real time to monitor
          satisfaction, identify improvement areas, and drive data-backed
          decisions.
        </p>
      </section>

      <div className="max-w-full bg-[#f9fafb] ">
        <nav className="flex flex-wrap items-center justify-between px-26 py-2 max-w-screen-xl">
          {" "}
          <div className="flex flex-col space-y-2 text-lg font-medium text-gray-700 md:flex-row md:space-y-0 md:space-x-8">
            {" "}
            <a href="#" className="relative group text-[#012B39]">
              Benefits
              <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-[#6BD54C] rounded-full"></span>
            </a>
          </div>
        </nav>

        <main className="max-w-7xl px-26 py-16">
          {" "}

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#012B39]  mb-16 leading-tight">
            Benefits of Demand Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center md:text-left px-4 sm:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#012B39] mb-4">
                Streamline Requests
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Centralize and manage service requests efficiently to reduce
                delays and improve response time.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#012B39] mb-4">
                Optimize Resource Allocation
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Assign and prioritize services effectively to maximize
                productivity and minimize bottlenecks.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#012B39] mb-4">
                Gain Actionable Insights
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Track demand patterns with analytics and make data-driven
                decisions to enhance service delivery.
              </p>
            </div>
          </div>
        </main>

        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col space-y-3 sm:space-y-4 z-50">
          {" "}
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-[#6BD54C] text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 w-32 sm:w-36 text-sm sm:text-base">
            {" "}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9H7v2h2V9z"
                clipRule="evenodd"
              ></path>
            </svg>
            Contact
          </button>
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-[#6BD54C] text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 w-32 sm:w-36 text-sm sm:text-base">
            {" "}
      
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Demo
          </button>
        </div>
      </div>
    </>
  );
}

export default RoleSelection;

import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const services = [
  {
    title: "Car Mechanic",
    description:
      "We provide expert car mechanic services to ensure your vehicle runs smoothly and efficiently. Our team handles engine diagnostics, oil changes, brake repairs, tire replacements, and routine maintenance with precision and care to extend your car's lifespan and performance.",
    img: "/images/car-mechanic.jpg",
    alt: "Car Mechanic",
  },
  {
    title: "Motor Mechanic",
    description:
      "Our skilled motor mechanics diagnose and repair all types of engines to keep your vehicles in top performance. From motorcycles to scooters, we offer full engine tuning, transmission repair, and preventive maintenance, ensuring your ride is safe, reliable, and fuel-efficient.",
    img: "/images/motor-mechanic.jpg",
    alt: "Motor Mechanic",
  },
  {
    title: "Plumber",
    description:
      "Professional plumbing services for installation, repair, and maintenance of water systems, pipes, and fixtures. We specialize in leak detection, pipe replacement, drainage solutions, and emergency plumbing, ensuring your home or business maintains a safe and uninterrupted water supply.",
    img: "/images/plumber.jpg",
    alt: "Plumber",
  },
  {
    title: "Electrician",
    description:
      "Expert electrical installation, repair, and troubleshooting to keep your home and business safe and powered. We handle wiring, lighting installations, circuit repairs, safety inspections, and energy-efficient solutions, providing reliable and compliant electrical services.",
    img: "/images/electrician.jpg",
    alt: "Electrician",
  },
  {
    title: "Cleaner",
    description:
      "We provide reliable and thorough cleaning services to maintain hygiene and freshness in your living or work spaces. Our services include deep cleaning, sanitization, floor and carpet care, window cleaning, and office maintenance to ensure a clean, healthy, and welcoming environment.",
    img: "/images/cleaner.jpg",
    alt: "Cleaner",
  },
];

function RoleSelection() {
  const footerNavItems = [
    "Products",
    "Industries",
    "Learning",
    "Support",
    "Partners",
    "Company",
  ];
  return (
    <>
      <section className="max-w-full mx-auto px-4 sm:px-8 lg:px-26 py-12 sm:py-16 bg-[#f9fafb]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b39] mb-6 text-center">
          Service Demand Management
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 mx-auto max-w-3xl text-center">
          Collect and analyze customer feedback in real time to monitor
          satisfaction, identify improvement areas, and drive data-backed
          decisions.
        </p>
      </section>

      <div className="max-w-full bg-[#f9fafb]">
        <nav className="flex flex-wrap items-center justify-center mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-26 py-2">
          <div className="flex flex-col space-y-2 text-base sm:text-lg font-medium text-gray-700 md:flex-row md:space-y-0 md:space-x-8 text-center">
            <a href="#" className="relative group text-[#012B39]">
              Benefits
              <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-[#6BD54C] rounded-full"></span>
            </a>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-26 py-12 sm:py-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#012B39] mb-12 sm:mb-16 text-center">
            Benefits of Demand Management
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 text-center px-4 sm:px-0">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#012B39] mb-4">
                Streamline Requests
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Centralize and manage service requests efficiently to reduce
                delays and improve response time.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#012B39] mb-4">
                Optimize Resource Allocation
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Assign and prioritize services effectively to maximize
                productivity and minimize bottlenecks.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#012B39] mb-4">
                Gain Actionable Insights
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Track demand patterns with analytics and make data-driven
                decisions to enhance service delivery.
              </p>
            </div>
          </div>
        </main>

        <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-8 flex flex-col space-y-2 sm:space-y-4 z-50">
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-[#6BD54C] text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 w-28 sm:w-36 text-xs sm:text-base">
            Contact
          </button>
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-[#6BD54C] text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 w-28 sm:w-36 text-xs sm:text-base">
            Demo
          </button>
        </div>
      </div>

<div className="w-full bg-[#f9fafb] py-12 sm:py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-26">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012b39] mb-8 sm:mb-12 text-center">
      Which Services We Are Providing
    </h1>

    <div className="flex flex-col gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 hover:scale-103 hover:shadow-xl transition-all duration-200 ease-in-out"
        >
          <img
            src={service.img}
            alt={service.alt}
            className="w-full sm:w-48 lg:w-50 h-48 sm:h-40 lg:h-auto object-cover rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <div className="text-center max-w-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#012b39] mb-2 group-hover:text-green-500 transition-colors duration-200 ease-in-out">
              {service.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* Footer */}
      <footer className="w-full bg-[#206880] text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-26">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <a href="/" className="text-2xl sm:text-3xl font-bold mb-4">
                service<span className="text-green-500">now</span>
              </a>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xs">
                Empowering businesses with expert services in mechanics, plumbing, electrical, and cleaning solutions.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Explore</h3>
              <ul className="flex flex-col space-y-3 text-sm sm:text-base">
                {footerNavItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-200 hover:text-green-500 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Contact Us</h3>
              <ul className="flex flex-col space-y-3 text-sm sm:text-base text-gray-200">
                <li>
                  <a href="mailto:support@servicenow.com" className="hover:text-green-500 transition-colors duration-200">
                    support@servicenow.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1-800-555-1234" className="hover:text-green-500 transition-colors duration-200">
                    +1-800-555-1234
                  </a>
                </li>
                <li>123 Service Lane, Tech City, TC 12345</li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-200 hover:text-green-500 transition-colors duration-200"
                  aria-label="Follow us on Twitter"
                >
                  <FaTwitter className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-200 hover:text-green-500 transition-colors duration-200"
                  aria-label="Follow us on LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-200 hover:text-green-500 transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>


          {/* Copyright */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-gray-600 text-center text-sm sm:text-base text-gray-300">
            &copy; {new Date().getFullYear()} ServiceNow. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default RoleSelection;
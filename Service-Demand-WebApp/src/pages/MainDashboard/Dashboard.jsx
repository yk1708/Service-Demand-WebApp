// src/Dashboard.js
import React from "react";
import providers from "../../data/ProviderData";

function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Provider Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {providers.map((provider, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
            <img
              src={provider.img}
              alt={provider.specialization}
              className="w-28 h-28 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-[#012b39] mb-1">{provider.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{provider.specialization} - {provider.location}</p>
            <p className="text-gray-600 text-center mb-2">{provider.description}</p>
            <a
              href={`mailto:${provider.contact}`}
              className="text-green-600 hover:underline text-sm"
            >
              {provider.contact}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;

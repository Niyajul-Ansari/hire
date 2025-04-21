import React from "react";
import Serveimpact from "../addonpage/Serveimpact";

const industries = [
  { name: "Banking", icon: "🏦" },
  { name: "NBFC", icon: "📜" },
  { name: "Fintech", icon: "💳" },
  { name: "Insurance", icon: "🛡" },
  { name: "Pharmaceuticals", icon: "💊" },
  { name: "Aviation", icon: "✈" },
  { name: "Ecommerce", icon: "🛒" },
  { name: "Technology", icon: "🌿" },
  { name: "Cement", icon: "🏗" },
  { name: "Biotechnology", icon: "🧪" },
  { name: "Tourism", icon: "🛫" },
  { name: "Telecom", icon: "📡" },
  { name: "Engineering", icon: "🌳" },
  { name: "Textiles", icon: "👕" },
  { name: "Oil & Gas", icon: "⛽" },
  { name: "Medical Devices", icon: "🖥" },
  { name: "Media", icon: "📺" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Infrastructure", icon: "🏢" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Power", icon: "⚡" },
  { name: "Logistics", icon: "🚚" },
  { name: "FMCG", icon: "🛍" },
  { name: "Energy", icon: "☀" },
  { name: "Edutech", icon: "📖" },
  { name: "Rural Finance", icon: "🌾" },
];

const IndustriesWeServe = () => {
  return (
    <>
      <Serveimpact />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
          Industries We Serve
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-white text-gray-800 shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <span className="text-3xl sm:text-4xl">{industry.icon}</span>
              <p className="mt-2 text-center text-sm sm:text-base font-medium">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndustriesWeServe;
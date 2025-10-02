import React from "react";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Choose Role</h2>
      <div className="space-y-4">
        <div className="bg-white shadow p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">User</h3>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-600"
            onClick={() => navigate("/user/login")}
          >
            User Login
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded m-2 hover:bg-green-600"
            onClick={() => navigate("/user/signup")}
          >
            User Signup
          </button>
        </div>

        <div className="bg-white shadow p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Provider</h3>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-600"
            onClick={() => navigate("/provider/login")}
          >
            Provider Login
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded m-2 hover:bg-green-600"
            onClick={() => navigate("/provider/signup")}
          >
            Provider Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;

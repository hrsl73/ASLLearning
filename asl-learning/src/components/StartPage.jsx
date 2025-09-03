import React from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center p-10 flex flex-row gap-20 justify-center items-center"
      style={{ backgroundImage: "url('/background_isle.png')" }} // ✅ don't include `/public/`
    >
      {/* Block 1 - Training Model */}
      <div className="w-[350px] h-[350px] bg-white shadow-lg rounded-2xl flex flex-col items-center justify-between p-6">
        <h2 className="text-2xl font-bold text-center">Training Model</h2>
        <p className="text-gray-600 text-center">
          Learn and practice with our interactive training system.
        </p>
        <button
          onClick={() => navigate("/training")}
          className="mt-4 px-6 py-2 bg-teal-300 rounded-full shadow-md font-semibold hover:bg-teal-400"
        >
          Explore
        </button>
      </div>

      {/* Block 2 - ASL Alphabets */}
      <div className="w-[350px] h-[350px] bg-white shadow-lg rounded-2xl flex flex-col items-center justify-between p-6">
        <h2 className="text-2xl font-bold text-center">ASL Alphabets</h2>
        <p className="text-gray-600 text-center">
          Practice the ASL alphabet with real-time sign learning.
        </p>
        <button
          onClick={() => navigate("/asl-alphabets")}
          className="mt-4 px-6 py-2 bg-teal-300 rounded-full shadow-md font-semibold hover:bg-teal-400"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
}

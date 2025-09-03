import React, { useState } from "react";

const ASLLearning = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
  if (currentIndex > 0) {
    setCurrentIndex((prev) => prev - 1);
    }
    };

const handleNext = () => {
  if (currentIndex < alphabet.length - 1) {
    setCurrentIndex((prev) => prev + 1);
  }
};

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background_isle.png')" }}
    >

      {/* Middle Section with Prev/Next Buttons */}
      <div className="flex items-center justify-center mb-8">
        {/* Prev Button */}
        <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 mr-6 disabled:opacity-50 disabled:cursor-not-allowed">
                ⬅ Prev
        </button>

        {/* Square Block (Alphabet + Image) */}
        <div className="w-[700px] h-[700px] flex shadow-lg bg-white rounded-xl overflow-hidden">
        {/* Left Half - Alphabet */}
            <div className="w-1/2 flex items-center justify-center text-8xl font-bold">
                {alphabet[currentIndex]}
            </div>

        {/* Right Half - Sign Image */}
            <div className="w-1/2 flex items-center justify-center bg-white">
                <img
                    src={`/alphabets/${alphabet[currentIndex]}.png`}
                    alt={`ASL ${alphabet[currentIndex]}`}
                    className="h-full w-full object-contain"
                />
            </div>
        </div>

        {/* Next Button */}
        <button
        onClick={handleNext}
        disabled={currentIndex === alphabet.length - 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 ml-6 disabled:opacity-50 disabled:cursor-not-allowed">
            Next ➡
        </button>

      </div>

      {/* Alphabet Row */}
      <div className="flex flex-wrap justify-center gap-2">
        {alphabet.map((letter, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`px-3 py-2 rounded-md ${
              currentIndex === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ASLLearning;

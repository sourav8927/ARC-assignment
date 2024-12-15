import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Hero = () => {
  // Array of background images
  const images = [
    "/images/image.png", // Replace with actual image paths
    "/images/image2.png",
    "/images/image3.png",
  ];

  // State to track the current image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the next and previous button clicks
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="relative bg-cover bg-center  h-[540px] md:h-[600px] lg:h-[540px]"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all"
        aria-label="Previous"
      >
        <GrPrevious size={24} />
      </button>

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Text Content */}
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            RUN LIKE YOU <br />
            <span className="text-yellow-500">ACHIEVE</span> SOMETHING..
          </h1>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all"
        aria-label="Next"
      >
        <GrNext size={24} />
      </button>
    </section>
  );
};

export default Hero;

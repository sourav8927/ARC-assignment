import React from "react";

const Sports = () => {
  return (
    <div className="bg-gray-100 h-[540px] flex flex-col justify-between">
      {/* Header Section */}
      <div className="relative">
        <div className="inset-0 w-full h-40 flex items-center justify-center">
          <h1 className="text-gray-700 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Popular Sports
          </h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card Template */}
          {[
            {
              imgSrc: "images/football.jpg",
              title: "Football",
              description:
                "American football, also known as gridiron football, is a team sport that involves 11 players.",
            },
            {
              imgSrc: "images/basketball.jpg",
              title: "Basketball",
              description:
                "Basketball is a team sport in which two teams, most commonly of five players.",
            },
            {
              imgSrc: "images/boxing.jpg",
              title: "Boxing",
              description:
                "Boxing is a combat sport and martial art, taking place in a boxing ring.",
            },
            {
              imgSrc: "images/badminton.jpg",
              title: "Badminton",
              description:
                "Badminton is a racquet sport played using racquets to hit a shuttlecock.",
            },
            {
              imgSrc: "images/vollyball.jpg",
              title: "Volleyball",
              description:
                "Empowering facilities professionals to access building information in seconds.",
            },
          ].map((sport, index) => (
            <div
              key={index}
              className="hover:bg-blue-900 group border border-gray-200 rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={sport.imgSrc}
                  alt={sport.title}
                  className="w-full h-36 md:h-44 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-base md:text-lg font-bold text-white">
                    {sport.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm md:text-[15px] text-gray-500 mt-2 group-hover:text-white">
                  {sport.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 py-6 mt-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2024 SPORT UI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sports;

// src/components/Hero.tsx
import React from "react";
import heroImage from "../assets/images/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <img
        src={heroImage}
        alt="Mom's Keepsake Creations"
        className="w-full h-64 sm:h-80 md:h-96 lg:h-104 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center space-y-4 px-4">
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          style={{ fontFamily: "JejuHallasan, cursive" }}
        >
          Mom's Keepsake Creations
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-6">
          Transform your cherished memories into personalized mementos at our
          custom memorabilia shop located in Austin, Texas.
        </p>
        <button
          className="bg-blue-700 text-white py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-blue-800"
          style={{ fontFamily: "JejuHallasan, cursive" }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;

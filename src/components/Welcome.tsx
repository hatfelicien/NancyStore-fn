import React from "react";
import welcomeImage from "../assets/images/image-left.png";
import handmadeIcon from "../assets/icons/Handmade.svg"; // Import the handmade icon

const Welcome: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-4 py-12">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 space-y-4 mx-6">
        <h2 className="text-4xl font-bold">Hello and Welcome!</h2>
        <p className="text-lg">
          Do you have sentimental items stored away in your attic, closet, or
          garage that you can’t bear to part with?
        </p>

        {/* List with Handmade Icons */}
        <ul className="space-y-2">
          <li className="flex items-center">
            <img
              src={handmadeIcon}
              alt="Handmade Icon"
              className="w-6 h-6 mr-2"
            />
            Beloved concert T-shirts
          </li>
          <li className="flex items-center">
            <img
              src={handmadeIcon}
              alt="Handmade Icon"
              className="w-6 h-6 mr-2"
            />
            Baby clothes from your little ones
          </li>
          <li className="flex items-center">
            <img
              src={handmadeIcon}
              alt="Handmade Icon"
              className="w-6 h-6 mr-2"
            />
            Clothing from loved ones who have passed
          </li>
          <li className="flex items-center">
            <img
              src={handmadeIcon}
              alt="Handmade Icon"
              className="w-6 h-6 mr-2"
            />
            Sports jerseys and T-shirts from school or college years
          </li>
        </ul>

        <p className="text-lg">
          Our Austin-based Keepsake Creations Store can transform your treasured
          memories into items like Memory Pillows, Teddy Bears, and Keepsake
          Quilts.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={welcomeImage} alt="Welcome" className="w-full max-w-md" />
      </div>
    </section>
  );
};

export default Welcome;

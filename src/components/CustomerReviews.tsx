import React from "react";
import customer1 from "../assets/images/pic-1.jpg";
import customer2 from "../assets/images/pic-2.jpeg";
import customer3 from "../assets/images/pic-3.jpg";

const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      img: customer1,
      name: "Hategekimana",
      quote:
        "💖🧸 The bears, crafted from my favorite shirts, turned out beautifully. My family and I are deeply touched by the care and artistry Mom put into creating these keepsakes. Thank you, Mom! 💖🧸",
    },
    {
      img: customer2,
      name: "Peter",
      quote:
        "Memory bears for my niece and myself, in memory of her grandma (my mom), who passed away on August 5th, 2023. It was my mom’s night gown 👗 We absolutely love them ❤️🧸 Thank you, Nancy Bero ☺️ Nancy's Creative Creations ❤️🧸 If anybody wants memory bears or memory quilts, message her 💌 She did an amazing job ❤️",
    },
    {
      img: customer3,
      name: "Katie",
      quote:
        "If you are interested in having one made for yourself or as a gift, let me know or send her a message! The bears would make great birthday/team/baby/memory/diehard fan gifts!! ❤️ Her memory pillows and quilts are awesome too!!!",
    },
  ];

  return (
    <section className="bg-white py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Section with Heading and Text */}
        <div className="mb-6 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#122B3E] mb-4">
            Read what our customers love about us
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            I am deeply proud to craft unique keepsake items for my clients.
            Reading the heartfelt reviews brings me immense joy and
            satisfaction.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Don't forget to follow Momstore Creations on Facebook to see more
            photos and read additional reviews.
          </p>
          <button className="mt-4 py-2 px-4 sm:py-3 sm:px-6 bg-[#122B3E] text-white rounded-lg shadow-lg hover:bg-opacity-90">
            Read our success stories
          </button>
        </div>

        {/* Right Section with Reviews */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start"
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="italic text-gray-700 mb-2 text-xs sm:text-sm md:text-base">
                  {review.quote}
                </p>
                <h4 className="text-[#122B3E] font-bold text-xs sm:text-sm md:text-base">
                  - {review.name}
                </h4>
              </div>
              <span className="text-[#122B3E] text-2xl sm:text-3xl md:text-4xl font-bold hidden sm:block">
                “
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

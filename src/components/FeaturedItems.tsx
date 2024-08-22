// src/components/FeaturedItems.tsx
import React from "react";
import item1 from "../assets/images/featured-item1.jpg";
import item2 from "../assets/images/featured-item2.jpg";
import item3 from "../assets/images/featured-item3.jpg";

const FeaturedItems: React.FC = () => {
  const items = [
    { img: item1, name: "Bear with balloon", price: "$25" },
    { img: item2, name: "Bear with flowers", price: "$30" },
    { img: item3, name: "Bear with ribbon", price: "$20" },
  ];

  return (
    <section className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Items</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 text-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-48 w-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-700">{item.price}</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;

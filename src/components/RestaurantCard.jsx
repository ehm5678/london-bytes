import React from "react";
import Image from "next/image";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <Image
        src={restaurant.image}
        width={500}
        height={300}
        alt={restaurant.name}
        className="rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{restaurant.name}</h2>
      <p className="text-gray-600">{restaurant.cuisine}</p>
      <p className="mt-2">{restaurant.review}</p>
      <div className="flex gap-2 mt-2">
        {restaurant.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;

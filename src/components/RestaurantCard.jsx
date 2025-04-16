import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 font-sans p-7">
      <div class="relative m-2.5 text-black rounded-md p-4">
        <img
          src={restaurant.image}
          width={500}
          height={300}
          alt={restaurant.name}
          class="rounded-md"
        />
      </div>
      <div class="p-4"> 
        <h2 class="mb-2 text-slate-800 text-xl font-semibold">{restaurant.name}</h2>
        <p class="text-gray-600">{restaurant.cuisine}</p>
        <p class="mt-2">{restaurant.review}</p>
        
        <div class="flex gap-2 mt-2 flex-wrap">
          {restaurant.tags.map((tag, index) => (
            <span key={index} class="px-2 py-1 bg-gray-200 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>  
    </div>
  );
};

export default RestaurantCard;

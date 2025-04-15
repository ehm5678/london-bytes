import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import RestaurantCard from "@/components/RestaurantCard";

const reviews = [
  {
    id: 1,
    name: "Sichuan PoPo",
    cuisine: "Sichuan",
    review: "I love Sichuan food but haven't tried a lot of places in London - I always come back to this one. Sichuan Popo has two locations in London and consistently great food. The menu has a mix of spiciness levels, and serves classic Sichuan dishes like dan dan noodles and mapo tofu. The handmade wontons in chili oil are fabulous - the oil is so complex, with heat from the chilies and numbness from the Sichuan pepper",
    tags: ["Budget"],
    image: "/spp_1.png",
  },
  {
    id: 2,
    name: "Dapur",
    cuisine: "Malaysian",
    review: "A colleague recommended this small Holborn cafe to me a while back. They serve amazing Malaysian food, with varying levels of spiciness. The Beef Rendang we had was so rich and tender, and I loved the ais kacang, with sweet strawberries, coconut and grass jelly. Unfortunately the ais kacang doesn't seem like it appears on the menu often, but I keep checking back in the hope I'll see it again - perfect on a hot summer's day ",
    tags: ["Budget"],
    image: "/dapur_1.png",
  },
];

export default function Home() {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filteredReviews = reviews.filter(
    (restaurant) =>
      (selectedCuisine === "" || restaurant.cuisine === selectedCuisine) &&
      (selectedTag === "" || restaurant.tags.includes(selectedTag))
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredReviews.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

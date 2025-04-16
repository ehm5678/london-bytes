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
  {
    id: 3, 
    name: "Mestizos",
    cuisine: "Mexican",
    review: "It's definitely tricky to find good Mexican food in the UK, but I've heard this restaurant is pretty authentic. I tried chicken tamales for the first time here and loved them, they were  excellent dipped in the salsa verde. It's hard to narrow down a favourite, even the guacamole was on another level, perfectly creamy and tangy. We had a mix of tacos and quesadillas and loved the rich and earthy red salsa that came with our cheese quesadillas.",
    tags: [""],
    image: "/mestizos_2.png",
  },
  {
    id: 4, 
    name: "Tohbang",
    cuisine: "Korean",
    review: "Tohbang is a small Korean place with great food. Try the umami and spicy kimchi pancake - one of my favourites - and the beef and enoki broth I had was also good. The tteokbokki is excellent as well, as is the plum soda they sometimes have - so sweet and aromatic",
    tags: [""],
    image: "/toh_1.png",
  },
  {
    id: 5, 
    name: "Carousel",
    cuisine: "Miscellaneous",
    review: "Carousel is the odd one out of this list, with no permanent menu but a revolving line up of guest chefs. We went here to try chef Eric Huang's menu - he opened a very famous restaurant in NYC making chili fried chicken, and we were excited to experience the chicken in London. The tasting menu we had was very special, the gem salad and furikake dish and butterbean salad with sesame were really interesting and fresh. The fried chicken itself was everything I'd hoped for.. spicy, crispy, tingly and mouth numbing, quite possibly the best fried chicken I've ever had. The creamy dessert offering of an almond panna cotta with peaches and ginger was also delicious, the flavours worked so well together",
    tags: [""],
    image: "/carousel_2.png",
  },

  {
    id: 6, 
    name: "Le Relais de l'Entrecote",
    cuisine: "French",
    review: "You will probably have to queue here, and it will be worth it. This French chain doesn't take reservations, and offers a very simple menu - a green salad with walnuts, steak frites, and a secret recipe steak sauce. The steak is so tender, and the secret sauce is perfectly creamy and piquant. They also do great desserts - they have quite an extensive dessert menu yet I usually stick with the chocolate profiteroles. I often find some profiteroles can be overly sweet, but these are light and fluffy, with a slightly bitter and rich chocolate sauce",
    tags: [""],
    image: "/rve_2.png",
  },
  {
    id: 7, 
    name: "Din Tai Fung",
    cuisine: "Taiwanese",
    review: "I'd been hearing great things about Din Tai Fung for ages, and was looking forward to visiting the London branch. It did not disappoint - the pork xiao long bao are so good, I could eat about 50. The chili crab recipe they have is also great, we had some chili crab & pork buns there were perfectly warming and succulent. The soups are not to be missed, the broth they use is incredible, like concentrated essence of tasty chicken. Finally, don't sleep on the salads, the cucumber in spicy chili sauce is incredible and so moreish",
    tags: [""],
    image: "/dtf_2.png",
  },
  {
    id: 9, 
    name: "Eataly",
    cuisine: "Italian",
    review: "Eataly is an excellent spot for Italian food and groceries. The meat and cheese counters have a big range of stuff if you’re seeking a speciality for a dish, and their restaurants are reliable and a good spot to stop off by Liverpool Street. The pizzas are chewy and tangy, and the pasta puttanesca I had was perfectly briny. They also do an amazing Christmas menu and festive food range",
    tags: [""],
    image: "/eat_1.png",
  },
  {
    id: 10, 
    name: "C&R Cafe",
    cuisine: "Malaysian",
    review: "This Malaysian spot is located in a side street in Chinatown, and can get very busy. There is a large menu with so many great options, but my absolute favourite is the singapore laksa and the roti canai with homemade curry sauce - so buttery, warming and addictive. The five spice long bak is also delicious; marinated pork wrapped with bean curd skin and deep-fried",
    tags: [""],
    image: "/cr_1.png",
  },
  {
    id: 11, 
    name: "Manteca",
    cuisine: "Italian",
    review: "Manteca is definitely a special occasion spot, hence the above tag. We started with some salumi, duck liver parfait and an amazing bitter leaf and pear salad with a truly outrageous amount of cheese on it. For pasta we went with the venison ragu with cocoa fettuccine, and wild garlic chitarra with egg yolk - so delicate and umami. The expresso con zabaglione was incredible, a wonderful sweet eggy concoction. The crème de la crème of the meal was the chocolate and rye bun with whey caramel. The rye added a wonderfully earthy and chewy element to the creaminess of the bun, it was perfect. The olive oil panna cotta with blood orange jelly was also delicious and delightfully balanced.",
    tags: ["Special Occasion"],
    image: "/manteca_1.png",
  }
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
    <div class="bg-gray-100 min-h-screen">
      <Navbar
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <div class="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredReviews.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

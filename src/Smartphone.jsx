import React, { useState } from 'react';
import Navbar from "./Navbar";

const Images = [
    'https://i.pinimg.com/236x/93/08/9f/93089f446b578c1bef52269e154947c0.jpg',
    'https://i.pinimg.com/236x/66/c2/3f/66c23f9566266ec63f39b2dac1a56585.jpg',
    'https://i.pinimg.com/236x/e0/69/36/e06936903e3f4f471a16d1dfb0e37455.jpg',
    'https://i.pinimg.com/236x/84/30/51/843051637be51d5371c20b78a3458779.jpg',
    'https://i.pinimg.com/236x/a3/f8/c8/a3f8c895db7f2a12ea3b6d8a22d515af.jpg',
    'https://i.pinimg.com/236x/44/db/f3/44dbf3252affe1b050eef4b7ea01c988.jpg',
    'https://i.pinimg.com/236x/ac/a1/0e/aca10ed001fd48cdf78183931e3f08a4.jpg',
    'https://i.pinimg.com/236x/b8/c7/65/b8c765f0a17953e9b737cc6d3effe749.jpg',
    'https://i.pinimg.com/236x/e5/28/70/e528704752dd723228250024597b881b.jpg',
    'https://i.pinimg.com/236x/e7/42/a9/e742a94d7bd81b5dd72174f8691e558d.jpg',
    'https://i.pinimg.com/736x/bc/c2/4d/bcc24d484db99457d18aa41ec7eba24f.jpg',
    'https://i.pinimg.com/236x/01/2c/c1/012cc1ac6bf35e514a761ff852f22d6e.jpg',
    'https://i.pinimg.com/474x/75/0d/ad/750dad710f76cccd12e6fe0d163b7d65.jpg',
    'https://i.pinimg.com/474x/28/df/48/28df481bde36b15b93cf59d4aa9d8200.jpg',
    'https://i.pinimg.com/474x/96/c9/7c/96c97cc4c77757e8e39b66d889c00b4b.jpg',
    'https://i.pinimg.com/236x/4a/7a/fc/4a7afcc932c03e5e2544a581aed7d542.jpg',
  ];
const Names = [
 "Cartoon Print T-Shirt",
"Rainbow Dungarees",
"Dino Hoodie",
"Princess Frock",
"Superhero Joggers",
"Denim Overalls",
"Unicorn Printed Dress",
"Cotton Romper Set",
"Animal Print Pajamas",
"Sports Jersey Tee",
"Baby Bear Onesie",
"Floral Skirt Set",
"Navy Cargo Shorts",
"Sleeveless Jumpsuit",
"Checkered Shirt",
"Teddy Ear Hoodie",
"Bowtie Formal Suit",
"Puff Sleeve Dress",
"Space Explorer Set",
"Little Chef Apron Set",
"Cartoon Print T-Shirt",
"Rainbow Dungarees",
"Dino Hoodie",
"Princess Frock",
"Superhero Joggers",

];

const Kidswear = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (index) => {
    if (wishlist.includes(index)) {
      setWishlist(wishlist.filter((i) => i !== index));
    } else {
      setWishlist([...wishlist, index]);
    }
  };

  const addToCart = (index) => {
    if (!cart.includes(index)) {
      setCart([...cart, index]);
      console.log(`Added ${Names[index]} to cart`);
    }
  };

  const buyNow = (index) => {
    console.log(`Buying ${Names[index]}`);
  };

  return (
    <div className="pt-20 px-4">
      <Navbar />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Images.map((image, index) => (
          <div
            key={index}
            className="relative bg-white p-3 rounded shadow transition-transform duration-300 transform hover:scale-105"
          >
            <button
              onClick={() => toggleWishlist(index)}
              className="absolute top-2 right-2 text-lg"
            >
              {wishlist.includes(index) ? "❤️" : "🤍"}
            </button>

            <img
              src={image}
              alt={Names[index]}
              className="w-full h-[200px] object-contain rounded"
            />

            <h2 className="mt-2 font-semibold text-sm">{Names[index]}</h2>
            <p className="text-sm text-gray-600">₹{(index + 1) * 299}</p>

            <div className="mt-2 flex flex-col gap-1">
              <button
                onClick={() => addToCart(index)}
                className="bg-blue-500 text-white text-sm py-1 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
              <button
                onClick={() => buyNow(index)}
                className="bg-green-500 text-white text-sm py-1 rounded hover:bg-green-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kidswear;

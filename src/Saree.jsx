import React, { useState } from 'react';
import Navbar from "./Navbar";

const sareeImages = [
  'https://i.pinimg.com/736x/33/48/22/33482278acc6fb5dfe5f3315e0b078a2.jpg',
  'https://i.pinimg.com/236x/d1/44/ad/d144ada92e7f06678fec549d2367630f.jpg',
  'https://i.pinimg.com/236x/44/c0/b7/44c0b7ce073db68e73550c96c617ee67.jpg',
  'https://i.pinimg.com/236x/22/79/50/227950265e48fccfa96e5d82eacd8c83.jpg',
  'https://i.pinimg.com/474x/d9/a4/13/d9a41319336bc44b38a3342b074afdf6.jpg',
  'https://i.pinimg.com/474x/86/6a/61/866a615c22103a862f201795fa9d3cc7.jpg',
  'https://i.pinimg.com/474x/c6/d3/2b/c6d32b5013beed3b3e119476475d964a.jpg',
  'https://i.pinimg.com/736x/68/ba/cf/68bacf20eb3ba436115d8b7584e244f7.jpg',
  'https://i.pinimg.com/236x/60/64/e3/6064e3d59a5fd15188baed4f533bd939.jpg',
  'https://i.pinimg.com/236x/68/59/bd/6859bd690c7f0e2c02672845d2cf85e4.jpg',
  'https://i.pinimg.com/474x/fe/28/47/fe28471646fdd20e57c6c8fdc0afcc3f.jpg',
  'https://i.pinimg.com/236x/b6/a6/59/b6a65947abede4e95a6270a5b3ff0628.jpg',
  'https://i.pinimg.com/236x/1f/57/63/1f5763a5be9c46ddf46f0e156fb34426.jpg',
  'https://i.pinimg.com/236x/6a/0c/44/6a0c446293a1f1e75d04071e7bd37196.jpg',
  'https://i.pinimg.com/236x/c3/3b/c6/c33bc66d4c5b4dfdc0950ec35b4325ba.jpg',
  'https://i.pinimg.com/474x/de/f0/32/def03202459512baaaf8a63e9fa2d3fb.jpg',
  'https://i.pinimg.com/236x/fa/8d/e8/fa8de82a74c3926050e7e57589c09141.jpg',
  'https://i.pinimg.com/236x/3a/e9/df/3ae9dff76dc422898d55a7305e688fe5.jpg',
  'https://i.pinimg.com/236x/99/ab/56/99ab56d07bdc0ac8485a8ddadd732f82.jpg',
  'https://i.pinimg.com/236x/76/6a/93/766a937aa3ae4ccc1bd584afb08e8f7b.jpg',
  'https://i.pinimg.com/236x/40/ca/58/40ca58cdeb1af35c52495367c7c4b8e3.jpg',
  'https://i.pinimg.com/236x/09/f0/ed/09f0ed9f1ed02934ada91fdd74f5a670.jpg',
  'https://i.pinimg.com/236x/02/66/b4/0266b42f84518375dc88b12386a3f0f6.jpg',
  'https://i.pinimg.com/236x/47/d4/3d/47d43d6bc5c533874c0e190d58f5fd18.jpg',
];

const sareeNames = [
  "Elegant Cotton Saree",
  "Modern Georgette Saree",
  "Classic Silk Saree",
  "Trendy Net Saree",
  "Handloom Cotton Saree",
  "Party Wear Saree",
  "Casual Printed Saree",
  "Banarasi Saree",
  "Kanjivaram Silk Saree",
  "Festive Chiffon Saree",
  "Wedding Zari Saree",
  "Traditional South Saree",
  "Designer Lehenga Saree",
  "Stylish Ruffle Saree",
  "Embroidered Work Saree",
  "Digital Print Saree",
  "Floral Design Saree",
  "Lightweight Summer Saree",
  "Office Wear Saree",
  "Pastel Shade Saree",
  "Fancy Lace Border Saree",
  "Daily Wear Saree",
  "Ethnic Wear Saree",
  "Luxury Tussar Saree",
];

const Saree = () => {
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
      console.log(`Added ${sareeNames[index]} to cart`);
    }
  };

  const buyNow = (index) => {
    console.log(`Buying ${sareeNames[index]}`);
  };

  return (
    <div className="pt-20 px-4">
      <Navbar />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sareeImages.map((image, index) => (
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
              alt={sareeNames[index]}
              className="w-full h-[200px] object-contain rounded"
            />

            <h2 className="mt-2 font-semibold text-sm">{sareeNames[index]}</h2>
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

export default Saree;

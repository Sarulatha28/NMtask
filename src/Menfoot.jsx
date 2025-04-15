import React, { useState } from 'react';
import Navbar from "./Navbar";

const Images = [
 'https://i.pinimg.com/236x/05/91/b4/0591b47c283bf34cd919db5548ef0750.jpg',
 'https://i.pinimg.com/236x/2c/c9/ab/2cc9abd2161c341f40ffdf716f12ce20.jpg',
 'https://i.pinimg.com/236x/f1/bb/9b/f1bb9bcdb8d817205f4edb7a4fd8b941.jpg',
 'https://i.pinimg.com/236x/a1/a7/19/a1a719d445e39cc2c0c17901cd8a9351.jpg',
 'https://i.pinimg.com/236x/c3/8c/35/c38c351d41e4f05cf436c769922f545b.jpg',
 'https://i.pinimg.com/236x/8b/c2/06/8bc206b782f9bf29540c814e853a269e.jpg',
 'https://i.pinimg.com/236x/90/c2/69/90c2698b230a51094739c1cf5d160747.jpg',
 'https://i.pinimg.com/236x/e6/6a/f9/e66af91ac4352cc119df5a727eb34e4d.jpg',
'https://i.pinimg.com/236x/03/7e/c8/037ec815a32a44801ea76b8555bfd073.jpg',
'https://i.pinimg.com/474x/ee/2e/39/ee2e39dfaf11f09d1827ceaa510a2d06.jpg',
'https://i.pinimg.com/236x/32/df/98/32df98e03f23a72f8700c4b5ead60990.jpg',
'https://i.pinimg.com/236x/bd/46/52/bd4652033750db074eb0f9d52dfc445a.jpg',
'https://i.pinimg.com/236x/5e/64/9f/5e649f907ba79ede7ab7a9dac44878d2.jpg',
'https://i.pinimg.com/236x/6c/c2/ad/6cc2adffbcf12ae304966ca95d328d52.jpg',
'https://i.pinimg.com/236x/e0/c3/1a/e0c31a6e9a4a15c132ec4544494ede7d.jpg',
'https://i.pinimg.com/236x/20/42/2d/20422d6178b39383fca0f55e627e743f.jpg',
'https://i.pinimg.com/236x/90/3d/34/903d34965a107406ae7826f204abb4a1.jpg',
'https://i.pinimg.com/236x/5f/0d/7c/5f0d7c2c359f94df8c42d4d75c865557.jpg',
'https://i.pinimg.com/236x/7c/f6/7e/7cf67e7a61b252eac1a0cece5be29630.jpg',
'https://i.pinimg.com/236x/95/9b/94/959b942f67a373478e287f0f57c2ebf0.jpg',
'https://i.pinimg.com/236x/0e/be/b3/0ebeb3a6b859819e23a92a5f54c9f3b2.jpg',
'https://i.pinimg.com/236x/3a/5e/16/3a5e16689c7ecffd2b52143d0b573d01.jpg',
'https://i.pinimg.com/474x/83/05/50/830550ef8d9a7cfd7dcf6b162e4da903.jpg',
'https://i.pinimg.com/236x/b9/ff/59/b9ff59040c57a1f08b5c885f7c751afa.jpg',
'https://i.pinimg.com/236x/7e/65/27/7e6527ab9bb674221e1d155c0de92992.jpg',
];
const Names = [
 'Formal Leather Oxfords',
'Casual Slip-On Loafers',
'Brown Lace-Up Boots',
'Classic Black Brogues',
'Comfortable Walking Sneakers',
'Men’s Ethnic Jutis',
'High Top Canvas Shoes',
'Strap-On Sandals',
'Stylish Party Wear Derbies',
'Padded Sports Shoes',
'Textured Monk Strap Shoes',
'Suede Driving Moccasins',
'Daily Wear Flip-Flops',
'Winter-Ready Fur-Lined Shoes',
'Chunky Sole Running Shoes',
'Slip-On Mesh Trainers',
'Woven Leather Sandals',
'Rubber-Soled Chappals',
'Minimalist Slide Sandals',
'Outdoor Trekking Shoes',
'Slip-Resistant Office Shoes',
'Classic Derby Lace-Ups',
'Zipper High Ankle Boots',
'Formal Buckle Strap Shoes',
'Printed Canvas Slip-Ons',
'Premium Leather Sneakers',
'Loafer Style Mojaris',
'Round-Toe Ethnic Footwear',
'Stylish Two-Tone Shoes',
'Lightweight Jogging Shoes'


];

const Menfoot = () => {
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

export default Menfoot;

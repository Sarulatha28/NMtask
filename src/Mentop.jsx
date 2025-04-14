import React, { useState } from 'react';
import Navbar from "./Navbar";

const menImages = [
'https://i.pinimg.com/236x/1e/67/42/1e6742b4cbaeca7904e81bbc938f9fc3.jpg',
'https://i.pinimg.com/236x/21/ce/c1/21cec1c43670472f39478b4c4cf57ef9.jpg',
'https://i.pinimg.com/236x/9e/0a/e4/9e0ae419da95299f4f0c8ce029296da7.jpg',
'https://i.pinimg.com/736x/47/bd/f8/47bdf8b843c527c8b0a6412b75b6e676.jpg',
'https://i.pinimg.com/236x/5b/a0/cf/5ba0cfd773900a067c9324c775472666.jpg',
'https://i.pinimg.com/236x/97/f4/fc/97f4fc6c44ae2f29bff8ede68cee9dcd.jpg',
'https://i.pinimg.com/236x/0f/0d/a1/0f0da190ca3321f73325845625899623.jpg',
'https://i.pinimg.com/236x/95/0c/17/950c1769226bdaba69b753f90cad250c.jpg',
'https://i.pinimg.com/736x/43/a2/a0/43a2a009f8f65d16cd7ee7c9204319e4.jpg',
'https://i.pinimg.com/236x/4f/50/27/4f5027f4b2b8d6d0c0003ef956b845d1.jpg',
'https://i.pinimg.com/236x/98/65/d0/9865d039e2b73c6a21f9b3926afcc438.jpg',
'https://i.pinimg.com/236x/1b/16/1d/1b161d265f207455caa8f84421ea2c2e.jpg',
'https://i.pinimg.com/236x/39/81/0d/39810dfe0337c886e65b285c674ebeb4.jpg',
'https://i.pinimg.com/236x/57/a0/46/57a046b13e3d61b3d280375f4db121f3.jpg',
'https://i.pinimg.com/236x/cf/f1/b3/cff1b35c3f8e859f838d245dcbaa0dad.jpg',
'https://i.pinimg.com/236x/e9/24/25/e924259d33040a14013c85e329ab3b7d.jpg',
'https://i.pinimg.com/236x/b9/cf/35/b9cf35a8d47b2653ed01536af609057f.jpg',
'https://i.pinimg.com/236x/8e/12/87/8e1287f041cb719cb2cf6e3a8bea0fce.jpg',


];

const menNames = [
 "Classic Cotton Shirt",
"Formal Office Shirt",
"Trendy Printed Shirt",
"Denim Button-Up Shirt",
"Checked Casual Shirt",
"Solid Polo T-Shirt",
"Graphic Crew Neck Tee",
"Hooded Sweatshirt",
"Stylish Henley Tee",
"Round Neck T-Shirt",
"Full Sleeve T-Shirt",
"Short Sleeve Shirt",
"Mandarin Collar Shirt",
"Slim Fit Formal Shirt",
"Striped Casual Shirt",
"Linen Summer Shirt",
"Checked Flannel Shirt",
"Zipper Jacket",
"Bomber Jacket",
"Leather Biker Jacket",
"Oversized Hoodie",
"Varsity Jacket",
"Turtleneck Pullover",
"Ethnic Kurta Shirt"

];

const Mentop = () => {
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
      console.log(`Added ${menNames[index]} to cart`);
    }
  };

  const buyNow = (index) => {
    console.log(`Buying ${menNames[index]}`);
  };

  return (
    <div className="pt-20 px-4">
      <Navbar />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {menImages.map((image, index) => (
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
              alt={menNames[index]}
              className="w-full h-[200px] object-contain rounded"
            />

            <h2 className="mt-2 font-semibold text-sm">{menNames[index]}</h2>
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

export default Mentop;

import React, { useState } from 'react';
import Navbar from "./Navbar";

const Images = [
 'https://i.pinimg.com/474x/c6/f9/a0/c6f9a042d139d4d0049212b5741dd0aa.jpg',
 'https://i.pinimg.com/474x/83/fd/5a/83fd5a90a581f697d8e829dc7544f8ce.jpg',
 'https://i.pinimg.com/236x/09/7a/16/097a16ae6e86fba20ac968fdda3b9897.jpg',
 'https://i.pinimg.com/236x/5e/8f/b1/5e8fb1b077f1847d428bfbfa74bb4b02.jpg',
 'https://i.pinimg.com/236x/67/26/fe/6726fe35457cb2023bcee0922dec1abc.jpg',
 'https://i.pinimg.com/236x/0f/9e/ce/0f9ece3605c4b05bbefb97c697a03ff0.jpg',
 'https://i.pinimg.com/236x/07/38/ab/0738ab537249ac26f4de84d977e8792e.jpg',
 'https://i.pinimg.com/236x/40/b6/2e/40b62ee5297a5b6461fcb330b9fbf93c.jpg',
 'https://i.pinimg.com/236x/e0/c6/fd/e0c6fd92c19b446396fb4f947f18f5e9.jpg',
 'https://i.pinimg.com/236x/60/74/8b/60748bcb1a3dce1cb9ceed0c04f72e1e.jpg',
 'https://i.pinimg.com/236x/ec/6d/c6/ec6dc6a5631e9f27569b3b6ee13247f3.jpg',
 'https://i.pinimg.com/236x/0f/09/95/0f0995522242abefa924d249bc212240.jpg',
 'https://i.pinimg.com/236x/8e/12/12/8e1212f0057daafab55161aa7190c84b.jpg',
 'https://i.pinimg.com/236x/28/c0/ae/28c0ae278fca9333646551a18b8739a8.jpg',
 'https://i.pinimg.com/236x/ef/91/be/ef91be587773f7e79543f01368873c71.jpg',
 'https://i.pinimg.com/236x/dc/c6/59/dcc65977a8c14c71842308fdaa150be4.jpg',
 'https://i.pinimg.com/236x/58/18/01/581801aad7ad7df1d87155096659f326.jpg',
 'https://i.pinimg.com/236x/a8/74/7e/a8747e84fa13292ab91910c486654181.jpg',
 'https://i.pinimg.com/236x/ff/68/a1/ff68a1d8cf3222f7ed54987142fe0c9a.jpg',
 'https://i.pinimg.com/236x/71/1e/3a/711e3a5faebf4cafcd0dd3b61e85f83b.jpg',
 'https://i.pinimg.com/236x/47/8a/86/478a86ac97ed3ba07d2ac5382c41fa85.jpg',
 'https://i.pinimg.com/236x/82/11/47/8211470cb4649ad68435068ddc751627.jpg',
 'https://i.pinimg.com/236x/b3/5d/d5/b35dd558ec372054af23ee0076d516cd.jpg',
 'https://i.pinimg.com/236x/19/fb/4e/19fb4e3d973785c7b5c88b61bd0671de.jpg',
 
];

const Names = [
 "Slim Fit Jeans",
"Chino Trousers",
"Cargo Pants",
"Denim Shorts",
"Jogger Pants",
"Track Pants",
"Linen Trousers",
"Ripped Jeans",
"Tailored Formal Pants",
"Corduroy Pants",
"Cotton Boxers",
"Sweatpants",
"Khaki Shorts",
"Relaxed Fit Jeans",
"Straight-Leg Trousers",
"Utility Pants",
"Wide-Leg Pants",
"Flannel Pajama Bottoms",
"Capris",
"Pleated Dress Pants",
"Chino Trousers",
"Cargo Pants",
"Denim Shorts",
"Jogger Pants"

];

const Menbottom = () => {
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

export default Menbottom;

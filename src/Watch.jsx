import React, { useState } from 'react';
import Navbar from "./Navbar";

const Images = [
 'https://i.pinimg.com/236x/81/75/6c/81756cc2f251cf3557061a9e8b495a6a.jpg',
 'https://i.pinimg.com/236x/72/b8/83/72b883f2263b7997168a775c1860cbde.jpg',
 'https://i.pinimg.com/236x/2f/a8/2e/2fa82ea3b118054689825ddb20fb1008.jpg',
 'https://i.pinimg.com/236x/59/2b/67/592b674212634fe3d26d2150ac48a4f3.jpg',
 'https://i.pinimg.com/236x/0d/25/a8/0d25a82b39f576124f0107cb0e84a147.jpg',
 'https://i.pinimg.com/236x/49/8e/f3/498ef3252f767df78048c5eb3f8db044.jpg',
 'https://i.pinimg.com/236x/11/a6/90/11a690fa50401d37e3a7ba009673f74f.jpg',
'https://i.pinimg.com/236x/d1/f1/ac/d1f1ac8b9f207aa60e0ee73678be5a56.jpg',
 'https://i.pinimg.com/474x/3d/c0/da/3dc0dabc6b480b036d4d1a4a5f6c14d1.jpg',
 'https://i.pinimg.com/474x/27/df/01/27df014777eceec6bce056dc208e8f78.jpg',
'https://i.pinimg.com/474x/c4/81/63/c48163e2aa66403ecd6dcfa9bab0c71a.jpg',
'https://i.pinimg.com/236x/bd/01/51/bd01517189c5298b539e9747195bb684.jpg',
'https://i.pinimg.com/236x/c6/ce/51/c6ce511b028c7ef0c15335a3f7e69158.jpg',
 'https://i.pinimg.com/236x/2b/d7/80/2bd780f074793993ad7fdf6199dba7d2.jpg',
'https://i.pinimg.com/236x/df/a2/f3/dfa2f39fbc1f5267a6e64703a9e60f73.jpg',
'https://i.pinimg.com/236x/28/a0/78/28a078a4ad6d58b487896e9d24cb3ad9.jpg',
'https://i.pinimg.com/236x/72/9e/11/729e1109efd53749b068ffd5e6de01b2.jpg',
'https://i.pinimg.com/236x/a1/08/3c/a1083c584371b831ffee498f689e47fe.jpg',
'https://i.pinimg.com/236x/e8/64/74/e86474bcd748d91b0106acdcbbc8d7c3.jpg',
'https://i.pinimg.com/236x/c5/56/dd/c556ddd2ba0b9d2718823e92bdb0b1bc.jpg',
'https://i.pinimg.com/236x/2a/e9/c0/2ae9c00e63fa87ecd2c2b2a35ed99b5d.jpg',
'https://i.pinimg.com/236x/d6/2e/66/d62e6680d3476c234986d19b786296c0.jpg',
'https://i.pinimg.com/236x/3e/ca/57/3eca57e0909d12d1fc3f05d5e382901c.jpg',
'https://i.pinimg.com/236x/3d/8d/1a/3d8d1a328e2410297c27fd1d05ec8f73.jpg',
'https://i.pinimg.com/236x/dc/d6/b9/dcd6b94f08e58f3068cd65fb8b2fc9b0.jpg',
'https://i.pinimg.com/236x/bb/04/33/bb0433c877ff5611834a65632042d1c6.jpg',
'https://i.pinimg.com/236x/4e/66/fc/4e66fc30be653ff83b707b3742daa9a5.jpg',
'https://i.pinimg.com/236x/cd/08/c1/cd08c189ef028211fb5e0e448a11723a.jpg',
'https://i.pinimg.com/474x/29/b9/97/29b997e214f739ecdf2834d751a38f1d.jpg',
'https://i.pinimg.com/236x/0c/e8/29/0ce8299f7b1c845d575f949b244ea238.jpg',


];

const Names = [
'Rose Gold Women’s Watch',
'Elegant Crystal Bracelet',
'Floral Wool Winter Dress',
'Pastel Leather Strap Watch',
'Pearl Stud Earrings',
'Embroidered Shawl Wrap',
'Trendy Handbag with Tassels',
'Stylish Winter Coat for Women',
'Minimalist Gold Pendant',
'Silk Scarf with Floral Print',
'Fuzzy Knit Cardigan',
'Luxury Designer Watch',
'Chunky Statement Necklace',
'Casual Winter Hoodie Dress',
'Stone-Studded Ring',
'Classic Leather Men’s Watch',
'Wool Blend Winter Jacket',
'Stainless Steel Chain Watch',
'Fleece-Lined Hoodie',
'Analog Black Dial Watch',
'Modern Beanie Cap',
'Smart Casual Wristwatch',
'Checkered Winter Shirt',
'Men’s Scarf and Gloves Set'
];

const Watch = () => {
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

export default Watch;

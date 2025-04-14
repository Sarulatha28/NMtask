import React, { useState } from 'react';
import Navbar from "./Navbar";

const sareeImages = [
 'https://i.pinimg.com/236x/0a/c1/09/0ac109306a0afc4517e558627718eedc.jpg',
 'https://i.pinimg.com/236x/6b/4d/07/6b4d072796353580d3340e89a02c19f4.jpg',
 'https://i.pinimg.com/474x/78/5d/35/785d352ac8ffcc1ecdadc6bf64a51ab9.jpg',
 'https://i.pinimg.com/236x/73/37/58/73375845a9dc6af8a0ba704d32f23ba0.jpg',
 'https://i.pinimg.com/236x/98/b7/17/98b7176972404f1d6e25e235495a99e6.jpg',
 'https://i.pinimg.com/236x/e1/3a/84/e13a84fd50e4c6d08d4df47403c3bce3.jpg',
 'https://i.pinimg.com/474x/e1/05/ca/e105cad71d58f91b2f4622089775f719.jpg',
 'https://i.pinimg.com/236x/55/55/72/555572a2365431e4d2a57245ad7f959e.jpg',
 'https://i.pinimg.com/236x/2b/d7/80/2bd780f074793993ad7fdf6199dba7d2.jpg',
 'https://i.pinimg.com/736x/eb/6c/ff/eb6cff6d20674b334e4d7437d6751351.jpg',
 'https://i.pinimg.com/236x/e8/a6/ac/e8a6ac32d0756a0813053e1435ca84eb.jpg',
 'https://i.pinimg.com/474x/be/fe/d1/befed14d8fae3bd20708a5b90334c367.jpg',
 'https://i.pinimg.com/236x/2f/08/3f/2f083fdd567cc4d15f3f6c6508037fd2.jpg',
 'https://i.pinimg.com/236x/64/ee/9f/64ee9fad10147436a4247822a8d6be37.jpg',
 'https://i.pinimg.com/474x/dc/aa/49/dcaa498170441176ce95e0dc2de70c6a.jpg',
 'https://i.pinimg.com/474x/dc/aa/49/dcaa498170441176ce95e0dc2de70c6a.jpg',
 'https://i.pinimg.com/236x/5e/29/43/5e2943928fa011cc45d09a1f7a3925b9.jpg',
 'https://i.pinimg.com/474x/e2/ed/a5/e2eda5de66fa405157e8dd31ec0b6e2a.jpg',
 'https://i.pinimg.com/236x/3d/b3/aa/3db3aa11ac351e5e681913e2e0df2ff1.jpg',
 'https://i.pinimg.com/474x/53/50/9f/53509f63c19b46703360aa38178a8f7b.jpg',
 'https://i.pinimg.com/236x/f4/b0/0a/f4b00a5c66cdeaa7ec0433ea4125d44d.jpg',
 'https://i.pinimg.com/236x/72/b8/24/72b824d9120af10d7e7e81314e7eefb5.jpg',
 'https://i.pinimg.com/236x/12/5a/0b/125a0b1303785270d7a8c5b4de4ccb6f.jpg',
 'https://i.pinimg.com/236x/5a/d6/3d/5ad63de873234593e393c7c41a6f1b39.jpg',
 
];

const sareeNames = [
 "Elegant Cotton Kurti",
"Modern Georgette Kurti",
"Classic Silk Kurti",
"Trendy Printed Kurti",
"Handloom Cotton Kurti",
"Party Wear Kurti",
"Casual Everyday Kurti",
"Banarasi Work Kurti",
"Kanjivaram Style Kurti",
"Festive Embellished Kurti",
"Zari Embroidered Kurti",
"Traditional South Kurti",
"Designer Long Kurti",
"Stylish Asymmetric Kurti",
"Thread Work Kurti",
"Digital Print Kurti",
"Floral Pattern Kurti",
"Lightweight Summer Kurti",
"Office Wear Kurti",
"Pastel Hue Kurti",
"Lace Border Kurti",
"Daily Wear Kurti",
"Ethnic Flare Kurti",
"Luxury Tussar Kurti",

];

const Womenfoot = () => {
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

export default Womenfoot;

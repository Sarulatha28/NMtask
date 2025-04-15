import React, { useState } from 'react';
import Navbar from "./Navbar";

const Images = [
 'https://i.pinimg.com/236x/d0/f6/19/d0f6190e9ed1353aa4faf26f6b3788ef.jpg',
 'https://i.pinimg.com/236x/6b/4d/07/6b4d072796353580d3340e89a02c19f4.jpg',
 'https://i.pinimg.com/236x/b5/cd/90/b5cd902829c7daaec9c965715f267ad0.jpg',
 'https://i.pinimg.com/474x/67/de/ae/67deae39aa499fa5be5451e4a024d716.jpg',
 'https://i.pinimg.com/236x/32/aa/b2/32aab23bc58f44ad5ca469e28c79ce59.jpg',
 'https://i.pinimg.com/236x/b0/73/17/b07317699178058435d124a60aa47d01.jpg',
 'https://i.pinimg.com/236x/56/19/99/561999a0b4936527bd1e3fee4f143a98.jpg',
'https://i.pinimg.com/236x/2a/fe/e3/2afee3cbbc366b1cfa08cbff78e1cd64.jpg',
'https://i.pinimg.com/236x/2a/fe/e3/2afee3cbbc366b1cfa08cbff78e1cd64.jpg',
'https://i.pinimg.com/236x/05/fd/57/05fd576690007803dae9fd3b0faff3e0.jpg',
'https://i.pinimg.com/236x/05/fd/57/05fd576690007803dae9fd3b0faff3e0.jpg',
'https://i.pinimg.com/236x/cb/c4/e9/cbc4e9f384849db3da681f8f472d9522.jpg',
'https://i.pinimg.com/236x/cb/c4/e9/cbc4e9f384849db3da681f8f472d9522.jpg',
'https://i.pinimg.com/236x/64/ed/44/64ed44a2e21e34279345f4aa535c35a4.jpg',
'https://i.pinimg.com/236x/46/90/da/4690da0cc9527176a0a22aa6141f64f8.jpg',
'https://i.pinimg.com/236x/8e/6f/23/8e6f2317cfe2f56bbdf552c344466e1c.jpg',
'https://i.pinimg.com/236x/26/7d/95/267d956639ac5a77ae60efbbab42e4a8.jpg',
'https://i.pinimg.com/236x/eb/ab/29/ebab29717b9b9a8a532868d8bd03017a.jpg',
'https://i.pinimg.com/474x/5d/8f/bd/5d8fbdec6ecce56bc8f6e4416f7ba7e8.jpg',
'https://i.pinimg.com/236x/36/33/93/363393cab7ee99f18965ddaef467cfcf.jpg',
'https://i.pinimg.com/236x/16/25/63/16256330e8329f9310bc6e45b15622b5.jpg',
'https://i.pinimg.com/236x/8e/06/4f/8e064f9a1e01797ab1f0baff5bfe139b.jpg',
'https://i.pinimg.com/236x/53/52/8b/53528bc961d46a1c97970fee255bef3b.jpg',
'https://i.pinimg.com/236x/d2/3a/38/d23a38361e88a5198130b9bb78d1bd69.jpg',

];

const Names = [
"Elegant Evening Gown",
"Floral Maxi Dress",
"Chic Blazer Set",
"Off-Shoulder Top",
"Bodycon Midi Dress",
"Pleated Skirt",
"Denim Jacket",
"Peplum Top",
"Sleeveless Jumpsuit",
"Crop Top with Trousers",
"Printed Wrap Dress",
"Leather Pants",
"Ruffled Blouse",
"Knit Sweater",
"Corduroy Mini Skirt",
"High-Waisted Jeans",
"Satin Cami Top",
"Sequin Party Dress",
"Oversized Shirt Dress",
"Striped T-Shirt Dress",
"Wide-Leg Culottes",
"Lace Bodysuit",
"Trench Coat",
"Halter Neck Romper"

];

const Western = () => {
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

export default Western;

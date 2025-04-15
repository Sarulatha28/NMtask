import React, { useState } from 'react';
import Navbar from "./Navbar";

const Images = [
 'https://i.pinimg.com/474x/a4/9f/cf/a49fcf005399d34fd89fa524f040ae0d.jpg',
 'https://i.pinimg.com/236x/18/0d/cf/180dcf1fa7dac3ec19868dda4c312643.jpg',
 'https://i.pinimg.com/236x/ad/b8/39/adb8395c95f1c889c5f5b9bdcfea5600.jpg',
 'https://i.pinimg.com/236x/30/db/4e/30db4e8b7fb65cee68fdf9980cf9c004.jpg',
 'https://i.pinimg.com/236x/28/28/dc/2828dc3b418ace597a8a65fb9ea98ac8.jpg',
 'https://i.pinimg.com/236x/30/7f/33/307f33a3ab8ea81d9286fc5da1288efe.jpg',
 'https://i.pinimg.com/236x/01/97/ac/0197ac1eae38fd256d16364d30031d53.jpg',
 'https://i.pinimg.com/236x/20/35/2a/20352abac3ec50e8cfb1d6a148d37e03.jpg',
 'https://i.pinimg.com/236x/f0/44/27/f044278c17a5b50885ca826576ee3976.jpg',
 'https://i.pinimg.com/236x/18/4f/96/184f96d1c5387ee94d3c575f8fc51110.jpg',
 'https://i.pinimg.com/236x/0e/9b/d8/0e9bd8facff8bd91af8cb46c1f8831e1.jpg',
 'https://i.pinimg.com/236x/42/80/01/428001f36989a5a941bc9093bca401c3.jpg',
 'https://i.pinimg.com/474x/c7/67/da/c767dab1da43616ce9d230d427faf994.jpg',
 'https://i.pinimg.com/236x/a4/e4/9e/a4e49e4637ceebca69461d4a0c12d30f.jpg',
 'https://i.pinimg.com/474x/79/b0/be/79b0be8e9e4a8cf3758f5c51fe280d33.jpg',
 'https://i.pinimg.com/474x/12/77/1d/12771d75d54e6042f336f0180cbbbee0.jpg',
 'https://i.pinimg.com/474x/e2/3d/57/e23d57273b9b058868f2b125663fad61.jpg',
 'https://i.pinimg.com/236x/10/68/6d/10686d7b1d632eb7a87b01a41a80247e.jpg',
 'https://i.pinimg.com/236x/51/ce/2b/51ce2b61d11639e41f04d6a6dd16999e.jpg',
 'https://i.pinimg.com/236x/44/d3/0b/44d30ba897252697623bb7f4f11d3438.jpg',
 'https://i.pinimg.com/474x/13/61/fd/1361fd25b6159b7b6f43cf3becb08c1d.jpg',
 'https://i.pinimg.com/236x/4f/56/82/4f5682e4362b9a231949b879c6a9fc4c.jpg',
 'https://i.pinimg.com/236x/84/94/0b/84940b9889e70bd79454cf15bc1a5afc.jpg',
 'https://i.pinimg.com/236x/6d/d8/e4/6dd8e45a93becc8c7658ca673da5cfc6.jpg',
'https://i.pinimg.com/236x/4f/79/02/4f7902d6d651d18981214894f4bc1e34.jpg',

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

import React, { useState } from 'react';
import Navbar from "./Navbar";

const Images = [
 'https://i.pinimg.com/236x/ce/15/63/ce1563c91f334f913ca64ef703945ed0.jpg',
 'https://i.pinimg.com/236x/3e/1e/2e/3e1e2e7465cc0a636e7013391411fed5.jpg',
 'https://i.pinimg.com/236x/39/8b/5c/398b5c993ab316e67a9bf84e3fd077d9.jpg',
 'https://i.pinimg.com/474x/46/1b/d5/461bd5ae64c47fc7d5fd1f20b32e5d78.jpg',
 'https://i.pinimg.com/236x/51/1b/b9/511bb905d39ea87a0fb227b41db3edc3.jpg',
 'https://i.pinimg.com/236x/be/38/7d/be387db8c9cdf2566ca9349df74a0b2c.jpg',
 'https://i.pinimg.com/236x/c6/26/7d/c6267d6cdf483bce5407e6a296733659.jpg',
 'https://i.pinimg.com/236x/b3/1f/bb/b31fbb791cdf72a6228546eb83ea9855.jpg',
 'https://i.pinimg.com/236x/1b/86/50/1b8650fe0b60922a5487db449e0cac5d.jpg',
 'https://i.pinimg.com/236x/24/d1/5f/24d15f36cb5a8625c32fcdf6e1520185.jpg',
 'https://i.pinimg.com/474x/30/1f/3f/301f3f5409daaaddf390f991fc4ea8ae.jpg',
 'https://i.pinimg.com/236x/3f/8d/b3/3f8db3aea99fc528a9966618a9d1c206.jpg',
 'https://i.pinimg.com/236x/40/34/cd/4034cd31574799a04329148a70ed471b.jpg',
 'https://i.pinimg.com/236x/74/12/3f/74123f0ec5e019bd2e850c23045e5975.jpg',
 'https://i.pinimg.com/236x/ef/3b/9a/ef3b9a950948cc9aad5bee63ec4ba546.jpg',
 'https://i.pinimg.com/236x/39/65/12/396512ed1a184e368c62d0a837f48abe.jpg',
 'https://i.pinimg.com/236x/97/4d/f4/974df420b499d35b758b5d663db5778c.jpg',
 'https://i.pinimg.com/236x/b5/ce/57/b5ce57d7ab9358db624a9fb08b3f3064.jpg',
 'https://i.pinimg.com/236x/bf/69/39/bf69393fc4a02801e7ee96172b83d32c.jpg',
 'https://i.pinimg.com/236x/11/1e/cf/111ecff172e963bfdb8ce57721cb1cc4.jpg',
 'https://i.pinimg.com/236x/39/bd/30/39bd305f161a465381641260f991bba5.jpg',
 'https://i.pinimg.com/236x/63/8a/24/638a243f35c3976218d418d89e25937a.jpg',
 'https://i.pinimg.com/236x/ce/71/bf/ce71bf260741f2f55d82a26ec000c935.jpg',
'https://i.pinimg.com/474x/90/8d/a4/908da4d52a16808afedf5ef8a6976165.jpg',
'https://i.pinimg.com/236x/ec/3a/eb/ec3aeb987b90255b9474758246e9fdbf.jpg',
'https://i.pinimg.com/236x/0a/df/58/0adf58c9ddf629c06fbc53b420852f48.jpg',
'https://i.pinimg.com/236x/80/ef/14/80ef14d5dcb884c8c19e76c55e6f1020.jpg',
'https://i.pinimg.com/236x/46/8b/60/468b6036be130b7b5dcd3cead40afa68.jpg',
'https://i.pinimg.com/236x/ff/b6/b6/ffb6b60a4c05cd9b62731503adb758d5.jpg',
'https://i.pinimg.com/236x/40/31/59/40315942e47301328733caba516a3269.jpg',
'https://i.pinimg.com/236x/5f/e4/bc/5fe4bcb195b6bc7e7b8e02a5cb1bf75f.jpg',


 
];

const Names = [
 'Floral Wool Winter Dress',
'Pastel Knit Winter Dress',
'Fuzzy Longline Cardigan',
'Stylish Women’s Trench Coat',
'Cozy Cable Knit Sweater Dress',
'Elegant Faux Fur Jacket',
'Woolen A-Line Winter Dress',
'Oversized Hoodie Dress',
'Layered Winter Kurti Dress',
'Soft Flannel Shirt Dress',
'High Neck Wool Dress',
'Button-Up Sweater Dress',
'Chic Poncho Style Dress',
'Embroidered Wool Blend Dress',
'Knitted Maxi Winter Dress',
'Wool Blend Overcoat',
'Men’s Thermal Sweatshirt',
'Fleece Zipper Hoodie',
'Puffer Winter Jacket',
'Knitted Full Sleeve Sweater',
'Stylish Checkered Winter Shirt',
'Heavy Woolen Kurta',
'Men’s Fur Collar Jacket',
'Classic Woolen Blazer'


];

const Winter = () => {
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

export default Winter ;

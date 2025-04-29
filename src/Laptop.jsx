import React, { useState } from 'react';
import Navbar from "./Navbar";

const Images = [
 'https://i.pinimg.com/236x/75/3c/ca/753ccad1a9c7f775eb6b4ac4c4e231a2.jpg',
'https://i.pinimg.com/236x/74/7c/4e/747c4edc809b4558590aee6964741cf0.jpg',
'https://i.pinimg.com/236x/30/ad/04/30ad0478e14c689ac56871eea4d2ee68.jpg',
'https://i.pinimg.com/236x/0e/89/94/0e8994d3ab351317a760f3b6c163650f.jpg',
'https://i.pinimg.com/236x/2b/18/d3/2b18d396018870983758de8d3f0db926.jpg',
'https://i.pinimg.com/236x/05/71/a1/0571a140c8f2c73d60ad88ffd4a2bbb4.jpg',
'https://i.pinimg.com/236x/41/5e/cb/415ecb96a5951674c2f8c0145ce3265c.jpg',
'https://i.pinimg.com/236x/69/96/8a/69968a4397724231650c21084e06096f.jpg',
'https://i.pinimg.com/236x/fe/60/9d/fe609da59a92b7bb1616607416e0672a.jpg',
'https://i.pinimg.com/236x/20/ca/a3/20caa341782a8c576064f4c9ce6fd61a.jpg',
'https://i.pinimg.com/236x/58/1a/c5/581ac5eb9ee184d2fa29e61c5d5246ab.jpg',
'https://i.pinimg.com/236x/47/fa/75/47fa756dce183252f08acf6f488fef33.jpg',
'https://i.pinimg.com/236x/64/59/a5/6459a5862ae610b03ee680722894fdd8.jpg',
'https://i.pinimg.com/236x/c4/2b/92/c42b920d196ab2ff47df78a835946f8b.jpg',
'https://i.pinimg.com/236x/3c/6d/c0/3c6dc06506fbd6c714c02e119c5a80db.jpg',
'https://i.pinimg.com/236x/9a/54/2d/9a542d633aa84d4ccc36273580ed49dd.jpg',
'https://i.pinimg.com/236x/11/27/40/112740860f91b8b3b57f5a9de70a5b51.jpg',
'https://i.pinimg.com/236x/30/88/d3/3088d3d597da816fe9862cd40cbaf1ce.jpg',
'https://i.pinimg.com/236x/ed/de/57/edde577f58591246d7e7a3b6eeb44b2b.jpg',
'https://i.pinimg.com/236x/b0/bf/9d/b0bf9d36b64483d3ebf3d12c39adabcb.jpg',
'https://i.pinimg.com/474x/a9/dd/d2/a9ddd2a6fcb22c5efbd0666d0cb1ded8.jpg',
'https://i.pinimg.com/236x/c0/49/39/c049394bbce4d9d0401434041c782705.jpg',
'https://i.pinimg.com/474x/6d/aa/52/6daa527e8c8a9e467fafb37444d6b806.jpg',
'https://i.pinimg.com/236x/47/fa/75/47fa756dce183252f08acf6f488fef33.jpg',




 
];

const Names = [
"HP Pavilion 15",
"Dell Inspiron 14",
"Apple IdeaPad Slim 5",
"Asus VivoBook 15",
"Acer Aspire 7",
"HP Pavilion 15",
"MSI Modern 14",
"LG Gram 16",
"Microsoft Surface Laptop 5",
"Samsung Galaxy Book3",
"HP Envy x360",
"Dell XPS 13",
"Lenovo ThinkPad E14",
"Dell",
"Acer Swift 3",
"Apple MacBook Pro 14",
"Apple MacBook Pro ",
"Apple MacBook Pro 14",
"Apple MacBook ",
"Apple MacBook Pro 14",
"Apple MacBook Pro ",
"Dell Inspiron 14",
"Lenovo IdeaPad Slim 5",
"Apple MacBook ",
"Acer Aspire 7",


];

const Laptop = () => {
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

export default Laptop;

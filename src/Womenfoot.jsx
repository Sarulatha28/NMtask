import React, { useState } from 'react';
import Navbar from "./Navbar";

const Images = [
 'https://i.pinimg.com/236x/61/fe/a0/61fea0cf1224fdbd635061dfea41f8f0.jpg',
 'https://i.pinimg.com/236x/ba/b9/4c/bab94c312d95b5b1eff6c24d0998c80e.jpg',
 'https://i.pinimg.com/474x/16/28/35/1628356f4af8e57073fe296c032e1ba6.jpg',
 'https://i.pinimg.com/236x/0b/47/fb/0b47fbd5de0926ca16ed461a28d4caf0.jpg',
 'https://i.pinimg.com/236x/f4/6a/dd/f46add52100a2291988807390a99c3be.jpg',
 'https://i.pinimg.com/236x/e7/45/7a/e7457a70b51e81e6a1c5749389b86e7c.jpg',
 'https://i.pinimg.com/474x/42/05/e3/4205e37ae7ccb2f36a8c69d908693ee1.jpg',
 'https://i.pinimg.com/236x/57/73/1b/57731bb979ff987b8f93ead9c8ade1e6.jpg',
 'https://i.pinimg.com/236x/42/c9/27/42c927ede3fe09d5c35454b13d7e0c40.jpg',
 'https://i.pinimg.com/236x/37/52/f8/3752f8e557fe141773b5a02fc9bbc3ec.jpg',
 'https://i.pinimg.com/236x/49/0d/d0/490dd0f48dfcb7d440e110bfe8a680fb.jpg',
 'https://i.pinimg.com/236x/55/55/88/55558820af5f1b5bf55b0626759e91d9.jpg',
 'https://i.pinimg.com/236x/55/55/88/55558820af5f1b5bf55b0626759e91d9.jpg',
'https://i.pinimg.com/236x/ea/dd/b9/eaddb9dc4eece7a0121c467f9c8239cb.jpg',
'https://i.pinimg.com/236x/93/13/a7/9313a79d97d413106dc413f3a1bf87cd.jpg',
'https://i.pinimg.com/236x/79/cd/c7/79cdc7411e70581dc698a4c9db05453f.jpg',
'https://i.pinimg.com/236x/54/60/d9/5460d913b16d80a29c8a63e0d2296956.jpg',
'https://i.pinimg.com/236x/37/7e/28/377e2846615334ba0e255ba7fda8eb45.jpg',
'https://i.pinimg.com/236x/37/7e/28/377e2846615334ba0e255ba7fda8eb45.jpg',
'https://i.pinimg.com/236x/e1/4d/06/e14d06cbbfa012de49f9283da2bdca5c.jpg',
'https://i.pinimg.com/236x/ab/94/77/ab9477826708ce854e4e5b08cc7df193.jpg',
'https://i.pinimg.com/236x/8b/38/65/8b3865f9d1d05f986aa57a175aed1f3f.jpg',
'https://i.pinimg.com/236x/fd/5d/27/fd5d27df01febaa2f3aefd7169a4ee02.jpg',
'https://i.pinimg.com/236x/b6/14/72/b6147276efde960461c4982b60421744.jpg',
'https://i.pinimg.com/236x/35/1b/1c/351b1c08a6736d87711f3470a0d5e738.jpg',
'https://i.pinimg.com/236x/7d/5f/61/7d5f61382e157f13639af37647aa2e1f.jpg',
'https://i.pinimg.com/236x/fd/b7/66/fdb7660146de2f4c8844bb4e9cabcd28.jpg',
'https://i.pinimg.com/236x/0d/28/e6/0d28e67a34a8a22ae55ffb65b512dd78.jpg',
'https://i.pinimg.com/474x/ac/57/ac/ac57acc84ae6b811fb35fe3fa04b7483.jpg',
'https://i.pinimg.com/236x/72/4d/52/724d52cc22de4551c8b2cb1a3694ce08.jpg',
 'https://i.pinimg.com/236x/b9/65/5a/b9655a41129fd32ec794be456bff7126.jpg',
];

const Names = [
 'Classic Black Heels',
'Floral Printed Ballerinas',
'Pastel Strap Sandals',
'Block Heel Ankle Boots',
'Embroidered Mojaris',
'Glossy Party Wear Pumps',
'Pointed Toe Kitten Heels',
'Flat Slip-On Loafers',
'Woven Strap Kolhapuris',
'Designer Wedge Heels',
'Beaded Ethnic Sandals',
'Glitter Platform Heels',
'Bow-Tie Slip-On Flats',
'Soft Faux Fur Slippers',
'Gold-Toned Bridal Heels',
'Stylish Lace-Up Boots',
'Trendy Espadrille Flats',
'Sequin Party Wear Sandals',
'Denim Casual Sneakers',
'Peep-Toe Block Heels',
'Transparent Strap Heels',
'Velvet Embellished Flats',
'Zipper Ankle Length Boots',
'Satin Bow Ballet Shoes',
'Pastel Tassel Loafers',
'Metallic Strap Heels',
'Daily Wear Rubber Sandals',
'Criss-Cross Gladiator Flats',
'Wedge Flip-Flop Sandals',
'Feather Detail Sliders',
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

export default Womenfoot;

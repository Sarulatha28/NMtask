import Navbar from "./Navbar";
import React, { useEffect, useRef, useState } from "react";
import {NavLink } from "react-router-dom";
import img1 from './assets/saree.jpg';
import img2 from './assets/menfoot.jpg';
import img3 from './assets/womanfoot.jpg';
import img4 from './assets/ethenic.jpg';
import img5 from './assets/winter.jpg';
import img6 from './assets/kids.png';
import img7 from './assets/watch.jpg';
import img8 from './assets/western1.jpg';
import img9 from './assets/menbt.jpg';
import img10 from './assets/mentop.webp';

const Task = () => {
  //fashion
  const cardimages = [
    { id: 1, img: img1, Text: "Women Sarees", path: "/saree" },
    { id: 2, img: img4, Text: "Women Ethnic", path: "/ethnic" },
    { id: 3, img: img10, Text: "Men Topwear", path: "/mentop" },
    { id: 4, img: img9, Text: "Men Bottomwear", path: "/menbottom" },
    { id: 5, img: img6, Text: "Kids Wear", path: "/kidswear" },
    { id: 6, img: img8, Text: "Women Western", path: "/western" },
    { id: 7, img: img3, Text: "Women Footwear", path: "/womenfoot" },
    { id: 8, img: img2, Text: "Men Footwear", path: "/menfoot" },
    { id: 9, img: img7, Text: "Watches and Accessories", path: "/watch" },
    { id: 10, img: img5, Text: "Winter", path: "/winter" },
  ];
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const totalImages = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalImages);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);
//silder
  const images = [
    "https://i.pinimg.com/236x/16/8c/71/168c7155ca5256ccdb949133614f136e.jpg",
    "https://i.pinimg.com/236x/12/88/55/1288551b9d285f120ee45b1548af6651.jpg",
    "https://i.pinimg.com/736x/67/d9/b4/67d9b4dd24c03b84a55b5cea9242a79a.jpg",
    "https://i.pinimg.com/474x/43/64/75/436475501033d30fbfca9cf3ede88a18.jpg",
    "https://i.pinimg.com/236x/f9/12/03/f91203b5d18b0a06a8b9340e780c3242.jpg",
  ];
//electronices
const Electimages = [
  {
    id: 1,
    img: "https://i.pinimg.com/236x/24/22/32/24223258deb2711a6cfb6ffe2ba3b5e9.jpg",
    Text: "Smartphone",
    path: "/smartphone"
  },
  {
    id: 2,
    img: "https://i.pinimg.com/236x/00/78/23/007823f23f707b60490c82f6544475f2.jpg",
    Text: "Laptop",
    path: "/laptop"
  },
  {
    id: 3,
    img: "https://i.pinimg.com/236x/3a/73/71/3a73711fd25dcd6029cd04dc1fed2e17.jpg",
    Text: "Smartwatch",
    path: "/smartwatch"
  },
  {
    id: 4,
    img: "https://i.pinimg.com/236x/b0/69/e6/b069e6c613ce32a462e570bf76326130.jpg",
    Text: "Tablet",
    path: "/tablet"
  },
  {
    id: 5,
    img: "https://i.pinimg.com/474x/fd/5d/fc/fd5dfcc9f58782b8c8a7a905147b5a28.jpg",
    Text: "Bluetooth Speaker",
    path: "/bluetoothspeaker"
  },
  {
    id: 6,
    img: "https://i.pinimg.com/236x/59/e5/7e/59e57eda97616eaa68dc3502e081132d.jpg",
    Text: "Headphones",
    path: "/headphones"
  },
  {
    id: 7,
    img: "https://i.pinimg.com/236x/11/cc/12/11cc124d55139277cdcee81eba235bed.jpg",
    Text: "Television",
    path: "/television"
  },
  {
    id: 8,
    img: "https://i.pinimg.com/236x/22/be/db/22bedb76b854f3b5527e9fa518091f86.jpg",
    Text: "Gaming Console",
    path: "/gamingconsole"
  },
  {
    id: 9,
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/nebulizer/t/p/a/low-noise-compartment-compressor-machine-kit-with-mouthpiece-original-imah949v2fcpeeek.jpeg?q=70",
    Text: "Healthcare",
    path: "/digitalcamera"
  },
  {
    id: 10,
    img: "https://i.pinimg.com/236x/7f/58/59/7f58592667130d81aa1512d4f2d5854c.jpg",
    Text: "Personalcare",
    path: "/wirelessearbuds"
  }
];

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Navbar */}
      <Navbar/>
      <div className="w-full max-w-4xl overflow-hidden mx-auto rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        ref={sliderRef}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[50vh] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
      {/* Padding top for fixed navbar */}
      <div className="pt-20 px-4">
        <div className="font-bold text-4xl py-4">Fashion</div>

        <div className="overflow-x-auto px-4">
          <div className="grid grid-cols-10 gap-3 min-w-[1000px] sm:min-w-0 md:grid-cols-10">
            {cardimages.map((img) => (
             <NavLink to={img.path} key={img.id}>
             <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:bg-gray-100 transition duration-200">
               <img
                 src={img.img}
                 alt={img.Text}
                 className="w-full h-[150px] object-cover object-contain rounded-t-xl"
               />
               <div className="h-12 flex items-center justify-center px-2 text-center font-semibold text-sm sm:text-base">
                 {img.Text}
               </div>
             </div>
           </NavLink>
           
            ))}
          </div>
        </div>
      </div>
      <div className="font-bold text-4xl py-4">Electronices</div>

<div className="overflow-x-auto px-4">
  <div className="grid grid-cols-10 gap-3 min-w-[1000px] sm:min-w-0 md:grid-cols-10">
    {Electimages.map((img) => (
      <NavLink to={img.path} key={img.id}>
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:bg-gray-100 transition duration-200">
          <img
            src={img.img}
            alt="Elect"
            className="w-full h-[150px] object-cover object-contain rounded-t-xl"
          />
          <div className="h-12 flex items-center justify-center px-2 text-center font-semibold text-sm sm:text-base">
            {img.Text}
          </div>
        </div>
      </NavLink>
    ))}
  </div>
</div>
</div>

    
  );
};

export default Task;

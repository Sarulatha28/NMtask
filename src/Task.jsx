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
import { BsArrowRight } from "react-icons/bs";
import "./index.css";
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
const cardData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/qrzTZqK/Image-5.png",
    title: "Xiaomi True Wireless Earbuds",
    description: "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
    price: " ₹299 ",
    bgColor: "#F7E99E"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/236x/ca/6e/f7/ca6ef77b8a0598d9ff9b51046bd14ed9.jpg",
    title: "Apple Smart Watch Series 8",
    description: "Stylish, comfortable, and super soft smart watch.",
    price: "₹159 ",
    bgColor: "#F7E7E3"
  },
  {
    id: 3,
    image: "https://i.pinimg.com/236x/d6/d4/0b/d6d40bdfa4a6d942072b823e955dacb4.jpg",
    title: "Puma Winter Sneakers",
    description: "Comfortable everyday sneakers for every style.",
    price: "₹109",
    bgColor: "#DDEFE0"
  },
  {
    id: 4,
    image: "https://i.pinimg.com/236x/65/6b/78/656b780f2de75b3746de1859e05f3893.jpg",
    title: "JBL Boombox Bluetooth Speaker",
    description: "A compact portable Bluetooth speaker with great sound.",
    price: "₹199 ",
    bgColor: "#F2E2E4"
  },
  {
    id: 5,
    image: "https://i.pinimg.com/236x/72/58/7b/72587befa96c0fdc0b8bb47aaf29710f.jpg",
    title: "Xbox Wireless Controller",
    description: "Upgrade your gaming experience with this controller.",
    price: "₹89 ",
    bgColor: "#E1E8F2"
  }
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
       <div className="w-full overflow-hidden py-6 pt-5 bg-gray-100">
      <div className="flex w-max scroll-animation space-x-4 px-4">
        {cardData.concat(cardData).map((item, index) => (
         <div
  key={item.id}
  className="w-60% h-[95vh] pt-20 flex flex-col items-center justify-center text-center px-6"
  style={{ backgroundColor: item.bgColor }}
>
            <img src={item.image} alt="product" className="w-[200px] mx-auto" />
            <h3 className="text-[1.2rem] font-semibold mt-2">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
            <div className="flex items-center justify-center my-4 gap-2">
              <p className="text-gray-700">Only for:</p>
              <span className="py-1 px-3 bg-white rounded-md font-semibold text-gray-900 text-[0.9rem]">
                {item.price}
              </span>
            </div>
            <button className="group flex items-center justify-center gap-2 w-50% bg-[#FA8232] text-white py-2.5 rounded-md hover:bg-[#DE732D] transition-all duration-300">
              Shop now{" "}
              <BsArrowRight className="group-hover:ml-1 transition-all duration-300" />
            </button>
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

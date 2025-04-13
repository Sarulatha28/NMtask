import React from "react";
import Navbar from "./navbar";
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

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Navbar */}
      <Navbar/>
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
    </div>
  );
};

export default Task;

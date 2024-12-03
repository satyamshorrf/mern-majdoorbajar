import React from "react";
import {BrickWall, Zap, Paintbrush, Hammer,Droplet, Plane } from "lucide-react"; // Import suitable icons

const Card = ({ title, subtitle, bgColor, Icon }) => (
  <div className={`w-64 h-20 ${bgColor} rounded-lg flex items-center p-4 m-4`}>
    <Icon className="text-white w-8 h-8 mr-4" />{" "}
    {/* Icon aligned to the left */}
    <div>
      <h2 className="text-white font-bold text-lg">{title}</h2>
      <p className="text-gray-200">{subtitle}</p>
    </div>
  </div>
);

const CardBox = () => (
  <div className="flex justify-center items-center ">
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-2/2">
      <Card
        title="LABOR AND MISTRY"
        subtitle="Explore Services"
        bgColor="bg-blue-600"
        Icon={BrickWall} // Tool icon
      />
      <Card
        title="ELECTRICIAN"
        subtitle="Find Electricians"
        bgColor="bg-yellow-600"
        Icon={Zap} // Wrench icon
      />
      <Card
        title="PAINTER"
        subtitle="Hire Painters"
        bgColor="bg-purple-600"
        Icon={Paintbrush} // Paintbrush icon
      />
      <Card
        title="CARPENTER"
        subtitle="Book Carpenters"
        bgColor="bg-green-600"
        Icon={Hammer} // Hammer icon
      />
      <Card
        title="PLUMBER"
        subtitle="Best Deals"
        bgColor="bg-pink-800"
        Icon={Droplet} // Plane icon
      />
      <Card
        title="TRAVEL"
        subtitle="Best Deals"
        bgColor="bg-red-800"
        Icon={Plane} // Plane icon
      />
    </div>
  </div>
);

export default CardBox;

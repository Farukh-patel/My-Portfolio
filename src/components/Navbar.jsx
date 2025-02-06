import React from "react";
import { Home, Info,Sun,Moon } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="bg-indigo-950 w-full h-14 flex justify-between items-center">
      <div className="mx-4">
        <img className="h-14 rounded-full " src="buglogo.png" alt="" />
      </div>
      <ul className="flex space-x-6 text-white mr-4 cursor-pointer">
        <li className="flex items-center">
          <Home className="h-5 w-5 mr-2" />
          Home
        </li>
        <li className="flex items-center">
          <Info className="h-5 w-5 mr-2" />
          About
        </li>
        <li className="flex items-center">
          <Sun className="h-5 w-5 mr-2" />
          Light Mode
        </li>
        <li className="flex items-center">
          <Moon className="h-5 w-5 mr-2" />
          Dark Mode
        </li>
      </ul>
    </div>
  );
};

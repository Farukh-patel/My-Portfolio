import React from "react";
import {Home,Info} from 'lucide-react'

export const Navbar = () => {
  return (
    <div className="bg-indigo-950 w-full h-14 flex justify-between items-center">
      <div className="mx-4">
      logo
      </div>

        <ul className="flex space-x-6 text-white mr-4 cursor-pointer">
          <li><Home className="h-5 w-5 mr-2"/>Home</li>
          <li><Info className="h-5 w-5"/>About</li>
        </ul>
    </div>
  );
};

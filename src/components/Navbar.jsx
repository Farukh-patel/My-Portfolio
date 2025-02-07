import React from "react";
import { Home, Info, Sun, Moon } from "lucide-react";

export const Navbar = (props) => {
  return (
    <div className={`${props.mode === "dark" ? "bg-indigo-950 text-white" : "bg-white text-black"} w-full h-14 fixed flex justify-between items-center`}>
      <div className="mx-4">
        <img className="h-14 rounded-full" src="buglogo.png" alt="Logo" />
      </div>
      <ul className="flex space-x-6 mr-4 cursor-pointer">
        <li className="flex items-center">
          <Home className="h-5 w-5 mr-2" />
          Home
        </li>
        <li className="flex items-center">
          <Info className="h-5 w-5 mr-2" />
          About
        </li>
        <li className="flex items-center " onClick={props.toggleDarkMode}>
          {props.mode === "dark" ? (
            <>
              <Moon className="h-5 w-5 mr-2" />
              Dark Mode
            </>
          ) : (
            <>
              <Sun className="h-5 w-5 mr-2" />
              Light Mode
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

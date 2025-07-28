import { Home, Info, Sun, Moon, Bug } from "lucide-react";

export const Navbar = (props) => {
  return (
    <div className={`${props.mode === "dark" ? "bg-indigo-950 text-white" : "bg-white text-black"} w-full h-14 fixed flex justify-between items-center`}>
      <div className="mx-4 flex items-center space-x-1 text-white">
        <span>&lt;</span>
        <Bug />
        <span>/&gt;</span>
      </div>

      <ul className="flex space-x-6 mr-4 cursor-pointer">
        <li className="flex items-center">
          <Home className="h-5 w-5 mr-2" />
          Home
        </li>
       
        <li className="flex items-center " onClick={props.toggleDarkMode}>
          {props.mode === "dark" ? (
            <>
              <Moon className="h-5 w-5 mr-2" />
              Light Mode
            </>
          ) : (
            <>
              <Sun className="h-5 w-5 mr-2" />
              Dark Mode
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

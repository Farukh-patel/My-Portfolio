import { Home, Sun, Moon, Bug } from "lucide-react";

export const Navbar = (props) => {
  return (
    <nav
      className={`${
        props.mode === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"
      } border-b-2 border-gray-500 w-full h-14 fixed flex justify-between items-center z-50`}
    >
      <div
        className={`mx-4 flex items-center space-x-1 ${
          props.mode === "dark" ? "text-white" : "text-black"
        }`}
      >
        <span>&lt;</span>
        <Bug />
        <span>/&gt;</span>
      </div>

      <ul className="flex space-x-6 mr-4 cursor-pointer">
        <li className="flex items-center">
          <Home className="h-5 w-5 mr-2" />
          Home
        </li>

        <li className="flex items-center" onClick={props.toggleDarkMode}>
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
    </nav>
  );
};

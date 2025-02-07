import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";

function App() {
  const [mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
    }
  };

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} mode={mode} />
      <div className={`${mode === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"} min-h-screen p-4`}>
        <HomePage mode={mode} />
      </div>
    </>
  );
}

export default App;

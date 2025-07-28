import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";

function App() {
  const [mode, setMode] = useState("dark");

  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} mode={mode} />
      <HomePage mode={mode} />
    </>
  );
}

export default App;

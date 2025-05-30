import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Other sections will be added here */}
    </div>
  );
}

export default App;

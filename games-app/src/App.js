// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyGames from "./components/MyGames";
import Home from "./Home";
import Career from "./components/Career";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-games" element={<MyGames />} />
          <Route path="/careers" element={<Career />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

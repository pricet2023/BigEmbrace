import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Banner.tsx";
import Home from "./Home.tsx";
import Resources from "./Resources.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="content">
        <p>Welcome to app</p>
        <div style={{ height: "2000px", fontFamily: 'Mager Regular' }}>Scroll to see it stays the same</div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

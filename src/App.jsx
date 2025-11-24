import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import WhatWeDo from "./components/WhatWeDo.jsx";
import HowWeWork from "./components/pages/HowWeWork.jsx";
import OurTeam from "./components/pages/Team.jsx";
import Services from "./components/pages/services.jsx";
import About from "./components/pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"; // Importing ScrollToTop

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop /> {/* <- ScrollToTop is now placed here */}
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhatWeDo />
                <OurTeam />
              </>
            }
          />
          {/* About page */}
          <Route path="/about" element={<About />} />
          {/* Contact page */}
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/services" element={<Services />} />
          {/* Team page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

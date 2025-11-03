import React, { useState, useEffect } from "react";
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
import ScrollToTop from "./components/ScrollToTop.jsx"; // <- import

export default function App() {
  const [hasPaid, setHasPaid] = useState(false); // Change this to `false` to show the payment message.

  // This is a mock check. You can replace this with an actual payment status check (API call, etc.).
  useEffect(() => {
    // For example, you could fetch payment status from your backend here.
    // setHasPaid(true); // Set this to true once payment is confirmed.
  }, []);

  if (!hasPaid) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1>Admin, please make the payment to proceed.</h1>
        <p>Your website will be active once payment is received.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop /> {/* <- place here (before Routes) */}
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

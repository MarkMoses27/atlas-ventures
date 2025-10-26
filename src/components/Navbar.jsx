// Navigation.jsx (route-aware)
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // treat homepage as transparent; change according to your routes
  const isHome = location.pathname === "/" || location.pathname === "/home";

  const linkBaseClass = isHome ? "text-white" : "text-gray-800";
  const navBgClass = isHome ? "bg-transparent" : "bg-white shadow-md";

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/home" className={`flex items-center ${linkBaseClass}`}>
              <div className="text-2xl font-bold">
                <span className={isHome ? "text-white" : "text-blue-900"}>ATLAS</span>
                <span className={isHome ? "text-blue-200 ml-1" : "text-blue-600 ml-1"}>VENTURES</span>
              </div>
            </Link>
            <p className={`${isHome ? "text-white/80" : "text-gray-600"} text-xs mt-1`}>Financial & Legal Solutions</p>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={`${linkBaseClass} hover:text-blue-500 font-medium transition-colors`}>
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className={`${isHome ? 'border border-white text-white' : 'bg-blue-600 text-white'} px-5 py-2 rounded-md font-medium`}
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isHome ? "text-white" : "text-gray-800"} focus:outline-none`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="block w-full text-center bg-blue-600 text-white px-3 py-2 rounded-md mt-4">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

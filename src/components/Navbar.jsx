// Navigation.jsx (Enhanced Professional Version)
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

// Import your logo assets - adjust the paths based on your project structure
import logoLight from "../assets/atlas-logo.png"; // For transparent background
import logoDark from "../assets/atlas-logo.png";   // For white background
// Alternative if using SVG:
// import { ReactComponent as LogoLight } from "../assets/images/logo-light.svg";
// import { ReactComponent as LogoDark } from "../assets/images/logo-dark.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const HOME_PATH = "/";
  const isHome = location.pathname === HOME_PATH || location.pathname === "/home";

  // Add scroll effect for better visual feedback
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Contact", href: "/contact" },
  ];

  // Dynamic classes based on state
  const navBackground = isHome && !isScrolled ? "bg-transparent" : "bg-white/95 backdrop-blur-md shadow-sm";
  const textColor = isHome && !isScrolled ? "text-white" : "text-gray-800";
  const taglineColor = isHome && !isScrolled ? "text-white/90" : "text-gray-600";

  // Determine which logo to use
  const currentLogo = isHome && !isScrolled ? logoLight : logoDark;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <NavLink 
              to={HOME_PATH} 
              className="flex items-center group"
              onClick={() => setIsOpen(false)}
            >
              {/* Logo Image */}
              <img 
                src={currentLogo} 
                alt="Atlas Ventures - Financial & Legal Solutions"
                className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-90"
                // For SVG alternative:
                // <LogoLight className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-90" />
              />
            </NavLink>
            <p className={`${taglineColor} text-xs font-light tracking-wide mt-1 transition-colors duration-300`}>
              Financial & Legal Solutions
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-1 py-2 font-medium transition-all duration-300 hover:text-blue-500 ${
                    isActive 
                      ? "text-blue-600 font-semibold" 
                      : textColor
                  } group`
                }
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.href ? "w-full" : ""
                  }`}
                />
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isHome && !isScrolled
                    ? "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:from-blue-700 hover:to-blue-800"
                } ${isActive ? "ring-2 ring-blue-400 ring-opacity-50" : ""}`
              }
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isHome && !isScrolled ? "text-white hover:bg-white/20" : "text-gray-800 hover:bg-gray-100"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden absolute top-full left-0 w-full ${
          isHome && !isScrolled 
            ? "bg-black/80 backdrop-blur-md" 
            : "bg-white/95 backdrop-blur-md"
        } border-t ${isHome && !isScrolled ? "border-white/20" : "border-gray-200"} shadow-xl`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                      : `hover:bg-white/10 ${textColor} hover:text-blue-600`
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 px-4">
              <NavLink 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className={`block w-full text-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isHome && !isScrolled
                    ? "bg-white text-blue-700 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
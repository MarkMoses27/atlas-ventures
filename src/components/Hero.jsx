import React, { useState, useEffect } from 'react';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';

const slides = [
  {
    title: 'Strategic Financial &',
    highlight: 'Legal Solutions',
    description: 'Trusted leaders in debt collection, auctioneering, and legal services since 2006. Your partner for ethical and effective recovery solutions.',
    imageUrl: bg1
  },
  {
    title: 'Expert Debt Recovery &',
    highlight: 'Credit Management',
    description: 'Professional recovery services that maintain relationships while protecting your financial interests.',
    imageUrl: bg2
  },
  {
    title: 'Comprehensive Legal &',
    highlight: 'Risk Management',
    description: 'End-to-end legal solutions including court brokerage, conveyancing, and compliance services.',
    imageUrl: bg3
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Preload images
  useEffect(() => {
    slides.forEach((s) => {
      if (s.imageUrl) {
        const img = new Image();
        img.src = s.imageUrl;
      }
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => {
          const isActive = i === currentSlide;
          return (
            <div
              key={i}
              aria-hidden
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
              style={{
                backgroundImage: `url(${s.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-gray-900/50" />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white py-20 lg:py-28">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-8">
            <span className="text-blue-200 text-sm font-medium">Trusted Since 2006</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block text-white mb-2">{slides[currentSlide].title}</span>
            <span className="block bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              {slides[currentSlide].highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-blue-50/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">17+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-blue-200 text-sm">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/254722382987"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Get Free Consultation
              <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-blue-100">
            {['Ethical & Transparent', 'Multilingual Team', 'Client-Focused'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide 
                  ? 'bg-blue-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
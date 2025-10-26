import React, { useState, useEffect } from 'react';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';

const slides = [
  {
    title: 'Your Strategic Partner for',
    highlight: 'Financial & Legal Solutions',
    description:
      'Trusted leaders in debt collection, auctioneering, and legal services since 2006 — your trusted partner for clear, ethical, and effective recovery and legal support.',
    imageUrl: bg1
  },
  {
    title: 'Expert Debt Recovery &',
    highlight: 'Credit Management',
    description:
      'Ethical, efficient, and cost-effective recovery that protects relationships while restoring balance to your books.',
    imageUrl: bg2
  },
  {
    title: 'Comprehensive Legal &',
    highlight: 'Risk Management',
    description:
      'From court brokerage to conveyancing, we provide end-to-end legal solutions that protect interests and ensure compliance.',
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

  // preload images
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
          const style = {
            backgroundImage: `url(${s.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          };
          return (
            <div
              key={i}
              aria-hidden
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform-gpu ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
              style={style}
            >
              <div className="absolute inset-0" style={{ background: 'rgba(3,7,18,0.28)' }} />
            </div>
          );
        })}

        {/* Soft gold shine */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(120deg, rgba(212,175,55,0.02) 0%, rgba(212,175,55,0.06) 35%, rgba(212,175,55,0.03) 60%, rgba(255,255,255,0) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28 text-white">
          {/* Left column */}
          <div>
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(212,175,55,0.12)', color: '#D4AF37' }}
            >
              Welcome to Atlas Ventures
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight my-6">
              <span className="block opacity-95">{slides[currentSlide].title}</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(90deg,#D4AF37,#ffffff)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                {slides[currentSlide].highlight}
              </span>
            </h1>

            <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">{slides[currentSlide].description}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">17+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold shadow-lg text-sm transition-transform duration-300 transform hover:-translate-y-1"
                style={{ background: 'linear-gradient(90deg,#D4AF37 0%, #f0c75a 40%, #0b73b8 100%)', color: '#041627' }}
                aria-label="Get a free consultation"
              >
                Get Free Consultation
                <svg className="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#041627" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-sm border-2 border-white/25 text-white transition-colors duration-200 hover:bg-white/10"
                aria-label="View our services"
              >
                Our Services
              </a>
            </div>

            {/* Trust indicators (gold checkmarks) */}
            <div className="flex flex-wrap gap-6">
              {['Ethical & Transparent', 'Multilingual Team', 'Client-Focused'].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-white/90">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="11" stroke="#D4AF37" strokeWidth="1.6" fill="rgba(212,175,55,0.08)" />
                    <path d="M7 12.5l2.5 2.5L17 8" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto text-gray-800">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold mb-1">Free Case Evaluation</h3>
              <p className="text-gray-600">Get expert advice on your situation</p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                form.reset();
                alert('Thank you — we will contact you soon.');
              }}
            >
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0b73b8] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0b73b8] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0b73b8] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <select
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0b73b8] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Service Needed</option>
                  <option value="debt-collection">Debt Collection</option>
                  <option value="auctioneering">Auctioneering</option>
                  <option value="repossession">Repossession</option>
                  <option value="risk-management">Risk Management</option>
                  <option value="legal">Legal Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0b73b8] to-[#041627] text-white font-semibold py-3 rounded-lg transition-transform duration-200 hover:-translate-y-1 shadow-md"
              >
                Submit for Evaluation
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 1a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V5a4 4 0 0 0-4-4z" stroke="#9AA3B2" strokeWidth="1.4" />
                <path d="M8 12l1.8 1.8L16 8.6" stroke="#9AA3B2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Confidential & Secure</span>
            </div>
          </div>
        </div>

        {/* Slide Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'scale-125 ring-2 ring-[#D4AF37] bg-[#D4AF37]' : 'bg-white bg-opacity-30'
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

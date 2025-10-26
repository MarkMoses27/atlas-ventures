import React, { useState } from 'react';
import { Scale } from 'lucide-react';

import main__Image from '../assets/contact.jpg';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mt-20 min-w-0">
      <div className="bg-white px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24 flex items-center justify-center">
        <div className="w-full max-w-xl">
          <div className="mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
              <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
              Let's work together
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We're a full-service legal firm dedicated to helping you recover debts, manage auctions, and navigate complex legal matters. Let our team bring your goals to life.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Full name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                  Last name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                Phone number
              </label>
              <div className="flex gap-2">
                <select 
                  className="px-2 py-2.5 sm:px-3 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  defaultValue="KE"
                >
                  <option value="KE">KE</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700-000-000"
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                How can we help?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="A brief summary of what you need help with, expected timelines, preferred communication method, etc."
                rows={4}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              style={{ background: 'linear-gradient(to right, #eab308, #f59e0b)' }}
              className="w-full px-6 py-3 sm:py-4 text-sm sm:text-base rounded-full text-white font-bold shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT COLUMN - IMAGE */}
      <div className="relative bg-gray-100 h-64 sm:h-96 lg:h-screen overflow-hidden">
        <img
          src={main__Image}
          alt="Professional consultation"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 block"
        />


        {/* Content above the overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-16 text-white z-20">
          <blockquote className="mb-6 sm:mb-8">
            <p className="text-lg sm:text-2xl lg:text-3xl font-bold leading-relaxed mb-4 sm:mb-6">
              "There's no doubt we wouldn't have achieved{' '}
              <span className="text-yellow-400">our level of success</span> without Atlas Ventures,{' '}
              <span className="text-yellow-400">especially with our debt recovery</span>."
            </p>
          </blockquote>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
            <div>
              <div className="text-gray-400 mb-1 font-semibold">Partner</div>
              <div className="font-bold">Commercial Bank Ltd</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1 font-semibold">Year</div>
              <div className="font-bold">2024</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1 font-semibold">Services</div>
              <div className="font-bold">Debt Recovery, Legal Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

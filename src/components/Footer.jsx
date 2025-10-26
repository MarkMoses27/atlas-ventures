/*
  Footer - Atlas Ventures (final)
  - All icons use the SAME GOLD style as requested
  - Improved badge accessibility, contrast and consistency
  - Tailwind safelist & config guidance included below (comment)

  Paste this file into your React project (e.g. src/components/Footer.jsx)
*/

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

/**
 * Footer component — gold icon badges (filled) with high contrast
 * Uses lucide icons (stroke uses currentColor). We set the icon color
 * with text-white so the SVG stroke is white on the gold badge.
 */
export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden mt-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Decorative gradient orbs using the user's blue & yellow tones */}
      <div className="pointer-events-none absolute -top-16 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-16 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-500/10 rounded-full blur-3xl" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Section */}
          <div className="space-y-6">
            <div>
              <h4 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-2">
                Get in Touch
              </h4>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full" />
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-yellow-500 rounded-full group-hover:bg-yellow-600 transition-colors border border-transparent">
                  {/* lucide icons use stroke=currentColor — we set text-white so stroke = white */}
                  <Phone className="w-5 h-5 stroke-current text-white" aria-hidden />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <div className="space-y-1">
                    <a href="tel:+254722382987" className="block text-white hover:text-yellow-400 transition-colors">
                      +254 722 382 987
                    </a>
                    <a href="tel:+254733444871" className="block text-white hover:text-yellow-400 transition-colors">
                      +254 733 444 871
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-yellow-500 rounded-full group-hover:bg-yellow-600 transition-colors border border-transparent">
                  <Mail className="w-5 h-5 stroke-current text-white" aria-hidden />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
                  <div className="space-y-1">
                    <a href="mailto:gideonkanuna.atlasventures@gmail.com" className="block text-white hover:text-blue-400 transition-colors break-all">
                      gideonkanuna.atlasventures@gmail.com
                    </a>
                    <a href="mailto:atlasventuresparalegals@gmail.com" className="block text-white hover:text-blue-400 transition-colors break-all">
                      atlasventuresparalegals@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-3 group">
              <div className="mt-1 p-2 bg-yellow-500 rounded-full group-hover:bg-yellow-600 transition-colors border border-transparent">
                <MapPin className="w-5 h-5 stroke-current text-white" aria-hidden />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Address</p>
                <address className="not-italic text-white leading-relaxed">
                  Westside Towers, 3rd Floor,<br />
                  Lower Kabete Road, Spring Valley<br />
                  Nairobi City,<br />
                  P.O. BOX 11791 - 00100
                </address>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="mt-1 p-2 bg-yellow-500 rounded-full group-hover:bg-yellow-600 transition-colors border border-transparent">
                <Clock className="w-5 h-5 stroke-current text-white" aria-hidden />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Office Hours</p>
                <p className="text-white">Monday - Friday<br />8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Atlas Ventures Paralegals. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-yellow-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

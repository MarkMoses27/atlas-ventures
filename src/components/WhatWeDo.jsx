import React from 'react';
import { FileText, Gavel, Home, Shield, TrendingUp, Users, Building, FileCheck, MessageCircle } from 'lucide-react';

export default function WhatWeDo() {
  // WhatsApp contact (Kenya): +254 722 382987
  const whatsappNumber = '254722382987';
  const whatsappMessage = 'Hello, I would like a free consultation about your services.';
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Debt Collection",
      description: "Our experienced team specializes in the efficient and ethical collection of outstanding debts, ensuring the recovery of funds while preserving positive client relationships.",
      link: "#debt-collection"
    },
    {
      icon: <Gavel className="w-12 h-12" />,
      title: "Auctioneering",
      description: "Our skilled auctioneers expertly manage the sale of assets, maximizing returns for our clients through well-executed auctions.",
      link: "#auctioneering"
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Repossession",
      description: "We provide swift and professional repossession services, securing valuable assets and returning them to rightful ownership.",
      link: "#repossession"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Court Brokerage",
      description: "Professional legal representation and court-related services to support your legal proceedings and documentation needs.",
      link: "#court-brokerage"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Rent Collection",
      description: "Efficient rent collection services that help property owners maintain steady cash flow and manage tenant relationships.",
      link: "#rent-collection"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Risk Management",
      description: "We specialize in risk mitigation, offering strategies and solutions to safeguard investments and minimize potential threats.",
      link: "#risk-management"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Credit Management",
      description: "Our Credit Management service helps businesses and individuals make informed credit-related decisions, mitigate risks, and optimize financial stability.",
      link: "#credit-management"
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Conveyancing",
      description: "Professional property transfer and legal documentation services ensuring smooth and compliant real estate transactions.",
      link: "#conveyancing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 border border-yellow-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-yellow-700 text-sm font-semibold">OUR SERVICES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial and legal solutions tailored to your unique needs. We deliver excellence across every service we provide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-yellow-400/50"
            >
              {/* Icon Container */}
              <div className="mb-4 inline-flex p-4 rounded-lg bg-gradient-to-br from-blue-50 to-yellow-50 text-blue-900 group-hover:from-blue-600 group-hover:to-yellow-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <a 
                href={service.link}
                className="inline-flex items-center text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-all duration-300 group/link"
              >
                <span className="border-b-2 border-transparent group-hover/link:border-yellow-600 transition-all">
                  Learn More
                </span>
                <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Every client is unique. Let's discuss how we can tailor our services to meet your specific financial and legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start WhatsApp chat for free consultation"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation (WhatsApp)
            </a>

            <a 
              href="#how-we-work" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              How We Work
            </a>
          </div>

          <p className="mt-6 text-sm text-blue-100">Or message us directly: <a href={whatsappHref} className="font-semibold">+254 722 382 987</a></p>
        </div>
      </div>
    </section>
  );
}

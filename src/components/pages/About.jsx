import React from "react";
import AboutImage from "../../assets/about.svg"; // adjust if filename differs
import { CheckCircle } from "lucide-react";

/**
 * Polished About page for Atlas Ventures
 * - improved spacing so content sits below navbar
 * - subtle brand gradient for heading
 * - readable body type, service chips, flat VM cards with accent bar
 * - responsive image sizing
 */

const SERVICES = [
  "Debt collection",
  "Auctioneering",
  "Repossession",
  "Court brokerage",
  "Rent collection",
  "Commission agency",
  "Risk management",
  "Conveyancing",
];

function ServiceChips({ items = SERVICES }) {
  return (
    <ul className="flex flex-wrap gap-3 mt-4">
      {items.map((s) => (
        <li
          key={s}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium border border-yellow-200 bg-yellow-50 text-yellow-700"
        >
          <CheckCircle className="w-4 h-4" aria-hidden />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage({
  imageSrc = AboutImage,
  imageAlt = "About illustration",
}) {
  return (
    <main className="bg-white text-gray-900 pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="text-sm tracking-wide text-gray-500">ABOUT</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            ATLAS VENTURES
          </h1>

          {/* subtle underline */}
          <div className="mt-4 mx-auto w-28 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" />
        </header>

        {/* Top section: text + image */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Text column */}
          <article className="text-gray-800 prose prose-lg max-w-none">
            <p className="text-base md:text-lg">
              Based in Nairobi, <strong>Atlas Ventures</strong> is a dynamic and trusted leader in
              financial and legal solutions. With a legacy dating back to 2006, we have earned a
              sterling reputation as specialists in a wide spectrum of services, including debt
              collection, auctioneering, repossession, court brokerage, rent collection, commission
              agency operations, risk management, and conveyancing.
            </p>

            <p className="text-base md:text-lg mt-4">
              At Atlas Ventures, we are more than just service providers; we are your steadfast
              partners, committed to delivering ethical, efficient, and cost effective solutions for
              debt recovery and credit management. Our seasoned team, fluent in both English and
              Swahili, thrives on building enduring, mutually beneficial relationships with our
              clients, helping them recover outstanding debts while they focus on their core business
              activities. Our success is built upon the bedrock of integrity, transparency, and a
              dedicated client-centric approach, ensuring that your financial and legal needs are met
              with excellence and professionalism.
            </p>

            {/* Service chips for quick scan */}
            <ServiceChips />
          </article>

          {/* Image column */}
          <div className="flex items-start justify-center">
            <figure className="w-full rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
                draggable={false}
              />
            </figure>
          </div>
        </section>

        {/* visual divider */}
        <div className="my-12 border-t border-gray-100" />

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="flex">
            {/* accent bar */}
            <div className="w-1 rounded-l-lg bg-yellow-400" />
            <div className="flex-1 border-t border-b border-r border-gray-100 bg-white px-6 py-6 rounded-r-lg">
              <div className="inline-block mb-4 px-3 py-1 bg-yellow-400 text-white font-semibold rounded-sm text-sm">
                VISION
              </div>
              <p className="text-gray-800 leading-relaxed">
                To be the unparalleled leader in the world of financial and legal solutions, driving
                innovation and excellence that empowers our clients to thrive and find peace of mind.
                We aspire to redefine industry standards, foster prosperity, and create lasting
                partnerships built on trust, integrity, and a shared commitment to success.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex">
            <div className="w-1 rounded-l-lg bg-yellow-400" />
            <div className="flex-1 border-t border-b border-r border-gray-100 bg-white px-6 py-6 rounded-r-lg">
              <div className="inline-block mb-4 px-3 py-1 bg-yellow-400 text-white font-semibold rounded-sm text-sm">
                MISSION
              </div>
              <p className="text-gray-800 leading-relaxed">
                Our mission is to be your unwavering partner on your journey to financial and legal
                success. We provide meticulously tailored services that address your specific needs,
                underpinned by a relentless commitment to excellence and integrity. Through
                innovation and an unwavering client-centric approach, we aim to deliver tangible
                results, guide you through complex landscapes, and ensure your financial stability
                and legal security.
              </p>
            </div>
          </div>
        </section>

     
      </div>
    </main>
  );
}

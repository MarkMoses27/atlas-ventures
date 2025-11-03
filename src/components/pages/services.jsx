// Services.jsx
import React from "react";

import Debt__Image from "../../assets/debt.jpg";
import Auction__Image from "../../assets/auctioneering.jpg";
import Repossession__Image from "../../assets/repossession-home.jpg";
import Court__Image from "../../assets/court.jpg";
import Rent__Image from "../../assets/rent.jpg";
import Risk__Image from "../../assets/risk-management.jpg";
import Credit__Image from "../../assets/credit.jpg";
import Conveyancing__Image from "../../assets/convey.jpg";

/**
 * Each service now includes a `description` (short) and `details` (JSX with expanded text & features)
 * IDs match your nav anchors (e.g. #debt-collection).
 */
const services = [
  {
    id: "debt-collection",
    title: "Debt Collection",
    description:
      "We recover outstanding debts professionally while preserving client relationships and following legal frameworks.",
    details: (
      <>
        <p>
          Our debt collection service blends firm, ethical recovery practices with clear communication so you recover what you're owed without damaging long-term relationships. We tailor strategies per account — from friendly reminders to negotiated repayment plans or legal escalation when necessary.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Pre-collection engagement & friendly reminders</li>
          <li>Structured repayment plans and negotiation</li>
          <li>Escalation to legal process when required, fully documented</li>
          <li>Transparent reporting and performance dashboards</li>
        </ul>
      </>
    ),
    image: Debt__Image,
  },
  {
    id: "auctioneering",
    title: "Auctioneering",
    description:
      "Transparent and efficient auctioneering services for assets, ensuring maximum recoveries and wide exposure.",
    details: (
      <>
        <p>
          We run professional auctions (physical and online) with full cataloguing, asset valuation, promotion and bidder management to maximise sale value. Our process is open and compliant, giving sellers confidence and buyers a trusted marketplace.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Professional asset valuation & reserve guidance</li>
          <li>Marketing & bidder outreach (online + offline)</li>
          <li>Live auction handling and secure payment collection</li>
          <li>Complete settlement, documentation & transfer support</li>
        </ul>
      </>
    ),
    image: Auction__Image,
  },
  {
    id: "repossession",
    title: "Repossession",
    description:
      "Safe and compliant repossession services executed by trained teams with respect for property and law.",
    details: (
      <>
        <p>
          Our repossession team operates under strict legal and safety guidelines to recover secured assets professionally. We prioritise minimal disruption, full documentation and handover procedures that protect both your interests and legal standing.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Legally compliant repossession planning & execution</li>
          <li>Trained field teams with respect for property and occupants</li>
          <li>Chain-of-custody documentation and secure asset storage</li>
          <li>Coordination with sale or auction follow-up</li>
        </ul>
      </>
    ),
    image: Repossession__Image,
  },
  {
    id: "court-brokerage",
    title: "Court Brokerage",
    description:
      "Court brokerage and representation services that simplify legal processes and court appearances.",
    details: (
      <>
        <p>
          We assist clients with court filings, representation and case management to ensure legal processes run smoothly. Our brokers act as the bridge between your case and the court system — handling paperwork, timelines and communications with diligence.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Document preparation & e-filing where available</li>
          <li>Court attendance and liaison services</li>
          <li>Case status updates and step-by-step guidance</li>
          <li>Coordination with your legal counsel when needed</li>
        </ul>
      </>
    ),
    image: Court__Image,
  },
  {
    id: "rent-collection",
    title: "Rent Collection",
    description:
      "Reliable rent collection services with clear reporting and timely remittances to landlords.",
    details: (
      <>
        <p>
          We manage end-to-end rent collection so landlords receive timely payments and tenants enjoy clear, professional communication. Our service reduces arrears, manages reminders and enforces tenancy agreements respectfully and legally.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Automated invoicing and reminder schedules</li>
          <li>Tenant screening and lease compliance checks</li>
          <li>Arrears management and negotiated settlements</li>
          <li>Transparent monthly remittance & landlord reporting</li>
        </ul>
      </>
    ),
    image: Rent__Image,
  },
  {
    id: "risk-management",
    title: "Risk Management",
    description:
      "Comprehensive risk assessments and mitigation strategies to protect your assets and operations.",
    details: (
      <>
        <p>
          Protecting assets and minimising exposure requires a comprehensive approach. We assess the full credit, operational and external risks affecting your organisation and deliver practical mitigation plans, controls and training.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Risk assessments and vulnerability audits</li>
          <li>Design of internal controls and policy frameworks</li>
          <li>Insurance advisory and claims-preparation support</li>
          <li>Staff training and incident response planning</li>
        </ul>
      </>
    ),
    image: Risk__Image,
  },
  {
    id: "credit-management",
    title: "Credit Management",
    description:
      "Credit portfolio oversight, scoring advice and client-tailored credit policies to reduce bad debt.",
    details: (
      <>
        <p>
          Our credit management solutions help you extend credit safely by combining data-driven scoring, tailored credit policies and active monitoring. The goal is to optimise approvals while reducing late-payments and defaults.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Customer credit-scoring and onboarding checks</li>
          <li>Tailored credit-policy design and enforcement</li>
          <li>Portfolio monitoring, early-warning alerts & remediation</li>
          <li>Advice on write-offs, provisions and collections strategy</li>
        </ul>
      </>
    ),
    image: Credit__Image,
  },
  {
    id: "conveyancing",
    title: "Conveyancing",
    description:
      "Efficient property conveyancing services ensuring smooth transactions and correct documentation.",
    details: (
      <>
        <p>
          We handle the full conveyancing process — from due diligence and title searches to transfer documentation and post-completion formalities. Our aim is a fast, transparent transaction with all legal requirements met.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Title searches, verification and due diligence</li>
          <li>Preparation and lodging of transfer documents</li>
          <li>Stamp duty, rates clearance and statutory compliance assistance</li>
          <li>Coordination with banks, valuers and other stakeholders</li>
        </ul>
      </>
    ),
    image: Conveyancing__Image,
  },
];

export default function Services() {
  return (
    <main id="services" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <header className="text-center py-12">
          <h1 className="text-3xl font-extrabold text-gray-900">Our Services</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial & legal solutions tailored for you.
          </p>
        </header>

        {/* Services list: alternating layout */}
        <section className="space-y-16">
          {services.map((s, idx) => (
            <section
              id={s.id}
              key={s.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full">
                <h2 className="text-2xl font-bold text-gray-900">{s.title}</h2>
                <div className="mt-4 text-gray-600">{s.details}</div>
                <a
                  href="./contact"
                  className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Learn More
                </a>
              </div>
            </section>
          ))}
        </section>

        <div className="py-16" />
      </div>
    </main>
  );
}

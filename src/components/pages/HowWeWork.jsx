import React from "react";
import {
  Search,
  Clipboard,
  Play,
  MessageCircle,
  CheckCircle,
  Repeat,
} from "lucide-react";

/**
 * HowWeWork.jsx (refreshed design, CTA removed)
 *
 * - Timeline left column with numbered badges
 * - Sticky aside on large screens
 * - Improved spacing, typography and subtle interactions
 */

const STEPS = [
  {
    id: 1,
    title: "Initial consultation",
    icon: Search,
    body:
      "We begin with an open, insightful conversation to understand your objectives, challenges and expectations. This lets us set clear, achievable goals together.",
  },
  {
    id: 2,
    title: "Assessment & planning",
    icon: Clipboard,
    body:
      "Once we understand the situation, we perform a thorough assessment and identify the best services and strategies. We then create a detailed plan with milestones and timelines.",
  },
  {
    id: 3,
    title: "Execution",
    icon: Play,
    body:
      "With the plan agreed, our team implements the agreed actions — whether debt recovery, auctioneering or conveyancing — with professionalism, diligence and respect for due process.",
  },
  {
    id: 4,
    title: "Communication",
    icon: MessageCircle,
    body:
      "We maintain open and transparent communication throughout the engagement, providing regular updates and welcoming client feedback at every stage.",
  },
  {
    id: 5,
    title: "Resolution & results",
    icon: CheckCircle,
    body:
      "Our focus is delivering measurable outcomes — recovery of debts, completed auctions, or other agreed results — so you can get back to running your business.",
  },
  {
    id: 6,
    title: "Follow-up & support",
    icon: Repeat,
    body:
      "Our commitment continues after completion: we provide post-project support and ongoing credit-management services where required to protect long-term value.",
  },
];

function StepItem({ step }) {
  const Icon = step.icon;
  return (
    <li className="relative flex gap-6 group">
      {/* number badge + icon */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-white font-semibold shadow-sm">
          <span className="text-sm">{step.id}</span>
        </div>
      </div>

      {/* card */}
      <div className="flex-1">
        <div className="transition-transform transform group-hover:-translate-y-0.5">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <div className="w-9 h-9 rounded-md bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-600">
                <Icon className="w-5 h-5" aria-hidden />
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-gray-900">
                {step.title}
              </h4>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {step.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function HowWeWork({ compact = false }) {
  return (
    <section
      className={`bg-white text-gray-900 ${compact ? "pt-16 pb-12" : "pt-24 pb-20"
        } px-6`}
      aria-labelledby="how-we-work-title"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <div className="text-xs uppercase tracking-wide text-gray-500">
            How we work
          </div>
          <h2
            id="how-we-work-title"
            className="mt-2 text-3xl md:text-4xl font-extrabold"
          >
            Our procedure
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            At Atlas Ventures, our approach is built on integrity, transparency,
            and client-focused solutions. Each engagement is tailored to the
            client's needs — below is a concise walk-through of how we operate.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Timeline / Steps */}
          <div className="relative">
            {/* vertical rule */}
            <div className="hidden lg:block absolute left-[42px] top-3 bottom-0 w-px bg-gray-200" />

            <ol className="space-y-8 pl-0">
              {STEPS.map((s) => (
                <StepItem key={s.id} step={s} />
              ))}
            </ol>
          </div>

          {/* Sticky aside (CTA removed) */}
          <aside className="w-full">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ATLAS VENTURES — EXECUTION & SERVICE
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We tailor methods to each client and project, combining local
                  expertise and ethical practice to recover debts, manage auctions,
                  and deliver legal services efficiently and cost-effectively.
                </p>

                <ul className="text-sm text-gray-700 space-y-3 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-green-600">
                      ✓
                    </span>
                    <span>
                      <strong>Transparent reporting</strong> — regular updates & clear milestones.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-yellow-600">
                      ✓
                    </span>
                    <span>
                      <strong>Bilingual team</strong> — fluent in English & Swahili.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-blue-600">
                      ✓
                    </span>
                    <span>
                      <strong>Client-first</strong> — we protect your core business while we act.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-xs text-gray-500">
                <strong>Note:</strong> We adapt these steps to legal requirements
                and client priorities.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

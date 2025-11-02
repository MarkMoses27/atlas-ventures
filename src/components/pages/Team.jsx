import React from 'react';
import { Briefcase, TrendingUp, Calculator } from 'lucide-react';

export default function OurTeam() {
  const team = [
    {
      name: "Gideon Kanuna",
      role: "MD",
      description: "As the MD, Gideon Kanuna plays a crucial role in guiding the strategic direction of the company, overseeing its day-to-day operations, and ensuring that the organization achieves its financial and business objectives. The Managing Director is often a key decision-maker and leader, working closely with other executives and teams to drive the success and growth of the business.",
      icon: Briefcase,
      color: "blue"
    },
    {
      name: "Fredrick Kasyoki",
      role: "ADMN",
      description: "As an executive leader, Fredrick Kasyoki guides the strategic vision, oversees daily operations, and ensures the achievement of financial objectives. He serves as a key decision-maker, collaborating with teams to drive business success and growth.",
      icon: TrendingUp,
      color: "yellow"
    },
    {
      name: "Christine Nafula",
      role: "Accounts",
      description: "Christine Nafula, in her role in accounts, is instrumental in maintaining financial stability. She oversees financial transactions, ensures accurate record-keeping, and plays a key role in budgeting and financial planning. Christine's expertise contributes to the overall fiscal health of the organization, making her an essential asset in managing financial affairs.",
      icon: Calculator,
      color: "blue"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Meet Our
            </span>
            <span className="text-black"> Team</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            const isYellow = member.color === "yellow";
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                  isYellow 
                    ? 'from-yellow-500/5 via-yellow-400/5 to-transparent' 
                    : 'from-blue-600/5 via-blue-500/5 to-transparent'
                }`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl mb-6 ${
                    isYellow 
                      ? 'bg-yellow-500/10 group-hover:bg-yellow-500/20' 
                      : 'bg-blue-600/10 group-hover:bg-blue-600/20'
                  } transition-colors duration-300`}>
                    <Icon className={`w-8 h-8 ${
                      isYellow ? 'text-yellow-500' : 'text-blue-600'
                    }`} />
                  </div>

                  {/* Name & Role */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-black mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        isYellow 
                          ? 'bg-yellow-500/20 text-yellow-700' 
                          : 'bg-blue-600/20 text-blue-700'
                      }`}>
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.description}
                  </p>

                  {/* Decorative element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-5 ${
                    isYellow ? 'bg-yellow-500' : 'bg-blue-600'
                  } group-hover:scale-150 transition-transform duration-700`}></div>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}
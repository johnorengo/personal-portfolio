"use client";


export default function AboutSection() {
  const principles = [
    {
      number: "01",
      title: "Requirements Grounded in Reality",
      description: "Software must solve genuine operational bottlenecks. I begin by examining workflows, field constraints, and end-user realities before writing code.",
    },
    {
      number: "02",
      title: "Defense in Depth & Least Privilege",
      description: "Security is an architectural foundation, not an afterthought. I enforce strict RBAC, isolate county-level data partitions, and apply CIS benchmarks.",
    },
    {
      number: "03",
      title: "Resilient API & Database Design",
      description: "Clean RESTful endpoints, normalized relational databases, and query indexing designed to handle high burst loads during national reporting cycles.",
    },
    {
      number: "04",
      title: "Long-Term Operational Supportability",
      description: "Code that can be maintained by teams, documented system topologies, and automated logging for straightforward troubleshooting.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#060e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
              Engineering Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
              Bridging modern web engineering with enterprise security discipline.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Holding a Bachelor of Science in Computer Science from The Catholic University of Eastern Africa, my work centers on developing reliable, accessible, and secure digital platforms.
            </p>
            <p>
              At the Kenya Ministry of Education Headquarters, I developed full-stack web platforms used nationally for institutional verification, emergency reporting, and environmental monitoring. At Serianu Limited, I evaluated Azure cloud environments, identifying misconfigurations and hardening identity controls against modern attack vectors.
            </p>
          </div>
        </div>

        {/* 4 Architectural Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="p-6 rounded-2xl bg-[#0c182b] border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-teal-400">
                  {principle.number}
                </span>
                <h3 className="text-base font-bold text-white leading-snug">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

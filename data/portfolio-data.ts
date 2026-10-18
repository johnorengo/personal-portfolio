import { Project, ExperienceItem, Certification, SkillCategory, SocialLink } from "../types/portfolio";

export const personalInfo = {
  name: "John Orengo",
  title: "Full-Stack Software Engineer & Cloud Security Specialist",
  tagline: "Building dependable digital systems and secure cloud infrastructure for real-world operations.",
  bio: "Computer Science graduate and software engineer with hands-on experience in full-stack web platforms, technical support, Linux administration, and Microsoft Azure cloud security. Proven track record building national education platforms for the Kenya Ministry of Education and executing cloud identity governance reviews.",
  location: "Nairobi, Kenya",
  email: "orengokennedy93@gmail.com",
  phone: "+254 706 838 732",
  phoneDisplay: "+254 706 838 732",
  cvPath: "/john-orengo-cv.pdf",
  profileImage: "/profile.jpg",
  availability: "Open to full-time engineering roles, security audits & high-impact contracts",
};

export const keyImpactMetrics = [
  { value: "1.2M+", label: "Records Managed", detail: "In national education verification systems" },
  { value: "15+", label: "Schools Supported", detail: "ICT adoption, networking & hardware diagnostics" },
  { value: "99.9%", label: "Uptime Target", detail: "Engineered high-reliability web architectures" },
  { value: "3+", label: "Cloud Certifications", detail: "AWS, Kubernetes Native, and Microsoft Security" },
];

export const projectsData: Project[] = [
  {
    id: "national-education-verification",
    title: "National School Verification & Records Platform",
    clientOrOrg: "Ministry of Education Headquarters",
    category: "fullstack",
    categoryLabel: "Full-Stack Web System",
    year: "2025 — 2026",
    summary: "High-throughput administrative platform engineered for verifying school data, accreditation records, and student enrollment figures across Kenyan counties.",
    description: "Designed and developed backend services and responsive client interfaces to streamline institutional accreditation and student enrollment data verification. Reduced verification turnaround times from weeks to minutes while ensuring strict access segregation between field education officers and headquarters administrators.",
    image: "/projects/education-portal.jpg",
    fallbackGradient: "from-teal-900/60 to-slate-900/80",
    technologies: ["React", "Laravel", "MySQL", "RESTful APIs", "Tailwind CSS", "PHP"],
    metrics: [
      { label: "Institutional Records", value: "1,600+ Schools" },
      { label: "Verification Latency", value: "< 250ms API response" },
      { label: "Admin Workflow Time", value: "65% Reduction" },
    ],
    keyDeliverables: [
      "Role-based authentication architecture ensuring county-level data isolation",
      "Bulk institutional upload processing pipeline with automated validation rules",
      "Interactive data verification queues with audit logging and export capabilities",
      "Responsive field-agent interface optimized for low-bandwidth mobile connections",
    ],
    role: "Full-Stack Developer Intern / System Engineer",
    architectureHighlights: [
      "Modular Laravel REST backend with normalized MySQL schema and index optimization",
      "State-managed React frontend with optimistic UI updates and instant table filtering",
      "Automated CSV/Excel sanitization to prevent malformed data insertion",
    ],
    repoUrl: "https://github.com/johnorengo",
  },
  {
    id: "azure-cloud-security-audit",
    title: "Azure Cloud Security & RBAC Governance Suite",
    clientOrOrg: "Serianu Limited",
    category: "security",
    categoryLabel: "Cloud Security & Identity",
    year: "2025",
    summary: "Cloud governance audit framework evaluating Microsoft Azure tenants for privilege escalation risks, MFA compliance, and Defender telemetry coverage.",
    description: "Conducted security posture assessments on multi-tenant Azure enterprise environments. Built automated PowerShell and Python audit scripts to analyze Role-Based Access Control (RBAC), identify stale privileged credentials, audit Conditional Access policies, and generate compliance reports aligned with CIS benchmarks.",
    image: "/projects/cloud-security.jpg",
    fallbackGradient: "from-blue-900/60 to-slate-900/80",
    technologies: ["Microsoft Azure", "PowerShell", "Python", "Azure AD / Entra ID", "Defender for Cloud", "MFA/RBAC"],
    metrics: [
      { label: "Audit Benchmark", value: "CIS Azure Foundations" },
      { label: "Privileged Accounts Scanned", value: "100% Coverage" },
      { label: "Remediation Guidance", value: "Actionable SLA Playbooks" },
    ],
    keyDeliverables: [
      "Automated extraction and reporting of over-privileged Global Admin assignments",
      "Multi-Factor Authentication (MFA) enforcement gap analysis across hybrid identities",
      "Security incident triage playbook integrating Microsoft Defender for Cloud alerts",
      "Executive and technical compliance dashboards with prioritized remediation items",
    ],
    role: "Cloud Security Specialist Trainee",
    architectureHighlights: [
      "Identity posture analysis evaluating Entra ID PIM (Privileged Identity Management)",
      "Continuous compliance verification scripts running headless across cloud workloads",
      "Principle of Least Privilege (PoLP) mapping for cross-department resource groups",
    ],
    repoUrl: "https://github.com/johnorengo",
  },
  {
    id: "elimu-tree-planting-tracker",
    title: "National Tree Planting & Environmental Initiative Tracker",
    clientOrOrg: "Ministry of Education & Forestry Partners",
    category: "fullstack",
    categoryLabel: "Full-Stack & Geospatial",
    year: "2025",
    summary: "Public sector reporting system monitoring nationwide school-based tree planting campaigns, nursery inventory, and regional survival rates.",
    description: "Engineered a collaborative tracking portal enabling thousands of educational institutions to log seedling plantings, monitor growth metrics, and submit photographic evidence. Provided national program coordinators with county-level heatmaps and seedling survival rate analytics.",
    image: "/projects/tree-tracker.jpg",
    fallbackGradient: "from-emerald-900/60 to-slate-900/80",
    technologies: ["React", "Python", "REST APIs", "PostgreSQL", "Geospatial Mapping", "Tailwind CSS"],
    metrics: [
      { label: "Seedlings Logged", value: "1.45M Target" },
      { label: "Participating Centers", value: "Hundreds Nationwide" },
      { label: "Field Reporting", value: "Offline-First Sync" },
    ],
    keyDeliverables: [
      "Interactive regional GIS map interface with interactive cluster pins and progress filters",
      "Evidence verification queue for forestry officers to validate photo submissions",
      "Automated survival rate analytics with monthly cohort tracking",
      "Data export in multiple formats for parliamentary and donor reporting",
    ],
    role: "Lead Full-Stack Developer",
    architectureHighlights: [
      "Relational data schema with spatio-temporal indexes for rapid regional queries",
      "Client-side image compression before upload to accommodate rural cellular connectivity",
      "Clean REST endpoint architecture designed for high burst traffic during national planting weeks",
    ],
    repoUrl: "https://github.com/johnorengo",
  },
  {
    id: "enterprise-ict-infrastructure",
    title: "Educational ICT Infrastructure & Network Operations",
    clientOrOrg: "Ministry of Education Regional Centers",
    category: "infrastructure",
    categoryLabel: "Systems & Infrastructure",
    year: "2025",
    summary: "Secure LAN/WAN network design, hardware diagnostics, CCTV integration, and Linux systems administration across 15+ educational facilities.",
    description: "Executed comprehensive ICT modernization across educational institutions. Configured enterprise network routers, managed switches, Wi-Fi access points, structured cabling, and surveillance systems while training institutional personnel on operational maintenance and cybersecurity best practices.",
    image: "/projects/ict-infrastructure.jpg",
    fallbackGradient: "from-cyan-900/60 to-slate-900/80",
    technologies: ["Linux Sysadmin", "Cisco Networking", "TCP/IP & Subnetting", "CCTV Integration", "Hardware Troubleshooting"],
    metrics: [
      { label: "Institutions Upgraded", value: "15 Facilities" },
      { label: "Workstations Deployed", value: "350+ Units" },
      { label: "Incident Resolution Rate", value: "98% on First Visit" },
    ],
    keyDeliverables: [
      "Deployment and configuration of secure local area networks with VLAN segmentation",
      "Server and workstation troubleshooting, OS imaging, and automated backup routines",
      "CCTV surveillance network installation with encrypted remote monitoring capabilities",
      "Hands-on digital skills and hardware maintenance workshops for staff",
    ],
    role: "IT Specialist & Systems Engineer",
    architectureHighlights: [
      "Layer 2/3 network segmentation isolating administrative terminals from lab workstations",
      "Standardized Linux distribution configurations with hardened firewall rules",
      "Documented preventive maintenance schedules and incident escalation protocols",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2025 — 2026",
    role: "Full-Stack Software Developer Intern",
    organization: "Ministry of Education Headquarters",
    location: "Nairobi, Kenya",
    type: "Public Sector Engineering",
    summary: "Architected and delivered core modules of national education data platforms supporting school accreditation, tree planting initiatives, and emergency response.",
    achievements: [
      "Built resilient RESTful micro-services and API endpoints with Laravel and Python connecting to central MySQL databases.",
      "Developed high-performance React frontends with intuitive table pagination, live filtering, and zero-latency form validation.",
      "Collaborated with senior government ICT directors to translate complex regulatory requirements into structured software architecture.",
      "Authored technical user manuals and delivered onboarding sessions for county education directors.",
    ],
    technologies: ["React", "Laravel", "MySQL", "Python", "REST APIs", "Tailwind CSS", "Linux"],
  },
  {
    period: "2025",
    role: "Cloud Security Specialist Trainee",
    organization: "Serianu Limited",
    location: "Nairobi, Kenya",
    type: "Cybersecurity & Cloud Audit",
    summary: "Conducted security posture assessments and risk evaluations across Microsoft Azure cloud and hybrid infrastructure.",
    achievements: [
      "Audited cloud environments against CIS Microsoft Azure Foundations Benchmark and internal compliance frameworks.",
      "Evaluated identity access controls, Privileged Identity Management (PIM), and Multi-Factor Authentication (MFA) enforcement policies.",
      "Monitored and investigated alert telemetry within Microsoft Defender for Cloud and Microsoft Sentinel.",
      "Drafted comprehensive vulnerability remediation reports detailing specific mitigation steps for enterprise clients.",
    ],
    technologies: ["Microsoft Azure", "Entra ID", "Defender for Cloud", "PowerShell", "RBAC", "Sentinel", "Compliance"],
  },
  {
    period: "2025",
    role: "IT Intern & Technical Support Specialist",
    organization: "Ministry of Education",
    location: "Nairobi, Kenya",
    type: "ICT Infrastructure & Field Engineering",
    summary: "Provided hands-on technical support, network engineering, and hardware troubleshooting across 15+ educational institutions.",
    achievements: [
      "Troubleshot hardware, operating system, and network connectivity faults across 350+ computers, printers, and peripheral devices.",
      "Configured secure local Wi-Fi and Ethernet networks with optimized bandwidth management for educational software delivery.",
      "Supported digital literacy programs by training teachers and administrators on digital tools and safe computing practices.",
      "Maintained accurate asset registries and scheduled preventive maintenance rounds across all assigned sites.",
    ],
    technologies: ["Linux", "Windows Server", "LAN/WAN", "TCP/IP", "Cisco Routers", "Hardware Diagnostics", "Support"],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "The Catholic University of Eastern Africa (CUEA)",
    location: "Nairobi, Kenya",
    period: "Graduated with Honors",
    highlights: [
      "Core coursework: Software Engineering, Data Structures & Algorithms, Computer Networks, Database Systems, Operating Systems, Information Security",
      "Capstone Project: Full-stack institutional records and student services management portal",
      "Active participant in computing hackathons and student developer circles",
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Certified",
    badgeType: "Cloud Architecture",
    credentialId: "AWS-CCP",
    verifyUrl: "https://www.credly.com/users/john-orengo",
  },
  {
    title: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    date: "Certified",
    badgeType: "Cloud Native",
    credentialId: "CNCF-KCNA",
    verifyUrl: "https://www.credly.com/users/john-orengo",
  },
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    date: "Certified",
    badgeType: "Cybersecurity",
    credentialId: "SC-900",
    verifyUrl: "https://learn.microsoft.com",
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Full-Stack Development",
    description: "Designing end-to-end architectures from responsive browser interfaces to high-throughput backend services.",
    skills: [
      { name: "React / Next.js", level: "Advanced" },
      { name: "Laravel / PHP", level: "Advanced" },
      { name: "TypeScript / JavaScript", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    title: "Databases & Data Systems",
    description: "Architecting normalized relational schemas, query performance optimization, and transactional integrity.",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Database Schema Design", level: "Advanced" },
      { name: "Query Optimization & Indexing", level: "Proficient" },
      { name: "Data Migration & ETL", level: "Proficient" },
    ],
  },
  {
    title: "Cloud & Cybersecurity",
    description: "Governing cloud resources, hardening identities, and auditing enterprise compliance postures.",
    skills: [
      { name: "Microsoft Azure & Entra ID", level: "Advanced" },
      { name: "Amazon Web Services (AWS)", level: "Proficient" },
      { name: "RBAC & Privileged Identity (PIM)", level: "Advanced" },
      { name: "Microsoft Defender for Cloud", level: "Proficient" },
      { name: "Multi-Factor Authentication (MFA)", level: "Advanced" },
      { name: "CIS Compliance Audits", level: "Proficient" },
    ],
  },
  {
    title: "Systems & Infrastructure",
    description: "Configuring robust server environments, enterprise networks, and automated diagnostic workflows.",
    skills: [
      { name: "Linux Administration (Ubuntu, Debian)", level: "Advanced" },
      { name: "Bash & PowerShell Scripting", level: "Proficient" },
      { name: "Cisco Networking & Subnetting", level: "Proficient" },
      { name: "Hardware Diagnostics & Repair", level: "Advanced" },
      { name: "CCTV & Security Integration", level: "Proficient" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    label: "Explore repositories & open code",
    url: "https://github.com/johnorengo",
    username: "johnorengo",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    label: "Professional profile & recommendations",
    url: "https://www.linkedin.com/in/john-orengo",
    username: "in/john-orengo",
    icon: "Linkedin",
  },
  {
    platform: "Credly",
    label: "Verified certifications & badges",
    url: "https://www.credly.com/users/john-orengo",
    username: "john-orengo",
    icon: "Award",
  },
  {
    platform: "Email",
    label: "Direct email communication",
    url: "mailto:orengokennedy93@gmail.com",
    username: "orengokennedy93@gmail.com",
    icon: "Mail",
  },
  {
    platform: "Phone",
    label: "Direct call & WhatsApp",
    url: "tel:+254706838732",
    username: "+254 706 838 732",
    icon: "Phone",
  },
];

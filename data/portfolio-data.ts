import { Project, ServiceItem, ExperienceItem, Certification, SkillCategory, SocialLink } from "../types/portfolio";

/**
 * ============================================================================
 * EDITABLE PERSONAL PROFILE CONFIGURATION
 * Edit these fields to update name, portrait, biography, contact, and availability.
 * ============================================================================
 */
export const personalInfo = {
  name: "John Orengo",
  title: "Full-Stack Software Developer & Cybersecurity Enthusiast",
  headline: "Building Intelligent Solutions. Securing Digital Futures.",
  tagline: "A technology professional passionate about engineering secure, intelligent, scalable, and beautifully designed digital solutions.",
  supportingText: "I'm a software developer and cybersecurity enthusiast transforming complex ideas into secure, intelligent, and impactful digital experiences.",
  bio: "Computer Science graduate and technology professional with hands-on experience across software engineering, systems administration, and cloud security governance. Experienced in architecting database-driven web platforms, RESTful APIs, and responsive client applications, alongside executing Azure security posture assessments and practical ICT infrastructure deployments.",
  location: "Nairobi, Kenya",
  timezone: "EAT (UTC+3)",
  email: "orengokennedy93@gmail.com",
  phone: "+254706830730",
  whatsappUrl: "https://wa.me/254706830730",
  phoneDisplay: "+254 706 830 730",
  profileImage: "/profile.jpg",
  cvPath: "/john-orengo-cv.pdf",

  // Configurable availability indicator (toggle availability state without hardcoding claims)
  availability: {
    isAvailable: true,
    statusText: "Open to full-time engineering roles, security audits & high-impact contracts",
    shortLabel: "Available for Q4 Engagements",
  },
};

/**
 * ============================================================================
 * CORE DISCIPLINES & AREAS OF SPECIALIZATION
 * ============================================================================
 */
export const specializations = [
  "Full-Stack Software Development",
  "Cybersecurity & Cloud Security",
  "Artificial Intelligence & Machine Learning",
  "Web & Mobile Application Development",
  "Enterprise & Business Management Systems",
  "Technology Consulting & Digital Transformation",
];

/**
 * ============================================================================
 * 6 SERVICES & COLLABORATION OFFERINGS
 * ============================================================================
 */
export const servicesData: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDescription: "Architecting reliable, high-performance web applications and backend microservices tailored to specific operational requirements.",
    deliverables: [
      "Robust RESTful API design & third-party integrations",
      "Scalable database architecture (MySQL, PostgreSQL)",
      "Maintainable, clean frontend code with React & TypeScript",
    ],
    technologies: ["React", "Laravel", "PHP", "Python", "TypeScript", "REST APIs"],
  },
  {
    id: "web-mobile",
    title: "Web & Mobile Application Development",
    shortDescription: "Building responsive cross-platform mobile apps and modern web platforms with clean user experiences and offline capabilities.",
    deliverables: [
      "Cross-platform client applications with responsive design",
      "Progressive Web App (PWA) offline synchronization",
      "Intuitive UI/UX design with smooth micro-interactions",
    ],
    technologies: ["React", "Next.js", "Flutter", "Tailwind CSS", "Mobile UX"],
  },
  {
    id: "process-automation",
    title: "Business Process Automation",
    shortDescription: "Digitizing manual workflows, approval pipelines, and data reporting to eliminate paper bottlenecks and reduce operational costs.",
    deliverables: [
      "Automated document validation and digital audit trails",
      "Real-time operational alerts and status tracking",
      "Scheduled data pipelines and automated reporting",
    ],
    technologies: ["Python", "Bash", "RESTful Pipelines", "Webhooks", "ETL"],
  },
  {
    id: "erp-pos-systems",
    title: "ERP & POS System Development",
    shortDescription: "Custom business management software, inventory tracking, POS terminals, receipt generation, and transaction accounting.",
    deliverables: [
      "Multi-location inventory and supply chain tracking",
      "Point-of-sale receipt printing and checkout flows",
      "Financial ledger reconciliations and analytics",
    ],
    technologies: ["Laravel", "React", "PostgreSQL", "Thermal Printing", "REST APIs"],
  },
  {
    id: "secure-architecture",
    title: "Secure Application Architecture",
    shortDescription: "Embedding security from day zero through Role-Based Access Control (RBAC), multi-factor authentication, and cloud posture audits.",
    deliverables: [
      "Azure & AWS cloud identity governance assessments",
      "Principle of Least Privilege (PoLP) and MFA enforcement",
      "CIS benchmark compliance reviews and vulnerability mitigation",
    ],
    technologies: ["Microsoft Azure", "Entra ID", "RBAC", "Defender for Cloud", "AWS"],
  },
  {
    id: "tech-consulting",
    title: "Technology Consulting & Transformation",
    shortDescription: "Advising leadership and engineering teams on infrastructure modernization, system diagnostics, and digital adoption strategies.",
    deliverables: [
      "Systems architecture evaluation and technology selection",
      "Network infrastructure review and hardware diagnostic support",
      "Engineering documentation, onboarding, and staff mentoring",
    ],
    technologies: ["Linux Sysadmin", "Cisco Networks", "Cloud Strategy", "DevOps"],
  },
];

/**
 * ============================================================================
 * 5 SKILLS & EXPERTISE CATEGORIES (Master Prompt Section 7)
 * ============================================================================
 */
export const skillsCategories: SkillCategory[] = [
  {
    title: "Software Engineering",
    description: "Frontend architecture, backend development, APIs, databases, testing, and scalable applications.",
    skills: [
      { name: "React / Next.js", tag: "Frontend" },
      { name: "Laravel / PHP", tag: "Backend" },
      { name: "TypeScript / JavaScript", tag: "Language" },
      { name: "Python", tag: "Backend & Data" },
      { name: "RESTful API Architecture", tag: "Integration" },
      { name: "MySQL & PostgreSQL", tag: "Databases" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "Git & Version Control", tag: "DevOps" },
    ],
  },
  {
    title: "Cybersecurity & Cloud",
    description: "Secure application development, identity and access management, vulnerability assessment, threat detection, and security fundamentals.",
    skills: [
      { name: "Microsoft Azure & Entra ID", tag: "Cloud IAM" },
      { name: "Amazon Web Services (AWS)", tag: "Cloud Infrastructure" },
      { name: "RBAC & Privileged Identity (PIM)", tag: "Access Control" },
      { name: "Multi-Factor Authentication (MFA)", tag: "Identity Protection" },
      { name: "Microsoft Defender for Cloud", tag: "Threat Detection" },
      { name: "CIS Benchmark Audits", tag: "Compliance" },
      { name: "Linux Security & Firewalls", tag: "Hardening" },
      { name: "Secure Code Practices", tag: "Application Security" },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Machine learning concepts, intelligent automation, data-driven solutions, and AI-assisted development.",
    skills: [
      { name: "Data Processing & ETL", tag: "Pipelines" },
      { name: "Intelligent Workflow Automation", tag: "Automation" },
      { name: "Python Data Science Stack", tag: "Tooling" },
      { name: "AI-Assisted Dev Workflows", tag: "Productivity" },
      { name: "Predictive Analytics Modeling", tag: "Concepts" },
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications, responsive user experience, touch interactions, and API integration.",
    skills: [
      { name: "Cross-Platform Frameworks", tag: "Mobile" },
      { name: "Progressive Web Apps (PWA)", tag: "Web Mobile" },
      { name: "Responsive Touch UI/UX", tag: "Design" },
      { name: "Offline-First Syncing", tag: "Data Architecture" },
      { name: "Mobile API Integration", tag: "REST" },
    ],
  },
  {
    title: "Business Systems",
    description: "ERP, POS systems, workflow automation, business process digitization, and system integration.",
    skills: [
      { name: "Enterprise Resource Planning (ERP)", tag: "Core Business" },
      { name: "Point-of-Sale (POS) Integration", tag: "Retail Systems" },
      { name: "Inventory & Supply Tracking", tag: "Logistics" },
      { name: "Receipt & Invoice Generation", tag: "Billing" },
      { name: "Workforce & Payroll Tracking", tag: "Operations" },
      { name: "Relational Reporting Engines", tag: "Analytics" },
    ],
  },
];

/**
 * ============================================================================
 * 6 FEATURED PROJECTS (Master Prompt Section 8)
 * ============================================================================
 */
export const projectsData: Project[] = [
  {
    id: "erp-business-management",
    title: "Enterprise Resource Planning & Business Management Suite",
    category: "business",
    categoryLabel: "ERP & Business Systems",
    year: "2025 — 2026",
    summary: "Integrated management system engineered for multi-branch organizations, featuring real-time inventory tracking, general ledger, and sales analytics.",
    description: "Designed a modular enterprise platform that unifies inventory tracking, invoicing, vendor balances, and financial accounting into a cohesive, role-segmented interface.",
    image: "/projects/erp-business.jpg",
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "RESTful APIs", "ChartJS"],
    metrics: [
      { label: "Inventory Velocity", value: "Real-Time Sync" },
      { label: "Ledger Accuracy", value: "100% Balanced" },
      { label: "Report Generation", value: "< 350ms" },
    ],
    keyDeliverables: [
      "Dynamic stock alerts with multi-warehouse reorder thresholds",
      "Audited double-entry ledger calculation engine",
      "Departmental expense approval workflows with cryptographic audit logs",
    ],
    role: "System Architect & Full-Stack Developer",
    architectureHighlights: [
      "Normalized SQL schema with indexed foreign keys for sub-second balance aggregations",
      "Optimistic UI updates in React with automated reconciliation on network drops",
    ],
    challenge: "Businesses struggle with disparate spreadsheet tracking that causes inventory discrepancies and delayed month-end financial reporting.",
    solution: "Engineered an all-in-one system with real-time stock sync, role-segregated transaction posting, and instantaneous PDF export.",
    repoUrl: "https://github.com/johnorengo",
    isVerifiedWork: true,
  },
  {
    id: "pos-receipt-terminal",
    title: "Point-of-Sale & Receipt Printing Solution",
    category: "business",
    categoryLabel: "POS & Retail Systems",
    year: "2025",
    summary: "High-speed retail sales terminal with ESC/POS thermal receipt printing support, split payment processing, and shift reconciliation.",
    description: "Built a responsive point-of-sale interface tailored for retail and hospitality counters, facilitating barcode scanning, instantaneous discount calculation, and thermal receipt generation.",
    image: "/projects/pos-mobile.jpg",
    technologies: ["React", "TypeScript", "ESC/POS", "WebSockets", "Node.js", "Tailwind CSS"],
    metrics: [
      { label: "Checkout Time", value: "< 15 seconds" },
      { label: "Hardware Support", value: "USB / Network Thermal" },
      { label: "Shift Accuracy", value: "Zero Drift" },
    ],
    keyDeliverables: [
      "Fast-lookup product catalog with keyboard-first shortcuts and barcode scanner support",
      "Split payment checkout supporting cash, credit card, and mobile money (M-Pesa)",
      "Daily cashier float reconciliation and Z-report printing",
    ],
    role: "Lead Interface & Integration Engineer",
    architectureHighlights: [
      "Local offline transaction queue syncing automatically when server connection restores",
      "Direct raw-byte ESC/POS thermal printer driver via local socket proxy",
    ],
    challenge: "High checkout queue latency caused by slow page reloads and clunky printer communication.",
    solution: "Implemented an instant client-side state machine with raw thermal printing commands and offline-first durability.",
    repoUrl: "https://github.com/johnorengo",
    isVerifiedWork: true,
  },
  {
    id: "mobile-workforce-payroll",
    title: "Mobile Workforce & Shift Payroll Application",
    category: "mobile",
    categoryLabel: "Mobile & Workforce",
    year: "2025",
    summary: "Cross-platform mobile solution for clock-in geofencing, shift scheduling, task verification, and automated payroll computations.",
    description: "Engineered an operational mobile interface that allows distributed workers to check in to assigned project locations, log billable hours, and view verified wage earnings.",
    image: "/projects/pos-mobile.jpg",
    technologies: ["Flutter / React Native", "Node.js", "PostgreSQL", "Geolocation APIs"],
    metrics: [
      { label: "Field Check-in", value: "Geofenced" },
      { label: "Payroll Processing", value: "Automated SLA" },
      { label: "Worker Adoption", value: "High Retention" },
    ],
    keyDeliverables: [
      "GPS-verified employee shift check-in and checkout validation",
      "Digital timesheet sign-off and managerial approval workflows",
      "Automated wage slips calculation including statutory tax deductions",
    ],
    role: "Full-Stack & Mobile Developer",
    architectureHighlights: [
      "Lightweight mobile footprint with background GPS geofence caching",
      "JWT-authenticated secure API bridge with cryptographic timestamping",
    ],
    challenge: "Remote site managers relied on paper sign-in sheets susceptible to proxy clock-ins and manual computation errors.",
    solution: "Created a geofenced mobile verification application with automated daily calculation pipelines.",
    repoUrl: "https://github.com/johnorengo",
    isVerifiedWork: true,
  },
  {
    id: "national-education-verification",
    title: "National Student Verification & Education Management Platform",
    category: "education",
    categoryLabel: "Public Sector Full-Stack",
    year: "2025 — 2026",
    summary: "High-throughput administrative platform engineered for verifying school data, accreditation records, and student enrollment figures across Kenyan counties.",
    description: "Designed and developed backend services and responsive client interfaces to streamline institutional accreditation and student enrollment data verification. Reduced verification turnaround times while ensuring strict access segregation between field education officers and headquarters administrators.",
    image: "/projects/education-portal.jpg",
    technologies: ["React", "Laravel", "MySQL", "RESTful APIs", "Tailwind CSS", "PHP"],
    metrics: [
      { label: "Schools Verified", value: "1,600+ Institutions" },
      { label: "Query Response", value: "< 250ms API SLA" },
      { label: "Workflow Latency", value: "65% Faster" },
    ],
    keyDeliverables: [
      "Role-based authentication ensuring county-level data isolation across 47 regions",
      "Bulk institutional upload processing pipeline with automated CSV validation rules",
      "Interactive data verification queues with audit logging and export capabilities",
    ],
    role: "Full-Stack Developer Intern / System Engineer",
    architectureHighlights: [
      "Modular Laravel REST backend with normalized MySQL schema and index optimization",
      "State-managed React frontend with optimistic UI updates and instant table filtering",
    ],
    challenge: "Manual physical paper verification across thousands of institutions created massive backlogs and accreditation fraud risks.",
    solution: "Engineered a centralized verification portal with role-based segregation, automated format sanitization, and cryptographic audit logs.",
    repoUrl: "https://github.com/johnorengo",
    isVerifiedWork: true,
  },
  {
    id: "azure-cloud-security-audit",
    title: "Cybersecurity & Cloud Identity Governance Suite",
    category: "security",
    categoryLabel: "Cloud Security & Governance",
    year: "2025",
    summary: "Cloud governance audit framework evaluating Microsoft Azure tenants for privilege escalation risks, MFA compliance, and Defender telemetry coverage.",
    description: "Conducted security posture assessments on multi-tenant Azure enterprise environments. Built automated PowerShell and Python audit scripts to analyze Role-Based Access Control (RBAC), identify stale privileged credentials, audit Conditional Access policies, and generate compliance reports aligned with CIS benchmarks.",
    image: "/projects/cloud-security.jpg",
    technologies: ["Microsoft Azure", "PowerShell", "Python", "Azure AD / Entra ID", "Defender for Cloud", "MFA/RBAC"],
    metrics: [
      { label: "Benchmark", value: "CIS Azure Foundations" },
      { label: "Privilege Audited", value: "100% Admin Coverage" },
      { label: "Compliance Playbooks", value: "Actionable SLA Guides" },
    ],
    keyDeliverables: [
      "Automated extraction and reporting of over-privileged Global Admin assignments",
      "Multi-Factor Authentication (MFA) enforcement gap analysis across hybrid identities",
      "Security incident triage playbook integrating Microsoft Defender for Cloud alerts",
    ],
    role: "Cloud Security Specialist Trainee",
    architectureHighlights: [
      "Identity posture analysis evaluating Entra ID PIM (Privileged Identity Management)",
      "Headless compliance verification scripts running automated security assertion routines",
    ],
    challenge: "Enterprise cloud tenants accumulated excessive permanent Global Admin accounts and inconsistent MFA policies.",
    solution: "Developed automated PowerShell audit tools that flag permission bloat and generate step-by-step remediation roadmaps.",
    repoUrl: "https://github.com/johnorengo",
    isVerifiedWork: true,
  },
  {
    id: "corporate-environmental-tracker",
    title: "National Environmental Initiative & Tree Planting Tracker",
    category: "fullstack",
    categoryLabel: "Public Sector & Geospatial",
    year: "2025",
    summary: "National reporting system monitoring nationwide school-based tree planting campaigns, nursery inventory, and regional survival rates.",
    description: "Engineered a collaborative tracking portal enabling educational institutions across Kenya to log seedling plantings, monitor growth metrics, and submit photographic evidence. Provided coordinators with county-level heatmaps and seedling survival rate analytics.",
    image: "/projects/tree-tracker.jpg",
    technologies: ["React", "Python", "PostgreSQL", "GIS Mapping", "REST APIs", "Tailwind CSS"],
    metrics: [
      { label: "Seedlings Target", value: "1.45M Target" },
      { label: "Nationwide Sites", value: "47 Counties" },
      { label: "Field Submissions", value: "Offline-First Sync" },
    ],
    keyDeliverables: [
      "Interactive regional GIS map interface with cluster pins and county filters",
      "Evidence verification queue for regional officers to validate photographic submissions",
      "Automated survival rate analytics with monthly cohort tracking",
    ],
    role: "Lead Full-Stack Developer",
    architectureHighlights: [
      "Relational data schema with spatio-temporal indexes for rapid regional queries",
      "Client-side image compression before upload to accommodate rural cellular networks",
    ],
    challenge: "Monitoring ecological initiatives across rural Kenya with intermittent internet and unstandardized reporting.",
    solution: "Constructed an offline-first responsive web portal with client-side image compression and geospatial clustering.",
    repoUrl: "https://github.com/johnorengo",
    isVerifiedWork: true,
  },
];

/**
 * ============================================================================
 * EXPERIENCE & EDUCATION TIMELINE (Verified Data)
 * ============================================================================
 */
export const experienceData: ExperienceItem[] = [
  {
    period: "2025 — 2026",
    role: "Full-Stack Software Developer Intern",
    organization: "Ministry of Education Headquarters",
    location: "Nairobi, Kenya",
    type: "Public Sector Software Engineering",
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
    summary: "Conducted security posture assessments and risk evaluations across Microsoft Azure cloud and hybrid enterprise infrastructure.",
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

/**
 * ============================================================================
 * SOCIAL PROFILES & CHANNELS
 * ============================================================================
 */
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    label: "Explore repositories & open code",
    url: "https://github.com/johnorengo",
    username: "johnorengo",
  },
  {
    platform: "LinkedIn",
    label: "Professional profile & recommendations",
    url: "https://www.linkedin.com/in/johnorengo",
    username: "in/johnorengo",
  },
  {
    platform: "Credly",
    label: "Verified certifications & badges",
    url: "https://www.credly.com/users/john-orengo",
    username: "john-orengo",
  },
  {
    platform: "Email",
    label: "Direct email communication",
    url: "mailto:orengokennedy93@gmail.com",
    username: "orengokennedy93@gmail.com",
  },
  {
    platform: "Phone",
    label: "Direct call",
    url: "tel:+254706830730",
    username: "+254 706 830 730",
  },
];

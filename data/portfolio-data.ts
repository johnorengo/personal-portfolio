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
 * FEATURED PROJECTS — Fox Tech Solutions case studies and agency website
 * ============================================================================
 */
export const projectsData: Project[] = [
  {
    "id": "sebby-logistics",
    "title": "Sebby Logistics Ltd",
    "category": "business",
    "categoryLabel": "Flower Logistics",
    "summary": "Connecting Kenyan flower growers with international buyers.",
    "description": "A responsive website presenting flower sourcing, quality checks and cold-chain airfreight from JKIA, with detailed freight enquiries for international buyers.",
    "image": "/projects/sebby-logistics.webp",
    "technologies": ["Quotation enquiries", "WhatsApp", "SEO"],
    "metrics": [],
    "keyDeliverables": [],
    "architectureHighlights": [],
    "liveUrl": "https://sebbylogistics.com/"
  },
  {
    "id": "citymart-electricals",
    "title": "Citymart Electricals",
    "category": "business",
    "categoryLabel": "Electrical Commerce",
    "summary": "An online showroom for a Kisumu electrical supplier.",
    "description": "Customers browse lighting and electrical products, explore installations and request quotations through product pages, enquiry forms and WhatsApp.",
    "image": "/projects/citymart-electricals.webp",
    "technologies": ["Product catalog", "Quotations", "Installation gallery"],
    "metrics": [],
    "keyDeliverables": [],
    "architectureHighlights": [],
    "liveUrl": "https://citymartelectricals.com/"
  },
  {
    "id": "school-data-verification",
    "title": "School Data Verification System",
    "category": "education",
    "categoryLabel": "Learner Verification",
    "summary": "Checking school enrolment records against actual learners.",
    "description": "A Ministry of Education platform addressing inaccurate learner records, with UIC-based school access and separate sign-in pathways for sub-county and county directors.",
    "image": "/projects/school-data-verification.webp",
    "technologies": ["Record verification", "Role-based access"],
    "metrics": [],
    "keyDeliverables": [],
    "architectureHighlights": [],
    "liveUrl": "https://dataverifications.education.go.ke/"
  },
  {
    "id": "education-emergency-management",
    "title": "Education Emergency Management System",
    "category": "education",
    "categoryLabel": "School Safety",
    "summary": "Coordinating school preparedness and emergency response across Kenya.",
    "description": "The platform connects schools and education administrators across 47 counties through hazard monitoring, risk profiles, incident review, preparedness assessments and safeguarding workflows.",
    "image": "/projects/education-emergency.webp",
    "technologies": ["Risk monitoring", "Incident reporting"],
    "metrics": [],
    "keyDeliverables": [],
    "architectureHighlights": [],
    "liveUrl": "https://kplp.education.go.ke/"
  },
  {
    "id": "fox-tech-solutions",
    "title": "Fox Tech Solutions",
    "category": "fullstack",
    "categoryLabel": "Agency Website",
    "summary": "The Fox Tech Solutions business website.",
    "description": "A Nairobi technology agency website presenting website development, custom software, design, marketing and IT support services, with case studies and engagement enquiries.",
    "image": "/projects/fox-tech-logo.png",
    "imageFit": "contain",
    "technologies": [],
    "metrics": [],
    "keyDeliverables": [],
    "architectureHighlights": [],
    "liveUrl": "https://foxtechsolution.com/"
  }
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

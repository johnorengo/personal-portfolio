import { Project, ExperienceItem, Certification, SkillCategory, SocialLink } from "../types/portfolio";

/**
 * ============================================================================
 * EDITABLE PERSONAL PROFILE CONFIGURATION
 * Edit these fields to update name, portrait, biography, contact, and availability.
 * ============================================================================
 */
export const personalInfo = {
  name: "John Orengo",
  title: "Full Stack Software Engineer",
  specialism: "Cybersecurity · Cloud & Network Security",
  headline: "Building Intelligent Solutions. Securing Digital Futures.",
  tagline: "Building secure, scalable, and meaningful technology — one commit at a time.",
  supportingText: "I'm a full stack software engineer and cybersecurity enthusiast transforming complex ideas into secure, intelligent, and impactful digital experiences.",
  bio: "I'm John Orengo, a full stack software engineer based in Nairobi with 4+ years across software development, cybersecurity, and IT infrastructure. I turn complex requirements into intuitive applications, connected business systems, and secure digital experiences.",
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
    statusText: "Open to full time engineering roles, security audits & high impact contracts",
    shortLabel: "Available for Q4 Engagements",
  },
};

/**
 * ============================================================================
 * CORE DISCIPLINES & AREAS OF SPECIALIZATION
 * ============================================================================
 */
export const specializations = [
  "Full Stack Software Development",
  "Cybersecurity & Cloud Security",
  "Artificial Intelligence & Machine Learning",
  "Web & Mobile Application Development",
  "Enterprise & Business Management Systems",
  "Technology Consulting & Digital Transformation",
];

/**
 * ============================================================================
 * 6 SKILLS & EXPERTISE DOMAINS
 * ============================================================================
 */
export const skillsCategories: SkillCategory[] = [
  {
    title: "Software Engineering",
    backgroundImage: "/expertise/software-engineering-hd.webp",
    description: "Frontend architecture, backend development, APIs, databases, testing, and scalable applications.",
    skills: [
      { name: "React / Next.js / Vite", tag: "TypeScript & Tailwind CSS" },
      { name: "Laravel / PHP / Python", tag: "Backend Development" },
      { name: "MySQL & PostgreSQL", tag: "Databases" },
      { name: "RESTful APIs", tag: "JavaScript & Integration" },
    ],
  },
  {
    title: "Cybersecurity & Network Security",
    backgroundImage: "/expertise/cybersecurity-network-hd.webp",
    description: "Secure application development, identity and access management, vulnerability assessment, threat detection, and security fundamentals.",
    skills: [
      { name: "Azure & Entra ID", tag: "RBAC, PIM & MFA" },
      { name: "Microsoft Defender", tag: "Cloud Threat Detection" },
      { name: "Linux & Firewalls", tag: "Network Hardening" },
      { name: "Security Audits", tag: "CIS & Secure Coding" },
    ],
  },
  {
    title: "AI & Machine Learning",
    backgroundImage: "/expertise/ai-machine-learning-hd.webp",
    description: "Machine learning concepts, intelligent automation, data driven solutions, and AI assisted development.",
    skills: [
      { name: "Python & Data Science", tag: "Predictive Analytics" },
      { name: "Data Processing & ETL", tag: "Data Pipelines" },
      { name: "Workflow Automation", tag: "Intelligent Processes" },
      { name: "AI Assisted Development", tag: "Developer Productivity" },
    ],
  },
  {
    title: "Mobile Development",
    backgroundImage: "/expertise/mobile-development-hd.webp",
    description: "Cross platform mobile applications, responsive user experience, touch interactions, and API integration.",
    skills: [
      { name: "Flutter", tag: "Cross Platform Apps" },
      { name: "Firebase", tag: "APIs & Offline Sync" },
      { name: "Progressive Web Apps", tag: "Mobile Web" },
      { name: "Responsive Touch UI/UX", tag: "Interface Design" },
    ],
  },
  {
    title: "Business Systems",
    backgroundImage: "/expertise/business-systems-hd.webp",
    description: "ERP, POS systems, workflow automation, business process digitization, and system integration.",
    skills: [
      { name: "ERPNext", tag: "Inventory & Payroll" },
      { name: "TallyPrime", tag: "Accounting & Billing" },
      { name: "Retail POS Integration", tag: "Sales & Receipts" },
      { name: "Business Reporting", tag: "Supply Chain Analytics" },
    ],
  },
  {
    title: "Cloud & DevOps",
    backgroundImage: "/expertise/cloud-devops-hd.webp",
    description: "Cloud infrastructure, containers, deployment tools, and version control for building and running applications.",
    skills: [
      { name: "Amazon Web Services", tag: "AWS Cloud" },
      { name: "Docker", tag: "Containers" },
      { name: "Kubernetes", tag: "Orchestration" },
      { name: "Git & GitHub", tag: "Version Control" },
    ],
  },
];

/**
 * ============================================================================
 * FEATURED PROJECTS — Cybersecurity tools and production web platforms
 * ============================================================================
 */
export const projectsData: Project[] = [
{
  "id": "secretguard",
  "title": "SecretGuard",
  "category": "security",
  "categoryLabel": "DevSecOps · Secret Detection",
  "featured": true,
  "summary": "A Python CLI that scans source repositories for accidentally exposed credentials. Rule-based detection flags potential API keys, tokens and passwords, with severity-ranked findings and optional JSON reports to support remediation.",
  "description": "An open-source developer security tool for finding potential credential leaks in local source code. SecretGuard combines configurable regex rules with repository scanning and terminal or JSON reporting. It helps developers review suspicious matches before publishing code; findings still require human review.",
  "image": "/icons/github.svg",
  "technologies": [
    "Python",
    "Regex detection",
    "JSON reporting"
  ],
  "metrics": [],
  "keyDeliverables": [
    "Repository scanning for potential exposed credentials.",
    "Findings include file, line, severity and remediation guidance.",
    "Optional JSON report with masked matched values."
  ],
  "architectureHighlights": [
    "Separate CLI, scanner, detector and reporter modules.",
    "Detection patterns are loaded from JSON rules."
  ],
  "repoUrl": "https://github.com/johnorengo/SecretGuard"
},
{
  "id": "python-password-checker",
  "title": "Password Strength Checker",
  "category": "security",
  "categoryLabel": "Cybersecurity · Password Hygiene",
  "featured": true,
  "summary": "An interactive Python utility that checks password length, mixed case, digits and selected symbols, then returns Weak, Moderate or Strong feedback. Demonstrates regular expressions and security awareness through a focused terminal workflow.",
  "description": "A small Python learning project that makes common password-composition checks visible. Four rule checks produce a simple strength rating, and the command-line loop allows repeated checks until the user exits. This is a rule-based educational checker, rather than a breach lookup or a guarantee of password security.",
  "image": "/icons/github.svg",
  "technologies": [
    "Python",
    "Regular expressions",
    "Input validation"
  ],
  "metrics": [],
  "keyDeliverables": [
    "Four checks cover length and character composition.",
    "Returns Weak, Moderate or Strong based on the score.",
    "Interactive loop uses Python and the built-in re module."
  ],
  "architectureHighlights": [
    "A dedicated function evaluates password composition.",
    "A terminal input loop presents feedback and handles exit."
  ],
  "repoUrl": "https://github.com/johnorengo/Python_Password_Checker"
},
  {
    "id": "sebby-logistics",
    "title": "Sebby Logistics Ltd",
    "category": "commercial",
    "categoryLabel": "Flower Logistics",
    "summary": "A responsive website connecting international flower buyers with Kenyan growers and airfreight services through JKIA. It presents sourcing, quality assurance, and export logistics, with detailed quotation requests and direct contact channels to support enquiries from discovery through shipment planning.",
    "description": "Sebby Logistics Ltd connects overseas flower buyers with growers in Kenya and a dispatch operation at Jomo Kenyatta International Airport. The website explains how flowers move from farm selection and purchasing through quality checks, documentation and temperature controlled international airfreight. It serves wholesalers, distributors, florists, supermarket buyers and importers who need to understand the sourcing process before requesting a shipment. Buyers can explore the growing regions, review the services and provide shipment requirements through a detailed enquiry journey, with direct contact options for the appropriate business team.",
    "image": "/projects/sebby-logistics.webp",
    "technologies": [
      "Quotation enquiries",
      "WhatsApp",
      "SEO"
    ],
    "metrics": [],
    "keyDeliverables": [
      "Service sections describe sourcing, procurement, quality assurance, export documentation and airfreight coordination.",
      "A regional overview introduces ten Kenyan sourcing areas, including Naivasha, Nakuru, Nanyuki, Timau, Mount Elgon and Kajiado.",
      "Quotation enquiries capture the destination airport and country, flower varieties, quantities, purchasing frequency and intended arrival date.",
      "Dedicated sales, support and invoicing email routes sit alongside telephone and WhatsApp contact options.",
      "Flower photography and responsive page layouts present the company consistently on phones, tablets and desktop screens.",
      "Business and service schema, location information and social preview metadata support search visibility and link sharing."
    ],
    "architectureHighlights": [],
    "liveUrl": "https://sebbylogistics.com/"
  },
  {
    "id": "citymart-electricals",
    "title": "Citymart Electricals",
    "category": "commercial",
    "categoryLabel": "Electrical Commerce",
    "summary": "A digital showroom for a Kisumu supplier of lighting, electrical products, and hardware. Searchable product listings, installation galleries, and service information help customers explore suitable solutions, while product enquiries and WhatsApp connect them with the team for quotations and project advice.",
    "description": "Citymart Electricals provides a digital showroom for City Mart Electricals & General Hardware in Kisumu. The website helps homeowners, electrical contractors, architects, interior designers and institutional buyers explore lighting and power products before discussing a purchase. Visitors can compare product information, browse examples of installed lighting and review services for different kinds of projects. Instead of treating every enquiry as a generic message, the experience connects individual products and project inspiration with quotation requests and WhatsApp conversations, helping customers explain the fittings, quantities and requirements they have in mind.",
    "image": "/projects/citymart-electricals.webp",
    "technologies": [
      "Product catalog",
      "Quotations",
      "Installation gallery"
    ],
    "metrics": [],
    "keyDeliverables": [
      "A searchable catalog covers decorative lighting, ceiling fittings, bulbs, switches, sockets, outdoor fixtures, solar equipment and related supplies.",
      "Product pages combine item details, related products and a quotation request tailored to the selected item.",
      "Service information addresses homes, businesses and institutions, including lighting advice and supply for larger projects.",
      "A categorized installation gallery helps visitors explore lighting ideas for residential, commercial and hospitality settings.",
      "Product enquiries, a contact form and WhatsApp provide several routes to discuss availability, pricing and project needs.",
      "Store location, contact details, customer feedback and delivery coverage connect online discovery with the Kisumu business."
    ],
    "architectureHighlights": [],
    "liveUrl": "https://citymartelectricals.com/"
  },
  {
    "id": "school-data-verification",
    "title": "School Data Verification System",
    "category": "government",
    "categoryLabel": "Learner Verification",
    "summary": "A Ministry of Education platform for verifying school enrolment records and identifying inaccurate learner entries. Separate access for institution heads and education directors supports school verification and oversight, helping improve the data used for planning, funding, and resource allocation.",
    "description": "The School Data Verification System is a Ministry of Education platform for checking learners already recorded by schools against actual enrolment. It supports the identification of records that are unverified or do not correspond to real learners, helping improve the information used for education planning and funding. The public entry point distinguishes school leadership from sub county and county oversight. Heads of Institution access their school through a UIC based login, while directors use official email credentials through separate sign in journeys. This structure makes the access route and responsibilities of each user group clear.",
    "image": "/projects/school-data-verification.webp",
    "technologies": [
      "Record verification",
      "Role based access"
    ],
    "metrics": [],
    "keyDeliverables": [
      "Verification focuses on existing learner entries and their correspondence with actual school enrolment.",
      "Three entry pathways distinguish Heads of Institution, Sub County Directors and County Directors.",
      "Institution users sign in using the school's UIC identifier and a password.",
      "Director accounts use separate official email login pages for the relevant education oversight level.",
      "Checking enrolment records helps identify ghost entries and strengthen the information available for resource allocation.",
      "Ministry identity, validated role selection and responsive layouts provide a clear public gateway across screen sizes."
    ],
    "architectureHighlights": [],
    "liveUrl": "https://dataverifications.education.go.ke/"
  },
  {
    "id": "education-emergency-management",
    "title": "Education Emergency Management System",
    "category": "government",
    "categoryLabel": "School Safety",
    "summary": "A school safety platform supporting preparedness and coordinated emergency response across Kenya's 47 counties. Hazard monitoring, school risk profiles, incident reporting, and safeguarding workflows help education teams assess exposure, prioritize action, and protect student welfare and learning continuity.",
    "description": "The Education Emergency Management System supports school safety planning and coordinated emergency response throughout Kenya. It brings school leaders, sub county and county directors, and Ministry headquarters administrators into a shared process for understanding hazards, reviewing incidents and following up on school needs. The platform covers all 47 counties and combines school profiles, exposure information and preparedness assessments with reporting and safeguarding workflows. Its purpose is to help education teams identify vulnerable schools, prioritize action and maintain student welfare and learning continuity when floods, drought, storms, fire or other disruptions affect education.",
    "image": "/projects/education-emergency.webp",
    "technologies": [
      "Risk monitoring",
      "Incident reporting"
    ],
    "metrics": [],
    "keyDeliverables": [
      "Hazard monitoring brings together flood, drought, storm and fire information with alerts and school exposure details.",
      "Color coded risk profiles and preparedness surveys help education teams assess school vulnerability and readiness.",
      "Incident reports enter oversight workflows that include sub county verification, rejection and follow up views.",
      "Dedicated workspaces serve institution heads, sub county directors, county directors and Ministry headquarters users.",
      "Child safeguarding processes and Education in Emergency checklists support welfare and learning continuity reporting.",
      "Policy downloads, preparedness guidance and response resources complement analytics on school risk and incident progress."
    ],
    "architectureHighlights": [],
    "liveUrl": "https://kplp.education.go.ke/"
  },
  {
    "id": "fox-tech-solutions",
    "title": "Fox Tech Solutions",
    "category": "commercial",
    "categoryLabel": "Technology Solutions",
    "summary": "A business website presenting Fox Tech Solutions' software development, design, marketing, and IT support services. It combines service information, delivery process guidance, and interactive case studies to help prospective clients assess the company's work and start a project enquiry.",
    "description": "Fox Tech Solutions is the public business website for a Nairobi technology company. It introduces the company's work in website development, custom software, interface design, digital marketing and managed IT support, helping prospective clients understand the services available before starting an engagement. The site combines service information with an explanation of the delivery process and interactive case studies covering commercial and government platforms. Visitors can review examples of completed work, follow links to live projects and explore engagement options before sending an enquiry about their business or technology needs.",
    "image": "/projects/fox-tech-logo.png",
    "imageFit": "contain",
    "technologies": [
      "Service showcase",
      "Interactive case studies",
      "Client enquiries"
    ],
    "metrics": [],
    "keyDeliverables": [
      "Service sections introduce website and software development, design, marketing and ongoing IT support.",
      "A process section explains the company's approach to taking a project from planning through delivery and continued support.",
      "Interactive case study tabs present the logistics, electrical commerce, learner verification and school emergency platforms.",
      "Project previews, feature explanations and external links help prospective clients review the published work.",
      "Company information and engagement options connect the service offering with a route for starting a client enquiry.",
      "Responsive navigation and layouts organize the service, process, project and contact sections for different devices."
    ],
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
    period: "Current",
    role: "Information Technology Specialist",
    organization: "Growmore Technology Africa Ltd",
    location: "",
    type: "Software Development, Networking & Business Solutions",
    summary: "Develop software, support business systems, and work on networking solutions to help organizations manage their operations. My work spans ERPNext, TallyPrime, retail POS, and custom software development.",
    achievements: [
      "Develop custom software tailored to business requirements and operational workflows.",
      "Work with ERPNext and TallyPrime to support enterprise operations and accounting needs.",
      "Support retail point of sale solutions for day to day business operations.",
      "Work on networking requirements alongside software and business system needs.",
    ],
    technologies: ["Custom Software Development", "Networking", "ERPNext", "TallyPrime", "Retail POS"],
  },
  {
    period: "2025 to 2026",
    role: "Full Stack Software Developer Intern",
    organization: "Ministry of Education Headquarters",
    location: "Nairobi, Kenya",
    type: "Public Sector Software Engineering",
    summary: "Architected and delivered core modules of national education data platforms supporting school accreditation, tree planting initiatives, and emergency response.",
    achievements: [
      "Built resilient RESTful microservices and API endpoints with Laravel and Python connecting to central MySQL databases.",
      "Developed high performance React frontends with intuitive table pagination, live filtering, and zero latency form validation.",
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
      "Evaluated identity access controls, Privileged Identity Management (PIM), and Multifactor Authentication (MFA) enforcement policies.",
      "Monitored and investigated alert telemetry within Microsoft Defender for Cloud and Microsoft Sentinel.",
      "Drafted comprehensive vulnerability remediation reports detailing specific mitigation steps for enterprise clients.",
    ],
    technologies: ["Microsoft Azure", "Entra ID", "Defender for Cloud", "PowerShell", "RBAC", "Sentinel", "Compliance"],
  },
  {
    period: "2025",
    role: "IT Intern & Technical Support Specialist",
    organization: "Ministry of Education",
    location: "Kisumu, Kenya",
    type: "ICT Infrastructure & Field Engineering",
    summary: "Provided practical technical support, network engineering, and hardware troubleshooting across 15+ educational institutions.",
    achievements: [
      "Troubleshot hardware, operating system, and network connectivity faults across 350+ computers, printers, and peripheral devices.",
      "Configured secure local Wi-Fi and Ethernet networks with optimized bandwidth management for educational software delivery.",
      "Supported digital literacy programs by training teachers and administrators on digital tools and safe computing practices.",
      "Maintained accurate asset registries and scheduled preventive maintenance rounds across all assigned sites.",
    ],
    technologies: ["Linux", "Windows Server", "LAN/WAN", "TCP/IP", "Cisco Routers", "Hardware Diagnostics", "Support"],
  },
  {
    period: "2023",
    role: "ICT Attaché",
    organization: "Eldoret International Airport",
    location: "Eldoret, Kenya",
    type: "ICT Attachment & Airport Infrastructure",
    summary: "Supported secure and reliable airport IT operations through network maintenance, CCTV troubleshooting, and daily hardware and software support.",
    achievements: [
      "Monitored and maintained network security infrastructure, helping reduce downtime and improve system reliability.",
      "Assisted with CCTV configuration and troubleshooting to strengthen airport surveillance and security.",
      "Supported more than 50 network devices with troubleshooting focused on secure, consistent connectivity.",
      "Resolved daily hardware and software issues while maintaining secure operations, improving response time by 25%.",
      "Documented IT procedures and incident reports to support security awareness, traceability, and operational continuity.",
    ],
    technologies: ["Network Security", "CCTV Systems", "Network Troubleshooting", "Hardware & Software Support", "Incident Documentation"],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "The Catholic University of Eastern Africa (CUEA)",
    location: "Nairobi, Kenya",
    period: "Second Class Upper Division",
    highlights: [
      "Core coursework: Software Engineering, Data Structures & Algorithms, Computer Networks, Database Systems, Operating Systems, Information Security",
      "Capstone Project: Employee Task Management System, designed to help teams assign tasks, track progress, and manage employee workloads in one place.",
      "Active participant in computing hackathons and student developer circles",
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    "title": "AWS Certified Cloud Practitioner",
    "issuer": "Amazon Web Services (AWS)",
    "date": "2025",
    "badgeType": "Cloud Certification",
    "verifyUrl": "https://www.credly.com/badges/2fd2ded7-5a0b-4b6f-b783-26bf3970181c/public_url"
  },
  {
    "title": "AWS re/Start Graduate",
    "issuer": "Amazon Web Services (AWS)",
    "date": "2025",
    "badgeType": "Cloud Training",
    "verifyUrl": "https://www.credly.com/badges/59df2b0b-d66c-4bf9-bed2-8f221209e726/public_url"
  },
  {
    "title": "Certificate in Computer Applications",
    "issuer": "KCA University",
    "date": "2020",
    "badgeType": "Computer Applications"
  },
  {
    "title": "Cybersecurity Intern",
    "issuer": "Hack Secure",
    "date": "2025",
    "badgeType": "Professional Development",
    "verifyUrl": "https://certificate.givemycertificate.com/c/810b6cbe-3f06-48da-9253-a93a10df0bc7"
  },
  {
    "title": "Kubernetes and Cloud Native Associate (KCNA)",
    "issuer": "The Linux Foundation / CNCF",
    "date": "2025",
    "badgeType": "Cloud Native",
    "verifyUrl": "https://www.credly.com/badges/6feba8c3-d47e-4b33-9246-8739861fb260/public_url"
  },
  {
    "title": "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    "issuer": "Microsoft",
    "date": "2025",
    "badgeType": "Cybersecurity",
    "verifyUrl": "https://learn.microsoft.com/en-us/users/johnorengo-1315/credentials/d75c4f9b991b29a7"
  }
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

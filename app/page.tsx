const projects = [
  {
    number: "01",
    title: "National education platforms",
    description:
      "Four digital platforms supporting school data verification, tree planting, emergency response, and staff reporting for national education programmes.",
    stack: ["React", "Laravel", "MySQL"],
  },
  {
    number: "02",
    title: "Cloud security reviews",
    description:
      "Azure environment reviews and security reporting using Defender for Cloud, Entra ID, RBAC, MFA, Conditional Access, and Log Analytics.",
    stack: ["Azure", "PowerShell", "Security"],
  },
  {
    number: "03",
    title: "ICT infrastructure support",
    description:
      "Hands-on technical support across education and airport environments, from 100+ devices to secure network and CCTV infrastructure.",
    stack: ["Networking", "Linux", "Troubleshooting"],
  },
];

const skills = [
  ["Development", "PHP", "Laravel", "Python", "JavaScript", "React", "HTML / CSS", "Tailwind CSS"],
  ["Cloud & data", "AWS", "Microsoft Azure", "MySQL", "PostgreSQL", "RESTful APIs", "Linux"],
  ["Infrastructure", "TCP/IP", "VPN", "Network troubleshooting", "Hardware support", "Cybersecurity", "PowerShell"],
];

const services = [
  ["01", "Full-stack development", "Responsive applications, RESTful APIs, authentication, and database-driven systems."],
  ["02", "Cloud & security", "Azure and AWS fundamentals, secure configuration, monitoring, identity, and access controls."],
  ["03", "Technical support", "Practical troubleshooting for devices, networks, systems, users, and ICT infrastructure."],
];

const experience = [
  ["Dec 2025 — Aug 2026", "Full-Stack Software Developer Intern", "Ministry of Education Headquarters", "Built and maintained four national education platforms. Developed React interfaces, PHP/Laravel and Python APIs, and MySQL/PostgreSQL data systems while collaborating with stakeholders on testing and deployment."],
  ["Oct 2025 — Dec 2025", "IT Intern", "Ministry of Education, Kadibo Sub-County", "Supported digital learning across 15 schools, provided first-line support for 100+ devices, trained 200+ teachers and learners in cybersecurity awareness, and assisted 40+ teachers with ICT integration."],
  ["Apr 2025 — Aug 2025", "Cloud Security Specialist Trainee", "Serianu Limited", "Reviewed Azure environments, supported RBAC and MFA controls, investigated Defender and Log Analytics alerts, and created Azure CLI and PowerShell security reporting scripts."],
  ["May 2025 — Jun 2025", "Cybersecurity Intern", "Hack Secure, India (Remote)", "Supported vulnerability assessments, red-team exercises, incident analysis, threat documentation, and client-facing technical reports."],
  ["May 2023 — Aug 2023", "ICT Attaché", "Eldoret International Airport", "Maintained secure network connectivity for 50+ devices, supported CCTV systems, resolved daily hardware and software issues, and improved response time by 25%."],
];

const certifications = [
  "Kubernetes and Cloud Native Associate (KCNA)",
  "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
  "AWS Certified Cloud Practitioner",
  "AWS re/Start Graduate",
  "Certificate in Computer Applications — KCA University",
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="John Orengo home">
          Full-Stack <span>Developer</span>
        </a>
        <div className="nav-links">
          <a href="#top">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
          <a className="coffee-link" href="https://www.buymeacoffee.com/orengo" target="_blank" rel="noreferrer">
            <span aria-hidden="true">♥</span> Buy me a coffee
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-greeting">Hi, I&apos;m</p>
            <h1>John <span>Orengo</span></h1>
            <p className="hero-description">
              ICT professional and full-stack developer building reliable systems,
              secure infrastructure, and useful digital experiences.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">View projects <span aria-hidden="true">↗</span></a>
              <a className="secondary-button" href="#contact">Let&apos;s collaborate <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="portrait-card">
            <div className="portrait-photo" role="img" aria-label="John Orengo" />
          </div>
          <span className="tech-icon icon-react">✣</span><span className="tech-icon icon-node">JS</span>
          <span className="tech-icon icon-code">&lt;/&gt;</span><span className="tech-icon icon-css">≋</span>
          <span className="tech-icon icon-html">▣</span>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <p className="eyebrow">02 / About</p>
        <div className="section-grid">
          <h2>Technology that<br />does useful work.</h2>
          <div className="body-copy">
            <p>
              I&apos;m John Orengo, a Computer Science graduate and ICT professional
              working across software development, networking, technical support,
              systems administration, and cloud security.
            </p>
            <p>
              I bring a practical, hands-on approach to troubleshooting and a
              product mindset to the systems I build. Good technology should be
              secure, understandable, and dependable for the people using it.
            </p>
          </div>
        </div>
        <div className="stats" aria-label="Portfolio highlights">
          <div><strong>04</strong><span>National platforms<br />built</span></div>
          <div><strong>15</strong><span>Schools<br />supported</span></div>
          <div><strong>200+</strong><span>People reached<br />with training</span></div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="work-heading">
          <p className="eyebrow">03 / Experience</p>
          <p className="work-intro">A growing career across public-sector technology, security, and support.</p>
        </div>
        <div className="experience-list">
          {experience.map(([date, role, company, description]) => (
            <article className="experience-item" key={`${date}-${role}`}>
              <span className="experience-date">{date}</span>
              <div><h3>{role}</h3><p className="experience-company">{company}</p><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="work-heading">
          <p className="eyebrow">04 / What I do</p>
          <p className="work-intro">A small, focused set of ways I can help move an idea forward.</p>
        </div>
        <div className="service-grid">
          {services.map(([number, title, description]) => (
            <article className="service-card" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="work-heading">
          <p className="eyebrow">05 / Selected work</p>
          <p className="work-intro">Selected work, experiments, and a few things in the making.</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section">
        <p className="eyebrow">06 / Toolkit</p>
        <div className="skills-heading">
          <h2>My current<br />toolkit.</h2>
          <p>The tools change. The aim stays the same: make something people enjoy using.</p>
        </div>
        <div className="skills-grid">
          {skills.map(([category, ...items]) => (
            <div className="skill-group" key={category}>
              <h3>{category}</h3>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section credentials-section" id="credentials">
        <div className="credentials-grid">
          <div>
            <p className="eyebrow">07 / Education</p>
            <h2>Grounded in<br />computer science.</h2>
            <p className="credential-copy">Bachelor of Science in Computer Science, Second Class Upper<br /><span>The Catholic University of Eastern Africa · 2020 — 2024</span></p>
            <p className="credential-copy">Kenya Certificate of Secondary Education<br /><span>Kisumu Boys&apos; High School · 2016 — 2019</span></p>
          </div>
          <div className="certification-list">
            <p className="eyebrow">Certifications</p>
            {certifications.map((certification, index) => <p key={certification}><span>0{index + 1}</span>{certification}</p>)}
          </div>
        </div>
      </section>

      <section className="section cv-section" id="cv">
        <div className="cv-copy">
          <p className="eyebrow">08 / Curriculum vitae</p>
          <h2>Get the full<br />picture.</h2>
        </div>
        <div className="cv-download">
          <p>
            Download my CV for a detailed overview of my experience, skills,
            education, and certifications.
          </p>
          <a className="cv-download-button" href="/john-orengo-cv.pdf" download>
            Download CV <span aria-hidden="true">↓</span>
          </a>
          <span className="cv-file-detail">PDF · 189 KB</span>
        </div>
      </section>

      <section className="section testimonial-section">
        <p className="eyebrow">09 / Approach</p>
        <blockquote>Build it clearly. Secure it properly. Leave it better than you found it.</blockquote>
        <p className="quote-credit">Software development <span>●</span> ICT infrastructure <span>●</span> Continuous learning</p>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">10 / Get in touch</p>
        <h2>Have an idea?<br /><em>Let&apos;s talk.</em></h2>
        <p>Open to conversations, collaborations, and opportunities.</p>
        <div className="contact-actions">
          <a className="contact-link" href="mailto:orengokennedy93@gmail.com">
            Send an email <span aria-hidden="true">↗</span>
          </a>
          <a className="coffee-button" href="https://www.buymeacoffee.com/orengo" target="_blank" rel="noreferrer">
            <span aria-hidden="true">♥</span> Buy me a coffee
          </a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} John Orengo</span>
        <div className="footer-links"><a href="https://www.buymeacoffee.com/orengo" target="_blank" rel="noreferrer">Support my work ♥</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}

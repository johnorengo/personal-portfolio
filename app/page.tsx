import CoffeeSupport from "./coffee-support";

const capabilities: [string, string, string, string[]][] = [
  ["01", "Full-stack engineering", "Responsive interfaces, backend services, and secure database-driven applications.", ["React", "Laravel", "REST APIs"]],
  ["02", "Cloud & security", "Practical cloud configuration, identity controls, monitoring, and security reporting.", ["Azure", "AWS", "Defender"]],
  ["03", "Technical delivery", "Reliable support across systems, devices, networks, and people.", ["Networking", "Linux", "Support"]],
];

const projects: [string, string, string][] = [
  ["Education platforms", "National digital platforms supporting school verification, tree planting, emergency response, and staff reporting.", "React · Laravel · MySQL"],
  ["Cloud security reviews", "Azure environment reviews covering identity, access controls, monitoring, and security reporting.", "Azure · PowerShell · Security"],
  ["ICT infrastructure", "Technical support for secure networks, devices, CCTV, and education technology environments.", "Networking · Linux · Support"],
];

const experience: [string, string, string, string][] = [
  ["2025 — 2026", "Full-Stack Software Developer Intern", "Ministry of Education Headquarters", "Built and maintained national education platforms with React, Laravel, Python, and data systems."],
  ["2025", "IT Intern", "Ministry of Education", "Supported digital learning, device troubleshooting, and ICT adoption across 15 schools."],
  ["2025", "Cloud Security Specialist Trainee", "Serianu Limited", "Reviewed Azure environments and supported reporting, RBAC, MFA, and security monitoring."],
];

export default function Home() {
  return <main>
    <header className="site-header"><div className="container header-inner"><a className="brand" href="#top"><strong>John Orengo</strong><small>Full-stack developer</small></a><nav><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav><div className="header-actions"><CoffeeSupport variant="header" /><a className="header-action" href="mailto:orengokennedy93@gmail.com" aria-label="Email John Orengo">↗</a></div></div></header>

    <section className="hero" id="top"><div className="container hero-layout"><div><p className="eyebrow">Full-stack developer · ICT professional</p><h1>Building dependable digital systems for real-world work.</h1><p className="hero-lead">I design and build reliable applications, cloud-aware systems, and practical technical solutions—from initial requirements to deployment and support.</p><div className="actions"><a className="button primary" href="#work">View selected work <span>→</span></a><a className="button secondary" href="#contact">Start a conversation</a></div></div><div className="architecture-card" aria-label="Delivery lifecycle"><div className="card-bar"><span>System delivery</span><i>● Live</i></div><div className="architecture-body"><div className="node"><b>01</b><span>Requirements</span></div><em>→</em><div className="node active"><b>02</b><span>Build & integrate</span></div><em>→</em><div className="node"><b>03</b><span>Deploy & support</span></div></div><div className="card-footer"><span>Clear systems. Useful outcomes.</span><span>JO / 01</span></div></div></div></section>

    <section className="domain-strip"><div className="container"><span>Areas of focus</span><p>Software systems <b>·</b> Cloud security <b>·</b> Education technology <b>·</b> ICT infrastructure</p></div></section>

    <section className="section" id="about"><div className="container"><div className="section-heading"><p className="eyebrow">About</p><h2>Engineering across the complete delivery lifecycle.</h2><p>I work beyond individual features: understanding the problem, structuring data, building interfaces and services, and supporting the technology after it goes live.</p></div><ol className="lifecycle">{["Understand", "Design", "Build", "Integrate", "Deploy", "Support"].map((item, index) => <li key={item}><span>0{index + 1}</span>{item}<b>↗</b></li>)}</ol></div></section>

    <section className="section subtle" id="expertise"><div className="container"><div className="section-heading"><p className="eyebrow">Practical expertise</p><h2>Focused across the application stack.</h2><p>Capabilities shaped by hands-on work with operational systems, secure environments, and the people who use them.</p></div><div className="capability-grid">{capabilities.map(([number, title, description, stack]) => <article className="capability-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><ul>{stack.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

    <section className="section" id="work"><div className="container"><div className="section-heading"><p className="eyebrow">Selected work</p><h2>Systems designed around real operations.</h2><p>Work spanning national education platforms, cloud security, and practical ICT support.</p></div><div className="project-grid">{projects.map(([title, description, stack], index) => <article className={`project-card ${index === 0 ? "featured" : ""}`} key={title}><div className="project-visual"><span>JO</span><i>{String(index + 1).padStart(2, "0")}</i><div><b>●</b><b>●</b><b>●</b></div></div><div className="project-copy"><small>Case study / {String(index + 1).padStart(2, "0")}</small><h3>{title}</h3><p>{description}</p><span className="tag">{stack}</span><a href="#contact">Discuss a similar project <b>→</b></a></div></article>)}</div></div></section>

    <section className="section subtle" id="experience"><div className="container experience-layout"><div><div className="section-heading"><p className="eyebrow">Experience</p><h2>Technical delivery grounded in applied computing.</h2></div><div className="experience-list">{experience.map(([date, role, place, detail]) => <article key={role}><i>↗</i><div><small>{date} · {place}</small><h3>{role}</h3><p>{detail}</p></div></article>)}</div></div><aside className="credentials"><p className="eyebrow">Credentials</p><div><small>Education</small><h3>BSc Computer Science</h3><p>The Catholic University of Eastern Africa</p></div><div><small>Certification</small><h3>AWS Certified Cloud Practitioner</h3><p>Plus KCNA and Microsoft Security fundamentals</p></div></aside></div></section>

    <section className="section approach"><div className="container"><div className="section-heading"><p className="eyebrow">Approach</p><h2>Disciplined from discovery to operation.</h2><p>Technical decisions should remain connected to the people, workflow, and outcome they serve.</p></div><div className="approach-grid">{[["01", "Understand the problem"], ["02", "Design the system"], ["03", "Build and integrate"], ["04", "Deploy and improve"]].map(([number, title]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>Make the next decision clear, proportionate, and practical.</p></article>)}</div></div></section>

    <section className="contact-section" id="contact"><div className="container"><div className="contact-panel"><div><p>Let&apos;s work together</p><h2>Discuss a system, integration, or delivery challenge.</h2><span>For professional enquiries, collaboration, or an opportunity to build something useful.</span></div><div className="contact-links"><a href="mailto:orengokennedy93@gmail.com"><b>↗</b><span>Email John<small>orengokennedy93@gmail.com</small></span><i>→</i></a><a href="/john-orengo-cv.pdf" download><b>↓</b><span>Download CV<small>Experience and qualifications</small></span><i>→</i></a><CoffeeSupport variant="contact" /></div></div></div></section>
    <footer><div className="container"><div><strong>John Orengo</strong><p>Full-stack engineering, secure systems, and practical technical delivery.</p></div><nav><a href="#about">About</a><a href="#work">Selected work</a><a href="#experience">Experience</a></nav><small>© {new Date().getFullYear()} John Orengo. All rights reserved.</small></div></footer>
  </main>;
}

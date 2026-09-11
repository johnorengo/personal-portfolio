const projects: [string, string, string, string[]][] = [
  ["01", "National education platforms", "Four digital platforms for school data verification, tree planting, emergency response, and staff reporting.", ["React", "Laravel", "MySQL"]],
  ["02", "Cloud security reviews", "Azure security reviews and reporting across identity, access, monitoring, and incident response.", ["Azure", "PowerShell", "Security"]],
  ["03", "ICT infrastructure support", "Reliable hands-on support for people, devices, networks, and secure infrastructure.", ["Networking", "Linux", "Support"]],
];

const experience: [string, string, string][] = [
  ["2025 — 2026", "Full-Stack Software Developer Intern", "Ministry of Education Headquarters"],
  ["2025", "IT Intern", "Ministry of Education, Kadibo Sub-County"],
  ["2025", "Cloud Security Specialist Trainee", "Serianu Limited"],
  ["2023", "ICT Attaché", "Eldoret International Airport"],
];

const tools: string[][] = [
  ["Development", "PHP", "Laravel", "Python", "JavaScript", "React"],
  ["Cloud & data", "AWS", "Microsoft Azure", "MySQL", "PostgreSQL", "Linux"],
  ["Infrastructure", "TCP/IP", "VPN", "Cybersecurity", "PowerShell", "Support"],
];

export default function Home() {
  return (
    <main id="top">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top">JO<span>_</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="mailto:orengokennedy93@gmail.com">Let&apos;s talk <span>↗</span></a>
      </nav>
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow"><i /> Available for opportunities</p>
        <div className="hero-title-wrap"><p className="intro">Hello, I&apos;m John Orengo —</p><h1 id="hero-title">Full-stack<br /><em>developer.</em></h1></div>
        <div className="hero-footer"><p>Building dependable digital products, secure systems, and useful technology for the people who rely on it.</p><a className="underlined-link" href="#work">Explore selected work <span>↓</span></a></div>
        <span className="hero-index">01 / 05</span>
      </section>
      <section className="section about" id="about">
        <p className="eyebrow">02 / About me</p>
        <div className="two-column"><h2>Technology that<br />does useful work.</h2><div className="prose"><p>I&apos;m John, a Computer Science graduate and ICT professional working across full-stack development, cloud security, networking, and systems support.</p><p>I combine a practical troubleshooting mindset with care for clear, secure, and dependable user experiences.</p></div></div>
        <div className="stats"><div><strong>04</strong><span>National platforms<br />built</span></div><div><strong>15</strong><span>Schools<br />supported</span></div><div><strong>200+</strong><span>People reached<br />with training</span></div></div>
      </section>
      <section className="section work" id="work"><div className="section-heading"><p className="eyebrow">03 / Selected work</p><p>Selected systems and practical work across software, security, and infrastructure.</p></div><div className="projects">{projects.map(([number, title, description, stack]) => <article className="project" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p><ul>{stack.map((item) => <li key={item}>{item}</li>)}</ul></div><b aria-hidden="true">↗</b></article>)}</div></section>
      <section className="section experience" id="experience"><div className="section-heading"><p className="eyebrow">04 / Experience</p><p>A growing career across public-sector technology, cloud security, and technical support.</p></div><div className="timeline">{experience.map(([date, role, company]) => <article key={role}><span>{date}</span><h3>{role}</h3><p>{company}</p><b>↗</b></article>)}</div></section>
      <section className="section toolkit"><p className="eyebrow">05 / Toolkit</p><div className="two-column"><h2>Tools for<br />getting things done.</h2><p className="prose">The tools change. The aim stays the same: make thoughtful technology that works well for people.</p></div><div className="tool-grid">{tools.map(([group, ...items]) => <div key={group}><h3>{group}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
      <section className="contact" id="contact"><p className="eyebrow">Let&apos;s work together</p><h2>Have an idea?<br /><em>Let&apos;s talk.</em></h2><div><p>Open to conversations, collaborations, and opportunities.</p><a className="contact-button" href="mailto:orengokennedy93@gmail.com">Send an email <span>↗</span></a></div></section>
      <footer><span>© {new Date().getFullYear()} John Orengo</span><a href="/john-orengo-cv.pdf" download>Download CV ↓</a><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}

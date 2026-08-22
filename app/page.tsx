const projects = [
  {
    number: "01",
    title: "Northstar dashboard",
    description:
      "A calmer command centre for teams that need to understand complex work at a glance.",
    stack: ["Next.js", "TypeScript", "Product design"],
  },
  {
    number: "02",
    title: "Atlas commerce",
    description:
      "A flexible storefront system that makes the route from discovery to checkout feel effortless.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Signal / 24",
    description:
      "An ongoing collection of small experiments in motion, interaction, and the useful edges of the web.",
    stack: ["JavaScript", "UI design", "Creative code"],
  },
];

const skills = [
  ["Frontend", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  ["Backend", "Node.js", "APIs", "Databases", "Authentication"],
  ["Tools", "Git", "GitHub", "Figma", "Vercel"],
];

const services = [
  ["01", "Web development", "Fast, responsive websites and products built around how people actually use them."],
  ["02", "Interface design", "Clear, expressive interfaces that give complex ideas an easy way in."],
  ["03", "Creative direction", "A practical point of view from the first sketch through the final detail."],
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="John Orengo home">
          MERN Stack <span>Developer</span>
        </a>
        <div className="nav-links">
          <a href="#top">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
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
              I build scalable full-stack applications using React, Node.js,
              Express and MongoDB. I love clean code and fast UIs.
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
          <h2>Designing with<br />a point of view.</h2>
          <div className="body-copy">
            <p>
              I&apos;m John Orengo, a developer drawn to the space between a sharp
              idea and a great experience. I care about clear systems, expressive
              interfaces, and the details that make products feel inevitable.
            </p>
            <p>
              This is where I share selected work, experiments, and the questions
              I&apos;m still curious enough to chase.
            </p>
          </div>
        </div>
        <div className="stats" aria-label="Portfolio highlights">
          <div><strong>01</strong><span>Portfolio<br />in progress</span></div>
          <div><strong>∞</strong><span>Curiosity to<br />keep learning</span></div>
          <div><strong>100%</strong><span>Focused on<br />craft and growth</span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="work-heading">
          <p className="eyebrow">03 / What I do</p>
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
          <p className="eyebrow">04 / Selected work</p>
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
        <p className="eyebrow">05 / Toolkit</p>
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

      <section className="section testimonial-section">
        <p className="eyebrow">06 / Kind words</p>
        <blockquote>&ldquo;John brings a rare mix of taste, clarity, and follow-through. The work feels considered from the first click to the last.&rdquo;</blockquote>
        <p className="quote-credit">A future collaborator <span>●</span> Somewhere on the internet</p>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">07 / Get in touch</p>
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

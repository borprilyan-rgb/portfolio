import { useState } from "react";
import "./App.css";

const profile = {
  name: "Boris Prilyan Sidabutar",
  title: "Quantity Surveyor Specialist CSA",
  location: "Jakarta, Indonesia",
  email: "borisprilyan@gmail.com",
  phone: "+62 881 1623 122",
};

const selectedWork = [
  {
    number: "01",
    title: "Feasibility Estimation Workflow",
    description:
      "Area basis, GBA/GFA/SGFA/NFA summary, work-group cost planning, detailed cost pages, and Excel import/export workflow.",
    tags: ["Python", "Streamlit", "Excel", "GBA", "GFA"],
  },
  {
    number: "02",
    title: "BOQ / RAB Structure",
    description:
      "Quantity take-off and BOQ structure for Civil, Structural, and Architectural works with clear measurement basis.",
    tags: ["QS", "BOQ", "RAB", "CSA"],
  },
  {
    number: "03",
    title: "Cost Basis Reconciliation",
    description:
      "Separating GBA, GFA, SGFA, NFA, rooms, detailed quantity, area, and lump sum to avoid mixed-basis cost calculations.",
    tags: ["Cost Plan", "Feasibility", "Reconciliation"],
  },
  {
    number: "04",
    title: "Drawing & Design Change Review",
    description:
      "Reviewing drawings, specifications, and design revisions to identify quantity changes and cost impact.",
    tags: ["Drawing Review", "Cost Impact", "Coordination"],
  },
];

const experience = [
  {
    company: "Agung Sedayu",
    role: "Quantity Surveyor Specialist CSA",
    period: "October 2025 - Present",
    location: "Jakarta, Indonesia",
    bullets: [
      "Prepared CSA quantity take-off and BOQ structures for property development projects.",
      "Supported feasibility cost estimation, budget review, and cost-basis validation.",
      "Reviewed drawings and design revisions to identify quantity and cost impact.",
    ],
  },
  {
    company: "BREIG Property (Project-Based)",
    role: "Quantity Surveyor",
    period: "January 2025 - October 2025",
    location: "Bali, Indonesia",
    bullets: [
      "Coordinated QS, Finance, BIM, and Project teams across project-based cost workflows.",
      "Aligned cost data, BOQs, and estimates with BIM models and design revisions.",
    ],
  },
  {
    company: "Sinarmas Land",
    role: "Quantity Surveyor Coordinator",
    period: "November 2021 - January 2025",
    location: "Jakarta, Indonesia",
    bullets: [
      "Validated budgets, Bills of Materials, procurement forecasts, and cost variance records.",
      "Managed vendor and service-contractor coordination for project delivery requirements.",
      "Updated budget projections in response to scope and design changes.",
    ],
  },
  {
    company: "Agung Podomoro Land",
    role: "Quantity Surveyor Officer",
    period: "March 2021 - November 2021",
    location: "Jakarta, Indonesia",
    bullets: [
      "Reviewed tender documents, contracts, budgets, and Bills of Quantities.",
      "Tracked construction changes and adjusted budget projections accordingly.",
    ],
  },
  {
    company: "Owens Corning Indonesia",
    role: "Estimator",
    period: "January 2019 - March 2021",
    location: "Jakarta, Indonesia",
    bullets: [
      "Assisted measurement and take-offs for tender BOQ preparation.",
      "Prepared material, labor, and daily work-progress estimation records.",
    ],
  },
];

const capabilities = [
  "Quantity Take-Off",
  "Cost Estimation",
  "Cost Control",
  "Drawing Review",
  "Procurement / Vendor Coordination",
  "BIM-Cost Coordination",
];

const tools = [
  "AutoCAD",
  "Autodesk Revit",
  "SketchUp",
  "Glodon Cubicost",
  "Microsoft Excel",
  "Microsoft Project",
  "Bluebeam Revu",
  "Python",
];

const education = [
  {
    title: "Bachelor of Architecture",
    meta: "Universitas Indonesia",
    period: "2014 - 2018",
  },
];

const certifications = [
  {
    title: "Cubicost Certificate",
    meta: "Glodon Indonesia",
    period: "2026",
  },
  {
    title: "Python for Data Science",
    meta: "Udemy",
    period: "2025",
  },
  {
    title: "Lean Six Sigma",
    meta: "Universitas Indonesia",
    period: "2021",
  },
];

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <div className="sectionInner">
        <div className="sectionHeading">
          <p className="eyebrow">{label}</p>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  return (
    <div className="page" data-theme={theme}>
      <header className="nav">
        <a href="#home" className="brand" aria-label="Home">
          BP
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="themeToggle"
          type="button"
          aria-label="Toggle color theme"
          aria-pressed={isDark}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          <span />
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">Quantity Surveyor Portfolio</p>
          <h1>
            <span>Boris</span>
            <span>Prilyan</span>
            <span>Sidabutar</span>
          </h1>
          <div className="heroIntro">
            <p className="heroTitle">{profile.title}</p>
            <p>
              Civil, Structural, and Architectural quantity take-off, BOQ
              preparation, feasibility cost estimation, and cost-basis
              reconciliation for property development projects.
            </p>
          </div>
          <div className="heroMeta">
            <span>{profile.location}</span>
            <span>QS / BOQ / Cost Estimation / Feasibility</span>
          </div>
          <div className="heroLinks">
            <a href="#work">View Work</a>
            <a href={`mailto:${profile.email}`}>Contact</a>
          </div>
        </section>

        <Section id="work" label="Selected Work" title="Project-focused QS workflows">
          <div className="workList">
            {selectedWork.map((work) => (
              <article className="workItem" key={work.number}>
                <span className="workNumber">{work.number}</span>
                <div className="workBody">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
                <div className="tagList" aria-label={`${work.title} tags`}>
                  {work.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" label="Experience" title="Professional background">
          <div className="timeline">
            {experience.map((job) => (
              <article className="timelineItem" key={`${job.company}-${job.period}`}>
                <div className="timelineMeta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
                <div className="timelineBody">
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="tools" label="Capability / Tools" title="Built for cost clarity">
          <div className="capabilityGrid">
            <div>
              <h3>Capabilities</h3>
              <div className="capabilityList">
                {capabilities.map((capability) => (
                  <span key={capability}>{capability}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Tools</h3>
              <div className="tagCloud">
                {tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="education" label="Education / Certification" title="Supporting credentials">
          <div className="credentialList">
            {[...education, ...certifications].map((item) => (
              <article className="credentialItem" key={`${item.title}-${item.period}`}>
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
                <span>{item.period}</span>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <footer className="simpleFooter" id="contact">
        <div className="footerInner">
          <div className="footerMark">BP</div>
          <h2>{profile.name}</h2>
          <p>{profile.title} / {profile.location}</p>
          <div className="footerContact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#tools">Tools</a>
            <a href="#home">Top</a>
          </nav>
          <small>Copyright 2026 Boris Prilyan Sidabutar. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;

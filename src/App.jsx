import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import "./App.css";

const profile = {
  name: "Boris Prilyan Sidabutar",
  title: "Quantity Surveyor Specialist CSA",
  location: "Jakarta, Indonesia",
  email: "borisprilyan@gmail.com",
  phone: "+62 881 1623 122",
  linkedin: "https://linkedin.com/in/borissidabutar",
};

const works = [
  {
    number: "01",
    slug: "feasibility-estimation-workflow",
    title: "Feasibility Estimation Workflow",
    description:
      "Area basis, GBA/GFA/SGFA/NFA summary, work-group cost planning, detailed cost pages, and Excel import/export workflow.",
    tags: ["Python", "Streamlit", "Excel", "GBA", "GFA"],
    scope: [
      "Define area inputs and cost groups for early feasibility review.",
      "Separate GBA, GFA, SGFA, and NFA assumptions before cost allocation.",
      "Prepare a reviewable workflow for Excel import/export and detailed cost pages.",
    ],
    method:
      "The workflow starts from controlled area data, maps each cost group to the correct basis, and keeps assumptions visible for review before totals are consolidated.",
    output:
      "A clearer feasibility estimate structure with traceable area assumptions, cost-basis logic, and exportable review data.",
  },
  {
    number: "02",
    slug: "boq-rab-structure",
    title: "BOQ / RAB Structure",
    description:
      "Quantity take-off and BOQ structure for Civil, Structural, and Architectural works with clear measurement basis.",
    tags: ["QS", "BOQ", "RAB", "CSA"],
    scope: [
      "Structure work items for Civil, Structural, and Architectural packages.",
      "Maintain clear unit, quantity, and measurement basis for each BOQ line.",
      "Support tender and budget review with organized RAB documentation.",
    ],
    method:
      "Quantities are grouped by discipline and measurement logic, then checked against drawing information and specification references.",
    output:
      "A disciplined BOQ/RAB format that is easier to review, price, compare, and revise.",
  },
  {
    number: "03",
    slug: "cost-basis-reconciliation",
    title: "Cost Basis Reconciliation",
    description:
      "Separating GBA, GFA, SGFA, NFA, rooms, detailed quantity, area, and lump sum to avoid mixed-basis cost calculations.",
    tags: ["Cost Plan", "Feasibility", "Reconciliation"],
    scope: [
      "Identify which cost items are area-based, quantity-based, room-based, or lump sum.",
      "Separate mixed calculation bases before cost summaries are reviewed.",
      "Reconcile feasibility assumptions with detailed BOQ logic where possible.",
    ],
    method:
      "Each cost group is assigned a measurement basis before totals are compared, reducing the risk of applying one rate logic to incompatible scope items.",
    output:
      "More reliable cost summaries with fewer hidden basis conflicts and clearer review notes.",
  },
  {
    number: "04",
    slug: "drawing-design-change-review",
    title: "Drawing & Design Change Review",
    description:
      "Reviewing drawings, specifications, and design revisions to identify quantity changes and cost impact.",
    tags: ["Drawing Review", "Cost Impact", "Coordination"],
    scope: [
      "Review drawing revisions and specification updates for QS impact.",
      "Identify quantity changes across CSA work items.",
      "Coordinate cost implications with project, BIM, finance, and procurement teams.",
    ],
    method:
      "Revisions are checked against previous scope assumptions, then translated into quantity and cost impact notes for decision-making.",
    output:
      "A structured view of design-change impact that supports faster coordination and budget control.",
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function PageHeader({ label, title, children }) {
  return (
    <section className="pageHero">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Section({ label, title, children }) {
  return (
    <section className="section">
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

function WorkRows({ items }) {
  return (
    <div className="workList">
      {items.map((work) => (
        <Link className="workItem" to={`/work/${work.slug}`} key={work.slug}>
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
        </Link>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <main className="pageContent">
      <section className="hero">
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
          <Link to="/work">View Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </section>

      <Section label="Selected Work" title="Project-focused QS workflows">
        <WorkRows items={works.slice(0, 3)} />
      </Section>
    </main>
  );
}

function WorkPage() {
  return (
    <main className="pageContent">
      <PageHeader label="Selected Work" title="Work">
        <p className="pageIntro">
          A focused index of QS workflows for feasibility estimation, BOQ/RAB
          structure, cost-basis reconciliation, and design-change review.
        </p>
      </PageHeader>
      <Section label="Index" title="Selected workflows">
        <WorkRows items={works} />
      </Section>
    </main>
  );
}

function WorkDetailPage() {
  const { slug } = useParams();
  const work = works.find((item) => item.slug === slug);

  if (!work) return <NotFoundPage />;

  return (
    <main className="pageContent">
      <article className="detailPage">
        <Link className="backLink" to="/work">Back to Work</Link>
        <p className="eyebrow">{work.number}</p>
        <h1>{work.title}</h1>
        <p className="pageIntro">{work.description}</p>
        <div className="tagList detailTags">
          {work.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="detailGrid">
          <section>
            <p className="eyebrow">Overview</p>
            <p>{work.description}</p>
          </section>
          <section>
            <p className="eyebrow">Scope</p>
            <ul>
              {work.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <p className="eyebrow">Method</p>
            <p>{work.method}</p>
          </section>
          <section>
            <p className="eyebrow">Output / Value</p>
            <p>{work.output}</p>
          </section>
        </div>
      </article>
    </main>
  );
}

function ExperiencePage() {
  return (
    <main className="pageContent">
      <PageHeader label="Experience" title="Professional background">
        <p className="pageIntro">
          Quantity surveying, cost estimation, BOQ review, procurement
          coordination, and design-change cost analysis across property
          development workflows.
        </p>
      </PageHeader>
      <Section label="Timeline" title="Experience">
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
    </main>
  );
}

function ToolsPage() {
  return (
    <main className="pageContent">
      <PageHeader label="Capability / Tools" title="Tools">
        <p className="pageIntro">
          A compact view of QS capabilities, software tools, education, and
          certification support.
        </p>
      </PageHeader>
      <Section label="Capability / Tools" title="Built for cost clarity">
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
      <Section label="Education / Certification" title="Supporting credentials">
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
  );
}

function ContactPage() {
  return (
    <main className="pageContent">
      <PageHeader label="Contact" title="Contact">
        <p className="pageIntro">
          Available for QS, BOQ, cost estimation, feasibility, and CSA
          cost-basis coordination conversations.
        </p>
      </PageHeader>
      <section className="section">
        <div className="sectionInner contactList">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
            WhatsApp: {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <p>{profile.location}</p>
        </div>
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="pageContent">
      <PageHeader label="404" title="Page not found">
        <p className="pageIntro">
          The page you are looking for does not exist.
        </p>
        <div className="heroLinks">
          <Link to="/">Return Home</Link>
          <Link to="/work">View Work</Link>
        </div>
      </PageHeader>
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="simpleFooter">
      <div className="footerInner">
        <div className="footerMark">BP</div>
        <h2>{profile.name}</h2>
        <p>{profile.title} / {profile.location}</p>
        <div className="footerContact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
            WhatsApp: {profile.phone}
          </a>
        </div>
        <nav aria-label="Footer navigation">
          <Link to="/work">Work</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/">Top</Link>
        </nav>
        <small>Copyright 2026 Boris Prilyan Sidabutar. All rights reserved.</small>
      </div>
    </footer>
  );
}

function App() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  return (
    <div className="page" data-theme={theme}>
      <ScrollToTop />
      <header className="nav">
        <Link to="/" className="brand" aria-label="Home">
          BP
        </Link>
        <nav aria-label="Primary navigation">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/tools">Tools</NavLink>
          <NavLink to="/contact">Contact</NavLink>
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<WorkDetailPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <SiteFooter />
    </div>
  );
}

export default App;

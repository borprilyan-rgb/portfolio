import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import "./App.css";

const profile = {
  name: "Boris Sidabutar",
  fullName: "Boris Prilyan Sidabutar",
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
    period: "Oct 2025 – Present",
    location: "Jakarta, Indonesia",
    bullets: [
      "Prepared CSA quantity take-off and BOQ structures for property development projects.",
      "Supported feasibility cost estimation, budget review, and cost-basis validation.",
      "Reviewed drawings and design revisions to identify quantity and cost impact.",
    ],
  },
  {
    company: "BREIG Property",
    role: "Quantity Surveyor",
    period: "Jan 2025 – Oct 2025",
    location: "Bali, Indonesia",
    bullets: [
      "Coordinated QS, Finance, BIM, and Project teams across project-based cost workflows.",
      "Aligned cost data, BOQs, and estimates with BIM models and design revisions.",
    ],
  },
  {
    company: "Sinarmas Land",
    role: "Quantity Surveyor Coordinator",
    period: "Nov 2021 – Jan 2025",
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
    period: "Mar 2021 – Nov 2021",
    location: "Jakarta, Indonesia",
    bullets: [
      "Reviewed tender documents, contracts, budgets, and Bills of Quantities.",
      "Tracked construction changes and adjusted budget projections accordingly.",
    ],
  },
  {
    company: "Owens Corning Indonesia",
    role: "Estimator",
    period: "Jan 2019 – Mar 2021",
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
    period: "2018",
  },
];

const certifications = [
  { title: "Cubicost Certificate", meta: "Glodon Indonesia", period: "2026" },
  { title: "Python for Data Science", meta: "Udemy", period: "2025" },
  { title: "Lean Six Sigma", meta: "Universitas Indonesia", period: "2021" },
];

/* ── UTILS ── */

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function GridBg() {
  return <div className="gridBg" aria-hidden="true" />;
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function DividerBar({ title, count }) {
  return (
    <div className="dividerBar">
      <div className="dividerBarInner">
        <span className="dividerBarTitle">{title}</span>
        <div className="dividerBarRule" />
        {count && <span className="dividerBarCount">{count}</span>}
      </div>
    </div>
  );
}

function SectionHeading({ label, title }) {
  return (
    <div className="sectionHeading">
      <Eyebrow>{label}</Eyebrow>
      <h2>{title}</h2>
      <div className="sectionHeadingRule" />
    </div>
  );
}

/* ── WORK ROWS ── */

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

/* ── HOME ── */

function HomePage() {
  return (
    <main className="pageContent">
      {/* Hero */}
      <section className="hero">
        <GridBg />
        <div className="heroInner">
          <Eyebrow>Quantity Surveyor Portfolio · Jakarta</Eyebrow>
          <h1>
            <span>Boris</span>
            <span className="italic">Sidabutar</span>
          </h1>
          <div className="heroRule">
            <p className="heroDesc">
              Civil, Structural, and Architectural quantity take-off, BOQ
              preparation, feasibility cost estimation, and cost-basis
              reconciliation for property development projects.
            </p>
            <div className="heroMetaCol">
              <span>{profile.title}</span>
              <span>Agung Sedayu · 2025</span>
              <span>{profile.location}</span>
            </div>
          </div>
          <div className="ctaRow">
            <Link className="btnFill" to="/work">View Work →</Link>
            <Link className="btnGhost" to="/contact">Contact</Link>
          </div>
        </div>
      </section>

      {/* Selected work preview */}
      <DividerBar title="Selected Work" count={`0${works.length} Projects`} />
      <section className="section">
        <div className="sectionInner">
          <SectionHeading label="Index" title="Project-focused QS workflows" />
          <WorkRows items={works.slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}

/* ── WORK LIST PAGE ── */

function WorkPage() {
  return (
    <main className="pageContent">
      <section className="pageHero">
        <GridBg />
        <div className="pageHeroInner">
          <Eyebrow>Selected Work</Eyebrow>
          <h1>Work</h1>
          <p className="pageIntro">
            A focused index of QS workflows for feasibility estimation, BOQ/RAB
            structure, cost-basis reconciliation, and design-change review.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="sectionInner">
          <SectionHeading label="Index" title="Selected workflows" />
          <WorkRows items={works} />
        </div>
      </section>
    </main>
  );
}

/* ── WORK DETAIL ── */

function WorkDetailPage() {
  const { slug } = useParams();
  const work = works.find((item) => item.slug === slug);

  if (!work) return <NotFoundPage />;

  return (
    <main className="pageContent">
      <article className="detailPage">
        <Link className="backLink" to="/work">← Back to Work</Link>
        <Eyebrow>{work.number}</Eyebrow>
        <h1>{work.title}</h1>
        <p className="pageIntro">{work.description}</p>
        <div className="tagList detailTags">
          {work.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="detailGrid">
          <section>
            <Eyebrow>Overview</Eyebrow>
            <p>{work.description}</p>
          </section>
          <section>
            <Eyebrow>Scope</Eyebrow>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "8px" }}>
              {work.scope.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "12px",
                    color: "var(--muted)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    paddingLeft: "16px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--accent)",
                      fontSize: "10px",
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <Eyebrow>Method</Eyebrow>
            <p>{work.method}</p>
          </section>
          <section>
            <Eyebrow>Output / Value</Eyebrow>
            <p>{work.output}</p>
          </section>
        </div>
      </article>
    </main>
  );
}

/* ── EXPERIENCE ── */

function ExperiencePage() {
  return (
    <main className="pageContent">
      <section className="pageHero">
        <GridBg />
        <div className="pageHeroInner">
          <Eyebrow>Experience</Eyebrow>
          <h1>Professional Background</h1>
          <p className="pageIntro">
            Quantity surveying, cost estimation, BOQ review, procurement
            coordination, and design-change cost analysis across property
            development workflows.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="sectionInner">
          <SectionHeading label="Timeline" title="Experience" />
          <div className="timeline">
            {experience.map((job) => (
              <article
                className="timelineItem"
                key={`${job.company}-${job.period}`}
              >
                <div className="timelineMeta">
                  <span className="period">{job.period}</span>
                  <span className="location">{job.location}</span>
                </div>
                <div className="timelineBody">
                  <div className="company">{job.company}</div>
                  <p className="role">{job.role}</p>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── TOOLS ── */

function ToolsPage() {
  return (
    <main className="pageContent">
      <section className="pageHero">
        <GridBg />
        <div className="pageHeroInner">
          <Eyebrow>Capability / Tools</Eyebrow>
          <h1>Tools</h1>
          <p className="pageIntro">
            A compact view of QS capabilities, software tools, education, and
            certification support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="sectionInner">
          <SectionHeading label="Capability" title="Built for cost clarity" />
          <div className="capabilityGrid">
            <div>
              <p className="capabilityColTitle">Capabilities</p>
              <div className="pillCloud">
                {capabilities.map((cap) => (
                  <span className="pill pillCap" key={cap}>{cap}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="capabilityColTitle">Software</p>
              <div className="pillCloud">
                {tools.map((tool) => (
                  <span className="pill" key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionInner">
          <SectionHeading label="Credentials" title="Education & Certifications" />
          <div className="credentialList">
            {[...education, ...certifications].map((item) => (
              <article
                className="credentialItem"
                key={`${item.title}-${item.period}`}
              >
                <h3>{item.title}</h3>
                <span className="credMeta">{item.meta}</span>
                <span className="credYear">{item.period}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── CONTACT ── */

function ContactPage() {
  return (
    <main className="pageContent">
      <section className="contactHero pageHero">
        <GridBg />
        <div className="pageHeroInner">
          <Eyebrow>Open for collaboration</Eyebrow>
          <h1>Boris Sidabutar</h1>
          <p className="pageIntro" style={{ marginTop: "8px" }}>
            {profile.title} · {profile.location}
          </p>
          <div className="contactLinks">
            <a
              className="contactLink"
              href={`mailto:${profile.email}`}
            >
              <div>
                <p className="contactLinkLabel">Email</p>
                <p className="contactLinkValue">{profile.email}</p>
              </div>
              <span className="contactLinkArrow">→</span>
            </a>
            <a
              className="contactLink"
              href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p className="contactLinkLabel">WhatsApp</p>
                <p className="contactLinkValue">{profile.phone}</p>
              </div>
              <span className="contactLinkArrow">→</span>
            </a>
            <a
              className="contactLink"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p className="contactLinkLabel">LinkedIn</p>
                <p className="contactLinkValue">linkedin.com/in/borissidabutar</p>
              </div>
              <span className="contactLinkArrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── 404 ── */

function NotFoundPage() {
  return (
    <main className="pageContent">
      <section className="pageHero">
        <GridBg />
        <div className="pageHeroInner">
          <Eyebrow>404</Eyebrow>
          <h1>Page not found</h1>
          <p className="pageIntro">The page you are looking for does not exist.</p>
          <div className="notFoundLinks">
            <Link className="btnFill" to="/">Return Home</Link>
            <Link className="btnGhost" to="/work">View Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── FOOTER ── */

function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <span className="footerMark">Boris Sidabutar</span>
        <span className="footerCopyright">
          Copyright 2026 · All rights reserved
        </span>
      </div>
    </footer>
  );
}

/* ── APP ROOT ── */

function App() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  return (
    <div className="page" data-theme={theme}>
      <ScrollToTop />

      <header className="nav">
        <div className="navInner">
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
        </div>
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

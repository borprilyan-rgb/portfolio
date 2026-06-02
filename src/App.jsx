import "./App.css";

const profile = {
  name: "Boris Sidabutar",
  title: "Quantity Surveyor Specialist CSA",
  location: "Kelapa Gading, Jakarta Utara, Indonesia",
  email: "borisprilyan@gmail.com",
  phone: "+62 881 1623 122",
  linkedin: "https://linkedin.com/in/borissidabutar",
};

const experience = [
  {
    company: "Agung Sedayu",
    period: "October 2025 - Present",
    role: "Quantity Surveyor Specialist CSA",
    location: "PIK, Jakarta",
    bullets: [
      "Prepared quantity take-off and BOQ for Civil, Structural, and Architectural works.",
      "Supported project feasibility studies through early-stage cost estimation and budget analysis.",
      "Reviewed drawings, specifications, and design changes to identify cost impact.",
    ],
  },
  {
    company: "BREIG Property (Project-Based)",
    period: "January 2025 - October 2025",
    role: "Quantity Surveyor",
    location: "Kuta, Bali",
    bullets: [
      "Acted as the main liaison between QS, Finance, BIM, and Project teams.",
      "Ensured cost data, BOQs, and estimates were synchronized with BIM models and updated design revisions.",
    ],
  },
  {
    company: "Sinarmas Land",
    period: "November 2021 - January 2025",
    role: "Quantity Surveyor Coordinator",
    location: "Sudirman, Jakarta",
    bullets: [
      "Analyzed supply contracts and Bills of Materials to validate budgets and identify cost variances.",
      "Adjusted procurement forecasts and budget projections in real time to align with project scope changes.",
      "Managed end-to-end sourcing and negotiation for vendors and service contractors to ensure timely delivery.",
    ],
  },
  {
    company: "Agung Podomoro Land",
    period: "March 2021 - November 2021",
    role: "Quantity Surveyor Officer",
    location: "Grogol, Jakarta",
    bullets: [
      "Reviewed tender documents, contracts, budgets, Bills of Quantities, and related project documentation.",
      "Tracked design and construction changes and adjusted budget projections accordingly.",
      "Procured contractor services for project construction works.",
    ],
  },
  {
    company: "Owens Corning Indonesia",
    period: "January 2019 - March 2021",
    role: "Estimator",
    location: "Kelapa Gading, Jakarta",
    bullets: [
      "Assisted in measurement and take-offs to prepare Bills of Quantities for tender purposes.",
      "Measured building designs for required material and worker estimations.",
      "Prepared daily detailed work progress reports for review.",
    ],
  },
];

const skills = [
  ["Quantity Take-Off", "Civil, Structural, and Architectural quantity measurement, BOQ preparation, and drawing-based checking."],
  ["Cost Estimation", "Early-stage feasibility estimates, budget analysis, RAB / BOQ review, and rate comparison."],
  ["Cost Control", "Cost variance review, procurement forecast adjustment, and design-change cost impact analysis."],
  ["Coordination", "Cross-functional coordination between QS, Finance, BIM, project, vendor, and contractor teams."],
  ["Tools", "AutoCAD, Autodesk Revit, SketchUp, Glodon Cubicost, Excel, MS Project, Bluebeam Revu, and Python."],
];

const expertise = [
  "AutoCAD",
  "Autodesk Revit",
  "SketchUp",
  "Glodon Cubicost",
  "Microsoft Excel",
  "Microsoft Project",
  "Bluebeam Revu",
  "Python",
];

const certifications = [
  ["Cubicost Certificate", "Glodon Indonesia", "2026"],
  ["Python for Data Science", "Udemy", "2025"],
  ["Lean Six Sigma", "Universitas Indonesia", "2021"],
];

const education = {
  degree: "Bachelor of Architecture",
  institution: "Universitas Indonesia",
  period: "2014 - 2018",
};

const boqSamples = [
  ["Civil / Structural Works", "Drawing / model quantity", "m² / m³ / kg", "Quantity take-off and BOQ preparation."],
  ["Architectural Works", "GFA / detailed quantity", "m² / unit", "Finishing, door, facade, toilet, and railing quantity review."],
  ["Budget Review", "Cost plan / vendor data", "Rp", "Budget validation and rate comparison."],
  ["Design Change Review", "Drawing revision", "various", "Cost impact identification from revised drawings and specifications."],
  ["BIM-Cost Coordination", "BIM model / BOQ", "various", "Synchronization between cost data, BOQ, and BIM model revisions."],
];

const costBasis = [
  ["Earthworks", "GBA / site basis", "GBA × Earthwork Rate or detailed basis"],
  ["Foundation", "GBA / structural basis", "GBA × Foundation Rate or detailed quantity"],
  ["Structure", "GBA / structural quantity", "Concrete, rebar, formwork, and related structural quantities"],
  ["Architectural", "GFA / detail quantity", "GFA × Architectural Rate or detailed BOQ"],
  ["MEP", "GBA / system basis", "GBA × MEP Rate or system-based estimate"],
  ["External Works", "Area / lump sum", "External quantity × rate or lump sum"],
];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="page">
      <header className="nav">
        <a href="#home" className="brand" aria-label="Home">
          <img src="/profile.jpg" alt="Boris Prilyan" />
        </a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#boq">BOQ</a>
          <a href="#tool">Tool</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroText">
            <p className="eyebrow">Quantity Surveyor Portfolio</p>
            <h1>{profile.name}</h1>
            <h3>{profile.title}</h3>
            <p>
              Quantity Surveyor Specialist with experience in Civil, Structural,
              and Architectural quantity take-off, BOQ preparation, budget analysis,
              procurement coordination, design-change cost review, and BIM-linked
              cost data coordination for property development projects.
            </p>

            <div className="heroButtons">
              <a className="button primary" href="#experience">View Experience</a>
              <a className="button secondary" href="#contact">Contact</a>
            </div>
          </div>

          <aside className="profileCard">
            <h4>Portfolio Focus</h4>
            <ul>
              <li>Civil, Structural & Architectural QS</li>
              <li>BOQ / RAB Preparation</li>
              <li>Feasibility Cost Estimation</li>
              <li>Drawing & Design Change Review</li>
              <li>BIM-Cost Data Coordination</li>
            </ul>
          </aside>
        </section>

        <Section id="experience" eyebrow="Professional Background" title="Work Experience">
          <div className="grid two">
            {experience.map((job) => (
              <article className="card" key={`${job.company}-${job.period}`}>
                <span>{job.period}</span>
                <h3>{job.company}</h3>
                <p><strong>{job.role}</strong> | {job.location}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Core Capability" title="Estimator-Relevant Skills">
          <div className="table">
            {skills.map(([area, capability]) => (
              <div className="tableRow" key={area}>
                <strong>{area}</strong>
                <p>{capability}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="expertise" eyebrow="Software & Tools" title="Technical Expertise">
          <div className="grid three">
            {expertise.map((item) => (
              <article className="card" key={item}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </Section>

        <Section id="boq" eyebrow="BOQ / RAB Sample" title="QS Work Structure">
          <div className="boqTable">
            <div className="boqHeader">
              <span>Work Item</span>
              <span>Basis</span>
              <span>Unit</span>
              <span>Notes</span>
            </div>

            {boqSamples.map(([item, basis, unit, notes]) => (
              <div className="boqRow" key={item}>
                <span>{item}</span>
                <span>{basis}</span>
                <span>{unit}</span>
                <span>{notes}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="basis" eyebrow="Cost Control Logic" title="Cost Basis Summary">
          <div className="boqTable">
            <div className="boqHeader threeCol">
              <span>Cost Group</span>
              <span>Basis</span>
              <span>Example Calculation</span>
            </div>

            {costBasis.map(([group, basis, formula]) => (
              <div className="boqRow threeCol" key={group}>
                <span>{group}</span>
                <span>{basis}</span>
                <span>{formula}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="tool" eyebrow="Interactive Demo" title="Estimation Tool Demo">
          <div className="toolBox">
            <div>
              <h3>Structured Feasibility & Estimation Workflow</h3>
              <p>
                I developed a Python-based estimation workflow to improve calculation
                consistency, reduce manual calculation errors, and make area and cost
                assumptions easier to review.
              </p>
              <ul>
                <li>Area input by project / component</li>
                <li>GBA, GFA, SGFA, and NFA summary</li>
                <li>Cost calculation by work group</li>
                <li>Detailed cost pages for selected work sections</li>
                <li>Excel export / import workflow</li>
              </ul>
            </div>

            <a className="button primary" href="#" target="_blank" rel="noreferrer">
              Add Streamlit Demo Link
            </a>
          </div>
        </Section>

        <Section id="education" eyebrow="Education & Certification" title="Education / Certification">
          <div className="grid two">
            <article className="card">
              <h3>{education.degree}</h3>
              <p>{education.institution}</p>
              <span>{education.period}</span>
            </article>

            {certifications.map(([name, issuer, year]) => (
              <article className="card" key={name}>
                <h3>{name}</h3>
                <p>{issuer}</p>
                <span>{year}</span>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Get in Touch">
          <div className="contactBox">
            <p><strong>{profile.name}</strong></p>
            <p>{profile.title}</p>
            <p>{profile.location}</p>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <p>LinkedIn: {profile.linkedin}</p>
            <p>Language: English (TOEFL 607), Bahasa Indonesia</p>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;

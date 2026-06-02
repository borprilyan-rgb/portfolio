import "./App.css";

const profile = {
  name: "Boris Prilyan",
  title: "Quantity Surveyor / Cost Estimator",
  location: "Jakarta, Indonesia",
  email: "your.email@example.com",
  phone: "+62 896 6980 1069",
  linkedin: "https://linkedin.com/in/borissidabutar",
};

const skills = [
  ["Drawing Review", "Architectural plans, interior layouts, area schedules, facade, doors, railing"],
  ["Quantity Take-Off", "GBA, GFA, SGFA, NFA, finishing area, doors, facade, railing, external works"],
  ["Cost Estimation", "BOQ, RAB, unit rate buildup, budget review, rate comparison"],
  ["Cost Documentation", "Cost summary, calculation notes, tender / contract support"],
  ["Tools", "Excel, Streamlit / Python estimation tool, PDF and drawing review tools"],
];

const projects = [
  {
    type: "Mixed-Use Development Project",
    scope: "Area calculation, early-stage budget, architectural and MEP cost basis",
    role: "QS Coordinator",
  },
  {
    type: "Residential Tower Project",
    scope: "GBA / GFA review, architectural quantity checking, BOQ support",
    role: "QS / Estimator",
  },
  {
    type: "Interior / Facility Area",
    scope: "Finishing, doors, toilet, railing, and cost summary review",
    role: "Cost Support",
  },
];

const boqSamples = [
  ["Basic Finishes Work", "GFA", "m²", "Calculated from area schedule"],
  ["Facade / Window Wall", "Facade Area", "m²", "Based on building perimeter and floor height"],
  ["Door Works", "Door Count", "unit", "Based on room count and drawing"],
  ["Railing", "Length", "m", "Based on balcony / railing layout"],
  ["Toilet Works", "Toilet Count", "unit", "Based on unit / facility layout"],
];

const costBasis = [
  ["Earthworks", "GBA", "GBA × Earthwork Rate"],
  ["Foundation", "GBA", "GBA × Foundation Rate"],
  ["Structure", "GBA", "GBA × Structure Rate"],
  ["Architectural", "GFA / Detail Qty", "GFA × Architectural Rate or detailed BOQ"],
  ["MEP", "GBA", "GBA × MEP Rate"],
  ["FF&E", "Rooms / Units", "Number of rooms × FF&E Rate"],
  ["External Works", "Area / LS", "External quantity × rate or lump sum"],
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
        <a href="#home" className="brand">BP</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#boq">BOQ</a>
          <a href="#tool">Tool</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroText">
            <p className="eyebrow">Cost Estimation Portfolio</p>
            <h1>{profile.name}</h1>
            <h3>{profile.title}</h3>
            <p>
              Quantity Surveyor Coordinator with experience in cost estimation,
              BOQ / RAB preparation, quantity take-off, technical drawing review,
              budgeting, and cost coordination for property development projects.
            </p>

            <div className="heroButtons">
              <a className="button primary" href="#case-studies">View Case Studies</a>
              <a className="button secondary" href="#contact">Contact</a>
            </div>
          </div>

          <aside className="profileCard">
            <h4>Portfolio Focus</h4>
            <ul>
              <li>Architectural & Interior Estimation</li>
              <li>BOQ / RAB Preparation</li>
              <li>Area Basis Reconciliation</li>
              <li>Excel + Estimation Workflow</li>
            </ul>
          </aside>
        </section>

        <Section id="experience" eyebrow="Professional Background" title="Experience Summary">
          <div className="grid three">
            {projects.map((project) => (
              <article className="card" key={project.type}>
                <h3>{project.type}</h3>
                <p>{project.scope}</p>
                <span>{project.role}</span>
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

        <Section id="case-studies" eyebrow="Selected Work Logic" title="Case Studies">
          <div className="grid two">
            <article className="caseCard">
              <h3>01 — Architectural Cost Estimate</h3>
              <p>
                Prepared architectural cost estimate using separated quantity basis:
                GFA, facade area, door count, railing length, and toilet count.
              </p>
              <p className="note">
                Key point: each item should show its measurement basis, not only the final amount.
              </p>
            </article>

            <article className="caseCard">
              <h3>02 — Interior / Finishing BOQ Logic</h3>
              <p>
                Structured BOQ logic for floor finish, wall finish, ceiling, door,
                toilet, kitchen / built-in, and other interior-related items.
              </p>
              <p className="note">
                Key point: the BOQ should show how the quantity was measured.
              </p>
            </article>

            <article className="caseCard">
              <h3>03 — Area Basis Reconciliation</h3>
              <p>
                Separated GBA, GFA, SGFA, NFA, parking, roof / deck, service area,
                and net usable area to prevent mixed-basis calculations.
              </p>
              <p className="note">
                Key point: GBA, GFA, SGFA, and NFA should not be treated as the same number.
              </p>
            </article>

            <article className="caseCard">
              <h3>04 — Cost Summary by Basis</h3>
              <p>
                Grouped cost by correct basis such as GBA, GFA, rooms, detailed quantity,
                area, and lump sum for easier review.
              </p>
              <p className="note">
                Key point: cost summary must be traceable and reviewable.
              </p>
            </article>
          </div>
        </Section>

        <Section id="boq" eyebrow="BOQ / RAB Sample" title="Architectural & Interior BOQ Structure">
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
              <h3>Structured Estimation Workflow</h3>
              <p>
                I developed an estimation workflow to improve calculation consistency,
                reduce manual calculation errors, and make assumptions easier to review.
              </p>
              <ul>
                <li>Area input by project / component</li>
                <li>GBA, GFA, SGFA, and NFA summary</li>
                <li>Cost calculation by work group</li>
                <li>Detailed cost pages for selected items</li>
                <li>Excel export / import workflow</li>
              </ul>
            </div>

            <a className="button primary" href="#" target="_blank" rel="noreferrer">
              Add Streamlit Demo Link
            </a>
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
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
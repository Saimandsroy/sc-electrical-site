import './App.css'

const contact = {
  phoneDisplay: '07828 915485',
  phoneHref: 'tel:+447828915485',
  email: 'scelectrical0@gmail.com',
  location: 'Hayle, Cornwall',
}

const stats = [
  { value: '24+', label: 'years of hands-on experience' },
  { value: 'NAPIT', label: 'registered for trusted compliance' },
  { value: 'Free', label: 'quotes before the work begins' },
]

const services = [
  {
    title: 'Rewires & Fuseboards',
    description:
      'Clean, safe upgrades for ageing systems, replacement consumer units, and full rewiring projects.',
  },
  {
    title: 'EICR & Safety Reports',
    description:
      'Inspection, testing, and condition reporting to help homeowners and landlords stay ahead of risks.',
  },
  {
    title: 'Lighting & Power',
    description:
      'Extra sockets, recessed spotlights, outdoor power, and practical lighting that elevates daily use.',
  },
  {
    title: 'Garden, Shed & Garage Supply',
    description:
      'Reliable power runs for workshops, summer houses, garages, and outdoor spaces that need to work harder.',
  },
  {
    title: 'Ventilation & Smoke Detection',
    description:
      'Extraction, detectors, and safety-first electrical additions that make spaces healthier and more secure.',
  },
  {
    title: 'Heating & Small Jobs',
    description:
      'Friendly support for heating connections, fixes, upgrades, and those smaller jobs other firms often skip.',
  },
]

const highlights = [
  'Local electrician serving Hayle and surrounding Cornwall',
  'Fully insured with a practical, no-fuss approach',
  'No job too small and free quotations available',
  'Domestic-focused work presented with clean, tidy standards',
]

const process = [
  {
    step: '01',
    title: 'Talk through the job',
    copy: 'A quick call or email is enough to understand the scope and recommend the right next step.',
  },
  {
    step: '02',
    title: 'Receive a clear quote',
    copy: 'Straightforward pricing keeps the process calm, transparent, and easy to move forward with.',
  },
  {
    step: '03',
    title: 'Get safe, neat installation',
    copy: 'The work is carried out with attention to safety, function, and a finish that feels properly looked after.',
  },
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-pulse" />
            Local electrician in Cornwall
          </div>
          <h1>S C Electrical</h1>
          <p className="hero-lead">
            Safe, tidy electrical work for homes, outbuildings, upgrades, and
            everyday fixes. Built around experience, trust, and a friendly
            service from first contact to final switch-on.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={contact.phoneHref}>
              Call {contact.phoneDisplay}
            </a>
            <a className="button button-secondary" href={`mailto:${contact.email}`}>
              Email for a quote
            </a>
          </div>

          <ul className="trust-row" aria-label="Business trust signals">
            <li>24+ years experience</li>
            <li>NAPIT registered</li>
            <li>Fully insured</li>
            <li>Free quotes</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-frame">
            <div className="visual-grid" />
            <div className="wire wire-one" />
            <div className="wire wire-two" />
            <div className="wire wire-three" />
            <div className="glow glow-one" />
            <div className="glow glow-two" />

            <div className="inspection-card">
              <span className="inspection-label">Showcase focus</span>
              <strong>Electrical upgrades that feel dependable</strong>
              <p>
                Rewires, fuseboards, EICRs, sockets, lighting, and power for
                the spaces that matter most.
              </p>
            </div>

            <div className="mini-panel panel-left">
              <span>Safety first</span>
              <strong>Inspected. Tested. Installed with care.</strong>
            </div>

            <div className="mini-panel panel-right">
              <span>Fast contact</span>
              <strong>{contact.email}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Key facts">
        {stats.map((item) => (
          <article className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section-grid">
        <div className="section-heading">
          <p className="section-kicker">What the business does</p>
          <h2>Electrical services designed for real homes and practical spaces</h2>
          <p>
            This showcase site is built around the publicly listed services for
            S C Electrical, arranged to feel trustworthy, modern, and easy to
            scan for potential customers.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-mark" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dual-section">
        <article className="feature-panel feature-panel-dark">
          <p className="section-kicker">Why customers would choose them</p>
          <h2>Friendly local service backed by experience and compliance</h2>
          <ul className="check-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="feature-panel feature-panel-light">
          <p className="section-kicker">How enquiries can flow</p>
          <h2>A simple three-step journey from first message to finished work</h2>
          <div className="process-list">
            {process.map((item) => (
              <div className="process-item" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="contact-banner">
        <div>
          <p className="section-kicker">Contact details</p>
          <h2>Ready to turn this into a live brochure site</h2>
          <p>
            Current public contact information for the business points to{' '}
            {contact.location}. The layout is ready to be extended with
            testimonials, project photos, or a booking form later.
          </p>
        </div>

        <div className="contact-card">
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.location}</span>
        </div>
      </section>
    </main>
  )
}

export default App

import './App.css'

const contact = {
  phoneDisplay: '07828 915485',
  phoneHref: 'tel:+447828915485',
  email: 'scelectrical0@gmail.com',
  location: 'Hayle, Cornwall',
  serviceArea: 'Hayle, West Cornwall & nearby areas',
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const heroBadges = ['24+ Years Experience', 'NAPIT Registered', 'Fully Insured']

const heroStats = [
  { value: '24+', label: 'Years' },
  { value: 'Free', label: 'Quotes' },
  { value: 'Local', label: 'Hayle Based' },
]

const stats = [
  { value: '24+', label: 'years of electrical experience' },
  { value: 'Domestic', label: 'upgrades, repairs and safety work' },
  { value: 'Free Quotes', label: 'clear pricing before the work starts' },
]

const services = [
  {
    title: 'Consumer Units & Rewires',
    description:
      'Modern fuseboard upgrades, partial rewires, and full property rewires built around safety and long-term reliability.',
  },
  {
    title: 'Inspection, Testing & EICR',
    description:
      'Electrical checks and condition reports for homeowners, landlords, and anyone wanting confidence in their installation.',
  },
  {
    title: 'Sockets, Lighting & Switching',
    description:
      'Extra sockets, recessed spotlights, feature lighting, replacements, and everyday practical improvements.',
  },
  {
    title: 'Sheds, Garages & Outdoor Power',
    description:
      'Power supplied to workshops, summer houses, garages, garden buildings, and external spaces that need dependable use.',
  },
  {
    title: 'Smoke Detection & Extraction',
    description:
      'Safety upgrades including extractor fans, smoke detection, and clean finishing details for healthier spaces.',
  },
  {
    title: 'Heating & Small Electrical Jobs',
    description:
      'Helpful local support for heating connections, fault finding, and the smaller electrical jobs that still matter.',
  },
]

const promises = [
  'Friendly, local electrician with a practical no-fuss approach',
  'Work delivered with care, tidiness, and clear communication',
  'Trusted upgrades for homes, renovations, and everyday repairs',
  'No job too small and free quotes available before work begins',
]

const process = [
  {
    step: '01',
    title: 'Initial call or email',
    copy: 'Share the job, the issue, or the upgrade you have in mind and get a quick, helpful response.',
  },
  {
    step: '02',
    title: 'Clear recommendation',
    copy: 'Receive practical advice, scope, and straightforward pricing with no pressure or confusing wording.',
  },
  {
    step: '03',
    title: 'Safe, clean completion',
    copy: 'The installation or repair is carried out to a high standard with attention to function, finish, and safety.',
  },
]

const trustPoints = [
  'Rewires and fuseboard upgrades',
  'EICR safety condition reports',
  'Extra sockets and recessed lighting',
  'Garage, shed and outside power',
]

const testimonials = [
  {
    quote:
      'Professional electrical work should feel calm, clear, and trustworthy from the first conversation onwards.',
    name: 'Showcase Positioning',
    role: 'Brand message for the site',
  },
  {
    quote:
      'This layout is designed to present S C Electrical like a premium local contractor while keeping the message friendly and approachable.',
    name: 'Website Direction',
    role: 'Conversion-focused presentation',
  },
]

function App() {
  return (
    <div className="site-page">
      <header className="site-header">
        <div className="utility-bar">
          <div className="utility-wrap">
            <p className="utility-area">{contact.serviceArea}</p>
            <div className="utility-links">
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        </div>

        <div className="nav-shell">
          <div className="brand-lockup">
            <span className="brand-mark">SC</span>
            <div>
              <strong>S C Electrical</strong>
              <span>Local Electrician</span>
            </div>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#contact">
            Free Quote
          </a>
        </div>
      </header>

      <main className="page-shell">
        <section className="hero-section">
          <div className="hero-media">
            <img
              src="/hero-electrician.jpg"
              alt="Electrician testing electrical panel wiring"
            />
            <div className="hero-overlay" />

            <div className="hero-copy">
              <p className="section-kicker section-kicker-light">
                Trusted electrical work in Cornwall
              </p>
              <h1>
                <span>Modern electrical</span>
                <span className="hero-title-accent">upgrades for</span>
                <span>safer homes.</span>
              </h1>
              <p className="hero-text">
                Premium residential electrical work with a cleaner, more
                professional presentation built to feel trustworthy at first
                glance.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href={contact.phoneHref}>
                  Call {contact.phoneDisplay}
                </a>
                <a className="button button-secondary" href="#services">
                  View Services
                </a>
              </div>

              <ul className="hero-badges" aria-label="Trust signals">
                {heroBadges.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
            </div>

            <div className="floating-card card-primary">
              <span>Fast contact</span>
              <strong>{contact.location}</strong>
              <p>Domestic installations, repairs, testing and upgrade work.</p>
            </div>

            <div className="hero-stat-row" aria-label="Hero business stats">
              {heroStats.map((item) => (
                <div className="hero-stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Business highlights">
          {stats.map((item) => (
            <article className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="intro-band">
          <div className="intro-copy">
            <p className="section-kicker">Built for trust and enquiries</p>
            <h2>A stronger contractor-style homepage with richer visual hierarchy</h2>
            <p>
              The redesign takes cues from high-performing electrician websites:
              bold top navigation, service-led hero messaging, high-contrast CTA
              buttons, clean typography, and structured sections that make the
              business feel established and dependable.
            </p>
          </div>

          <div className="intro-panel">
            <span>Service area</span>
            <p className="intro-service-area">{contact.serviceArea}</p>
            <span>Common service focus</span>
            <ul>
              {trustPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="section-kicker">Electrical services</p>
            <h2>Everything presented with a more premium, client-ready feel</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-number">0{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-showcase" id="why-us">
          <article className="showcase-dark">
            <p className="section-kicker section-kicker-light">Why people choose local specialists</p>
            <h2>Friendly service, safety-first work, and practical expertise.</h2>
            <ul className="promise-list">
              {promises.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="showcase-light" id="process">
            <p className="section-kicker">Simple customer journey</p>
            <h2>Clear steps from first enquiry to finished installation</h2>
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

        <section className="testimonials-section">
          <div className="section-heading">
            <p className="section-kicker">Premium presentation</p>
            <h2>Messaging blocks designed to feel credible and conversion-ready</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p className="testimonial-quote">“{item.quote}”</p>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="section-kicker">Contact S C Electrical</p>
            <h2>Ready for a polished brochure site that feels established?</h2>
            <p>
              This version is shaped to look more like a strong service
              business website: clearer hierarchy, stronger visuals, and better
              customer-facing calls to action.
            </p>
          </div>

          <div className="contact-panel">
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span>{contact.location}</span>
            <button className="button button-primary button-block" type="button">
              Free Quote Available
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

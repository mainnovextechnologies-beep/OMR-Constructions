
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  HardHat,
  Building2,
  Zap,
  Wind,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send
} from 'lucide-react';
import './style.css';

const PHONE = '9100104476';
const EMAIL = 'omar.constructionss@gmail.com';
const ADDRESS = '24-3-725, Ambedkar Nagar, Dargamitta, Nellore - 524 003';

const MAP =
  'https://www.google.com/maps?q=14.4368897,79.9661707&z=17&output=embed';

// PROJECT PHOTOGRAPHS
const photos = [
  { src: '/images/portfolio/project-01.webp', title: 'Photo 1 · Plot-A Front Elevation', type: 'Exterior & Elevations' },
  { src: '/images/portfolio/project-02.webp', title: 'Photo 2 · Interlock Work @ Plot-A Neighbour Side', type: 'External Works' },
  { src: '/images/portfolio/project-03.webp', title: 'Photo 3 · Passage View @ Accommodation Building', type: 'Accommodation Building' },
  { src: '/images/portfolio/project-04.webp', title: 'Photo 4 · Toilets Inside View @ Accommodation Building', type: 'Accommodation Building' },
  { src: '/images/portfolio/project-05.webp', title: 'Photo 3 · Low Profile Cladding Works @ Plot-A Road Side & Rear Side', type: 'Exterior & Cladding' },
  { src: '/images/portfolio/project-06.webp', title: 'Photo 4 · Elevation Along the Road for Plot-A', type: 'Exterior & Elevations' },
  { src: '/images/portfolio/project-07.webp', title: 'Photo 5 · Elevation Along the Road for Plot-A', type: 'Exterior & Elevations' },
  { src: '/images/portfolio/project-08.webp', title: 'Photo 6 · Internal Works @ Plot-A', type: 'Industrial Interiors' },
  { src: '/images/portfolio/project-09.webp', title: 'Photo 7 · Plot-A Internal Works', type: 'Industrial Interiors' },
  { src: '/images/portfolio/project-10.webp', title: 'Photo 8 · Plot-A Office Room', type: 'Accommodation Building' },
  { src: '/images/portfolio/project-11.webp', title: 'Photo 17 · Accommodation Building Inside Bedroom', type: 'Accommodation Building' },
  { src: '/images/portfolio/project-12.webp', title: 'Photo 18 · Accommodation Building Roof', type: 'Roof & Utility' },
  { src: '/images/portfolio/project-13.webp', title: 'Photo 19 · Accommodation Building Pump Room', type: 'Roof & Utility' },
  { src: '/images/portfolio/project-14.webp', title: 'Photo 20 · Plot-B Front Elevation', type: 'Exterior & Elevations' },
  { src: '/images/portfolio/project-15.webp', title: 'Photo 21 · Plot-B & Ancillary Building Side Elevation', type: 'Exterior & Elevations' },
  { src: '/images/portfolio/project-16.webp', title: 'Photo 22 · Plot-B Road Side Elevation', type: 'Exterior & Elevations' },
  { src: '/images/portfolio/project-17.webp', title: 'Photo 23 · Plot-B Internal Works', type: 'Industrial Interiors' },
  { src: '/images/portfolio/project-18.webp', title: 'Photo 24 · Plot-B Internal Works', type: 'Industrial Interiors' },
  { src: '/images/portfolio/project-19.webp', title: 'Photo 29 · Waste Oil Collecting Tank', type: 'Roof & Utility' },
  { src: '/images/portfolio/project-20.webp', title: 'Photo 30 · Plot-B Reception Area', type: 'Industrial Interiors' },
  { src: '/images/portfolio/project-21.webp', title: 'Photo 11 · Sectional Water Tank @ Plot-A', type: 'Roof & Utility' },
  { src: '/images/portfolio/project-22.webp', title: 'Photo 12 · Plot-A Roof', type: 'Roof & Utility' },
  { src: '/images/portfolio/project-23.webp', title: 'Photo 11 · Sectional Water Tank & Booster Pump @ Plot-A', type: 'Roof & Utility' },
  { src: '/images/portfolio/project-24.webp', title: 'Photo 12 · Neighbour Side View @ Plot-A', type: 'External Works' },
  { src: '/images/portfolio/project-25.webp', title: 'Photo 3 · Low Profile Cladding Works @ Plot-A Road Side & Rear Side', type: 'Exterior & Cladding' },
  { src: '/images/portfolio/project-26.webp', title: 'Photo 4 · Elevation Along the Road for Plot-A', type: 'Exterior & Elevations' },
  { src: '/images/portfolio/project-27.webp', title: 'Photo 9 · Plot-A Office Room Toilet', type: 'Accommodation Building' },
  { src: '/images/portfolio/project-28.webp', title: 'Photo 10 · Sectional Water Tank @ Plot-A', type: 'Roof & Utility' }
];

// ONLY THREE SERVICES
const services = [
  {
    icon: Building2,
    title: 'CIVIL WORKS',
    desc: 'Complete civil construction solutions, including building construction, foundations, structural works, RCC works, masonry and finishing.'
  },
  {
    icon: Zap,
    title: 'ELECTRICAL & PLUMBING',
    desc: 'Professional electrical and plumbing solutions, including electrical wiring, lighting, power installations, water supply, drainage and sanitary systems.'
  },
  {
    icon: Wind,
    title: 'HVAC WORKS',
    desc: 'Heating, ventilation and air conditioning solutions, including HVAC installation, ducting, ventilation systems and climate control.'
  }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [sent, setSent] = useState(false);

  const galleryCategories = [
    'All',
    ...new Set(photos.map(p => p.type))
  ];

  const visiblePhotos =
    active === 'All'
      ? photos
      : photos.filter(p => p.type === active);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
    setMenu(false);
  };

  const wa = (
    msg = 'Hello Omar Constructions, I would like to enquire about your services.'
  ) => {
    window.open(
      `https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const submit = e => {
    e.preventDefault();

    const f = new FormData(e.currentTarget);

    const msg = `New Website Enquiry – Omar Constructions

Name: ${f.get('name')}
Phone: ${f.get('phone')}
Email: ${f.get('email') || 'Not provided'}
Service: ${f.get('service')}
Project Location: ${f.get('location') || 'Not provided'}
Project Details: ${f.get('details') || 'Not provided'}

Please contact me regarding this enquiry.`;

    setSent(true);
    wa(msg);
    e.currentTarget.reset();
  };

  const nav = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Services', 'services'],
    ['Our Work', 'projects'],
    ['Contact', 'contact']
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="wrap topinner">
          <span>
            <MapPin size={14} />
            Dargamitta, Nellore, Andhra Pradesh
          </span>

          <div>
            <a href={`tel:+91${PHONE}`}>
              <Phone size={14} /> +91 91001 04476
            </a>

            <a href={`mailto:${EMAIL}`}>
              <Mail size={14} /> {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="wrap navrow">

          <a
            className="brand"
            href="#home"
            onClick={e => {
              e.preventDefault();
              go('home');
            }}
          >
            <img
              src="/images/omar-logo.webp"
              alt="Omar Constructions logo"
            />
          </a>

          <nav className={menu ? 'nav open' : 'nav'}>
            {nav.map(([n, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={e => {
                  e.preventDefault();
                  go(id);
                }}
              >
                {n}
              </a>
            ))}

            <button
              className="navcta"
              onClick={() => go('contact')}
            >
              Get a Quote <ArrowUpRight size={16} />
            </button>
          </nav>

          <button
            className="menubtn"
            aria-label="Toggle menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>

        </div>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero">
          <div className="heroimage" />
          <div className="hero-shade" />

          <div className="wrap hero-content">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="hero-copy"
            >
              <div className="eyebrow light">
                <span /> OMAR CONSTRUCTIONS · NELLORE
              </div>

              <h1>
                Strong foundations.
                <br />
                <em>Lasting structures.</em>
              </h1>

              <p>
                We deliver professional Civil Works, Electrical & Plumbing,
                and HVAC Works with a focus on quality workmanship,
                practical planning and dependable project execution.
              </p>

              <div className="hero-actions">
                <button
                  className="btn orange"
                  onClick={() => go('contact')}
                >
                  Discuss Your Project <ArrowUpRight size={18} />
                </button>

                <button
                  className="btn ghost"
                  onClick={() => go('projects')}
                >
                  Explore Our Work <ArrowRight size={18} />
                </button>
              </div>

              <div className="hero-note">
                <span className="note-icon">
                  <HardHat size={19} />
                </span>

                <span>
                  <b>Er. Feroz</b>
                  <small>Dip. B.Tech., MIE · Consulting Engineer</small>
                </span>
              </div>
            </motion.div>

            <div className="hero-stamp">
              <span>ENGINEERING</span>
              <b>
                BUILT ON
                <br />
                TRUST.
              </b>
              <small>Planning · Execution · Care</small>
            </div>

          </div>

          <div className="hero-bottom">
            <div className="wrap bottom-inner">
              <span>01 / 05</span>
              <span className="line" />
              <span>BUILDING YOUR VISION, ONE PROJECT AT A TIME</span>
            </div>
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="intro-strip">
          <div className="wrap strip-grid">

            <div>
              <strong>01</strong>
              <span>
                Civil
                <br />
                Works
              </span>
            </div>

            <div>
              <strong>02</strong>
              <span>
                Electrical
                <br />
                & Plumbing
              </span>
            </div>

            <div>
              <strong>03</strong>
              <span>
                HVAC
                <br />
                Works
              </span>
            </div>

            <div className="strip-call">
              <span>Have a project in mind?</span>
              <a href={`tel:+91${PHONE}`}>
                Call +91 91001 04476 <ArrowUpRight size={17} />
              </a>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="wrap about-grid">

            <div className="about-visual">
              <div className="portrait-frame">
                <img
                  src="/images/engineer-feroz.webp"
                  alt="Er. Feroz, Consulting Engineer at Omar Constructions"
                />
              </div>

              <div className="experience-card">
                <span>YOUR PROJECT</span>
                <b>
                  In capable
                  <br />
                  hands.
                </b>
                <small>OMAR CONSTRUCTIONS</small>
              </div>
            </div>

            <div className="about-copy">
              <div className="eyebrow">
                <span /> ABOUT OMAR CONSTRUCTIONS
              </div>

              <h2>
                Engineering spaces
                <br />
                for <em>real life.</em>
              </h2>

              <p className="lead">
                Led by Er. Feroz, Omar Constructions provides
                comprehensive Civil Works, Electrical & Plumbing,
                and HVAC Works with a practical, site-focused approach.
              </p>

              <p>
                From civil construction and structural execution to
                electrical installations, plumbing systems and HVAC
                solutions, our focus is on understanding each project's
                requirements and delivering quality at every stage.
              </p>

              <div className="credentials">

                <div>
                  <CheckCircle2 />
                  <span>
                    <b>Professional guidance</b>
                    <small>Consulting Engineer – Er. Feroz</small>
                  </span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>
                    <b>Site-focused execution</b>
                    <small>Practical coordination and workmanship</small>
                  </span>
                </div>

              </div>

              <button
                className="text-link"
                onClick={() => go('contact')}
              >
                Talk to our engineer <ArrowUpRight size={17} />
              </button>
            </div>

          </div>
        </section>

        {/* SERVICES - ONLY THREE */}
        <section id="services" className="section services">
          <div className="wrap">

            <div className="section-head">
              <div>
                <div className="eyebrow">
                  <span /> WHAT WE DO
                </div>

                <h2>
                  Our core services.
                  <br />
                  <em>Built around quality.</em>
                </h2>
              </div>

              <p>
                Explore our three core service categories:
                Civil Works, Electrical & Plumbing, and HVAC Works.
                Contact us to discuss your project requirements.
              </p>
            </div>

            <div className="service-grid">
              {services.map((s, i) => (
                <motion.article
                  className="service-card"
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="service-top">
                    <span>0{i + 1}</span>
                    <s.icon size={25} />
                  </div>

                  <h3>{s.title}</h3>

                  <p>{s.desc}</p>

                  <button
                    onClick={() =>
                      wa(
                        `Hello Omar Constructions, I would like to enquire about ${s.title}. Please share more details.`
                      )
                    }
                  >
                    Enquire about service <ArrowUpRight size={16} />
                  </button>
                </motion.article>
              ))}
            </div>

          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section id="projects" className="section projects">
          <div className="wrap">

            <div className="section-head light-head">
              <div>
                <div className="eyebrow light">
                  <span /> SELECTED SITE PHOTOGRAPHS
                </div>

                <h2>
                  Work in progress.
                  <br />
                  <em>Built with purpose.</em>
                </h2>
              </div>

              <p>
                Real photographs shared for Omar Constructions.
                Select an image to view it larger.
              </p>
            </div>

            <div
              className="gallery-filters"
              aria-label="Filter project photographs"
            >
              {galleryCategories.map(category => (
                <button
                  key={category}
                  className={active === category ? 'active' : ''}
                  onClick={() => setActive(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="gallery-grid">
              {visiblePhotos.map(p => (
                <button
                  className="gallery-item"
                  key={p.src}
                  onClick={() =>
                    setLightbox(
                      photos.findIndex(photo => photo.src === p.src)
                    )
                  }
                  aria-label={`View ${p.title}`}
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                  />

                  <span className="gallery-caption">
                    {p.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="gallery-foot">
              <span>PROJECT PHOTOGRAPHY · OMAR CONSTRUCTIONS</span>

              <button onClick={() => go('contact')}>
                Discuss a similar project <ArrowUpRight size={16} />
              </button>
            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section className="section process">
          <div className="wrap">

            <div className="eyebrow">
              <span /> HOW WE WORK
            </div>

            <div className="section-head">
              <h2>
                A clear process.
                <br />
                <em>From first call to site.</em>
              </h2>

              <p>
                Every project starts with a conversation.
                We understand the requirement and discuss
                the next practical steps with you.
              </p>
            </div>

            <div className="process-grid">
              {[
                ['01', 'Understand', 'Discuss your requirements, site and project goals.'],
                ['02', 'Plan', 'Review the scope, priorities and estimated requirements.'],
                ['03', 'Execute', 'Coordinate the agreed construction and engineering work.'],
                ['04', 'Review', 'Monitor progress and communicate key updates.']
              ].map(x => (
                <div className="process-step" key={x[0]}>
                  <b>{x[0]}</b>
                  <div className="step-line" />
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* QUOTE BAND */}
        <section className="quote-band">
          <div className="wrap quote-inner">

            <div>
              <div className="eyebrow light">
                <span /> LET'S BUILD SOMETHING SOLID
              </div>

              <h2>
                Your project deserves
                <br />
                <em>an expert conversation.</em>
              </h2>
            </div>

            <button
              className="btn orange"
              onClick={() => go('contact')}
            >
              Request a Consultation <ArrowUpRight />
            </button>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="wrap">

            <div className="section-head">
              <div>
                <div className="eyebrow">
                  <span /> GET IN TOUCH
                </div>

                <h2>
                  Tell us what
                  <br />
                  <em>you're planning.</em>
                </h2>
              </div>

              <p>
                Share a few details about your project.
                Your enquiry will open in WhatsApp, ready
                for you to send directly to our team.
              </p>
            </div>

            <div className="contact-grid">

              <div className="contact-info">

                <div className="contact-card dark-card">
                  <span className="card-kicker">
                    CONTACT OMAR CONSTRUCTIONS
                  </span>

                  <h3>
                    Let's talk
                    <br />
                    about your site.
                  </h3>

                  <a href={`tel:+91${PHONE}`}>
                    <Phone />

                    <span>
                      <small>CALL US</small>
                      <b>+91 91001 04476</b>
                    </span>

                    <ArrowUpRight />
                  </a>

                  <a href={`mailto:${EMAIL}`}>
                    <Mail />

                    <span>
                      <small>EMAIL</small>
                      <b>{EMAIL}</b>
                    </span>

                    <ArrowUpRight />
                  </a>

                  <div className="address-row">
                    <MapPin />

                    <span>
                      <small>OFFICE ADDRESS</small>
                      <b>{ADDRESS}</b>
                    </span>
                  </div>

                </div>

                <div className="map-wrap">
                  <iframe
                    title="Omar Constructions location in Dargamitta, Nellore"
                    src={MAP}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                  <a
                    href="https://maps.google.com/?q=14.4368897,79.9661707"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open directions in Google Maps <ArrowUpRight size={15} />
                  </a>
                </div>

              </div>

              {/* ENQUIRY FORM */}
              <form
                className="enquiry-form"
                onSubmit={submit}
              >

                <div className="form-title">
                  <span>PROJECT ENQUIRY</span>
                  <h3>Start with a few details.</h3>
                  <p>Fields marked * are required.</p>
                </div>

                <div className="form-row">

                  <label>
                    Full name *

                    <input
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </label>

                  <label>
                    Phone number *

                    <input
                      name="phone"
                      required
                      type="tel"
                      pattern="[0-9+()\-\s]{8,}"
                      placeholder="Your contact number"
                    />
                  </label>

                </div>

                <div className="form-row">

                  <label>
                    Email address

                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label>
                    Service required *

                    <select
                      name="service"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {services.map(s => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </label>

                </div>

                <label>
                  Project location

                  <input
                    name="location"
                    placeholder="Area / city where the project is located"
                  />
                </label>

                <label>
                  Tell us about your project

                  <textarea
                    name="details"
                    rows="4"
                    placeholder="Building type, site size, current stage or what you need..."
                  />
                </label>

                <button
                  className="btn orange submit"
                  type="submit"
                >
                  Send Enquiry on WhatsApp <Send size={17} />
                </button>

                <p className="form-note">
                  <ShieldCheck size={15} />
                  Your details are used to respond to this enquiry.
                  WhatsApp opens for you to review and send the message.
                </p>

                {sent && (
                  <p className="success-note" role="status">
                    WhatsApp has been opened with your enquiry.
                    Please press Send in WhatsApp to deliver it.
                  </p>
                )}

              </form>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="wrap footer-main">

          <div className="footer-brand">
            <img
              src="/images/omar-logo.webp"
              alt="Omar Constructions"
            />

            <p>
              Civil Works, Electrical & Plumbing,
              and HVAC Works, led by Er. Feroz,
              Consulting Engineer.
            </p>

            <div className="socials">
              <a
                href={`https://wa.me/91${PHONE}`}
                aria-label="WhatsApp"
              >
                <MessageCircle />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>

          <div>
            <h4>EXPLORE</h4>

            {nav.map(([n, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
              >
                {n}
              </button>
            ))}
          </div>

          <div>
            <h4>OUR SERVICES</h4>

            {services.map(s => (
              <button
                key={s.title}
                onClick={() =>
                  wa(`Hello, I am enquiring about ${s.title}.`)
                }
              >
                {s.title}
              </button>
            ))}
          </div>

          <div>
            <h4>CONTACT</h4>

            <a href={`tel:+91${PHONE}`}>
              +91 91001 04476
            </a>

            <a href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>

            <p>{ADDRESS}</p>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="wrap bottom-credit">

            <span>
              © {new Date().getFullYear()} Omar Constructions.
              All rights reserved.
            </span>

            <span className="madeby">
              Designed & developed by
              <b> MA Innovex Technologies </b>

              <img
                src="/images/ma-logo.png"
                alt="MA Innovex Technologies logo"
              />
            </span>

          </div>
        </div>

      </footer>

      {/* FLOATING ACTIONS */}
      <div className="floating-actions">

        <a
          className="float-call"
          href={`tel:+91${PHONE}`}
          aria-label="Call Omar Constructions"
        >
          <Phone />
        </a>

        <button
          className="float-wa"
          onClick={() => wa()}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle />
        </button>

      </div>

      {/* IMAGE LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >

            <button
              className="light-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X />
            </button>

            <button
              className="light-prev"
              onClick={e => {
                e.stopPropagation();

                setLightbox(
                  (lightbox + photos.length - 1) % photos.length
                );
              }}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>

            <div
              className="lightbox-content"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].title}
              />

              <div className="light-caption">
                {photos[lightbox].title}
              </div>
            </div>

            <button
              className="light-next"
              onClick={e => {
                e.stopPropagation();

                setLightbox(
                  (lightbox + 1) % photos.length
                );
              }}
              aria-label="Next"
            >
              <ChevronRight />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Box,
  Braces,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Figma,
  Gauge,
  Layers,
  Linkedin,
  ListChecks,
  Mail,
  Menu,
  MapPin,
  Monitor,
  Palette,
  Phone,
  Plane,
  Plus,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  Target,
  Utensils,
} from "lucide-react";

const featuredCases = [
  {
    id: "cloud-server",
    title: "Cloud Server Creation Flow",
    type: "B2B cloud infrastructure",
    role: "Product Designer",
    image: "/cases/cloud-server.jpg",
    intro:
      "Redesigned a high-impact server creation journey where configuration choices affect cost, performance, and system stability.",
    problem:
      "Users faced quota confusion, unclear OS versus snapshot choices, hidden advanced settings, forced firewall exits, and weak visibility into resource impact.",
    moves: [
      "Persistent summary panel for selections, cost, resource use, and remaining quota.",
      "Inline firewall creation to remove exit-and-restart loops.",
      "Quota awareness modal and structured review before provisioning.",
    ],
    impact: [
      "Reduced backward navigation in moderated testing.",
      "No participant needed to restart because of quota confusion.",
      "Clearer task completion and stronger perceived control.",
    ],
    accent: "cyan",
  },
  {
    id: "deployment",
    title: "Self-Service Deployment Wizard",
    type: "Kubernetes deployment system",
    role: "End-to-end UX",
    image: "/cases/deployment-wizard.jpg",
    intro:
      "Designed a guided deployment wizard that lets enterprise clients install cloud services without on-site DevOps dependency.",
    problem:
      "Manual deployment created operational cost, delivery delays, configuration drift, and heavy reliance on internal technical teams.",
    moves: [
      "Card-based decision entry for install-new versus connect-existing paths.",
      "Layered tabs for infrastructure, network, runtime, registry, and plugins.",
      "Multi-product deployment with visible completed, in-progress, and pending states.",
    ],
    impact: [
      "85% faster deployments from days to under 30 minutes.",
      "60% fewer support tickets related to configuration errors.",
      "A scalable flow for Kubernetes, AWS, and GCP environments.",
    ],
    accent: "lime",
  },
  {
    id: "snappfood",
    title: "Snappfood Smart Quick Choice",
    type: "Consumer UX research",
    role: "UX Research + Product Design",
    image: "/cases/snappfood.jpg",
    intro:
      "A conceptual system for reducing decision fatigue when hungry users need a fast, confident food choice.",
    problem:
      "Users spent too long scrolling, moved between restaurants repeatedly, hesitated between options, and sometimes left without ordering.",
    moves: [
      "Observed real ordering behavior and interviewed users aged 20 to 35.",
      "Separated variety problems from decision-structure problems.",
      "Designed a quick-choice path that narrows options around user intent.",
    ],
    impact: [
      "Sharper decision moments for hungry users.",
      "Lower cognitive load at the point of ordering.",
      "A clearer product hypothesis for conversion improvement.",
    ],
    accent: "coral",
  },
  {
    id: "alibaba",
    title: "Alibaba Airport Selection",
    type: "Travel booking UX",
    role: "Product Designer",
    image: "/cases/alibaba.jpg",
    intro:
      "A conceptual redesign of airport selection in flight search, focused on reducing cognitive friction in a booking funnel.",
    problem:
      "A simple dropdown left travelers without context: airport distance, transfer options, business-trip fit, and the meaning of all airports.",
    moves: [
      "Mapped the moment users leave the funnel to search externally.",
      "Compared airport choices using context, proximity, and travel intent.",
      "Brought decision support into the search flow instead of another page.",
    ],
    impact: [
      "Reduced unanswered questions in airport selection.",
      "Stronger confidence before search submission.",
      "A more conversion-aware travel search pattern.",
    ],
    accent: "cyan",
  },
];

const supportingCases = [
  {
    title: "Digikala Decision Fatigue",
    type: "Ecommerce product-list UX",
    image: "/cases/digikala.jpg",
    note:
      "Clarifying comparison and choice between similar products in dense category pages.",
  },
  {
    title: "Dorna Tour Booking",
    type: "Travel platform",
    image: "/cases/dorna.jpg",
    note:
      "A transparent tour discovery and booking experience with research-backed flow design.",
  },
  {
    title: "KheradKhan Reading Platform",
    type: "Knowledge management",
    image: "/cases/kheradkhan.jpg",
    note:
      "A reading platform for saving, organizing, and reviewing book and article insights.",
  },
];

const processSteps = [
  {
    title: "Research",
    body:
      "Interview users, observe behavior, review support tickets, and separate surface symptoms from structural UX problems.",
  },
  {
    title: "Model the system",
    body:
      "Map dependencies, constraints, user mental models, and the places where flows force avoidable context switching.",
  },
  {
    title: "Prototype",
    body:
      "Turn complexity into guided paths, smart defaults, visible status, and editable checkpoints.",
  },
  {
    title: "Validate",
    body:
      "Run moderated usability sessions, A/B comparisons, terminology checks, and feasibility reviews with technical teams.",
  },
  {
    title: "Ship with documentation",
    body:
      "Document component behavior, align with design systems, and support implementation through low-code or engineering handoff.",
  },
];

const experience = [
  {
    company: "Abrimnent",
    role: "Product Designer",
    period: "June 2025 - Present",
    points: [
      "Redesigned cloud service creation flows to simplify setup and reduce unnecessary steps.",
      "Designed a Shadcn-inspired design system with documentation for consistent UI components.",
      "Created self-service cloud deployment, marketplace, and installation experiences.",
    ],
  },
  {
    company: "Makeen Ideal Media",
    role: "UX/UI Designer",
    period: "Feb 2024 - June 2025",
    points: [
      "Designed responsive interfaces aligned with business goals.",
      "Worked in Agile rituals including daily standups and sprint planning.",
      "Defined scope, analyzed user needs, and developed personas for design decisions.",
    ],
  },
];

const skillGroups = [
  {
    title: "Design",
    items: [
      "UX research",
      "Product design",
      "Design systems",
      "Wireframing",
      "Prototyping",
      "Responsive design",
      "Design thinking",
      "Information architecture",
    ],
  },
  {
    title: "Tools",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "HTML/CSS"],
  },
  {
    title: "Education + courses",
    items: [
      "Bachelor of Industrial Design",
      "Product Design",
      "UX Design",
      "Product Management",
    ],
  },
];

const heroConceptCases = [
  {
    id: "cloud-server",
    title: "Cloud Server Creation Flow",
    category: "Cloud Infrastructure",
    meta: "End-to-end flow",
    image: "/cases/cloud-server.jpg",
    icon: Cloud,
    tone: "teal",
  },
  {
    id: "deployment",
    title: "Self-Service Deployment Wizard",
    category: "Productivity",
    meta: "Wizard IA",
    image: "/cases/deployment-wizard.jpg",
    icon: Box,
    tone: "lime",
  },
  {
    id: "snappfood",
    title: "Snappfood Decision Fatigue",
    category: "Food Ordering",
    meta: "Decision Fatigue",
    image: "/cases/snappfood.jpg",
    icon: Utensils,
    tone: "coral",
  },
  {
    id: "alibaba",
    title: "Alibaba Airport Selection",
    category: "Travel Booking",
    meta: "Choice Architecture",
    image: "/cases/alibaba.jpg",
    icon: Plane,
    tone: "lime",
  },
];

const profileSkillRows = [
  {
    icon: Search,
    label: "Research",
    tone: "teal",
    items: ["UX research", "User interviews", "Competitive analysis", "Journey mapping"],
  },
  {
    icon: Layers,
    label: "Design",
    tone: "coral",
    items: ["Design systems", "Wireframing", "Prototyping", "Responsive design"],
  },
  {
    icon: Target,
    label: "Methods",
    tone: "lime",
    items: ["Design thinking", "Information architecture", "User flow", "Usability testing"],
  },
  {
    icon: Code2,
    label: "Development",
    tone: "teal",
    items: ["HTML/CSS", "Basic JavaScript", "Collaboration", "Handoff & specs"],
  },
];

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/version-hero") {
    return <HeroConceptVersion />;
  }

  if (path === "/version-profile") {
    return <ProfileConceptVersion />;
  }

  return <CurrentPortfolio />;
}

function CurrentPortfolio() {
  const [activeCaseId, setActiveCaseId] = useState(featuredCases[0].id);
  const activeCase = useMemo(
    () => featuredCases.find((item) => item.id === activeCaseId) ?? featuredCases[0],
    [activeCaseId]
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    let active = true;
    let cleanup = () => {};

    const loadMotion = async () => {
      const [gsapModule, scrollModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!active) return;

      const gsap = gsapModule.gsap ?? gsapModule.default;
      const ScrollTrigger = scrollModule.ScrollTrigger ?? scrollModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.from(".signal-strip span", {
        opacity: 0,
        y: 12,
        duration: 0.7,
        delay: 0.4,
        ease: "power2.out",
        stagger: 0.08,
      });

      gsap.utils.toArray(".reveal").forEach((node) => {
        gsap.from(node, {
          opacity: 0,
          y: 36,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 84%",
          },
        });
      });

      gsap.utils.toArray(".case-row").forEach((node, index) => {
        gsap.from(node, {
          opacity: 0,
          x: index % 2 === 0 ? -18 : 18,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 88%",
          },
        });
      });
      });

      cleanup = () => context.revert();
    };

    loadMotion();

    return () => {
      active = false;
      cleanup();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedRail />
        <WorkSection
          activeCase={activeCase}
          activeCaseId={activeCaseId}
          onSelect={setActiveCaseId}
        />
        <ProcessSection />
        <ArchiveSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}

function HeroConceptVersion() {
  const railRef = useRef(null);

  const scrollRail = (direction) => {
    railRef.current?.scrollBy({
      left: direction * 380,
      behavior: "smooth",
    });
  };

  return (
    <main className="concept-page hero-concept-page">
      <section id="hero-top" className="hero-concept-frame" aria-labelledby="hero-concept-title">
        <header className="concept-hero-nav" aria-label="Version hero navigation">
          <a className="concept-logo" href="#hero-top" aria-label="Back to hero version top">
            DM
          </a>
          <nav>
            <a href="#hero-work">Work</a>
            <a href="#hero-process">Process</a>
            <a href="#hero-about">About</a>
            <a href="#hero-contact">Contact</a>
          </nav>
          <a className="concept-dot" href="/version-profile" aria-label="Open profile version" />
        </header>

        <div className="concept-hero-grid">
          <div className="concept-hero-copy">
            <h1 id="hero-concept-title">Donya Mehrzad</h1>
            <p>
              Product designer turning complex workflows into clear, confident
              digital experiences.
            </p>
            <div className="concept-actions">
              <a className="concept-btn concept-primary" href="#hero-work">
                <span>View case studies</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="concept-btn concept-secondary" href="/docs/donya-mehrzad-resume.pdf" download>
                <span>Download CV</span>
                <Download size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="concept-signal-row" aria-label="Design focus areas">
              <span>
                <Cloud size={28} aria-hidden="true" />
                Cloud infrastructure
              </span>
              <span>
                <Target size={27} aria-hidden="true" />
                UX research
              </span>
              <span>
                <Layers size={27} aria-hidden="true" />
                Design systems
              </span>
            </div>
          </div>

          <HeroInterfaceScene />
        </div>

        <section id="hero-work" className="concept-selected-work" aria-labelledby="selected-title">
          <div className="concept-selected-head">
            <div>
              <p>Featured work</p>
              <h2 id="selected-title">Selected case studies</h2>
            </div>
            <button type="button" onClick={() => scrollRail(1)} aria-label="Scroll selected case studies">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>

          <button
            className="concept-rail-arrow concept-rail-prev"
            type="button"
            onClick={() => scrollRail(-1)}
            aria-label="Previous case studies"
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
          <div className="concept-case-rail" ref={railRef}>
            {heroConceptCases.map((item) => (
              <a className="concept-case-card" href={`#hero-case-${item.id}`} key={item.title}>
                <div className="concept-case-image">
                  <img src={item.image} alt={`${item.title} preview`} />
                </div>
                <h3>{item.title}</h3>
                <p>
                  <span className={item.tone}>{item.category}</span>
                  <span>{item.meta}</span>
                </p>
              </a>
            ))}
          </div>
          <button
            className="concept-rail-arrow concept-rail-next"
            type="button"
            onClick={() => scrollRail(1)}
            aria-label="Next case studies"
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </section>

        <HeroCaseStudySections />
        <HeroProcessSection />
        <HeroAboutSection />
        <HeroContactSection />
      </section>
    </main>
  );
}

function HeroCaseStudySections() {
  return (
    <section className="hero-case-deck" aria-label="Expanded case studies">
      {featuredCases.map((item, index) => (
        <article
          id={`hero-case-${item.id}`}
          className={`hero-case-panel ${item.accent}`}
          key={item.id}
        >
          <div className="hero-case-count">0{index + 1}</div>
          <div className="hero-case-media">
            <img src={item.image} alt={`${item.title} case study preview`} />
          </div>
          <div className="hero-case-body">
            <span>{item.type}</span>
            <h2>{item.title}</h2>
            <p>{item.intro}</p>
            <div className="hero-case-columns">
              <DetailList title="Problem" items={[item.problem]} />
              <DetailList title="Design decisions" items={item.moves} />
              <DetailList title="Outcome signals" items={item.impact} />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function HeroProcessSection() {
  return (
    <section id="hero-process" className="hero-process-band" aria-labelledby="hero-process-title">
      <div className="hero-section-copy">
        <p>Process</p>
        <h2 id="hero-process-title">From ambiguous systems to confident decisions.</h2>
      </div>
      <div className="hero-process-grid">
        {processSteps.map((step, index) => (
          <article key={step.title}>
            <span>0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HeroAboutSection() {
  return (
    <section id="hero-about" className="hero-about-band" aria-labelledby="hero-about-title">
      <div>
        <p>About</p>
        <h2 id="hero-about-title">Research-driven product design for complex workflows.</h2>
        <p>
          I am a Product Designer with an Industrial Design background. I turn
          complex problems into practical, user-centered digital products through
          research, structure, and cross-functional teamwork.
        </p>
      </div>
      <div className="hero-about-stats" aria-label="Portfolio stats">
        <span><strong>3+</strong> years experience</span>
        <span><strong>15+</strong> projects delivered</span>
        <span><strong>8+</strong> industries collaborated</span>
      </div>
      <div className="hero-skill-cloud">
        {skillGroups.flatMap((group) => group.items).slice(0, 14).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function HeroContactSection() {
  return (
    <footer id="hero-contact" className="hero-contact-band" aria-labelledby="hero-contact-title">
      <div>
        <p>Contact</p>
        <h2 id="hero-contact-title">Let's build something meaningful.</h2>
      </div>
      <div className="hero-contact-actions">
        <a href="mailto:dnyamehrzd@gmail.com">
          <Mail size={20} aria-hidden="true" />
          dnyamehrzd@gmail.com
        </a>
        <a href="tel:+989330000661">
          <Phone size={20} aria-hidden="true" />
          +98 933 000 0661
        </a>
        <a href="https://www.linkedin.com/in/donya-mehrzad-101b56299/" target="_blank" rel="noreferrer">
          <Linkedin size={20} aria-hidden="true" />
          LinkedIn
          <ExternalLink size={15} aria-hidden="true" />
        </a>
        <a href="/docs/donya-mehrzad-resume.pdf" download>
          <Download size={20} aria-hidden="true" />
          Download CV
        </a>
      </div>
    </footer>
  );
}

function HeroInterfaceScene() {
  return (
    <div className="holo-scene" aria-hidden="true">
      <div className="holo-orbit orbit-one" />
      <div className="holo-orbit orbit-two" />
      <div className="holo-globe" />

      <div className="holo-card server-card">
        <h3>Server Creation</h3>
        <div className="holo-progress">
          <span className="filled" />
          <span className="filled" />
          <span />
          <span />
        </div>
        <div className="progress-labels">
          <span>Image</span>
          <span>Instance</span>
          <span>Networking</span>
          <span>Review</span>
        </div>
      </div>

      <div className="holo-card instance-card">
        <h3>Instance</h3>
        <label>CPU</label>
        <div>4 vCPU</div>
        <label>Memory</label>
        <div>16 GB</div>
        <label>Region</label>
        <div>Auto (Tehran)</div>
      </div>

      <div className="holo-cube">
        <span />
      </div>

      <div className="holo-card deploy-card">
        <h3>Deployment</h3>
        <strong>67%</strong>
        <div className="deploy-bar">
          <span />
        </div>
        {["Initialize", "Configure", "Deploy", "Verify", "Complete"].map((item, index) => (
          <p key={item} className={index < 3 ? "active" : ""}>
            {item}
          </p>
        ))}
      </div>

      <div className="holo-card marketplace-card">
        <h3>Marketplace</h3>
        <div className="fake-search">
          <Search size={13} aria-hidden="true" />
          Search solutions
        </div>
        <div className="market-tabs">
          <span>All</span>
          <span>Featured</span>
          <span>Solutions</span>
          <span>Categories</span>
        </div>
        <div className="market-grid">
          <span>Kubernetes</span>
          <span>WordPress</span>
          <span>PostgreSQL</span>
        </div>
      </div>

      <div className="holo-card monitor-card">
        <h3>Monitoring</h3>
        <p>CPU Usage</p>
        <strong>42%</strong>
        <div className="mini-chart teal" />
        <p>Network</p>
        <strong>1.2 Gbps</strong>
        <div className="mini-chart lime" />
        <p className="healthy">Healthy</p>
      </div>

      <div className="holo-card code-card">
        <pre>{`resource "cloud_instance" "app" {
  image  = "ubuntu-22.04"
  type   = "c2-standard-4"
  region = "tehran-1"
}`}</pre>
      </div>
    </div>
  );
}

function ProfileConceptVersion() {
  return (
    <main className="concept-page profile-concept-page">
      <section id="profile-top" className="profile-page-frame" aria-labelledby="profile-version-title">
        <div className="desktop-window profile-portfolio-window">
          <div className="browser-chrome">
            <span className="chrome-dot red" />
            <span className="chrome-dot yellow" />
            <span className="chrome-dot green" />
            <span className="chrome-address">donyamehrzad.com</span>
          </div>

          <header className="profile-nav" aria-label="Profile version navigation">
            <a href="#profile-top" className="profile-wordmark">
              Donya<br />Mehrzad
            </a>
            <nav>
              <a href="#profile-work">Work</a>
              <a className="active" href="#profile-about">About</a>
              <a href="#profile-skills">Skills</a>
              <a href="#profile-experience">Experience</a>
              <a href="#profile-contact">Contact</a>
            </nav>
            <a className="mode-button" href="/version-hero" aria-label="Open hero version">
              <span />
            </a>
          </header>

          <div className="profile-panel-grid">
            <section id="profile-about" className="about-story-panel" aria-labelledby="profile-version-title">
              <p className="micro-label">About</p>
              <h1 id="profile-version-title">Design with research, systems, and human clarity.</h1>
              <span className="profile-rule" />
              <p>
                I am a Product Designer with an Industrial Design background. I
                design user-centered digital products and turn complex problems
                into practical solutions through research, structure, and teamwork.
              </p>
              <div className="profile-stats" aria-label="Profile stats">
                <div>
                  <strong>3+</strong>
                  <span>Years experience</span>
                </div>
                <div>
                  <strong>15+</strong>
                  <span>Projects delivered</span>
                </div>
                <div>
                  <strong>8+</strong>
                  <span>Industries collaborated</span>
                </div>
              </div>
            </section>

            <ProfileLinePortrait />

            <section id="profile-experience" className="experience-story-panel" aria-label="Experience">
              <p className="micro-label coral">Experience</p>
              {experience.map((item) => (
                <article key={item.company}>
                  <h2>{item.company}</h2>
                  <strong>{item.role}</strong>
                  <span>{item.period}</span>
                  <p>{item.points[0]}</p>
                </article>
              ))}
              <a href="#profile-contact">View full experience <ArrowRight size={16} aria-hidden="true" /></a>
            </section>
          </div>

          <section id="profile-work" className="profile-work-section" aria-labelledby="profile-work-title">
            <div className="profile-section-head">
              <p className="micro-label">Selected work</p>
              <h2 id="profile-work-title">Product stories with enough detail to evaluate the thinking.</h2>
            </div>
            <div className="profile-work-grid">
              {featuredCases.map((item, index) => (
                <a
                  id={`profile-case-${item.id}`}
                  className={`profile-work-card ${item.accent}`}
                  href={`#profile-case-detail-${item.id}`}
                  key={item.id}
                >
                  <img src={item.image} alt={`${item.title} preview`} />
                  <span>0{index + 1} / {item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.intro}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="profile-case-details" aria-label="Case study details">
            {featuredCases.map((item) => (
              <article
                id={`profile-case-detail-${item.id}`}
                className={`profile-case-detail ${item.accent}`}
                key={item.id}
              >
                <div>
                  <p className="micro-label">Case study</p>
                  <h2>{item.title}</h2>
                  <p>{item.problem}</p>
                </div>
                <div className="profile-detail-lists">
                  <DetailList title="Design decisions" items={item.moves} />
                  <DetailList title="Outcome signals" items={item.impact} />
                </div>
              </article>
            ))}
          </section>

          <section id="profile-process" className="profile-process-section" aria-labelledby="profile-process-title">
            <div className="profile-section-head">
              <p className="micro-label coral">Process</p>
              <h2 id="profile-process-title">A practical path from evidence to shipped clarity.</h2>
            </div>
            <div className="profile-process-list">
              {processSteps.map((step, index) => (
                <article key={step.title}>
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </section>

          <div id="profile-skills" className="profile-lower-grid">
            <section className="skill-matrix" aria-label="Skills">
              <p className="micro-label">Skills</p>
              {profileSkillRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div className={`skill-row ${row.tone}`} key={row.label}>
                    <Icon size={29} aria-hidden="true" />
                    <strong>{row.label}</strong>
                    <div className="skill-tags" aria-label={`${row.label} skills`}>
                      {row.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>

            <aside className="tool-education-panel">
              <section aria-label="Tools">
                <p className="micro-label">Tools</p>
                <div className="tool-icons">
                  <span><Figma size={25} aria-hidden="true" />Figma</span>
                  <span><Palette size={25} aria-hidden="true" />XD</span>
                  <span><Monitor size={25} aria-hidden="true" />Ps</span>
                  <span><Braces size={25} aria-hidden="true" />Ai</span>
                </div>
              </section>
              <section aria-label="Education and courses">
                <p className="micro-label lime">Education & courses</p>
                <ul>
                  <li>Bachelor of Industrial Design</li>
                  <li>Product Design</li>
                  <li>UX Design</li>
                  <li>Product Management</li>
                </ul>
              </section>
            </aside>
          </div>

          <section id="profile-experience" className="profile-experience-full" aria-labelledby="profile-experience-title">
            <div className="profile-section-head">
              <p className="micro-label coral">Experience</p>
              <h2 id="profile-experience-title">Recent product design roles.</h2>
            </div>
            <div className="profile-experience-grid">
              {experience.map((item) => (
                <article key={item.company}>
                  <span>{item.period}</span>
                  <h3>{item.company}</h3>
                  <strong>{item.role}</strong>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <footer id="profile-contact" className="profile-contact-band" aria-label="Contact">
            <div>
              <p className="micro-label">Contact</p>
              <h2>Let's build something meaningful.</h2>
              <p>I am open to new opportunities and collaborations. Let's create impact through thoughtful design.</p>
            </div>
            <a href="https://www.linkedin.com/in/donya-mehrzad-101b56299/" target="_blank" rel="noreferrer">
              <Linkedin size={28} aria-hidden="true" />
              <strong>LinkedIn</strong>
              <span>linkedin.com/in/donya-mehrzad</span>
            </a>
            <a href="mailto:dnyamehrzd@gmail.com">
              <Mail size={30} aria-hidden="true" />
              <strong>Email</strong>
              <span>dnyamehrzd@gmail.com</span>
            </a>
            <a href="tel:+989330000661">
              <Phone size={30} aria-hidden="true" />
              <strong>Phone</strong>
              <span>+98 933 000 0661</span>
            </a>
            <span>
              <MapPin size={30} aria-hidden="true" />
              <strong>Location</strong>
              <span>Tehran, Iran</span>
            </span>
          </footer>
        </div>

        <ProfileMobilePreview />
      </section>
    </main>
  );
}

function ProfileMobilePreview() {
  return (
    <aside className="phone-preview profile-side-phone" aria-label="Mobile preview">
      <div className="phone-shell">
        <div className="phone-camera" />
        <header>
          <strong>Donya<br />Mehrzad</strong>
          <Menu size={22} aria-hidden="true" />
        </header>
        <section className="phone-hero">
          <p>Product Designer</p>
          <h2>Designing digital experiences that make sense.</h2>
          <span />
          <small>Research-driven. System-minded. Human-centered.</small>
          <a href="#profile-work">View my work <ArrowRight size={16} aria-hidden="true" /></a>
        </section>
        <section className="phone-work">
          <p>Selected work</p>
          {featuredCases.slice(0, 3).map((item) => {
            const Icon = item.id === "deployment" ? ShoppingBag : item.id === "snappfood" ? Gauge : Server;
            return (
              <a href={`#profile-case-${item.id}`} key={item.id}>
                <Icon size={24} aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.type}</small>
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            );
          })}
          <a className="all-projects" href="#profile-work">View all projects <ArrowRight size={14} aria-hidden="true" /></a>
        </section>
        <nav className="phone-accordion" aria-label="Mobile section links">
          {[
            ["About", "#profile-about"],
            ["Experience", "#profile-experience"],
            ["Skills", "#profile-skills"],
            ["Contact", "#profile-contact"],
          ].map(([item, href]) => (
            <a href={href} key={item}>
              <span>{item}</span>
              <Plus size={17} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <footer>
          <a href="https://www.linkedin.com/in/donya-mehrzad-101b56299/" target="_blank" rel="noreferrer">
            <Linkedin size={14} aria-hidden="true" />
          </a>
          <a href="mailto:dnyamehrzd@gmail.com">
            <Mail size={14} aria-hidden="true" />
          </a>
          <a href="#profile-top">Back to top <ArrowRight size={12} aria-hidden="true" /></a>
        </footer>
      </div>
    </aside>
  );
}

function ProfileLinePortrait() {
  return (
    <div className="line-portrait" aria-hidden="true">
      <div className="face-line face-a" />
      <div className="face-line face-b" />
      <div className="face-line face-c" />
      <div className="ui-node eye-node" />
      <div className="ui-node neck-node" />
      <div className="ui-panel panel-one"><ListChecks size={26} /></div>
      <div className="ui-panel panel-two"><Mail size={26} /></div>
      <div className="ui-panel panel-three"><ShieldCheck size={25} /></div>
      <div className="ui-panel panel-four"><BookOpen size={23} /></div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand-mark" href="#top" aria-label="Donya Mehrzad home">
        <span>DM</span>
      </a>
      <nav className="nav-links" aria-label="Main">
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-action" href="mailto:dnyamehrzd@gmail.com">
        <Mail size={16} aria-hidden="true" />
        <span>Start a conversation</span>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <ThreeField />
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">Donya Mehrzad</h1>
          <p className="hero-lede">
            Product designer turning complex workflows into clear, confident
            digital experiences.
          </p>
          <p className="hero-support">
            With an Industrial Design background, I design user-centered digital
            products and break complex problems into practical solutions through
            research, systems thinking, and teamwork.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button primary" href="#work">
              <span>View case studies</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button secondary"
              href="/docs/donya-mehrzad-resume.pdf"
              download
            >
              <Download size={18} aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <AnimatedLinePortrait />
      </div>

      <div className="signal-strip" aria-label="Portfolio focus areas">
        <span>Cloud infrastructure</span>
        <span>UX research</span>
        <span>Design systems</span>
        <span>Responsive product UI</span>
      </div>
    </section>
  );
}

function AnimatedLinePortrait({ compact = false }) {
  return (
    <div className={`animated-portrait ${compact ? "compact" : ""}`} aria-hidden="true">
      <div className="portrait-rings">
        <span />
        <span />
        <span />
      </div>
      <svg className="portrait-svg" viewBox="0 0 520 560" role="img">
        <defs>
          <linearGradient id="portraitTrace" x1="70" y1="80" x2="420" y2="470">
            <stop offset="0" stopColor="#d6ff62" />
            <stop offset="0.42" stopColor="#7ce7d3" />
            <stop offset="1" stopColor="#ff6b4a" />
          </linearGradient>
          <filter id="portraitGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="portrait-line main"
          d="M290 63 C221 63 167 109 151 174 C145 199 129 219 103 231 C132 244 151 265 155 298 C163 366 214 421 288 418"
        />
        <path
          className="portrait-line hair"
          d="M283 64 C214 76 174 120 164 180 C156 230 132 257 103 286 C91 298 85 318 87 342"
        />
        <path
          className="portrait-line hair delay-one"
          d="M320 92 C258 99 219 138 207 196 C195 254 174 292 139 329"
        />
        <path
          className="portrait-line hair delay-two"
          d="M337 132 C304 153 285 183 281 222 C276 274 246 317 205 347"
        />
        <path
          className="portrait-line neck"
          d="M231 359 C235 403 222 444 188 494"
        />
        <path
          className="portrait-line shoulder"
          d="M188 494 C257 451 331 446 416 484"
        />
        <path
          className="portrait-line face"
          d="M151 174 C185 176 202 193 205 219 C208 249 187 267 162 279"
        />
        <path
          className="portrait-line detail"
          d="M193 212 C207 207 220 209 229 219"
        />
        <path
          className="portrait-line detail delay-one"
          d="M169 271 C185 278 205 277 225 266"
        />
        <path
          className="portrait-line circuit"
          d="M314 88 H372 V146 H402"
        />
        <path
          className="portrait-line circuit delay-two"
          d="M338 204 H398 V258 H432"
        />
        <path
          className="portrait-line circuit delay-one"
          d="M259 386 V436 H319"
        />
        <circle className="portrait-node node-eye" cx="246" cy="197" r="12" />
        <circle className="portrait-node node-ear" cx="283" cy="238" r="18" />
        <circle className="portrait-node node-lime" cx="361" cy="184" r="17" />
        <circle className="portrait-node node-coral" cx="393" cy="350" r="7" />
        <circle className="portrait-dot dot-a" cx="405" cy="150" r="4" />
        <circle className="portrait-dot dot-b" cx="428" cy="258" r="4" />
        <circle className="portrait-dot dot-c" cx="321" cy="436" r="4" />
      </svg>

      <div className="portrait-chip chip-research">
        <Search size={18} aria-hidden="true" />
        <span>Research</span>
      </div>
      <div className="portrait-chip chip-systems">
        <ListChecks size={20} aria-hidden="true" />
        <span>Systems</span>
      </div>
      <div className="portrait-chip chip-flow">
        <Mail size={20} aria-hidden="true" />
        <span>Flows</span>
      </div>
      <div className="portrait-chip chip-clarity">
        <ShieldCheck size={19} aria-hidden="true" />
        <span>Clarity</span>
      </div>
      <div className="portrait-microgrid">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

function ThreeField() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let active = true;
    let cleanup = () => {};

    const loadScene = async () => {
      const THREE = await import("three");
      if (!active || !mount.isConnected) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        42,
        mount.clientWidth / mount.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 0, 8.5);

      const group = new THREE.Group();
      scene.add(group);

      const panelMaterial = new THREE.MeshBasicMaterial({
        color: 0x7ce7d3,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
        wireframe: true,
      });
      const coralMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6b4a,
        transparent: true,
        opacity: 0.24,
        wireframe: true,
      });
      const limeMaterial = new THREE.PointsMaterial({
        color: 0xd6ff62,
        transparent: true,
        opacity: 0.58,
        size: 0.025,
      });

      const panelGeometry = new THREE.PlaneGeometry(2.1, 1.16, 10, 5);
      const positions = [
        [-2.9, 1.4, -0.2, -0.5],
        [2.55, 0.9, 0.1, 0.42],
        [-1.0, -1.3, 0.35, 0.2],
        [2.0, -1.45, -0.3, -0.36],
      ];

      positions.forEach(([x, y, z, rot]) => {
        const mesh = new THREE.Mesh(panelGeometry, panelMaterial.clone());
        mesh.position.set(x, y, z);
        mesh.rotation.set(0.35, rot, 0.08);
        group.add(mesh);
      });

      const knotGeometry = new THREE.TorusKnotGeometry(0.9, 0.012, 130, 8, 2, 5);
      const knot = new THREE.Mesh(knotGeometry, coralMaterial);
      knot.position.set(0.65, 0.05, 0.2);
      group.add(knot);

      const pointsGeometry = new THREE.BufferGeometry();
      const pointCount = 260;
      const vertices = new Float32Array(pointCount * 3);
      for (let index = 0; index < pointCount; index += 1) {
        vertices[index * 3] = (Math.random() - 0.5) * 7.6;
        vertices[index * 3 + 1] = (Math.random() - 0.5) * 4.8;
        vertices[index * 3 + 2] = (Math.random() - 0.5) * 3.2;
      }
      pointsGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      const points = new THREE.Points(pointsGeometry, limeMaterial);
      group.add(points);

      let frame = 0;
      let animationId = 0;

      const render = () => {
        frame += 0.006;
        group.rotation.y = Math.sin(frame) * 0.1;
        group.rotation.x = Math.cos(frame * 0.8) * 0.04;
        knot.rotation.x += 0.003;
        knot.rotation.y += 0.004;
        points.rotation.y -= 0.0015;
        renderer.render(scene, camera);
        if (!reduced) {
          animationId = window.requestAnimationFrame(render);
        }
      };

      const resize = () => {
        const width = mount.clientWidth;
        const height = mount.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };

      window.addEventListener("resize", resize, { passive: true });
      render();

      cleanup = () => {
        window.cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
        panelGeometry.dispose();
        knotGeometry.dispose();
        pointsGeometry.dispose();
        panelMaterial.dispose();
        coralMaterial.dispose();
        limeMaterial.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    };

    loadScene();

    return () => {
      active = false;
      cleanup();
    };
  }, []);

  return <div className="three-field" ref={mountRef} aria-hidden="true" />;
}

function FeaturedRail() {
  return (
    <section className="featured-rail" aria-label="Featured case studies preview">
      <div className="rail-track">
        {featuredCases.map((item, index) => (
          <a className={`rail-item ${item.accent}`} href="#work" key={item.id}>
            <span className="rail-index">0{index + 1}</span>
            <span className="rail-title">{item.title}</span>
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

function WorkSection({ activeCase, activeCaseId, onSelect }) {
  return (
    <section id="work" className="work-section section-shell" aria-labelledby="work-title">
      <div className="section-heading reveal">
        <p className="section-label">Selected work</p>
        <h2 id="work-title">Work that untangles complexity.</h2>
        <p>
          Case studies from cloud infrastructure, marketplace setup, ecommerce
          choice architecture, travel booking, and reading workflows.
        </p>
      </div>

      <div className="work-layout">
        <div className="case-index" aria-label="Case study index">
          {featuredCases.map((item) => (
            <button
              className={`case-row ${activeCaseId === item.id ? "active" : ""}`}
              type="button"
              key={item.id}
              onClick={() => onSelect(item.id)}
            >
              <span>
                <strong>{item.title}</strong>
                <small>{item.type}</small>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          ))}
        </div>

        <article className={`case-detail reveal ${activeCase.accent}`}>
          <div className="case-visual">
            <img src={activeCase.image} alt={`${activeCase.title} preview`} />
          </div>
          <div className="case-content">
            <div className="meta-line">
              <span>{activeCase.role}</span>
              <span>{activeCase.type}</span>
            </div>
            <h3>{activeCase.title}</h3>
            <p>{activeCase.intro}</p>
            <div className="detail-grid">
              <DetailList title="Problem" items={[activeCase.problem]} />
              <DetailList title="Design decisions" items={activeCase.moves} />
              <DetailList title="Outcome signals" items={activeCase.impact} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function DetailList({ title, items }) {
  return (
    <div className="detail-list">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="process-section section-shell" aria-labelledby="process-title">
      <div className="section-heading reveal">
        <p className="section-label">Process</p>
        <h2 id="process-title">Built for clarity before pixels.</h2>
        <p>
          The work moves from evidence to system models, then into prototypes
          that make technical decisions understandable without hiding control.
        </p>
      </div>

      <div className="process-timeline reveal">
        {processSteps.map((step, index) => (
          <article className="process-step" key={step.title}>
            <span className="step-number">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>

      <div className="impact-band reveal">
        <div>
          <span>85%</span>
          <p>faster deployment path in the self-service wizard case study.</p>
        </div>
        <div>
          <span>-60%</span>
          <p>support ticket reduction tied to clearer configuration defaults.</p>
        </div>
        <div>
          <span>0</span>
          <p>quota-confusion restarts observed in redesigned server testing.</p>
        </div>
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section className="archive-section section-shell" aria-labelledby="archive-title">
      <div className="section-heading reveal">
        <p className="section-label">More studies</p>
        <h2 id="archive-title">Decision support across product types.</h2>
      </div>
      <div className="archive-grid">
        {supportingCases.map((item) => (
          <article className="archive-card reveal" key={item.title}>
            <div className="archive-image">
              <img src={item.image} alt={`${item.title} case study preview`} />
            </div>
            <div>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section section-shell" aria-labelledby="about-title">
      <div className="about-grid">
        <div className="portrait-panel reveal">
          <AnimatedLinePortrait compact />
        </div>

        <div className="about-copy reveal">
          <p className="section-label">About</p>
          <h2 id="about-title">Design with research, systems, and human clarity.</h2>
          <p>
            I am a creative Product Designer with a background in Industrial
            Design. I design user-centered digital products and enjoy breaking
            down complex problems into clear, practical solutions through
            research and teamwork.
          </p>
        </div>
      </div>

      <div className="experience-grid">
        {experience.map((item) => (
          <article className="experience-item reveal" key={item.company}>
            <div>
              <span>{item.period}</span>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="skills-grid reveal">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-inner reveal">
        <div>
          <p className="section-label">Contact</p>
          <h2 id="contact-title">Let's build something meaningful.</h2>
          <p>
            I am open to product design roles, collaborations, and projects that
            need clarity around complex workflows.
          </p>
        </div>
        <div className="contact-actions">
          <a className="contact-link" href="mailto:dnyamehrzd@gmail.com">
            <Mail size={18} aria-hidden="true" />
            <span>dnyamehrzd@gmail.com</span>
          </a>
          <a className="contact-link" href="tel:+989330000661">
            <Phone size={18} aria-hidden="true" />
            <span>+98 933 000 0661</span>
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/donya-mehrzad-101b56299/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} aria-hidden="true" />
            <span>LinkedIn</span>
            <ExternalLink size={15} aria-hidden="true" />
          </a>
          <span className="contact-link passive">
            <MapPin size={18} aria-hidden="true" />
            <span>Tehran, Iran</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default App;

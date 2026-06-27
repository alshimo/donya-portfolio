import React, { useEffect, useId, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Expand,
  ExternalLink,
  Linkedin,
  ListChecks,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

const caseStudies = [
  {
    id: "abriment-server-flow",
    title: "Abriment Server Creation Flow",
    type: "B2B cloud infrastructure",
    role: "Product Designer",
    accent: "cyan",
    imageTone: "light",
    previewFrame: "landscape",
    tags: ["Server creation", "Quota clarity", "Cloud IA"],
    intro:
      "A redesigned server creation journey where configuration choices, quota limits, and resource impact stay visible from setup to review.",
    problem:
      "Users faced quota confusion, unclear OS versus snapshot choices, hidden advanced settings, forced firewall exits, and weak visibility into resource impact.",
    moves: [
      "Persistent review and resource summary across the creation flow.",
      "Clearer separation between server type, image, network, and security decisions.",
      "Inline checks that keep users from discovering quota or configuration issues too late.",
    ],
    impact: [
      "No participant needed to restart because of quota confusion.",
      "Reduced backward navigation during moderated task completion.",
      "Stronger confidence before provisioning critical infrastructure.",
    ],
    media: [
      {
        src: "/mockups/abriment/server-final.jpg",
        alt: "Abriment final server creation review screen",
        caption: "Final review flow",
      },
      {
        src: "/mockups/abriment/server-information.png",
        alt: "Abriment server information form",
        caption: "Information step",
      },
      {
        src: "/mockups/abriment/server-settings.jpg",
        alt: "Abriment server settings step",
        caption: "Settings step",
      },
      {
        src: "/mockups/abriment/server-kind.jpg",
        alt: "Abriment server kind selection",
        caption: "Server type selection",
      },
    ],
  },
  {
    id: "deployment-wizard",
    title: "Self-Service Deployment Wizard",
    type: "Kubernetes deployment system",
    role: "End-to-end UX",
    accent: "lime",
    imageTone: "light",
    previewFrame: "landscape",
    tags: ["Wizard IA", "Deployment", "Enterprise cloud"],
    intro:
      "A guided deployment wizard that lets enterprise clients install cloud services without on-site DevOps dependency.",
    problem:
      "Manual deployment created operational cost, delivery delays, configuration drift, and heavy reliance on internal technical teams.",
    moves: [
      "Card-based entry for install-new versus connect-existing paths.",
      "Layered tabs for infrastructure, network, runtime, registry, and plugins.",
      "Multi-product deployment states for completed, in-progress, and pending work.",
    ],
    impact: [
      "85% faster deployments from days to under 30 minutes.",
      "60% fewer support tickets related to configuration errors.",
      "A scalable flow for Kubernetes, AWS, and GCP environments.",
    ],
    media: [
      {
        src: "/cases/deployment-wizard.jpg",
        alt: "Self-service deployment wizard preview",
        caption: "Wizard configuration",
      },
      {
        src: "/mockups/abriment/dashboard-overview.jpg",
        alt: "Abriment cloud dashboard overview",
        caption: "Cloud service context",
      },
      {
        src: "/mockups/abriment/dashboard-table.png",
        alt: "Abriment service table screen",
        caption: "Service management table",
      },
    ],
  },
  {
    id: "mohaymen-cloud-dashboard",
    title: "Mohaymen Cloud Database Dashboard",
    type: "Cloud database management",
    role: "Product UX/UI",
    accent: "cyan",
    imageTone: "light",
    previewFrame: "landscape",
    tags: ["Database ops", "Persian UI", "Dashboard"],
    intro:
      "A dashboard concept for browsing, comparing, and operating cloud database services with dense technical data kept readable.",
    problem:
      "Infrastructure tables can quickly become hard to scan when status, ownership, resource usage, and actions compete for the same row.",
    moves: [
      "Structured table density with high-contrast status and action hierarchy.",
      "Consistent sidebar and tab navigation for repeated operations.",
      "Detail views that preserve context instead of forcing users into disconnected pages.",
    ],
    impact: [
      "Improved scanability for database fleet management.",
      "Clearer operational priority through status and ownership grouping.",
      "A reusable dashboard pattern for technical cloud products.",
    ],
    media: [
      {
        src: "/mockups/mohaymen/dashboard.jpg",
        alt: "Mohaymen cloud dashboard overview",
        caption: "Dashboard overview",
      },
      {
        src: "/mockups/mohaymen/database.png",
        alt: "Mohaymen database screen",
        caption: "Database screen",
      },
      {
        src: "/mockups/mohaymen/table.png",
        alt: "Mohaymen dense table screen",
        caption: "Table view",
      },
      {
        src: "/mockups/mohaymen/detail.png",
        alt: "Mohaymen detail screen",
        caption: "Detail state",
      },
    ],
  },
  {
    id: "kherad-khan",
    title: "KheradKhan Reading Platform",
    type: "Knowledge management",
    role: "Product Designer",
    accent: "lime",
    imageTone: "light",
    previewFrame: "portrait",
    tags: ["Reading UX", "Library", "Highlights"],
    intro:
      "A reading platform for saving, organizing, writing, and reviewing book and article insights across a calm Persian interface.",
    problem:
      "Readers needed a coherent place to collect highlights, revisit saved ideas, and continue writing without losing the original reading context.",
    moves: [
      "Separated discovery, library, favorite highlights, and writing modes.",
      "Used editorial layouts that keep long-form content calm and legible.",
      "Built clear entry points for continuing unfinished writing and reviewing saved notes.",
    ],
    impact: [
      "A clearer mental model for reading, saving, and writing workflows.",
      "More visible routes back into saved knowledge.",
      "A product direction with room for both focused reading and knowledge capture.",
    ],
    media: [
      {
        src: "/mockups/kherad-khan/library.jpg",
        alt: "KheradKhan library page",
        caption: "Library",
      },
      {
        src: "/mockups/kherad-khan/landing.jpg",
        alt: "KheradKhan landing page",
        caption: "Landing",
      },
      {
        src: "/mockups/kherad-khan/writer.jpg",
        alt: "KheradKhan writing interface",
        caption: "Writer",
      },
      {
        src: "/mockups/kherad-khan/favorite-highlight.jpg",
        alt: "KheradKhan favorite highlights page",
        caption: "Favorite highlights",
      },
    ],
  },
];

const supportingProjects = [
  {
    id: "snappfood-quick-choice",
    title: "Snappfood Smart Quick Choice",
    type: "Consumer UX research",
    role: "UX Research + Product Design",
    accent: "coral",
    tags: ["Food ordering", "Decision fatigue", "Research"],
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
    media: [
      {
        src: "/cases/snappfood.jpg",
        alt: "Snappfood quick choice case study preview",
        caption: "Quick choice concept",
      },
    ],
  },
  {
    id: "alibaba-airport",
    title: "Alibaba Airport Selection",
    type: "Travel booking UX",
    role: "Product Designer",
    accent: "cyan",
    tags: ["Travel booking", "Choice architecture", "Search"],
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
    media: [
      {
        src: "/cases/alibaba.jpg",
        alt: "Alibaba airport selection case study preview",
        caption: "Airport selection flow",
      },
    ],
  },
  {
    id: "digikala-decision-fatigue",
    title: "Digikala Decision Fatigue",
    type: "Ecommerce product-list UX",
    role: "UX Research + Product Design",
    accent: "coral",
    tags: ["Ecommerce", "Comparison", "Decision support"],
    intro:
      "A product-listing exploration for helping shoppers compare similar products without losing momentum.",
    problem:
      "Dense category pages made similar options difficult to compare, increasing hesitation before product detail visits.",
    moves: [
      "Clarified comparison attributes around the shopper's actual decision criteria.",
      "Reduced repeated scanning by surfacing meaningful differentiators.",
      "Structured a clearer path from listing uncertainty to confident shortlist.",
    ],
    impact: [
      "A stronger decision-support model for dense ecommerce categories.",
      "Lower cognitive load while comparing similar products.",
      "Clearer opportunities for listing-page experimentation.",
    ],
    media: [
      {
        src: "/cases/digikala.jpg",
        alt: "Digikala decision fatigue case study preview",
        caption: "Product-list decision support",
      },
    ],
  },
  {
    id: "dorna-tour-booking",
    title: "Dorna Tour Booking",
    type: "Travel platform",
    role: "UX/UI Designer",
    accent: "lime",
    tags: ["Travel", "Booking", "Transparency"],
    intro:
      "A transparent tour discovery and booking experience with research-backed flow design.",
    problem:
      "Travelers need enough trip context to feel safe booking while still moving quickly through discovery.",
    moves: [
      "Organized trip details around confidence-building decision points.",
      "Clarified itinerary, booking steps, and support expectations.",
      "Reduced ambiguity between browsing and committing to a tour.",
    ],
    impact: [
      "A clearer tour evaluation path.",
      "Stronger trust signals before booking.",
      "A more structured travel product experience.",
    ],
    media: [
      {
        src: "/cases/dorna.jpg",
        alt: "Dorna tour booking case study preview",
        caption: "Tour booking flow",
      },
    ],
  },
];

const conceptProjects = [
  {
    id: "car-rental-concept",
    title: "Car Rental Mobile Concept",
    type: "Concept Lab",
    role: "Mobile UX/UI concept",
    accent: "cyan",
    presentation: "mobile-concept",
    tags: ["Mobility", "Booking", "Mobile UI"],
    intro:
      "A mobile exploration for browsing vehicle details, location context, specs, and booking confidence in a compact flow.",
    problem:
      "Vehicle rental decisions depend on price, location, specs, and availability, but those signals often compete in small mobile layouts.",
    moves: [
      "Used a highly visual vehicle detail screen with map and specification context.",
      "Kept booking actions visually persistent without covering decision information.",
      "Balanced premium product imagery with practical scanable metadata.",
    ],
    impact: [
      "A sharper first impression for high-consideration vehicle selection.",
      "A compact mobile pattern for location-aware booking.",
      "A flexible concept direction for rental and mobility products.",
    ],
    media: [
      {
        src: "/mockups/concepts/car-rental/car-rental-1.jpg",
        alt: "Car rental mobile concept screen one",
        caption: "Vehicle detail",
      },
      {
        src: "/mockups/concepts/car-rental/car-rental-2.jpg",
        alt: "Car rental mobile concept screen two",
        caption: "Booking context",
      },
      {
        src: "/mockups/concepts/car-rental/car-rental-3.jpg",
        alt: "Car rental mobile concept screen three",
        caption: "Availability view",
      },
    ],
  },
  {
    id: "music-player-concept",
    title: "Music Discovery Mobile Concept",
    type: "Concept Lab",
    role: "Mobile UX/UI concept",
    accent: "lime",
    presentation: "mobile-concept",
    tags: ["Music", "Player", "Discovery"],
    intro:
      "A mobile music interface concept focused on immersive browsing, playback hierarchy, and track-level clarity.",
    problem:
      "Music interfaces need to make playback feel immersive while keeping navigation, queue, and track state immediately understandable.",
    moves: [
      "Designed a dark immersive browsing surface with strong album-art hierarchy.",
      "Separated discovery and track playback states with consistent controls.",
      "Used high-contrast text and compact actions for repeat mobile use.",
    ],
    impact: [
      "A distinctive mobile visual direction for media apps.",
      "Clearer track-level control hierarchy.",
      "A concept pattern that can scale into playlist and queue flows.",
    ],
    media: [
      {
        src: "/mockups/concepts/music/music.jpg",
        alt: "Music discovery mobile concept",
        caption: "Discovery",
      },
      {
        src: "/mockups/concepts/music/track.jpg",
        alt: "Music track playback mobile concept",
        caption: "Track playback",
      },
    ],
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
    company: "Abriment",
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

const heroFieldDots = [
  { x: "8%", y: "24%", size: "4px", delay: "-0.6s", duration: "7.2s", dx: "12px", dy: "-14px", tone: "cyan" },
  { x: "15%", y: "68%", size: "3px", delay: "-2.1s", duration: "8.6s", dx: "-10px", dy: "12px", tone: "soft" },
  { x: "24%", y: "14%", size: "5px", delay: "-4.8s", duration: "9.1s", dx: "8px", dy: "18px", tone: "lime" },
  { x: "31%", y: "82%", size: "3px", delay: "-1.4s", duration: "7.8s", dx: "16px", dy: "-10px", tone: "cyan" },
  { x: "43%", y: "18%", size: "3px", delay: "-3.6s", duration: "8.4s", dx: "-12px", dy: "-16px", tone: "soft" },
  { x: "49%", y: "62%", size: "5px", delay: "-0.9s", duration: "7.4s", dx: "14px", dy: "12px", tone: "cyan" },
  { x: "57%", y: "34%", size: "4px", delay: "-5.2s", duration: "9.5s", dx: "-16px", dy: "10px", tone: "lime" },
  { x: "66%", y: "76%", size: "3px", delay: "-2.8s", duration: "8.2s", dx: "10px", dy: "-18px", tone: "soft" },
  { x: "73%", y: "22%", size: "5px", delay: "-1.7s", duration: "7.9s", dx: "-10px", dy: "14px", tone: "cyan" },
  { x: "83%", y: "55%", size: "3px", delay: "-4.1s", duration: "8.8s", dx: "15px", dy: "-12px", tone: "coral" },
  { x: "91%", y: "29%", size: "4px", delay: "-3.2s", duration: "9.3s", dx: "-14px", dy: "16px", tone: "lime" },
  { x: "94%", y: "82%", size: "3px", delay: "-6.4s", duration: "8s", dx: "-16px", dy: "-10px", tone: "soft" },
  { x: "6%", y: "48%", size: "3px", delay: "-5.7s", duration: "9s", dx: "10px", dy: "15px", tone: "soft" },
  { x: "38%", y: "44%", size: "4px", delay: "-2.4s", duration: "7.6s", dx: "-15px", dy: "-9px", tone: "cyan" },
  { x: "61%", y: "12%", size: "3px", delay: "-6.1s", duration: "8.9s", dx: "9px", dy: "17px", tone: "soft" },
  { x: "78%", y: "70%", size: "4px", delay: "-0.3s", duration: "8.1s", dx: "-11px", dy: "-15px", tone: "cyan" },
  { x: "88%", y: "43%", size: "5px", delay: "-4.6s", duration: "9.4s", dx: "12px", dy: "12px", tone: "soft" },
  { x: "52%", y: "88%", size: "3px", delay: "-1.9s", duration: "8.7s", dx: "-13px", dy: "-14px", tone: "lime" },
];

const allProjects = [...caseStudies, ...supportingProjects, ...conceptProjects];

function App() {
  return <CurrentPortfolio />;
}

function CurrentPortfolio() {
  const [activeCaseId, setActiveCaseId] = useState(caseStudies[0].id);
  const [openProjectId, setOpenProjectId] = useState(null);

  const activeCase = useMemo(
    () => caseStudies.find((item) => item.id === activeCaseId) ?? caseStudies[0],
    [activeCaseId]
  );

  const openProject = useMemo(
    () => allProjects.find((item) => item.id === openProjectId) ?? null,
    [openProjectId]
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
          delay: 0.36,
          ease: "power2.out",
          stagger: 0.08,
        });

        gsap.utils.toArray(".reveal").forEach((node) => {
          gsap.from(node, {
            opacity: 0,
            y: 34,
            duration: 0.78,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 86%",
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
        <FeaturedRail onOpenProject={setOpenProjectId} />
        <WorkSection
          activeCase={activeCase}
          activeCaseId={activeCaseId}
          onOpenProject={setOpenProjectId}
          onSelect={setActiveCaseId}
        />
        <ConceptLab onOpenProject={setOpenProjectId} />
        <ProcessSection />
        <ArchiveSection onOpenProject={setOpenProjectId} />
        <AboutSection />
        <ContactSection />
      </main>
      <ProjectDetailModal
        project={openProject}
        onClose={() => setOpenProjectId(null)}
      />
    </>
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
        <a href="#concepts">Concepts</a>
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
      <HeroBackgroundField />

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

        <WomanLineFigure />
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

function HeroBackgroundField() {
  return (
    <div className="hero-field" aria-hidden="true">
      <svg className="hero-field-line" viewBox="0 0 1200 760" preserveAspectRatio="none">
        <path d="M-90 525 C134 370 272 675 494 474 C704 284 858 228 1288 154" />
      </svg>
      <div className="hero-field-dots">
        {heroFieldDots.map((dot, index) => (
          <span
            className={`hero-field-dot ${dot.tone}`}
            style={{
              "--x": dot.x,
              "--y": dot.y,
              "--dot-size": dot.size,
              "--delay": dot.delay,
              "--duration": dot.duration,
              "--dx": dot.dx,
              "--dy": dot.dy,
            }}
            key={`${dot.x}-${dot.y}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

function WomanLineFigure({ compact = false }) {
  const traceId = `womanTrace-${useId().replace(/:/g, "")}`;

  return (
    <div className={`woman-figure ${compact ? "compact" : ""}`} aria-hidden="true">
      <svg className="woman-svg" viewBox="0 0 480 540" role="img">
        <defs>
          <linearGradient id={traceId} x1="105" y1="70" x2="370" y2="490">
            <stop offset="0" stopColor="#d6ff62" />
            <stop offset="0.48" stopColor="#7ce7d3" />
            <stop offset="1" stopColor="#d6ff62" />
          </linearGradient>
        </defs>
        <path
          className="woman-silhouette"
          d="M279 75 C222 78 181 112 165 161 C154 195 160 217 149 235 C140 246 128 252 117 258 C133 266 147 276 154 294 C166 314 188 325 214 321 C224 356 218 396 200 436 C191 456 188 477 198 494 C250 459 317 458 372 481 C338 446 330 410 339 363 C349 307 374 250 366 188 C358 125 325 80 279 75 Z"
        />
        <path
          className="woman-line main"
          style={{ stroke: `url(#${traceId})` }}
          d="M280 76 C222 81 181 116 165 164 C156 191 160 215 149 235 C140 246 128 252 117 258 C133 266 147 276 154 295 C166 313 188 325 214 321 C226 361 219 421 198 494"
        />
        <path
          className="woman-line shoulder delay-one"
          d="M198 494 C252 461 317 458 372 481"
        />
        <path
          className="woman-line hair delay-one"
          d="M284 76 C225 87 190 126 179 184 C168 242 139 292 105 333 C88 353 82 380 91 408"
        />
        <path
          className="woman-line hair delay-two"
          d="M323 101 C271 119 239 163 227 224 C215 286 181 345 139 392"
        />
        <path
          className="woman-line hair delay-three"
          d="M348 137 C316 169 297 210 293 265 C287 333 258 391 215 433"
        />
        <path
          className="woman-line profile"
          d="M213 128 C190 139 177 164 178 190 C179 209 170 224 154 235 C166 239 178 245 184 255 C177 263 181 272 193 278 C207 286 225 280 239 267"
        />
        <path
          className="woman-line face-detail delay-one"
          d="M198 201 C205 197 213 198 219 204"
        />
        <path
          className="woman-line face-detail delay-two"
          d="M190 263 C202 268 216 267 229 259"
        />
        <path
          className="woman-line neck"
          d="M222 315 C231 366 220 431 198 494"
        />
        <path className="woman-line circuit" d="M309 98 H372 V151 H408" />
        <path className="woman-line circuit delay-two" d="M330 218 H392 V270 H426" />
        <path className="woman-line circuit delay-one" d="M254 390 V438 H320" />
        <circle className="woman-node eye-node" cx="207" cy="203" r="4" />
        <circle className="woman-node ear-node" cx="263" cy="239" r="14" />
        <circle className="woman-node lime" cx="360" cy="184" r="17" />
        <circle className="woman-dot coral" cx="394" cy="349" r="7" />
        <circle className="woman-dot" cx="408" cy="150" r="4" />
        <circle className="woman-dot coral" cx="426" cy="270" r="4" />
        <circle className="woman-dot" cx="320" cy="438" r="4" />
      </svg>

      <div className="figure-chip chip-research">
        <Search size={18} aria-hidden="true" />
        <span>Research</span>
      </div>
      <div className="figure-chip chip-systems">
        <ListChecks size={20} aria-hidden="true" />
        <span>Systems</span>
      </div>
      <div className="figure-chip chip-flow">
        <Mail size={19} aria-hidden="true" />
        <span>Flows</span>
      </div>
      <div className="figure-chip chip-clarity">
        <ShieldCheck size={19} aria-hidden="true" />
        <span>Clarity</span>
      </div>
      <div className="figure-microgrid">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

function FeaturedRail({ onOpenProject }) {
  return (
    <section className="featured-rail" aria-label="Featured case studies preview">
      <div className="rail-track">
        {caseStudies.map((item, index) => (
          <button
            className={`rail-item ${item.accent}`}
            type="button"
            onClick={() => onOpenProject(item.id)}
            key={item.id}
          >
            <span className="rail-index">0{index + 1}</span>
            <span className="rail-title">{item.title}</span>
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}

function WorkSection({ activeCase, activeCaseId, onOpenProject, onSelect }) {
  return (
    <section id="work" className="work-section section-shell" aria-labelledby="work-title">
      <div className="section-heading reveal">
        <p className="section-label">Selected work</p>
        <h2 id="work-title">Real product work, shown with the actual screens.</h2>
        <p>
          Cloud infrastructure, deployment, technical dashboards, and reading
          workflows, with deeper project detail available from each case.
        </p>
      </div>

      <div className="work-layout">
        <div className="case-index" aria-label="Case study index">
          {caseStudies.map((item) => (
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
          <ProjectMediaFrame project={activeCase} />
          <div className="case-content">
            <div className="meta-line">
              <span>{activeCase.role}</span>
              <span>{activeCase.type}</span>
            </div>
            <h3>{activeCase.title}</h3>
            <p>{activeCase.intro}</p>
            <TagList items={activeCase.tags} />
            <div className="detail-grid">
              <DetailList title="Problem" items={[activeCase.problem]} />
              <DetailList title="Design decisions" items={activeCase.moves} />
              <DetailList title="Outcome signals" items={activeCase.impact} />
            </div>
            <button
              className="button detail-button"
              type="button"
              onClick={() => onOpenProject(activeCase.id)}
            >
              <Expand size={17} aria-hidden="true" />
              <span>Open project detail</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

function ProjectMediaFrame({ project }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const frameClass = project.previewFrame === "portrait" ? "portrait-media" : "landscape-media";
  const currentMedia = project.media[activeMediaIndex] ?? project.media[0];
  const hasMultipleMedia = project.media.length > 1;

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [project.id]);

  return (
    <div className={`case-visual ${frameClass} ${project.imageTone === "light" ? "light-media" : ""}`}>
      <div
        className="case-image-scroll"
        tabIndex={0}
        aria-label={`${project.title} preview scroll area`}
        key={currentMedia.src}
      >
        <img src={currentMedia.src} alt={currentMedia.alt} />
      </div>
      {hasMultipleMedia && (
        <div className="media-thumbs" aria-label={`${project.title} screen selector`}>
          {project.media.map((item, index) => (
            <button
              className={activeMediaIndex === index ? "active" : ""}
              type="button"
              aria-label={`Show ${item.caption}`}
              aria-pressed={activeMediaIndex === index}
              onClick={() => setActiveMediaIndex(index)}
              key={item.src}
            >
              <img src={item.src} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ConceptLab({ onOpenProject }) {
  return (
    <section id="concepts" className="concept-section section-shell" aria-labelledby="concept-title">
      <div className="section-heading reveal">
        <p className="section-label">Concept Lab</p>
        <h2 id="concept-title">Mobile explorations with a separate concept lane.</h2>
        <p>
          Smaller studies that test visual direction, interaction hierarchy, and
          mobile composition without presenting them as shipped case studies.
        </p>
      </div>

      <div className="concept-grid">
        {conceptProjects.map((project) => (
          <button
            className={`concept-card reveal ${project.accent}`}
            type="button"
            onClick={() => onOpenProject(project.id)}
            key={project.id}
          >
            <div className="concept-phone-stack">
              {project.media.slice(0, 3).map((item, index) => (
                <img
                  src={item.src}
                  alt={index === 0 ? item.alt : ""}
                  aria-hidden={index !== 0}
                  key={item.src}
                />
              ))}
            </div>
            <div className="concept-copy">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.intro}</p>
              <TagList items={project.tags} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function ArchiveSection({ onOpenProject }) {
  return (
    <section className="archive-section section-shell" aria-labelledby="archive-title">
      <div className="section-heading reveal">
        <p className="section-label">More studies</p>
        <h2 id="archive-title">Decision support across product types.</h2>
      </div>
      <div className="archive-grid">
        {supportingProjects.map((item) => (
          <button
            className={`archive-card reveal ${item.accent}`}
            type="button"
            onClick={() => onOpenProject(item.id)}
            key={item.id}
          >
            <div className="archive-image">
              <img src={item.media[0].src} alt={`${item.title} case study preview`} />
            </div>
            <div>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.intro}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
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

function AboutSection() {
  return (
    <section id="about" className="about-section section-shell" aria-labelledby="about-title">
      <div className="about-grid">
        <div className="portrait-panel reveal">
          <WomanLineFigure compact />
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

function ProjectDetailModal({ project, onClose }) {
  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    setMediaIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        setMediaIndex((current) =>
          current === 0 ? project.media.length - 1 : current - 1
        );
      }

      if (event.key === "ArrowRight") {
        setMediaIndex((current) => (current + 1) % project.media.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  if (!project) return null;

  const currentMedia = project.media[mediaIndex];
  const hasMultipleMedia = project.media.length > 1;
  const isMobileConcept = project.presentation === "mobile-concept";

  const showPrevious = () => {
    setMediaIndex((current) =>
      current === 0 ? project.media.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setMediaIndex((current) => (current + 1) % project.media.length);
  };

  return (
    <div className="modal-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className={`project-modal ${project.accent} ${isMobileConcept ? "concept-modal" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="modal-header">
          <div>
            <span>{project.type}</span>
            <h2 id="project-modal-title">{project.title}</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close project detail">
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className="modal-body">
          <div className="modal-media">
            <div className="modal-image-scroll" tabIndex={0} aria-label={`${project.title} image scroll area`}>
              <img src={currentMedia.src} alt={currentMedia.alt} />
            </div>
            <div className="modal-media-caption">
              <span>{currentMedia.caption}</span>
              <span>
                {mediaIndex + 1} / {project.media.length}
              </span>
            </div>
            {hasMultipleMedia && (
              <div className="modal-media-controls">
                <button className="icon-button" type="button" onClick={showPrevious} aria-label="Previous screen">
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button className="icon-button" type="button" onClick={showNext} aria-label="Next screen">
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          <aside className="modal-content">
            <div className="meta-line">
              <span>{project.role}</span>
              <span>{project.type}</span>
            </div>
            <p>{project.intro}</p>
            <TagList items={project.tags} />
            <DetailList title="Problem" items={[project.problem]} />
            <DetailList title="Design decisions" items={project.moves} />
            <DetailList title="Outcome signals" items={project.impact} />
          </aside>
        </div>

        {hasMultipleMedia && (
          <div className="modal-thumbnails" aria-label={`${project.title} gallery`}>
            {project.media.map((item, index) => (
              <button
                className={mediaIndex === index ? "active" : ""}
                type="button"
                onClick={() => setMediaIndex(index)}
                key={item.src}
              >
                <img src={item.src} alt="" aria-hidden="true" />
                <span>{item.caption}</span>
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function TagList({ items }) {
  return (
    <div className="tag-list" aria-label="Project tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
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

export default App;

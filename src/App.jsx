import React, { useEffect, useId, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Download,
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

const projectCaseStudies = [
  {
    id: "cloud-server-creation-flow",
    detailType: "case-study",
    title: "Cloud Server Creation Flow",
    type: "B2B cloud infrastructure",
    role: "Product Designer",
    accent: "cyan",
    coverImage: "/cases/cloud-server.jpg",
    pdfPath: "/docs/case-studies/cloud-server-creation-flow.pdf",
    tags: ["Server creation", "Quota clarity", "Cloud IA"],
    intro:
      "A redesigned cloud server creation journey focused on clearer infrastructure choices, quota visibility, and confident provisioning.",
    problem:
      "The original flow had grown fragmented: quota limits, OS versus snapshot choices, firewall setup, and review states were unclear at high-risk moments.",
    moves: [
      "Mapped support tickets and frequent failure points back to specific UX patterns.",
      "Separated server type, image, network, security, resources, and review into clearer steps.",
      "Kept quota and configuration impact visible before users committed to provisioning.",
    ],
    impact: [
      "Reduced confusion around quota and firewall decisions.",
      "Improved confidence before creating infrastructure resources.",
      "Turned a high-impact technical action into a more guided setup flow.",
    ],
  },
  {
    id: "self-service-deployment-wizard",
    detailType: "case-study",
    title: "Self-Service Deployment Wizard",
    type: "Kubernetes deployment system",
    role: "Product Designer",
    accent: "lime",
    coverImage: "/cases/deployment-wizard.jpg",
    pdfPath: "/docs/case-studies/self-service-deployment-wizard.pdf",
    tags: ["Wizard IA", "Deployment", "Enterprise cloud"],
    intro:
      "A guided deployment wizard that lets enterprise clients install cloud services without on-site DevOps dependency.",
    problem:
      "Manual deployment created operational cost, delivery delays, configuration drift, and heavy reliance on internal technical teams.",
    moves: [
      "Designed install-new and connect-existing paths for Kubernetes environments.",
      "Structured networking, runtime, registry, plugins, and product selection into a guided wizard.",
      "Made multi-product progress and configuration states visible throughout setup.",
    ],
    impact: [
      "Faster enterprise onboarding and reduced deployment dependency.",
      "Fewer configuration errors during setup.",
      "A scalable pattern for Kubernetes, AWS, and GCP deployment paths.",
    ],
  },
  {
    id: "dorna-tour-booking",
    detailType: "case-study",
    title: "Dorna Tour Booking",
    type: "Travel platform",
    role: "UX/UI Designer",
    accent: "coral",
    coverImage: "/cases/dorna.jpg",
    pdfPath: "/docs/case-studies/dorna-tour-booking.pdf",
    tags: ["Travel", "Booking", "Transparency"],
    intro:
      "A tour reservation platform designed to make searching, comparing, and booking travel packages more transparent.",
    problem:
      "Travelers need enough itinerary, hotel, passenger, and payment context to book confidently without slowing the reservation path.",
    moves: [
      "Mapped tour search, comparison, reservation, and payment flows.",
      "Organized travel information around confidence-building decision points.",
      "Created clearer routes for choosing tours and reviewing booking details.",
    ],
    impact: [
      "A more structured tour discovery and reservation experience.",
      "Clearer evaluation criteria before booking.",
      "Better support for users planning travel online.",
    ],
  },
];

const uxConceptCaseStudies = [
  {
    id: "digikala-decision-fatigue",
    detailType: "case-study",
    title: "Digikala Decision Fatigue",
    type: "Ecommerce product-list UX",
    role: "UX Research + Product Design",
    accent: "coral",
    coverImage: "/cases/digikala.jpg",
    pdfPath: "/docs/case-studies/digikala-decision-fatigue.pdf",
    tags: ["Ecommerce", "Comparison", "Decision support"],
    intro:
      "An independent UX case study focused on helping shoppers compare similar products with less hesitation.",
    problem:
      "Dense category pages made similar options difficult to compare, increasing decision fatigue and reducing confidence before add-to-cart.",
    moves: [
      "Observed product-list browsing behavior and clarified repeated points of uncertainty.",
      "Restructured comparison cues around the shopper's actual decision criteria.",
      "Reduced repeated scanning by surfacing meaningful product differentiators.",
    ],
    impact: [
      "A clearer decision-support model for dense ecommerce categories.",
      "Lower cognitive load while comparing similar products.",
      "A stronger hypothesis for improving product-list conversion.",
    ],
  },
  {
    id: "snappfood-smart-quick-choice",
    detailType: "case-study",
    title: "Snappfood Smart Quick Choice",
    type: "Consumer UX research",
    role: "UX Research + Product Design",
    accent: "lime",
    coverImage: "/cases/snappfood.jpg",
    pdfPath: "/docs/case-studies/snappfood-smart-quick-choice.pdf",
    tags: ["Food ordering", "Decision fatigue", "Research"],
    intro:
      "A conceptual system for reducing decision fatigue when hungry users need a fast, confident food choice.",
    problem:
      "Users spent too long scrolling, moved repeatedly between restaurants, hesitated between options, and sometimes left without ordering.",
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
  },
  {
    id: "alibaba-airport-selection",
    detailType: "case-study",
    title: "Alibaba Airport Selection",
    type: "Travel booking UX",
    role: "Product Designer",
    accent: "cyan",
    coverImage: "/cases/alibaba.jpg",
    pdfPath: "/docs/case-studies/alibaba-airport-selection.pdf",
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
  },
];

const productProjects = [
  {
    id: "kheradkhan-reading-platform",
    detailType: "project",
    title: "KheradKhan Reading Platform",
    type: "Knowledge management",
    role: "Product Designer",
    accent: "lime",
    coverImage: "/mockups/legacy/ketab4-CFZrOshi.png",
    tags: ["Reading UX", "Library", "Highlights"],
    intro:
      "A reading platform for saving, organizing, writing, and reviewing book and article insights across a calm Persian interface.",
    media: [
      { src: "/mockups/legacy/ketab1-DDS0nHik.png", alt: "KheradKhan table view", caption: "Saved notes table", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/ketab2-DkwfQA7P.png", alt: "KheradKhan reading view", caption: "Reading detail", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/ketab3-DFtr92Gl.png", alt: "KheradKhan profile and library view", caption: "Reader profile", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/ketab4-CFZrOshi.png", alt: "KheradKhan library grid", caption: "Library grid", device: "desktop", mockupImage: true },
    ],
  },
  {
    id: "mohaymen-cloud-database-dashboard",
    detailType: "project",
    title: "Mohaymen Cloud Database Dashboard",
    type: "Cloud database management",
    role: "Product UX/UI",
    accent: "cyan",
    coverImage: "/mockups/legacy/database1-Cd7GAP96.png",
    tags: ["Database ops", "Persian UI", "Dashboard"],
    intro:
      "A dashboard for browsing, comparing, and operating cloud database services with dense technical data kept readable.",
    media: [
      { src: "/mockups/legacy/database1-Cd7GAP96.png", alt: "Mohaymen database table", caption: "Database table", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/database2-DMm-BbwZ.png", alt: "Mohaymen database creation", caption: "Creation flow", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/database3-mVGaPKRP.png", alt: "Mohaymen configuration form", caption: "Configuration", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/database4-BxnO6_8M.png", alt: "Mohaymen settings state", caption: "Settings state", device: "desktop", mockupImage: true },
    ],
  },
  {
    id: "abriment-server-creation-flow-project",
    detailType: "project",
    title: "Abriment Server Creation Flow",
    type: "B2B cloud infrastructure",
    role: "Product Designer",
    accent: "cyan",
    coverImage: "/mockups/abriment/server-final.jpg",
    tags: ["Server creation", "Quota clarity", "Cloud IA"],
    intro:
      "The implemented server creation screens, separated from the full cloud-server case study.",
    media: [
      { src: "/mockups/abriment/server-final.jpg", alt: "Abriment final review screen", caption: "Final review", device: "desktop" },
      { src: "/mockups/abriment/server-information.png", alt: "Abriment information step", caption: "Information step", device: "desktop" },
      { src: "/mockups/abriment/server-settings.jpg", alt: "Abriment settings step", caption: "Settings step", device: "desktop" },
      { src: "/mockups/abriment/server-kind.jpg", alt: "Abriment server type selection", caption: "Server type", device: "desktop" },
    ],
  },
  {
    id: "tour-reservation",
    detailType: "project",
    title: "Tour Reservation",
    type: "Travel booking product",
    role: "UX/UI Designer",
    accent: "coral",
    coverImage: "/mockups/legacy/dornatour1-Bvf75Z8Z.png",
    tags: ["Reservation", "Travel", "Dashboard"],
    intro:
      "Tour reservation screens for discovering packages, reviewing travel information, and supporting booking workflows.",
    media: [
      { src: "/mockups/legacy/dornatour1-Bvf75Z8Z.png", alt: "Tour reservation landing screen", caption: "Tour discovery", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/dornatour2-CnaZ3c8H.png", alt: "Tour reservation listing screen", caption: "Tour listings", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/dornatour3-C4R6d8kw.png", alt: "Tour reservation management screen", caption: "Reservation table", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/dornatour4-7BCGZfqq.png", alt: "Tour reservation destination screen", caption: "Destination detail", device: "desktop", mockupImage: true },
    ],
  },
];

const uiConceptProjects = [
  {
    id: "sweet-craft",
    detailType: "project",
    title: "Sweet Craft",
    type: "UI concept project",
    role: "UI Designer",
    accent: "coral",
    coverImage: "/mockups/legacy/mockup1-Bp4E5SCU.png",
    tags: ["Recipe website", "Visual UI", "Desktop"],
    intro:
      "A warm recipe and dessert website concept with an editorial desktop layout.",
    media: [
      { src: "/mockups/legacy/mockup1-Bp4E5SCU.png", alt: "Sweet Craft homepage", caption: "Homepage", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/mockup2-CBnqxnia.png", alt: "Sweet Craft recipe grid", caption: "Recipe grid", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/mockup3-B_gVEoz7.png", alt: "Sweet Craft party section", caption: "Feature section", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/mockup4-BmtuDWe4.png", alt: "Sweet Craft story section", caption: "Story section", device: "desktop", mockupImage: true },
    ],
  },
  {
    id: "doraa",
    detailType: "project",
    title: "Doraa",
    type: "UI concept project",
    role: "UI Designer",
    accent: "lime",
    coverImage: "/mockups/legacy/Dora-C8HscyOt.png",
    tags: ["Fashion", "Editorial UI", "Desktop"],
    intro:
      "A luxury fashion commerce concept with calm product browsing and refined visual hierarchy.",
    media: [
      { src: "/mockups/legacy/mockupdora1-jBrl2uKp.png", alt: "Doraa homepage", caption: "Homepage", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/mockupdora2-B0ho9YBf.png", alt: "Doraa editorial collection", caption: "Collection story", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/mockupdora3-Dy5p_gZo.png", alt: "Doraa product listing", caption: "Product listing", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/mockupdora4-DV2_OUn0.png", alt: "Doraa category page", caption: "Category page", device: "desktop", mockupImage: true },
    ],
  },
  {
    id: "movie",
    detailType: "project",
    title: "Movie",
    type: "UI concept project",
    role: "UI Designer",
    accent: "cyan",
    coverImage: "/mockups/legacy/Dide-jwL_4moJ.png",
    tags: ["Streaming", "Movie discovery", "Desktop"],
    intro:
      "A cinematic movie platform concept for discovery, detail browsing, and watchlist exploration.",
    media: [
      { src: "/mockups/legacy/mockupdesktop1-CwU1q0vW.png", alt: "Movie concept hero screen", caption: "Hero screen", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/mockupdesktop2-B_pFDGh0.png", alt: "Movie concept listing screen", caption: "Movie listing", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/mockupdesktop3-DbKMm06O.png", alt: "Movie concept browsing screen", caption: "Browse state", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/mockupdesktop4-Co3lYFid.png", alt: "Movie concept detail screen", caption: "Detail page", device: "desktop", mockupImage: true },
    ],
  },
  {
    id: "architecture",
    detailType: "project",
    title: "Architecture",
    type: "UI concept project",
    role: "UI Designer",
    accent: "coral",
    coverImage: "/mockups/legacy/dornatour1-Bvf75Z8Z.png",
    tags: ["Architecture", "Gallery", "Desktop"],
    intro:
      "A visual concept direction for browsing places, hotels, and destination architecture with a gallery-led layout.",
    media: [
      { src: "/mockups/legacy/dornatour1-Bvf75Z8Z.png", alt: "Architecture gallery concept", caption: "Gallery overview", device: "desktop", mockupImage: true },
      { src: "/mockups/legacy/dornatour4-7BCGZfqq.png", alt: "Architecture destination concept", caption: "Destination grid", device: "desktop", mockupImage: true },
    ],
  },
  {
    id: "music-discovery-mobile-concept",
    detailType: "project",
    title: "Music Discovery Mobile Concept",
    type: "UI concept project",
    role: "Mobile UX/UI concept",
    accent: "lime",
    coverImage: "/mockups/concepts/music/music.jpg",
    tags: ["Music", "Player", "Discovery"],
    intro:
      "A mobile music interface concept focused on immersive browsing, playback hierarchy, and track-level clarity.",
    media: [
      { src: "/mockups/concepts/music/music.jpg", alt: "Music discovery mobile screen", caption: "Discovery", device: "mobile" },
      { src: "/mockups/concepts/music/track.jpg", alt: "Music track playback screen", caption: "Track playback", device: "mobile" },
    ],
  },
  {
    id: "car-rental-mobile-concept",
    detailType: "project",
    title: "Car Rental Mobile Concept",
    type: "UI concept project",
    role: "Mobile UX/UI concept",
    accent: "cyan",
    coverImage: "/mockups/concepts/car-rental/car-rental-1.jpg",
    tags: ["Mobility", "Booking", "Mobile UI"],
    intro:
      "A mobile exploration for browsing vehicle details, location context, specs, and booking confidence in a compact flow.",
    media: [
      { src: "/mockups/concepts/car-rental/car-rental-1.jpg", alt: "Car rental mobile screen one", caption: "Vehicle detail", device: "mobile" },
      { src: "/mockups/concepts/car-rental/car-rental-2.jpg", alt: "Car rental mobile screen two", caption: "Booking context", device: "mobile" },
      { src: "/mockups/concepts/car-rental/car-rental-3.jpg", alt: "Car rental mobile screen three", caption: "Availability", device: "mobile" },
    ],
  },
];

const experience = [
  {
    company: "Mohaymen",
    role: "Product Designer",
    period: "June 2025 - Present",
    points: [
      "Redesigned the cloud service creation flow to simplify user journeys, reduce unnecessary steps, and accelerate product setup.",
      "Designed and documented a Shadcn UI-inspired design system to standardize UI components.",
      "Designed self-service deployment, marketplace, and installation experiences for cloud services.",
      "Implemented and launched product work using a low-code platform as part of the design role.",
    ],
  },
  {
    company: "Makeen Ideal Media",
    role: "UX/UI Designer",
    period: "Feb 2024 - June 2025",
    points: [
      "Designed responsive and visually consistent interfaces aligned with business goals.",
      "Collaborated in Agile rituals including daily standups and sprint planning.",
      "Defined project scope, analyzed user needs, and developed personas for design decisions.",
    ],
  },
];

const education = {
  degree: "Bachelor of Industrial Design",
  field: "Industrial Design",
  university: "Islamic Azad University, Central Tehran Branch",
};

const courses = [
  { title: "Product Design", organization: "Prodemy Academy", year: "2026" },
  { title: "UX Design", organization: "Hanyang University", year: "2026" },
  { title: "Product Management", organization: "Mohaymen Bootcamp", year: "2025" },
  { title: "Product Design", organization: "Makeen Academy", year: "2023" },
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
];

const allOverlayItems = [
  ...projectCaseStudies,
  ...uxConceptCaseStudies,
  ...productProjects,
  ...uiConceptProjects,
];

function App() {
  return <CurrentPortfolio />;
}

function CurrentPortfolio() {
  const [openItemId, setOpenItemId] = useState(null);

  const openItem = useMemo(
    () => allOverlayItems.find((item) => item.id === openItemId) ?? null,
    [openItemId]
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
        <ExperienceSection />
        <EducationCoursesSection />
        <CaseStudySection
          id="case-studies"
          label="Project Case Studies"
          title="Full product case studies."
          description="Complete case studies open in a right-side overlay without navigating away from the portfolio."
          items={projectCaseStudies}
          onOpen={setOpenItemId}
        />
        <CaseStudySection
          id="ux-concepts"
          label="UX Concept Case Studies"
          title="Research-led concept studies."
          description="Conceptual UX work is separated from shipped product projects and opens in the same overlay system."
          items={uxConceptCaseStudies}
          onOpen={setOpenItemId}
        />
        <ProjectGridSection
          id="projects"
          label="Projects"
          title="Product projects."
          description="Project screens are shown inside device mockups, separate from the case-study PDFs."
          items={productProjects}
          onOpen={setOpenItemId}
        />
        <ProjectGridSection
          id="ui-concepts"
          label="UI Concept Projects"
          title="Interface explorations."
          description="UI concept work is grouped separately from project case studies and product projects."
          items={uiConceptProjects}
          onOpen={setOpenItemId}
        />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <DetailOverlay item={openItem} onClose={() => setOpenItemId(null)} />
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
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#projects">Projects</a>
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
            <a className="button primary" href="#case-studies">
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
        <path className="woman-line shoulder delay-one" d="M198 494 C252 461 317 458 372 481" />
        <path className="woman-line hair delay-one" d="M284 76 C225 87 190 126 179 184 C168 242 139 292 105 333 C88 353 82 380 91 408" />
        <path className="woman-line hair delay-two" d="M323 101 C271 119 239 163 227 224 C215 286 181 345 139 392" />
        <path className="woman-line hair delay-three" d="M348 137 C316 169 297 210 293 265 C287 333 258 391 215 433" />
        <path className="woman-line profile" d="M213 128 C190 139 177 164 178 190 C179 209 170 224 154 235 C166 239 178 245 184 255 C177 263 181 272 193 278 C207 286 225 280 239 267" />
        <path className="woman-line face-detail delay-one" d="M198 201 C205 197 213 198 219 204" />
        <path className="woman-line face-detail delay-two" d="M190 263 C202 268 216 267 229 259" />
        <path className="woman-line neck" d="M222 315 C231 366 220 431 198 494" />
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

function ExperienceSection() {
  return (
    <section id="experience" className="experience-section section-shell" aria-labelledby="experience-title">
      <div className="section-heading reveal">
        <p className="section-label">Work Experience</p>
        <h2 id="experience-title">Product design across cloud and responsive digital products.</h2>
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
    </section>
  );
}

function EducationCoursesSection() {
  return (
    <section id="education" className="education-section section-shell" aria-labelledby="education-title">
      <div className="section-heading reveal">
        <p className="section-label">Education & Courses</p>
        <h2 id="education-title">Formal education and completed product courses.</h2>
      </div>

      <div className="education-layout">
        <article className="education-card reveal">
          <p className="section-label">Education</p>
          <dl>
            <div>
              <dt>Degree</dt>
              <dd>{education.degree}</dd>
            </div>
            <div>
              <dt>Field of Study</dt>
              <dd>{education.field}</dd>
            </div>
            <div>
              <dt>University Name</dt>
              <dd>{education.university}</dd>
            </div>
          </dl>
        </article>

        <div className="course-list reveal" aria-label="Completed courses">
          {courses.map((course) => (
            <article className="course-card" key={`${course.title}-${course.organization}`}>
              <span>{course.year}</span>
              <h3>{course.title}</h3>
              <p>{course.organization}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudySection({ id, label, title, description, items, onOpen }) {
  return (
    <section id={id} className="case-card-section section-shell" aria-labelledby={`${id}-title`}>
      <div className="section-heading reveal">
        <p className="section-label">{label}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="case-card-grid">
        {items.map((item) => (
          <button
            className={`case-study-card reveal ${item.accent}`}
            type="button"
            onClick={() => onOpen(item.id)}
            key={item.id}
          >
            <div className="case-study-cover">
              <img src={item.coverImage} alt={`${item.title} cover`} />
            </div>
            <div className="case-study-body">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.intro}</p>
              <ArrowRight size={18} aria-hidden="true" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function ProjectGridSection({ id, label, title, description, items, onOpen }) {
  return (
    <section id={id} className="project-grid-section section-shell" aria-labelledby={`${id}-title`}>
      <div className="section-heading reveal">
        <p className="section-label">{label}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="project-card-grid">
        {items.map((item) => (
          <button
            className={`project-card reveal ${item.accent}`}
            type="button"
            onClick={() => onOpen(item.id)}
            key={item.id}
          >
            <div className="project-card-image">
              <img src={item.coverImage} alt={`${item.title} cover`} />
            </div>
            <div className="project-card-title">
              <h3>{item.title}</h3>
              <ArrowRight size={18} aria-hidden="true" />
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

function DetailOverlay({ item, onClose }) {
  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    setMediaIndex(0);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (item.detailType === "project" && item.media?.length > 1) {
        if (event.key === "ArrowLeft") {
          setMediaIndex((current) =>
            current === 0 ? item.media.length - 1 : current - 1
          );
        }

        if (event.key === "ArrowRight") {
          setMediaIndex((current) => (current + 1) % item.media.length);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const isCaseStudy = item.detailType === "case-study";

  return (
    <div className="modal-overlay drawer-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className={`detail-drawer ${item.accent}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-drawer-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="modal-header drawer-header">
          <div>
            <span>{isCaseStudy ? "Case Study" : item.type}</span>
            <h2 id="detail-drawer-title">{item.title}</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close detail overlay">
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        {isCaseStudy ? (
          <CaseStudyDrawerContent item={item} />
        ) : (
          <ProjectDrawerContent
            item={item}
            mediaIndex={mediaIndex}
            setMediaIndex={setMediaIndex}
          />
        )}
      </section>
    </div>
  );
}

function CaseStudyDrawerContent({ item }) {
  return (
    <div className="drawer-scroll">
      <div className="drawer-summary">
        <div className="meta-line">
          <span>{item.role}</span>
          <span>{item.type}</span>
        </div>
        <p>{item.intro}</p>
        <TagList items={item.tags} />
        <DetailList title="Problem" items={[item.problem]} />
        <DetailList title="Design decisions" items={item.moves} />
        <DetailList title="Outcome signals" items={item.impact} />
      </div>

      <div className="case-document">
        <iframe src={item.pdfPath} title={`${item.title} complete case study`} />
      </div>
    </div>
  );
}

function ProjectDrawerContent({ item, mediaIndex, setMediaIndex }) {
  const currentMedia = item.media[mediaIndex] ?? item.media[0];
  const hasMultipleMedia = item.media.length > 1;

  const showPrevious = () => {
    setMediaIndex((current) =>
      current === 0 ? item.media.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setMediaIndex((current) => (current + 1) % item.media.length);
  };

  return (
    <div className="drawer-scroll project-drawer-scroll">
      <div className="drawer-summary">
        <div className="meta-line">
          <span>{item.role}</span>
          <span>{item.type}</span>
        </div>
        <p>{item.intro}</p>
        <TagList items={item.tags} />
      </div>

      <div className="device-gallery">
        <DeviceFrame media={currentMedia} title={item.title} />
        <div className="modal-media-caption">
          <span>{currentMedia.caption}</span>
          <span>
            {mediaIndex + 1} / {item.media.length}
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

      {hasMultipleMedia && (
        <div className="modal-thumbnails compact-thumbnails" aria-label={`${item.title} gallery`}>
          {item.media.map((media, index) => (
            <button
              className={mediaIndex === index ? "active" : ""}
              type="button"
              onClick={() => setMediaIndex(index)}
              key={media.src}
            >
              <img src={media.src} alt="" aria-hidden="true" />
              <span>{media.caption}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function DeviceFrame({ media, title }) {
  if (media.mockupImage) {
    return (
      <div className={`device-stage ${media.device}`}>
        <img className="device-mockup-image" src={media.src} alt={media.alt} />
      </div>
    );
  }

  if (media.device === "mobile") {
    return (
      <div className="device-stage mobile">
        <div className="phone-device" aria-label={`${title} mobile mockup`}>
          <div className="phone-notch" />
          <div className="phone-screen">
            <img src={media.src} alt={media.alt} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="device-stage desktop">
      <div className="laptop-device" aria-label={`${title} desktop mockup`}>
        <div className="laptop-screen">
          <img src={media.src} alt={media.alt} />
        </div>
        <div className="laptop-base" />
      </div>
    </div>
  );
}

function TagList({ items }) {
  return (
    <div className="tag-list" aria-label="Tags">
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

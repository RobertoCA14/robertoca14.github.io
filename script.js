// =======================
// HAMBURGER MENU
// =======================

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mainNav = document.getElementById("mainNav");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("mobile-open");
  hamburgerBtn.classList.toggle("active");
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("mobile-open");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  });
});

// =======================
// TRANSLATIONS
// =======================

const translations = {
  en: {
    // Navbar
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",
    resumeBtn: "Resume",

    // Hero
    badge: "AVAILABLE FOR REMOTE WORK",
    heroHeading: 'Building scalable <span>digital solutions</span> for modern businesses.',
    heroDesc: "Full Stack Developer & Backend Engineer with 3+ years building enterprise systems, APIs, and web applications using .NET, React, and cloud technologies. I turn complex business requirements into efficient, maintainable software.",
    heroBtn1: "View Projects",
    heroBtn2: "Contact Me",

    // Profile card
    profileRole: "Full Stack Developer",
    profileYears: "Years Experience",
    profileProjects: "Projects",
    profileRemote: "Ready",

    // Experience
    expLabel: "EXPERIENCE",
    expTitle: "Professional Journey",

    exp1Date: "2025 — Present",
    exp1Role: "Full Stack Developer",
    exp1Company: "J. Gasso Gasso SAS — Technology Department",
    exp1Desc: "Led development of internal web applications and automated ETL pipelines with SQL Server, reducing manual data processing time. Designed data models, built REST APIs, and maintained enterprise solutions serving multiple departments.",

    exp2Date: "2024 — 2025",
    exp2Role: "Junior Developer",
    exp2Company: "Procuraduría General de la República",
    exp2Desc: "Worked on biometric systems and enterprise applications using React, TypeScript, JavaScript and .NET APIs.",

    exp3Date: "2022 — 2023",
    exp3Role: "Administrative Assistant",
    exp3Company: "Procuraduría General de la República",
    exp3Desc: "Administrative support and internal workflow coordination for Public Ministry operations.",

    exp4Date: "2018 — 2019",
    exp4Role: "IT Support Technician",
    exp4Company: "Juan Pablo Pinas Hospital",
    exp4Desc: "Provided technical support across the institution: network cabling installation, Windows OS configuration, machine-to-network connectivity, equipment maintenance, and software administration.",

    // Projects
    projLabel: "PROJECTS",
    projTitle: "Featured Work",

    proj1Title: "NKJ Construction LLC",
    proj1Desc: "Designed and developed a responsive corporate website for a masonry construction company specializing in high-rise residential projects. The platform highlights services, portfolio, and company expertise while providing a professional user experience and strong brand presence.",
    proj1Link: "View Project",

    proj2Title: "DentalFlow",
    proj2Desc: "DentalFlow is a modern dental clinic management platform. It helps manage patients, appointments, treatments, and clinical records. The system includes digital records, odontograms, and automated reminders. It reduces paperwork and improves organization. Designed to simplify and modernize dental practice operations.",
    proj2Link: "View Project",

    proj3Title: "Veras Agramonte Investment SRL",
    proj3Desc: "Developed a modern corporate website for a medical solutions company, featuring responsive design, product showcases, project updates, and contact integrations. Built with scalability in mind, allowing future content management and administrative features through a secure authentication system.",
    proj3Link: "View Project",

    // Education
    eduLabel: "EDUCATION",
    eduTitle: "Education & Certifications",

    edu1Date: "2020 — 2024",
    edu1Degree: "Software Developer",
    edu1School: "Instituto Tecnológico de Las Américas (ITLA)",
    edu1Desc: "Software Development Technologist with expertise in the analysis, design, development, and maintenance of computer systems. Skilled in programming, databases, web and mobile development, software quality assurance, and the application of modern tools for creating efficient technological solutions.",

    edu2Date: "2019 — 2020",
    edu2Degree: "Intensive English Program",
    edu2School: "Ministerio de Educación Superior, Ciencia y Tecnología (MESCYT)",
    edu2Desc: "Intensive English as a foreign language program, taught four (4) hours daily for 11 months, taught in universities and institutes recognized for teaching English as a foreign language.",

    edu3Date: "2025",
    edu3Degree: "Front-End Web Development with Angular",
    edu3School: "Instituto Tecnológico de Las Américas (ITLA)",

    edu4Date: "2022",
    edu4Degree: "JavaScript Algorithms and Data Structures",
    edu4School: "freeCodeCamp",

    edu5Date: "2022",
    edu5Degree: "Responsive Web Design",
    edu5School: "freeCodeCamp",

    edu6Date: "2020",
    edu6Degree: "IT Essentials: PC Hardware and Software",
    edu6School: "Cisco Networking Academy",

    // Skills
    skillsLabel: "SKILLS",
    skillsTitle: "Technologies & Tools",

    // Contact
    contactLabel: "LET'S BUILD SOMETHING GREAT",
    contactTitle: "Ready to work together?",
    contactDesc: "Open to remote opportunities, enterprise projects and modern software engineering challenges.",
    contactEmail: "Email Me",
    contactLinkedIn: "LinkedIn",
    contactGitHub: "GitHub",

    // Footer
    footer: "© 2026 Roberto Cuevas. Built with passion and modern web technologies."
  },

  es: {
    // Navbar
    navAbout: "Sobre mí",
    navExperience: "Experiencia",
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navContact: "Contacto",
    resumeBtn: "Currículum",

    // Hero
    badge: "DISPONIBLE PARA TRABAJO REMOTO",
    heroHeading: 'Construyendo <span>soluciones digitales</span> escalables para negocios modernos.',
    heroDesc: "Desarrollador Full Stack e Ingeniero Backend con 3+ anos construyendo sistemas empresariales, APIs y aplicaciones web con .NET, React y tecnologias cloud. Transformo requerimientos complejos de negocio en software eficiente y mantenible.",
    heroBtn1: "Ver Proyectos",
    heroBtn2: "Contáctame",

    // Profile card
    profileRole: "Desarrollador Full Stack",
    profileYears: "Años de Experiencia",
    profileProjects: "Proyectos",
    profileRemote: "Disponible",

    // Experience
    expLabel: "EXPERIENCIA",
    expTitle: "Trayectoria Profesional",

    exp1Date: "2025 — Presente",
    exp1Role: "Desarrollador Full Stack",
    exp1Company: "J. Gasso Gasso SAS — Departamento de Tecnología",
    exp1Desc: "Lidere el desarrollo de aplicaciones web internas y automatice pipelines ETL con SQL Server, reduciendo tiempos de procesamiento manual. Disene modelos de datos, construi APIs REST y mantuve soluciones empresariales para multiples departamentos.",

    exp2Date: "2024 — 2025",
    exp2Role: "Desarrollador Junior",
    exp2Company: "Procuraduría General de la República",
    exp2Desc: "Trabajé en sistemas biométricos y aplicaciones empresariales usando React, TypeScript, JavaScript y APIs en .NET.",

    exp3Date: "2022 — 2023",
    exp3Role: "Asistente Administrativo",
    exp3Company: "Procuraduría General de la República",
    exp3Desc: "Apoyo administrativo y coordinación de flujos de trabajo internos para operaciones del Ministerio Público.",

    exp4Date: "2018 — 2019",
    exp4Role: "Técnico de Soporte IT",
    exp4Company: "Hospital Juan Pablo Pinas",
    exp4Desc: "Brinde soporte tecnico en toda la institucion: instalacion de cableado de red, configuracion de Windows, conectividad de equipos a red, mantenimiento de equipos y administracion de software.",

    // Projects
    projLabel: "PROYECTOS",
    projTitle: "Trabajo Destacado",

    proj1Title: "NKJ Construction LLC",
    proj1Desc: "Diseñé y desarrollé un sitio web corporativo responsivo para una empresa de construcción de mampostería especializada en proyectos residenciales de gran altura. La plataforma destaca servicios, portafolio y experiencia de la empresa, brindando una experiencia de usuario profesional.",
    proj1Link: "Ver Proyecto",

    proj2Title: "DentalFlow",
    proj2Desc: "DentalFlow es una plataforma moderna de gestión de clínicas dentales. Permite gestionar pacientes, citas, tratamientos e historial clínico. El sistema incluye registros digitales, odontogramas y recordatorios automatizados. Diseñado para simplificar y modernizar las operaciones de consultorios dentales.",
    proj2Link: "Ver Proyecto",

    proj3Title: "Veras Agramonte Investment SRL",
    proj3Desc: "Desarrollé un sitio web corporativo moderno para una empresa de soluciones médicas, con diseño responsivo, presentación de productos, actualizaciones de proyectos e integraciones de contacto. Construido pensando en escalabilidad, permitiendo gestión de contenido futura.",
    proj3Link: "Ver Proyecto",

    // Education
    eduLabel: "EDUCACIÓN",
    eduTitle: "Educacion y Certificaciones",

    edu1Date: "2020 — 2024",
    edu1Degree: "Desarrollador de Software",
    edu1School: "Instituto Tecnológico de Las Américas (ITLA)",
    edu1Desc: "Tecnólogo en Desarrollo de Software con experiencia en análisis, diseño, desarrollo y mantenimiento de sistemas informáticos. Habilidades en programación, bases de datos, desarrollo web y móvil, aseguramiento de calidad de software y aplicación de herramientas modernas.",

    edu2Date: "2019 — 2020",
    edu2Degree: "Programa Intensivo de Inglés",
    edu2School: "Ministerio de Educación Superior, Ciencia y Tecnología (MESCYT)",
    edu2Desc: "Programa intensivo de inglés como lengua extranjera, impartido cuatro (4) horas diarias durante 11 meses en universidades e institutos reconocidos.",

    edu3Date: "2025",
    edu3Degree: "Desarrollo Web Front-End con Angular",
    edu3School: "Instituto Tecnológico de Las Américas (ITLA)",

    edu4Date: "2022",
    edu4Degree: "Algoritmos y Estructuras de Datos en JavaScript",
    edu4School: "freeCodeCamp",

    edu5Date: "2022",
    edu5Degree: "Diseño Web Responsivo",
    edu5School: "freeCodeCamp",

    edu6Date: "2020",
    edu6Degree: "IT Essentials: Hardware y Software de PC",
    edu6School: "Cisco Networking Academy",

    // Skills
    skillsLabel: "HABILIDADES",
    skillsTitle: "Tecnologías y Herramientas",

    // Contact
    contactLabel: "CONSTRUYAMOS ALGO GRANDE",
    contactTitle: "¿Listo para trabajar juntos?",
    contactDesc: "Abierto a oportunidades remotas, proyectos empresariales y desafíos modernos de ingeniería de software.",
    contactEmail: "Escríbeme",
    contactLinkedIn: "LinkedIn",
    contactGitHub: "GitHub",

    // Footer
    footer: "© 2026 Roberto Cuevas. Construido con pasión y tecnologías web modernas."
  }
};

// =======================
// LANGUAGE SWITCH
// =======================

const langBtn = document.getElementById("langBtn");
let lang = "en";

function applyTranslation(t) {
  // Apply all data-i18n text translations
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  // Apply all data-i18n-html (innerHTML) translations
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key]) el.innerHTML = t[key];
  });

  // Experience section (structured data)
  const expSection = document.getElementById("experience");
  expSection.querySelector(".section-title span").textContent = t.expLabel;
  expSection.querySelector(".section-title h2").textContent = t.expTitle;
  const expItems = expSection.querySelectorAll(".timeline-item");
  const expData = [
    { date: t.exp1Date, role: t.exp1Role, company: t.exp1Company, desc: t.exp1Desc },
    { date: t.exp2Date, role: t.exp2Role, company: t.exp2Company, desc: t.exp2Desc },
    { date: t.exp3Date, role: t.exp3Role, company: t.exp3Company, desc: t.exp3Desc },
    { date: t.exp4Date, role: t.exp4Role, company: t.exp4Company, desc: t.exp4Desc },
  ];
  expItems.forEach((item, i) => {
    if (expData[i]) {
      item.querySelector(".timeline-date").textContent = expData[i].date;
      item.querySelector("h3").textContent = expData[i].role;
      item.querySelector("h4").textContent = expData[i].company;
      item.querySelector("p").textContent = expData[i].desc;
    }
  });

  // Projects section (structured data)
  const projSection = document.getElementById("projects");
  projSection.querySelector(".section-title span").textContent = t.projLabel;
  projSection.querySelector(".section-title h2").textContent = t.projTitle;
  const projCards = projSection.querySelectorAll(".project-card");
  const projData = [
    { title: t.proj1Title, desc: t.proj1Desc, link: t.proj1Link },
    { title: t.proj2Title, desc: t.proj2Desc, link: t.proj2Link },
    { title: t.proj3Title, desc: t.proj3Desc, link: t.proj3Link },
  ];
  projCards.forEach((card, i) => {
    if (projData[i]) {
      card.querySelector("h3").textContent = projData[i].title;
      card.querySelector("p").textContent = projData[i].desc;
      card.querySelector(".project-links a").textContent = projData[i].link;
    }
  });

  // Education section (structured data)
  const eduSection = document.getElementById("educations");
  eduSection.querySelector(".section-title span").textContent = t.eduLabel;
  eduSection.querySelector(".section-title h2").textContent = t.eduTitle;
  const eduItems = eduSection.querySelectorAll(".timeline-item");
  const eduData = [
    { date: t.edu1Date, degree: t.edu1Degree, school: t.edu1School, desc: t.edu1Desc },
    { date: t.edu2Date, degree: t.edu2Degree, school: t.edu2School, desc: t.edu2Desc },
    { date: t.edu3Date, degree: t.edu3Degree, school: t.edu3School, desc: "" },
    { date: t.edu4Date, degree: t.edu4Degree, school: t.edu4School, desc: "" },
    { date: t.edu5Date, degree: t.edu5Degree, school: t.edu5School, desc: "" },
    { date: t.edu6Date, degree: t.edu6Degree, school: t.edu6School, desc: "" },
  ];
  eduItems.forEach((item, i) => {
    if (eduData[i]) {
      item.querySelector(".timeline-date").textContent = eduData[i].date;
      item.querySelector("h3").textContent = eduData[i].degree;
      item.querySelector("h4").textContent = eduData[i].school;
      const p = item.querySelector("p");
      if (p) p.textContent = eduData[i].desc;
    }
  });

  // Skills
  const skillsSection = document.getElementById("skills");
  skillsSection.querySelector(".section-title span").textContent = t.skillsLabel;
  skillsSection.querySelector(".section-title h2").textContent = t.skillsTitle;
}

langBtn.addEventListener("click", () => {
  lang = lang === "en" ? "es" : "en";
  langBtn.textContent = lang === "en" ? "ES" : "EN";
  applyTranslation(translations[lang]);
});

// =======================
// NAVBAR EFFECT
// =======================

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.style.background = window.scrollY > 50
    ? "rgba(5,8,22,.92)"
    : "rgba(5,8,22,.7)";
});

// =======================
// PARTICLES
// =======================

const particles = document.createElement("div");
particles.classList.add("particles");
document.body.appendChild(particles);

for (let i = 0; i < 40; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDuration = (5 + Math.random() * 10) + "s";
  particle.style.opacity = Math.random();
  particle.style.width = particle.style.height = (2 + Math.random() * 4) + "px";
  particles.appendChild(particle);
}

// =======================
// SCROLL REVEAL
// =======================

const reveals = document.querySelectorAll(".section, .project-card, .skill-card");

function revealOnScroll() {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      item.classList.add("reveal", "active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =======================
// PARALLAX HERO
// =======================

document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero");
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;
  hero.style.transform = `translate(${x}px, ${y}px)`;
});

  document
.querySelectorAll(".read-more-btn")
.forEach(button => {

  button.addEventListener("click", () => {

    const text =
    button.previousElementSibling;

    text.classList.toggle("expanded");

    button.textContent =
    text.classList.contains("expanded")
      ? "Show Less"
      : "Read More";

  });

});
const modal =
document.getElementById("projectModal");

const modalImage =
document.getElementById("modalImage");

const modalTitle =
document.getElementById("modalTitle");

const modalDescription =
document.getElementById("modalDescription");

const modalTags =
document.getElementById("modalTags");

document
.querySelectorAll(".project-card")
.forEach(card=>{

  card.addEventListener("click",()=>{

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    modalImage.src =
    card.querySelector("img").src;

    modalTitle.textContent =
    card.querySelector("h3").textContent;

    modalDescription.textContent =
    card.querySelector("p").textContent;

    modalTags.innerHTML =
    card.querySelector(".project-tags").innerHTML;

    document.querySelector(".close-modal").focus();

  });

});

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

// Cerrar con la X
document
.querySelector(".close-modal")
.addEventListener("click", closeModal);

// Cerrar haciendo click fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
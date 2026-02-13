import type {
  ExperienceItem,
  ProjectItem,
  ProjectLink,
  ProjectTag,
} from "./cv";

export type Lang = "es" | "en";

export type CVData = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  summary: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: Record<string, string[]>;
  education: string;
  languages: string[];
};

// ✅ helper para no repetir types
const L = (label: ProjectLink["label"], url: string): ProjectLink => ({ label, url });
const TAG = (t: ProjectTag) => t;

export const cvs: Record<Lang, CVData> = {
  es: {
    name: "Carlos Palisa",
    headline: "Senior Full Stack Developer – PHP | Laravel | AWS | React | Node.js",
    location: "Salta, Argentina",
    email: "carlospalisa@gmail.com",
    phone: "+54 387 2200617",
    summary: [
      "Full Stack Developer con más de 6 años de experiencia desarrollando aplicaciones web escalables y de alto rendimiento.",
      "Especializado en PHP y Laravel como stack principal, con experiencia en diseño de arquitecturas backend, APIs REST, integraciones y optimización.",
      "Experiencia complementaria en Node.js, React y .NET, y despliegues en AWS con Docker y CI/CD.",
    ],
    experience: [
      {
        company: "Coderio (Software Company)",
        role: "Full Stack Developer",
        period: "Febrero 2023 – Octubre 2025",
        bullets: [
          "Desarrollo y mantenimiento backend con PHP (Laravel) y Node.js.",
          "Diseño e implementación de APIs RESTful escalables y seguras.",
          "Integración con servicios externos y sistemas legacy.",
          "Optimización de performance y consultas en bases de datos.",
          "Despliegue y mantenimiento en AWS (EC2, S3) con Docker y CI/CD.",
          "Decisiones de arquitectura y definición técnica de soluciones.",
          "Trabajo bajo Scrum (planning, refinamientos, entregas continuas).",
        ],
        clients: [
          {
            name: "CVC Argentina – Bibam Group",
            bullets: [
              "Backend con PHP Laravel y Node.js.",
              "SQL Server, MySQL y MongoDB.",
              "Integraciones y mejora de performance.",
              "Migración de funcionalidades hacia arquitecturas más escalables.",
            ],
          },
          {
            name: "Violetta Cosméticos — Proyecto BDR-PPM",
            bullets: [
              "Full Stack con PHP, Node.js, React (MUI) y TypeScript.",
              "Plataforma de planificación y gestión de proyectos desde cero.",
              "Microservicios y documentación con Swagger.",
              "Testing automatizado y despliegue en AWS con Docker y GitLab CI/CD.",
            ],
          },
        ],
      },
      {
        company: "Cinme Iber (Academia IT)",
        role: "Full Stack Developer",
        period: "Marzo 2021 – Enero 2023",
        bullets: [
          "Desarrollo con C# (.NET Framework / .NET Core) y SQL Server.",
          "Implementación de arquitectura MVC y módulos backend escalables.",
          "Frontend con Angular, HTML5 y Bootstrap.",
        ],
      },
      {
        company: "Black Fish",
        role: "Full Stack Developer",
        period: "Noviembre 2018 – Abril 2021",
        bullets: [
          "Desarrollo y mantenimiento de aplicaciones web con PHP y JavaScript.",
          "Optimización de consultas en bases de datos relacionales.",
          "Resolución de incidencias productivas y mejoras continuas.",
        ],
      },
    ],
    projects: [
      {
        name: "BDR-PPM",
        client: "Violetta Cosméticos",
        year: "2025",
        bullets: [
          "Plataforma Full Stack con PHP, Node.js, React y AWS.",
          "Arquitectura orientada a servicios y automatización de procesos críticos.",
          "Testing con Jest y control de calidad integral.",
        ],
        tags: [TAG("Full Stack")],
        stack: ["PHP", "Node.js", "React", "AWS"],
      },
      {
        name: "Migración y Optimización de Sistemas",
        client: "CVC Argentina",
        year: "",
        bullets: [
          "Modernización de sistemas legacy hacia arquitecturas más escalables.",
          "Integración de múltiples APIs y mejora del rendimiento general.",
        ],
        tags: [TAG("Backend")],
        stack: ["Laravel", "Node.js", "SQL Server", "MongoDB"],
      },
      {
        name: "Church Management System",
        client: "Proyecto personal",
        year: "2026",
        bullets: [
          "SPA para gestión de miembros, eventos, finanzas y módulos.",
          "Arquitectura backend con API REST y persistencia en MongoDB.",
        ],
        tags: [TAG("Full Stack")],
        stack: ["React", "Node.js", "Fastify", "MongoDB", "Tailwind"],
        links: [
          L("GitHub", "https://github.com/CarlosPalisa/ChurchSystem"),
          L("Live", "https://TU-URL.vercel.app"),
        ],
      },
      {
        name: "Clubes / Members",
        client: "Proyecto personal",
        year: "2026",
        bullets: [
          "Gestión de clubes y socios con filtros, modales y control por roles.",
          "UI responsive tipo dashboard.",
        ],
        tags: [TAG("Frontend")],
        stack: ["Next.js", "TypeScript", "Tailwind"],
        links: [
          L("GitHub", "https://github.com/CarlosPalisa/CLUB-SaaS"),
          L("Live", "https://TU-URL-CLUBES.vercel.app"),
        ],
      },
    ],
    skills: {
      backend: ["PHP (Laravel)", "Node.js", "Express.js", "C# (.NET Core)", "ASP.NET Core"],
      frontend: ["React (JS/TS)", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"],
      databases: ["MySQL", "MariaDB", "SQL Server", "MongoDB"],
      cloudDevOps: ["AWS (EC2, S3)", "Docker", "Git", "GitLab CI/CD"],
      architecture: ["Microservicios", "Clean Architecture", "SOLID", "APIs RESTful"],
      methodologies: ["Scrum", "Kanban"],
    },
    education:
      "Analista de Sistemas de Computación – Instituto Superior del Milagro (Salta)",
    languages: ["Español: Nativo", "Inglés: Intermedio(B2)", "Portugués: Intermedio"],
  },

  en: {
    name: "Carlos Palisa",
    headline: "Senior Full Stack Developer – PHP | Laravel | AWS | React | Node.js",
    location: "Salta, Argentina",
    email: "carlospalisa@gmail.com",
    phone: "+54 387 2200617",
    summary: [
      "Full Stack Developer with 6+ years of experience building scalable, high-performance web applications.",
      "Strong background in PHP and Laravel as a main stack, including backend architecture, REST APIs, integrations, and optimization.",
      "Additional experience with Node.js, React, and .NET, plus AWS deployments using Docker and CI/CD.",
    ],
    experience: [
      {
        company: "Coderio (Software Company)",
        role: "Full Stack Developer",
        period: "February 2023 – October 2025",
        bullets: [
          "Backend development and maintenance using PHP (Laravel) and Node.js.",
          "Design and implementation of scalable, secure RESTful APIs.",
          "Integration with external services and legacy systems.",
          "Performance optimization and database query tuning.",
          "Deployment and maintenance on AWS (EC2, S3) with Docker and CI/CD.",
          "Architecture decisions and technical solution definition.",
          "Scrum-based delivery (planning, refinement, continuous releases).",
        ],
        clients: [
          {
            name: "CVC Argentina – Bibam Group",
            bullets: [
              "Backend with PHP Laravel and Node.js.",
              "SQL Server, MySQL and MongoDB.",
              "Integrations and performance improvements.",
              "Feature migration toward more scalable architectures.",
            ],
          },
          {
            name: "Violetta Cosmetics — BDR-PPM Project",
            bullets: [
              "Full Stack with PHP, Node.js, React (MUI) and TypeScript.",
              "Project planning and management platform built from scratch.",
              "Microservices and API documentation with Swagger.",
              "Automated testing and AWS deployment using Docker and GitLab CI/CD.",
            ],
          },
        ],
      },
      {
        company: "Cinme Iber (IT Academy)",
        role: "Full Stack Developer",
        period: "March 2021 – January 2023",
        bullets: [
          "Development with C# (.NET Framework / .NET Core) and SQL Server.",
          "MVC architecture implementation and scalable backend modules.",
          "Frontend development with Angular, HTML5 and Bootstrap.",
        ],
      },
      {
        company: "Black Fish",
        role: "Full Stack Developer",
        period: "November 2018 – April 2021",
        bullets: [
          "Development and maintenance of web applications with PHP and JavaScript.",
          "Optimization of queries in relational databases.",
          "Production incident resolution and continuous improvements.",
        ],
      },
    ],
    projects: [
      {
        name: "BDR-PPM",
        client: "Violetta Cosmetics",
        year: "2025",
        bullets: [
          "Full Stack platform using PHP, Node.js, React and AWS.",
          "Service-oriented architecture and automation of critical workflows.",
          "Testing with Jest and end-to-end quality focus.",
        ],
        tags: [TAG("Full Stack")],
        stack: ["PHP", "Node.js", "React", "AWS"],
      },
      {
        name: "Systems Migration & Optimization",
        client: "CVC Argentina",
        year: "",
        bullets: [
          "Modernization of legacy systems toward more scalable architectures.",
          "Multiple API integrations and overall performance improvements.",
        ],
        tags: [TAG("Backend")],
        stack: ["Laravel", "Node.js", "SQL Server", "MongoDB"],
      },
      {
        name: "Church Management System",
        client: "Personal project",
        year: "2026",
        bullets: [
          "SPA for member management, events, finance, and modules.",
          "Backend architecture with REST API and MongoDB persistence.",
        ],
        tags: [TAG("Full Stack")],
        stack: ["React", "Node.js", "Fastify", "MongoDB", "Tailwind"],
        links: [
          L("GitHub", "https://github.com/CarlosPalisa/ChurchSystem"),
          L("Live", "https://TU-URL.vercel.app"),
        ],
      },
      {
        name: "Clubs / Members",
        client: "Personal project",
        year: "2026",
        bullets: [
          "Clubs and members management with filters, modals, and role-based access.",
          "Responsive dashboard-style UI.",
        ],
        tags: [TAG("Frontend")],
        stack: ["Next.js", "TypeScript", "Tailwind"],
        links: [
          L("GitHub", "https://github.com/CarlosPalisa/CLUB-SaaS"),
          L("Live", "https://TU-URL-CLUBES.vercel.app"),
        ],
      },
    ],
    skills: {
      backend: ["PHP (Laravel)", "Node.js", "Express.js", "C# (.NET Core)", "ASP.NET Core"],
      frontend: ["React (JS/TS)", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"],
      databases: ["MySQL", "MariaDB", "SQL Server", "MongoDB"],
      cloudDevOps: ["AWS (EC2, S3)", "Docker", "Git", "GitLab CI/CD"],
      architecture: ["Microservices", "Clean Architecture", "SOLID", "RESTful APIs"],
      methodologies: ["Scrum", "Kanban"],
    },
    education:
      "Systems Analyst – Instituto Superior del Milagro (Salta, Argentina)",
    languages: ["Spanish: Native", "English: Intermediate(B2)", "Portuguese: Intermediate"],
  },
};

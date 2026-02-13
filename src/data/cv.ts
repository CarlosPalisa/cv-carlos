export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  clients?: { name: string; bullets: string[] }[];
};

export type ProjectItem = {
  name: string;
  client: string;
  year: string;
  bullets: string[];
  tags?: ProjectTag[];     
  stack?: string[];        
  links?: ProjectLink[];   
};
export type ProjectLink = {
  label: "Live" | "GitHub" | "Demo" | "Docs";
  url: string;
};

export type ProjectTag = "Full Stack" | "Frontend" | "Backend" | "Other";


export const cv = {
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
  ] as ExperienceItem[],
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
    },
    {
      name: "Migración y Optimización de Sistemas",
      client: "CVC Argentina",
      year: "",
      bullets: [
        "Modernización de sistemas legacy hacia arquitecturas más escalables.",
        "Integración de múltiples APIs y mejora del rendimiento general.",
      ],
    },
    {
    name: "Church Management System",
    client: "Proyecto personal",
    year: "2026",
    bullets: [
      "SPA para gestión de miembros, eventos, finanzas y módulos.",
      "Arquitectura backend con API REST y persistencia en MongoDB.",
    ],
    tags: ["Full Stack"],
    stack: ["React", "Node.js", "Fastify", "MongoDB", "Tailwind"],
    links: [
      { label: "GitHub", url: "https://github.com/CarlosPalisa/ChurchSystem" }, // cambia si es otro
      { label: "Live", url: "https://TU-URL.vercel.app" }, // cuando lo deployes
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
    tags: ["Frontend"],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      { label: "GitHub", url: "https://github.com/CarlosPalisa/CLUB-SaaS" },
      { label: "Live", url: "https://TU-URL-CLUBES.vercel.app" },
    ],
  },
  ] as ProjectItem[],
  skills: {
    backend: ["PHP (Laravel)", "Node.js", "Express.js", "C# (.NET Core)", "ASP.NET Core"],
    frontend: ["React (JS/TS)", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    databases: ["MySQL", "MariaDB", "SQL Server", "MongoDB"],
    cloudDevOps: ["AWS (EC2, S3)", "Docker", "Git", "GitLab CI/CD"],
    architecture: ["Microservicios", "Clean Architecture", "SOLID", "APIs RESTful"],
    methodologies: ["Scrum", "Kanban"],
  },
  education: "Analista de Sistemas de Computación – Instituto Superior del Milagro (Salta)",
  languages: ["Español: Nativo", "Inglés: Intermedio", "Portugués: Intermedio"],
};

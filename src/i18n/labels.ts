import type { Lang } from "./types";

export const LABELS: Record<Lang, {

 // Navbar
  nav: {
    profile: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    languages: string;
  };

  // Section titles
  profileTitle: string;
  educationTitle: string;
  languagesTitle: string;

  // Footer
  footer: string;  
  // Global
  skillsTitle: string;
  projectsTitle: string;
  experienceTitle: string;

  all: string;
  searchSkills: string;
  searchProjects: string;
  emptySkills: string;
  emptyProjects: string;

  // Categories / Tags
  skillCategories: Record<string, string>;
  projectTags: Record<string, string>;
}> = {
  es: {
     nav: {
      profile: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Skills",
      education: "Educación",
      languages: "Idiomas",
    },
    profileTitle: "Perfil Profesional",
    educationTitle: "Educación",
    languagesTitle: "Idiomas",
    footer: "Hecho con React + Tailwind. Deploy ideal: Vercel / Netlify / GitHub Pages.",
    skillsTitle: "Habilidades Técnicas",
    projectsTitle: "Proyectos",
    experienceTitle: "Experiencia Profesional",

    all: "Todas",
    searchSkills: "Buscar skill… (ej: React, AWS, SQL)",
    searchProjects: "Buscar proyecto… (ej: React, Fastify, AWS)",
    emptySkills: "No encontré skills con ese filtro/búsqueda.",
    emptyProjects: "No encontré proyectos con ese filtro.",

    skillCategories: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Bases de datos",
      cloudDevOps: "Cloud / DevOps",
      architecture: "Arquitectura",
      methodologies: "Metodologías",
    },

    projectTags: {
      "Full Stack": "Full Stack",
      Frontend: "Frontend",
      Backend: "Backend",
      Other: "Otros",
    },
  },

  en: {

     nav: {
      profile: "Profile",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
    },
    profileTitle: "Professional Summary",
    educationTitle: "Education",
    languagesTitle: "Languages",
    footer: "Built with React + Tailwind. Recommended deploy: Vercel / Netlify / GitHub Pages.",
    skillsTitle: "Technical Skills",
    projectsTitle: "Projects",
    experienceTitle: "Professional Experience",

    all: "All",
    searchSkills: "Search skill… (e.g. React, AWS, SQL)",
    searchProjects: "Search project… (e.g. React, Fastify, AWS)",
    emptySkills: "No skills found for this filter/search.",
    emptyProjects: "No projects found for this filter.",

    skillCategories: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Databases",
      cloudDevOps: "Cloud / DevOps",
      architecture: "Architecture",
      methodologies: "Methodologies",
    },

    projectTags: {
      "Full Stack": "Full Stack",
      Frontend: "Frontend",
      Backend: "Backend",
      Other: "Other",
    },
  },
};

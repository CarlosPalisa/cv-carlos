// import { cv } from "./data/cv";
import { Container } from "./components/Container";
import { Section } from "./components/Section";
import { Badge } from "./components/Badge";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/Projects";
import { useEffect, useState } from "react";
import { cvs, type Lang } from "./data/cv.i18n";
import { LABELS } from "./i18n/labels";
import { SiGithub, SiLinkedin } from "react-icons/si";




function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-sm">
      {children}
    </div>
  );
}

export default function App() {

  const [lang, setLang] = useState<Lang>(() => {
  const saved = localStorage.getItem("cv_lang");
  return saved === "en" || saved === "es" ? saved : "es";
});

useEffect(() => {
  localStorage.setItem("cv_lang", lang);
}, [lang]);

const cv = cvs[lang];
const t = LABELS[lang];


  return (
    <Container>
      {/* TOP BAR */}
      <div className="fixed right-4 top-4 z-50">
        <button
          className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-sm text-zinc-200 hover:bg-zinc-900"
          onClick={() => setLang((p) => (p === "es" ? "en" : "es"))}
        >
          {lang === "es" ? "ES" : "EN"}
        </button>
      </div>

      <div className="sticky top-0 z-10 -mx-4 mb-8 border-b border-zinc-800 bg-zinc-950/80 px-4 py-3 backdrop-blur">
        <nav className="flex flex-wrap gap-3 text-sm text-zinc-300">
          {[
            [t.nav.profile, "perfil"],
            [t.nav.experience, "experiencia"],
            [t.nav.projects, "proyectos"],
            [t.nav.skills, "skills"],
            [t.nav.education, "educacion"],
            [t.nav.languages, "idiomas"],
          ].map(([label, id]) => (
            <a key={id} className="hover:text-white" href={`#${id}`}>
              {label}
            </a>
          ))}

          <span className="ml-auto text-zinc-400 hidden sm:inline">
            {cv.location}
          </span>
        </nav>
      </div>

      {/* HERO */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {cv.name}
        </h1>
        <p className="mt-2 text-zinc-300">{cv.headline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>{cv.email}</Badge>
          <Badge>{cv.phone}</Badge>
        </div>
      </header>

      <div className="space-y-10">
        <Section id="perfil" title={t.profileTitle}>
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-zinc-200">
              {cv.summary.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <Section id="experiencia" title={t.experienceTitle}>
          <div className="space-y-4">
            {cv.experience.map((e) => (
              <Card key={e.company + e.period}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-semibold">{e.company}</h3>
                    <p className="text-zinc-300">{e.role}</p>
                  </div>
                  <p className="text-sm text-zinc-400">{e.period}</p>
                </div>

                <ul className="mt-3 list-disc pl-5 space-y-1 text-zinc-200">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {e.clients?.length ? (
                  <div className="mt-4 space-y-3">
                    {e.clients.map((c) => (
                      <div
                        key={c.name}
                        className="rounded-xl border border-zinc-800 p-4"
                      >
                        <p className="font-medium">{c.name}</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-200">
                          {c.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        {/* <Section id="proyectos" title="Proyectos Relevantes">
          <div className="grid gap-4 sm:grid-cols-2">
            {cv.projects.map((p) => (
              <Card key={p.name + p.client}>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-zinc-400">{p.year}</p>
                </div>
                <p className="text-zinc-300">{p.client}</p>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-zinc-200">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section> */}
        {/* <ProjectsSection /> */}
        <ProjectsSection cv={cv} lang={lang} />

        <SkillsSection cv={cv} lang={lang} />

        <Section id="educacion" title={t.educationTitle}>
          <Card>
            <p className="text-zinc-200">{cv.education}</p>
          </Card>
        </Section>

        <Section id="idiomas" title={t.languagesTitle}>
          <Card>
            <ul className="list-disc pl-5 space-y-1 text-zinc-200">
              {cv.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <footer className="pt-6 border-t border-zinc-800 text-sm text-zinc-400">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Texto */}
            <p>{t.footer.text}</p>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/CarlosPalisa"
                target="_blank"
                rel="noreferrer"
                aria-label={t.footer.github}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <SiGithub className="w-5 h-5" />
                <span className="hidden sm:inline">{t.footer.github}</span>
              </a>

              <a
                href="https://www.linkedin.com/in/carlos-palisa/"
                target="_blank"
                rel="noreferrer"
                aria-label={t.footer.linkedin}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <SiLinkedin className="w-5 h-5" />
                <span className="hidden sm:inline">{t.footer.linkedin}</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
}

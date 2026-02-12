import { cv } from "./data/cv";
import { Container } from "./components/Container";
import { Section } from "./components/Section";
import { Badge } from "./components/Badge";
import SkillsSection from "./components/Skills";


function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-sm">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Container>
      {/* TOP BAR */}
      <div className="sticky top-0 z-10 -mx-4 mb-8 border-b border-zinc-800 bg-zinc-950/80 px-4 py-3 backdrop-blur">
        <nav className="flex flex-wrap gap-3 text-sm text-zinc-300">
          {[
            ["Perfil", "perfil"],
            ["Experiencia", "experiencia"],
            ["Proyectos", "proyectos"],
            ["Skills", "skills"],
            ["Educación", "educacion"],
            ["Idiomas", "idiomas"],
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
        <Section id="perfil" title="Perfil Profesional">
          <Card>
            <ul className="list-disc pl-5 space-y-2 text-zinc-200">
              {cv.summary.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <Section id="experiencia" title="Experiencia Profesional">
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
                      <div key={c.name} className="rounded-xl border border-zinc-800 p-4">
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

        <Section id="proyectos" title="Proyectos Relevantes">
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
        </Section>
        
         <SkillsSection />

        <Section id="educacion" title="Educación">
          <Card>
            <p className="text-zinc-200">{cv.education}</p>
          </Card>
        </Section>

        <Section id="idiomas" title="Idiomas">
          <Card>
            <ul className="list-disc pl-5 space-y-1 text-zinc-200">
              {cv.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <footer className="pt-6 border-t border-zinc-800 text-sm text-zinc-400">
          <p>Hecho con React + Tailwind. Deploy ideal: Vercel / Netlify / GitHub Pages.</p>
        </footer>
      </div>
    </Container>
  );
}

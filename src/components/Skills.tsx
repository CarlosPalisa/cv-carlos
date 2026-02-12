import { useMemo, useState } from "react";
import { Badge } from "./Badge";
import { Section } from "./Section";
import { cv } from "../data/cv";

type SkillCategory = keyof typeof cv.skills;

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  backend: "Backend",
  frontend: "Frontend",
  databases: "Bases de datos",
  cloudDevOps: "Cloud / DevOps",
  architecture: "Arquitectura",
  methodologies: "Metodologías",
};

function ChipButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-1 text-sm transition",
        active
          ? "border-zinc-200 bg-zinc-100 text-zinc-900"
          : "border-zinc-800 bg-zinc-900/40 text-zinc-200 hover:bg-zinc-900",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function SkillsSection() {

  const categories = Object.keys(cv.skills) as SkillCategory[];

  const [activeCats, setActiveCats] = useState<Set<SkillCategory>>(
    () => new Set(categories),
  );
  const [query, setQuery] = useState("");

  const skills = useMemo(() => {
    const q = query.trim().toLowerCase();

    // juntamos skills por categoría
    const rows = categories
      .filter((cat) => activeCats.has(cat))
      .map((cat) => ({
        cat,
        label: CATEGORY_LABELS[cat],
        items: cv.skills[cat].filter((s) =>
          q ? s.toLowerCase().includes(q) : true,
        ),
      }))
      // si hay búsqueda, ocultamos categorías vacías
      .filter((r) => (q ? r.items.length > 0 : true));

    return rows;
  }, [activeCats, query, categories]);

  const totalActive = activeCats.size;
  const allSelected = totalActive === categories.length;

const toggleCategory = (cat: SkillCategory) => {
  setActiveCats((prev) => {
    const isOnlyThisSelected = prev.size === 1 && prev.has(cat);

    // Si ya estaba seleccionada esa única, volvemos a "Todas"
    if (isOnlyThisSelected) return new Set(categories);

    // Si no, dejamos SOLO la que marcaste
    return new Set([cat]);
  });
};



  const selectAll = () => setActiveCats(new Set(categories));

  return (
    <Section id="skills" title="Habilidades Técnicas">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-sm">
        {/* Controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <ChipButton active={allSelected} onClick={selectAll}>
              Todas
            </ChipButton>

            {categories.map((cat) => (
              <ChipButton
                key={cat}
                active={activeCats.has(cat)}
                onClick={() => toggleCategory(cat)}
              >
                {CATEGORY_LABELS[cat]}
              </ChipButton>
            ))}
          </div>

          <div className="w-full sm:w-72">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar skill… (ej: React, AWS, SQL)"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-zinc-500"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mt-5 space-y-5">
          {skills.length === 0 ? (
            <p className="text-sm text-zinc-400">
              No encontré skills con ese filtro/búsqueda.
            </p>
          ) : (
            skills.map((group) => (
              <div key={group.cat}>
                <p className="text-sm font-semibold text-zinc-200">
                  {group.label}
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Badge } from "./Badge";
import { Section } from "./Section";
import { LABELS } from "../i18n/labels";
import type { Lang } from "../i18n/types";

const CATEGORY_LABELS_ES: Record<string, string> = {
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

export default function SkillsSection({
  cv,
  lang,
}: {
  cv: { skills: Record<string, string[]> };
  lang: Lang;
}) {

  const categories = useMemo(() => Object.keys(cv.skills), [cv.skills]);
  const t = LABELS[lang];



  // estado
  const [activeCats, setActiveCats] = useState<Set<string>>(
    () => new Set(categories),
  );
  const [query, setQuery] = useState("");

  // ✅ cuando cambia el cv (ej: idioma), reseteamos a "Todas"
  useEffect(() => {
    setActiveCats(new Set(categories));
    setQuery("");
  }, [categories]);

  const allSelected = activeCats.size === categories.length;

  const toggleCategory = (cat: string) => {
    setActiveCats((prev) => {
      const isOnlyThisSelected = prev.size === 1 && prev.has(cat);

      // si ya era la única -> volvemos a Todas
      if (isOnlyThisSelected) return new Set(categories);

      // si no -> queda SOLO la que clickeaste (selección única)
      return new Set([cat]);
    });
  };

  const selectAll = () => setActiveCats(new Set(categories));

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();

    return categories
      .filter((cat) => activeCats.has(cat))
      .map((cat) => {
        const items = (cv.skills[cat] ?? []).filter((s) =>
          q ? s.toLowerCase().includes(q) : true,
        );

        return {
          cat,
          label: CATEGORY_LABELS_ES[cat] ?? cat,
          items,
        };
      })
      .filter((r) => (query.trim() ? r.items.length > 0 : true));
  }, [activeCats, query, categories, cv.skills]);

  return (
    <Section id="skills" title={t.skillsTitle}>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-sm">
        {/* Controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <ChipButton active={allSelected} onClick={selectAll}>
              {t.all}
            </ChipButton>

            {categories.map((cat) => (
              <ChipButton
                key={cat}
                active={activeCats.has(cat)}
                onClick={() => toggleCategory(cat)}
              >
                {t.skillCategories[cat] ?? cat}
              </ChipButton>
            ))}
          </div>

          <div className="w-full sm:w-72">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
               placeholder={t.searchSkills}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-zinc-500"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mt-5 space-y-5">
          {rows.length === 0 ? (
            <p className="text-sm text-zinc-400">{t.emptySkills}</p>
          ) : (
            rows.map((group) => (
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

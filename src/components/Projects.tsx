import { useMemo, useState } from "react";
import { Section } from "./Section";
import { Badge } from "./Badge";
import type { ProjectItem, ProjectTag } from "../data/cv";
import { LABELS } from "../i18n/labels";
import type { Lang } from "../i18n/types";


// Tip del CV mínimo que necesita esta sección
// type CvLike = {
//   projects: ProjectItem[];
// };

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

function LinkPill({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-sm text-zinc-200 hover:bg-zinc-900"
    >
      {label}
      <span className="ml-2 text-zinc-500">↗</span>
    </a>
  );
}

export default function ProjectsSection({
  cv,
  lang,
}: {
  cv: { projects: ProjectItem[] };
  lang: Lang;
}) {

  const [activeTag, setActiveTag] = useState<ProjectTag | "ALL">("ALL");
  const [query, setQuery] = useState("");

  const t = LABELS[lang];


  const tags = useMemo<ProjectTag[]>(() => {
    const set = new Set<ProjectTag>();
    for (const p of cv.projects) {
      for (const t of p.tags ?? []) set.add(t);
    }
    return Array.from(set);
  }, [cv.projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return cv.projects.filter((p) => {
      const pTags = p.tags ?? [];
      const matchTag = activeTag === "ALL" ? true : pTags.includes(activeTag);

      const haystack = [
        p.name,
        p.client,
        p.year ?? "",
        ...(p.bullets ?? []),
        ...(p.stack ?? []),
        ...pTags,
      ]
        .join(" ")
        .toLowerCase();

      const matchQuery = q ? haystack.includes(q) : true;

      return matchTag && matchQuery;
    });
  }, [activeTag, query, cv.projects]);

  return (
    <Section id="proyectos" title={t.projectsTitle}>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-sm">
        {/* Controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <ChipButton
              active={activeTag === "ALL"}
              onClick={() => setActiveTag("ALL")}
            >
              {t.all}
            </ChipButton>

            {tags.map((t) => (
              <ChipButton
                key={t}
                active={activeTag === t}
                onClick={() => setActiveTag(t)}
              >
                {t}
              </ChipButton>
            ))}
          </div>

          <div className="w-full sm:w-72">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchProjects}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-zinc-500"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {filtered.length === 0 ? (
            <p className="text-sm text-zinc-400">{t.emptyProjects}</p>
          ) : (
            filtered.map((p) => (
              <div
                key={`${p.name}-${p.client}-${p.year}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {p.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{p.client}</p>
                  </div>
                  {p.year ? (
                    <span className="text-sm text-zinc-500">{p.year}</span>
                  ) : null}
                </div>

                <ul className="mt-3 list-disc pl-5 space-y-1 text-zinc-200">
                  {(p.bullets ?? []).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {(p.tags?.length ?? 0) > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(p.tags ?? []).map((tag) => (
                      <Badge key={tag}>{t.projectTags[tag] ?? tag}</Badge>
                    ))}
                  </div>
                ) : null}

                {(p.stack?.length ?? 0) > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(p.stack ?? []).map((s) => (
                      <span
                        key={s}
                        className="text-xs rounded-full border border-zinc-800 px-2 py-1 text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}

                {(p.links?.length ?? 0) > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(p.links ?? []).map((l) => (
                      <LinkPill
                        key={`${l.label}-${l.url}`}
                        label={l.label}
                        url={l.url}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-xs text-zinc-500">
                    (Agregá links en cv.ts: Live / GitHub / Demo / Docs)
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}

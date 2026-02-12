export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="h-px flex-1 bg-zinc-800 ml-4" />
      </div>
      {children}
    </section>
  );
}

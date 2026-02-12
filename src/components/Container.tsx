export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>
    </div>
  );
}

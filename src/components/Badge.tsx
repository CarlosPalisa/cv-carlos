export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-200">
      {children}
    </span>
  );
}

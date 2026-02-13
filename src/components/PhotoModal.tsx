import { X } from "lucide-react";

export default function PhotoModal({
  open,
  onClose,
  src,
  alt,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 max-w-sm w-full mx-4 rounded-2xl bg-zinc-950 border border-zinc-800 p-4 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-zinc-400 hover:text-white"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={src}
          alt={alt ?? "Foto de perfil"}
          className="w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

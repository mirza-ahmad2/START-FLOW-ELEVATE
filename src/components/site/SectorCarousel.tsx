import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Sector = { name: string; description: string };

export function SectorCarousel({ items }: { items: Sector[] }) {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  const next = () => setI((v) => (v + 1) % items.length);

  return (
    <div className="relative">
      <div className="flex items-end justify-between">
        <div className="eyebrow">
          {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Précédent"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-foreground/80 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Suivant"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-foreground/80 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-5">
        {items.map((s, idx) => (
          <button
            key={s.name}
            onClick={() => setI(idx)}
            className={`group relative overflow-hidden rounded-sm border p-8 text-left transition-all duration-500 ${
              i === idx
                ? "border-primary bg-primary/10"
                : "border-white/8 bg-surface/30 hover:border-white/25"
            }`}
          >
            <div className="font-display text-xs text-muted-foreground">
              0{idx + 1}
            </div>
            <div className="mt-8 font-display text-lg leading-tight text-foreground">
              {s.name}
            </div>
          </button>
        ))}
      </div>

      <motion.div
        key={i}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10 max-w-2xl text-lg leading-relaxed text-foreground/85"
      >
        {items[i].description}
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function PillarCard({
  index,
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  index: number;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-sm border border-white/8 bg-surface/40 p-8 sm:p-10 transition-colors duration-700 hover:border-primary/40 hover:bg-surface hover:shadow-[0_24px_60px_-30px_rgba(201,59,138,0.45)]"
    >
      <div>
        <div className="flex flex-nowrap items-baseline justify-between gap-2">
          <span className="eyebrow whitespace-nowrap text-[0.625rem] tracking-[0.12em] sm:text-xs sm:tracking-[0.14em]">
            {eyebrow}
          </span>
          <span className="shrink-0 whitespace-nowrap font-display text-sm tabular-nums text-muted-foreground">
            0{index + 1}
          </span>
        </div>
        <div className="mt-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-all duration-500 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
        </div>
        <h3 className="mt-8 font-display text-2xl font-light leading-tight tracking-tight text-foreground sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div
        className="mt-12 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </motion.article>
  );
}

import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type HeroProps = {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  cta?: { label: string; to: string };
  overlay?: "soft" | "medium" | "strong";
  align?: "center" | "left";
  minHeight?: string;
  children?: ReactNode;
  showScrollCue?: boolean;
};

const overlayClass = {
  soft: "bg-background/45",
  medium: "bg-background/60",
  strong: "bg-background/75",
} as const;

export function Hero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  cta,
  overlay = "medium",
  align = "center",
  minHeight = "min-h-[100svh]",
  children,
  showScrollCue = true,
}: HeroProps) {
  return (
    <section
      className={`relative flex w-full flex-col ${minHeight} overflow-hidden`}
      aria-label="Introduction"
    >
      <img
        src={image}
        alt={imageAlt}
        aria-hidden={imageAlt ? undefined : true}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={`absolute inset-0 ${overlayClass[overlay]}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      {/* Content + scroll cue in document flow — prevents overlap */}
      <div className="relative z-10 flex min-h-[inherit] flex-1 flex-col">
        <div
          className={`container-sf flex flex-1 flex-col justify-center pt-28 pb-10 md:pt-32 md:pb-12 ${
            align === "center" ? "text-center" : ""
          }`}
        >
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`eyebrow mb-6 flex items-center gap-3 ${
                align === "center" ? "justify-center" : ""
              }`}
            >
              <span className="divider-fuchsia" aria-hidden="true" /> {eyebrow}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className={`display-hero mx-auto max-w-5xl text-balance text-foreground ${
              align === "center" ? "" : "mx-0"
            }`}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg ${
                align === "center" ? "" : "mx-0"
              }`}
            >
              {subtitle}
            </motion.p>
          )}
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className={`mt-12 flex ${align === "center" ? "justify-center" : ""}`}
            >
              <Link
                to={cta.to}
                className="btn-primary group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-primary-foreground"
              >
                {cta.label}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-500 group-hover:rotate-45"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          )}
          {children}
        </div>

        {showScrollCue && (
          <div
            className="pointer-events-none flex shrink-0 flex-col items-center gap-2 pb-8 pt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50"
            aria-hidden="true"
          >
            <span>Défiler</span>
            <motion.span
              className="h-10 w-px origin-top bg-gradient-to-b from-foreground/60 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

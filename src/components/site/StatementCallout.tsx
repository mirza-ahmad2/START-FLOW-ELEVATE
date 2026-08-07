import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function StatementCallout({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <section className="relative py-32 md:py-48">
      <div className="container-sf">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="font-display text-3xl font-light leading-[1.1] tracking-tight text-balance text-foreground md:text-6xl">
            {children}
          </p>
          {attribution && (
            <footer className="mt-10 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              <span className="divider-fuchsia mr-4" />
              {attribution}
            </footer>
          )}
        </motion.blockquote>
      </div>
    </section>
  );
}

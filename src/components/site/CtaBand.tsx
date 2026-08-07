import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary py-32 text-primary-foreground md:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.4), transparent 50%)",
        }}
      />
      <div className="container-sf relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="eyebrow text-primary-foreground/80">
            <span className="divider-fuchsia mr-3 bg-primary-foreground/70" />
            Un premier échange, en toute confidentialité
          </div>
          <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight text-balance md:text-6xl">
            Prenons le temps d'un rendez-vous.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/85">
            Chaque accompagnement commence par une conversation. Sans engagement,
            pour comprendre votre contexte et vos ambitions.
          </p>
          <Link
            to="/contact"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground shadow-lg transition-all duration-500 hover:-translate-y-0.5 hover:bg-background/95 hover:shadow-xl"
          >
            Prenons Rendez-vous
            <ArrowUpRight
              size={14}
              className="transition-transform duration-500 group-hover:rotate-45"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

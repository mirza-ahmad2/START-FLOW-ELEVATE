import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Crown, Users2, TrendingUp } from "lucide-react";

import heroImg from "../assets/hero-pourqui.jpg";
import { Hero } from "../components/site/Hero";
import { CtaBand } from "../components/site/CtaBand";
import { buildPageSeo } from "../lib/seo";

export const Route = createFileRoute("/pour-qui")({
  head: () =>
    buildPageSeo({
      title: "Pour Qui — Strat&Flow",
      description:
        "Dirigeants en phase de transformation, comités de direction, organisations en croissance ou en repositionnement stratégique.",
      path: "/pour-qui",
    }),
  component: PourQui,
});

const PROFILES = [
  {
    icon: Crown,
    eyebrow: "Dirigeants",
    title: "Dirigeants en phase de transformation.",
    description:
      "CEO, DG, patrons d'unité qui prennent une nouvelle fonction, lancent un pivot stratégique ou pilotent une transformation profonde de leur organisation.",
    tags: ["Prise de poste", "Pivot stratégique", "Repositionnement"],
  },
  {
    icon: Users2,
    eyebrow: "Comités de direction",
    title: "Comités de direction à aligner.",
    description:
      "COMEX qui cherchent à retrouver de la clarté partagée, à renforcer la qualité de leurs décisions collectives, à mieux articuler stratégie, exécution et culture d'équipe.",
    tags: ["Alignement COMEX", "Décision collective", "Coaching d'équipe"],
  },
  {
    icon: TrendingUp,
    eyebrow: "Organisations",
    title: "Organisations en croissance ou en repositionnement.",
    description:
      "PME, ETI, filiales de groupes internationaux qui préparent un changement d'échelle, une intégration, un repositionnement de leur portefeuille ou une transformation digitale structurante.",
    tags: ["Changement d'échelle", "Intégration", "Transformation digitale"],
  },
];

function PourQui() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Dirigeants et organisations accompagnés par Strat&Flow"
        eyebrow="Nos interlocuteurs"
        title={
          <>
            À ceux qui portent <br />
            <span className="italic text-primary">la décision.</span>
          </>
        }
        subtitle="Nous accompagnons les dirigeants et leurs équipes lorsque les enjeux sont significatifs et le temps rare."
        overlay="strong"
        minHeight="min-h-[100svh]"
      />

      <section className="relative py-24 md:py-40" aria-label="Profils accompagnés">
        <div className="container-sf grid gap-6 md:grid-cols-3">
          {PROFILES.map((p, i) => (
            <motion.article
              key={p.eyebrow}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-sm border border-white/8 bg-surface/40 p-8 sm:p-10 transition-colors duration-500 hover:border-primary/40 hover:shadow-[0_24px_60px_-30px_rgba(201,59,138,0.35)]"
            >
              <div className="flex flex-nowrap items-baseline justify-between gap-2">
                <span className="eyebrow whitespace-nowrap tracking-[0.14em]">
                  {p.eyebrow}
                </span>
                <span className="shrink-0 font-display text-sm tabular-nums text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 text-primary transition-all duration-500 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon size={22} strokeWidth={1.4} aria-hidden="true" />
              </div>
              <h2 className="mt-8 font-display text-2xl font-light leading-tight text-balance">
                {p.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-white/8 pt-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-foreground/70 transition-colors group-hover:border-primary/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container-sf">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="font-display text-3xl font-light leading-tight text-balance md:text-5xl">
              « Quand un dirigeant ne me parle que de chiffres, de performance et
              de priorités, <span className="italic text-primary">je vois</span> tout
              ce qu'il ne dit pas encore. »
            </p>
            <footer className="mt-8 eyebrow">
              <span className="divider-fuchsia mr-3" aria-hidden="true" /> Murielle Caillau
            </footer>
          </motion.blockquote>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

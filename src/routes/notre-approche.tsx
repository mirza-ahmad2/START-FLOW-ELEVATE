import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Compass, Users, Sparkles } from "lucide-react";

import heroImg from "../assets/hero-approche.jpg";
import { Hero } from "../components/site/Hero";
import { CtaBand } from "../components/site/CtaBand";
import { buildPageSeo } from "../lib/seo";

export const Route = createFileRoute("/notre-approche")({
  head: () =>
    buildPageSeo({
      title: "Notre Approche — Strat&Flow",
      description:
        "Trois piliers : Stratégie, Alignement, Transformation. Notre méthode d'accompagnement pour dirigeants et comités de direction.",
      path: "/notre-approche",
    }),
  component: NotreApproche,
});

const PILLARS = [
  {
    icon: Compass,
    number: "01",
    eyebrow: "Stratégie",
    title: "Clarifier la direction.",
    description:
      "Avant d'agir, il faut voir clair. Nous accompagnons le dirigeant et son comité pour poser un cap précis : où voulons-nous aller, sur quels marchés, avec quels moyens, dans quel horizon de temps.",
    lines: [
      "Diagnostic stratégique et cartographie des enjeux",
      "Priorisation par la valeur, arbitrages assumés",
      "Récit stratégique clair pour engager les équipes",
    ],
  },
  {
    icon: Users,
    number: "02",
    eyebrow: "Alignement",
    title: "Fédérer les équipes.",
    description:
      "Une stratégie n'a de valeur que si elle est portée. Nous travaillons avec les COMEX, les managers et les équipes pour transformer la vision en compréhension partagée, puis en décisions concrètes.",
    lines: [
      "Ateliers de co-construction du COMEX",
      "Diagnostic d'alignement et rituels de décision",
      "Coaching individuel des dirigeants et de leur équipe",
    ],
  },
  {
    icon: Sparkles,
    number: "03",
    eyebrow: "Transformation",
    title: "Exécuter durablement.",
    description:
      "La transformation se joue dans la durée, dans l'exigence quotidienne, dans le respect des personnes. Nous accompagnons l'exécution jusqu'à ce que les nouveaux modes de fonctionnement deviennent naturels.",
    lines: [
      "Feuille de route opérationnelle et gouvernance",
      "Pilotage du changement et rituels de suivi",
      "Ancrage culturel et développement du leadership",
    ],
  },
];

function NotreApproche() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Approche Strat&Flow — stratégie, alignement et transformation"
        eyebrow="Notre méthode"
        title={
          <>
            Trois mouvements. <br />
            <span className="italic text-primary">Un seul objectif.</span>
          </>
        }
        subtitle="Nous accompagnons chaque dirigeant dans un cheminement propre — où rigueur stratégique et fluidité d'exécution avancent ensemble."
        overlay="strong"
        minHeight="min-h-[100svh]"
      />

      {PILLARS.map((p, idx) => (
        <section
          key={p.number}
          className={`relative py-24 md:py-40 ${
            idx % 2 === 1 ? "bg-surface/30" : ""
          }`}
          aria-labelledby={`pillar-${p.number}`}
        >
          <div className="container-sf">
            <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-6xl font-light text-primary md:text-8xl">
                    {p.number}
                  </span>
                  <span className="eyebrow">{p.eyebrow}</span>
                </div>
                <div className="mt-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <p.icon size={22} strokeWidth={1.4} aria-hidden="true" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                <h2 id={`pillar-${p.number}`} className="display-xl text-balance">
                  {p.title}
                </h2>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/85">
                  {p.description}
                </p>
                <ul className="mt-10 space-y-4 border-t border-white/10 pt-8">
                  {p.lines.map((l) => (
                    <li
                      key={l}
                      className="flex gap-4 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-px w-6 flex-shrink-0 bg-primary" aria-hidden="true" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}

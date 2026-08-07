import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Compass, Waves, HeartHandshake } from "lucide-react";

import heroImg from "../assets/hero-apropos.jpg";
import ceoPortrait from "../assets/ceo-portrait.png";
import { Hero } from "../components/site/Hero";
import { CtaBand } from "../components/site/CtaBand";
import { buildPageSeo } from "../lib/seo";

export const Route = createFileRoute("/a-propos")({
  head: () =>
    buildPageSeo({
      title: "À Propos de Murielle — Strat&Flow",
      description:
        "Murielle Caillau, co-fondatrice de Strat&Flow. 27 ans de leadership — CMO, CDO, CEO. Formation HEC Paris.",
      path: "/a-propos",
    }),
  component: APropos,
});

const TIMELINE = [
  {
    period: "2023 — 2025",
    role: "Directrice Générale (CEO)",
    org: "Lashēll Beauty — Marseille",
  },
  {
    period: "2020 — 2023",
    role: "Chief Marketing Officer (CMO)",
    org: "Arkopharma",
  },
  {
    period: "Parcours",
    role: "CMO → CDO → CEO",
    org: "Pharmacie · Dermo-cosmétique · Santé · E-commerce · Retail",
  },
  {
    period: "Formation",
    role: "Executive Education",
    org: "HEC Paris",
  },
];

const VALUES = [
  {
    icon: Compass,
    title: "Rigueur stratégique",
    body: "Une lecture précise des enjeux, des chiffres, des mécanismes de création de valeur.",
  },
  {
    icon: Waves,
    title: "Fluidité",
    body: "La transformation ne se décrète pas : elle se conduit avec grâce, dans la durée.",
  },
  {
    icon: GraduationCap,
    title: "Expérience opérationnelle réelle",
    body: "27 ans à la barre — pas de théorie plaquée, mais un vécu de dirigeante.",
  },
  {
    icon: HeartHandshake,
    title: "Exigence bienveillante",
    body: "Nommer ce qui coince, sans jamais abîmer les personnes ni la relation.",
  },
];

function APropos() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="À propos de Murielle Caillau et Strat&Flow"
        eyebrow="À propos"
        title={
          <>
            27 ans à la barre. <br />
            <span className="italic text-primary">Une conviction.</span>
          </>
        }
        subtitle="Mettre l'expérience du terrain au service des dirigeants qui portent la complexité."
        overlay="strong"
        minHeight="min-h-[100svh]"
      />

      <section className="relative py-24 md:py-40" aria-labelledby="murielle-heading">
        <div className="container-sf grid items-start gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm md:sticky md:top-28"
          >
            <img
              src={ceoPortrait}
              alt="Portrait professionnel de Murielle Caillau, co-fondatrice de Strat&Flow"
              loading="lazy"
              decoding="async"
              width={900}
              height={1125}
              className="h-full w-full object-cover object-top"
            />
          </motion.div>

          <div>
            <div className="eyebrow">
              <span className="divider-fuchsia mr-3" aria-hidden="true" /> Murielle Caillau
            </div>
            <h2 id="murielle-heading" className="display-xl mt-6 text-balance">
              Co-fondatrice &amp; associée.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85"
            >
              <p>
                Murielle a passé 27 ans à piloter des marques, des équipes et
                des transformations. D'abord comme{" "}
                <span className="text-foreground">Chief Marketing Officer</span>,
                puis <span className="text-foreground">Chief Digital Officer</span>,
                puis <span className="text-foreground">CEO</span> — dans des
                secteurs où l'exigence ne laisse pas de place à l'approximation :
                pharmacie, dermo-cosmétique, santé, e-commerce, retail.
              </p>
              <p>
                CMO d'Arkopharma (2020 — 2023), puis Directrice Générale de
                Lashēll Beauty à Marseille (2023 — 2025), elle a conduit
                transformations digitales, repositionnements de marque et
                restructurations organisationnelles, en France comme à
                l'international.
              </p>
              <p>
                Formée à HEC Paris, elle fonde Strat&amp;Flow pour mettre cette
                expérience — celle de la décision, celle de la responsabilité
                opérationnelle — au service des dirigeants qui, à leur tour, ont
                à faire de la complexité un levier.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-surface/30 py-24 md:py-32" aria-labelledby="parcours-heading">
        <div className="container-sf">
          <h2 id="parcours-heading" className="eyebrow mb-12">
            <span className="divider-fuchsia mr-3" aria-hidden="true" /> Parcours
          </h2>
          <div className="divide-y divide-white/8 border-y border-white/8">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.role + i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="grid gap-2 py-8 md:grid-cols-[220px_1fr_2fr] md:items-baseline md:gap-8"
              >
                <div className="font-display text-lg text-primary">
                  {t.period}
                </div>
                <div className="font-display text-xl text-foreground">
                  {t.role}
                </div>
                <div className="text-sm text-muted-foreground">{t.org}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-40" aria-labelledby="valeurs-heading">
        <div className="container-sf">
          <div className="mb-16 max-w-2xl">
            <div className="eyebrow">
              <span className="divider-fuchsia mr-3" aria-hidden="true" /> Valeurs
            </div>
            <h2 id="valeurs-heading" className="display-xl mt-6 text-balance">
              Ce qui guide chaque accompagnement.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group rounded-sm border border-white/8 bg-surface/40 p-8 transition-colors duration-500 hover:border-primary/40"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon size={18} strokeWidth={1.4} aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Compass,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import heroHome from "../assets/hero-home.jpg";
import ceoPortrait from "../assets/ceo-portrait.png";
import { Hero } from "../components/site/Hero";
import { StatementCallout } from "../components/site/StatementCallout";
import { PillarCard } from "../components/site/PillarCard";
import { SectorCarousel } from "../components/site/SectorCarousel";
import { CtaBand } from "../components/site/CtaBand";
import { buildPageSeo } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageSeo({
      title: "Strat&Flow — Innover · Aligner · Transformer",
      description:
        "Cabinet de conseil en stratégie, leadership et transformation organisationnelle. 27 ans d'expérience CMO, CDO, CEO au service des dirigeants et de leurs équipes.",
      path: "/",
      keywords: [
        "Strat&Flow",
        "conseil stratégie",
        "transformation",
        "leadership",
        "Murielle Caillau",
        "cabinet de conseil",
      ],
    }),
  component: Home,
});

const PILLARS = [
  {
    icon: Compass,
    eyebrow: "Stratégie",
    title: "Clarifier la direction.",
    description:
      "Poser un cap net, arbitrer les priorités, articuler une vision qui engage sans diluer l'ambition.",
  },
  {
    icon: Users,
    eyebrow: "Alignement",
    title: "Fédérer les équipes.",
    description:
      "Aligner comité de direction, managers et équipes autour d'un récit commun et de décisions partagées.",
  },
  {
    icon: Sparkles,
    eyebrow: "Transformation",
    title: "Exécuter durablement.",
    description:
      "Transformer la stratégie en résultats mesurables — dans le respect des personnes et du temps long.",
  },
];

const SECTORS = [
  {
    name: "Pharmacie",
    description:
      "Réinventer les modèles de croissance dans un secteur à forte intensité réglementaire, avec des cycles longs et des exigences d'excellence opérationnelle.",
  },
  {
    name: "Dermo-cosmétique",
    description:
      "Piloter des marques exigeantes à l'intersection de la science, du prescripteur et de l'expérience consommateur — en France comme à l'international.",
  },
  {
    name: "Santé",
    description:
      "Accompagner les organisations de santé dans leurs transformations : nouvelles offres, nouveaux canaux, alignement des équipes cliniques et commerciales.",
  },
  {
    name: "E-commerce",
    description:
      "Structurer la croissance digitale : proposition de valeur, acquisition, conversion, opérations — sans jamais perdre de vue la rentabilité.",
  },
  {
    name: "Retail",
    description:
      "Réconcilier expérience physique et digitale, repenser le rôle du point de vente, transformer les équipes terrain en avantage compétitif.",
  },
];

function Home() {
  return (
    <>
      <Hero
        image={heroHome}
        imageAlt="Mouvement et fluidité — identité visuelle Strat&Flow"
        eyebrow="Cabinet de conseil"
        title={
          <>
            Innover.<br />
            Aligner. <span className="text-primary italic">Transformer.</span>
          </>
        }
        subtitle="27 ans d'expérience à la tête de marques, d'équipes et de transformations — au service des dirigeants et de leurs organisations."
        cta={{ label: "Prenons Rendez-vous", to: "/contact" }}
        minHeight="min-h-[100svh]"
      />

      <StatementCallout attribution="Murielle Caillau — Co-fondatrice">
        « Diriger une entreprise n'a jamais été aussi{" "}
        <span className="italic text-primary">exigeant</span>. »
      </StatementCallout>

      <section className="relative py-24 md:py-40" aria-labelledby="approche-heading">
        <div className="container-sf">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <div className="eyebrow">
                <span className="divider-fuchsia mr-3" aria-hidden="true" /> Notre approche
              </div>
              <h2 id="approche-heading" className="display-xl mt-6 text-balance">
                Trois mouvements, un même geste : la clarté.
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Nous ne vendons pas un modèle. Nous accompagnons chaque
                dirigeant dans un cheminement propre, où stratégie et fluidité
                d'exécution avancent ensemble.
              </p>
              <Link
                to="/notre-approche"
                className="group mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
              >
                Découvrir la méthode
                <ArrowUpRight
                  size={14}
                  className="text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <PillarCard key={p.eyebrow} index={i} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-surface/30 py-24 md:py-40"
        aria-labelledby="pourquoi-heading"
      >
        <div className="container-sf">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={ceoPortrait}
                alt="Murielle Caillau, co-fondatrice de Strat&Flow, portrait professionnel"
                loading="lazy"
                decoding="async"
                width={900}
                height={1125}
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>
            <div>
              <div className="eyebrow">
                <span className="divider-fuchsia mr-3" aria-hidden="true" /> Pourquoi Strat&amp;Flow
              </div>
              <h2 id="pourquoi-heading" className="display-xl mt-6 text-balance">
                Un regard construit sur le terrain, pas dans une salle de cours.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85">
                <p>
                  Murielle Caillau a piloté des marques, des équipes et des
                  transformations pendant 27 ans — comme{" "}
                  <span className="text-foreground">CMO</span>, puis{" "}
                  <span className="text-foreground">CDO</span>, puis{" "}
                  <span className="text-foreground">CEO</span> — dans des
                  secteurs exigeants : pharmacie, dermo-cosmétique, santé,
                  e-commerce, retail, en France et à l'international.
                </p>
                <p>
                  Formée à HEC Paris, elle apporte aux dirigeants qu'elle
                  accompagne une chose rare : un point de vue construit dans
                  l'action, pas dans l'abstraction.
                </p>
              </div>
              <Link
                to="/a-propos"
                className="group mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
              >
                Découvrir Murielle
                <ArrowUpRight
                  size={14}
                  className="text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-40" aria-labelledby="secteurs-heading">
        <div className="container-sf">
          <div className="mb-16 max-w-2xl">
            <div className="eyebrow">
              <span className="divider-fuchsia mr-3" aria-hidden="true" /> Secteurs d'expertise
            </div>
            <h2 id="secteurs-heading" className="display-xl mt-6 text-balance">
              Cinq univers, une même exigence.
            </h2>
          </div>
          <SectorCarousel items={SECTORS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

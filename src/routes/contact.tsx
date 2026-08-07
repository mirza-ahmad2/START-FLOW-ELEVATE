import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone, Share2 } from "lucide-react";

import heroImg from "../assets/hero-contact.jpg";
import { Hero } from "../components/site/Hero";
import { EnquiryForm } from "../components/site/EnquiryForm";
import { buildPageSeo } from "../lib/seo";
import { SITE } from "../lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildPageSeo({
      title: "Prenons Rendez-vous — Strat&Flow",
      description:
        "Écrivez-nous pour convenir d'un premier échange, en toute confidentialité, avec Murielle Caillau.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Prendre rendez-vous avec Strat&Flow"
        eyebrow="Contact"
        title={
          <>
            Prenons <span className="italic text-primary">Rendez-vous.</span>
          </>
        }
        subtitle="Un premier échange, sans engagement, pour comprendre votre contexte et vos ambitions."
        overlay="strong"
        minHeight="min-h-[100svh]"
      />

      <section className="relative py-24 md:py-32" aria-labelledby="contact-heading">
        <div className="container-sf grid gap-14 md:grid-cols-[1fr_1.4fr]">
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="eyebrow">
              <span className="divider-fuchsia mr-3" aria-hidden="true" /> Nous joindre
            </div>
            <h2 id="contact-heading" className="display-lg mt-6">
              Directement.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Chaque demande est lue par Murielle. Vous recevrez une réponse
              personnelle dans les prochains jours ouvrés.
            </p>

            <ul className="mt-12 space-y-6">
              <ContactRow icon={Mail} label="E-mail" value={SITE.email} />
              <ContactRow
                icon={Phone}
                label="Téléphone"
                value={SITE.phoneDisplay}
                href={`tel:${SITE.phone}`}
              />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="Strat-Flow"
                href={SITE.linkedin}
              />
              <ContactRow
                icon={Share2}
                label="Autres réseaux"
                value={SITE.socials.other}
              />
              <ContactRow
                icon={MapPin}
                label="Basés"
                value="Paris · Marseille · International"
              />
            </ul>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <EnquiryForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-start gap-4">
      <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/12 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
        <Icon size={16} strokeWidth={1.4} aria-hidden="true" />
      </span>
      <div>
        <div className="eyebrow">{label}</div>
        <div className="mt-1 text-base text-foreground transition-colors duration-300 group-hover:text-primary">
          {value}
        </div>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const SECTORS = [
  "Pharmacie",
  "Dermo-cosmétique",
  "Santé",
  "E-commerce",
  "Retail",
  "Autre",
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        aria-live="polite"
        className="rounded-sm border border-primary/40 bg-surface/60 p-12 text-center"
      >
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Check size={22} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h3 className="mt-6 font-display text-3xl font-light">Message reçu.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Merci pour votre message. Murielle vous recontactera dans les
          prochains jours ouvrés pour convenir d'un premier rendez-vous.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-8 rounded-sm border border-white/8 bg-surface/40 p-6 sm:p-8 md:p-12"
      noValidate={false}
      aria-label="Formulaire de contact"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Nom" name="name" required autoComplete="name" />
        <Field label="Organisation" name="org" required autoComplete="organization" />
      </div>

      <fieldset>
        <legend className="eyebrow mb-3 block">Secteur</legend>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Secteur">
          {SECTORS.map((s) => (
            <label
              key={s}
              className="cursor-pointer rounded-full border border-white/15 px-4 py-2 text-xs text-foreground/85 transition-all duration-300 hover:border-primary/50 has-[input:checked]:border-primary has-[input:checked]:bg-primary has-[input:checked]:text-primary-foreground"
            >
              <input type="radio" name="sector" value={s} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="enquiry-message" className="eyebrow mb-3 block">
          Message
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={5}
          required
          placeholder="Partagez brièvement le contexte de votre organisation et vos enjeux."
          className="w-full resize-none rounded-sm border border-white/10 bg-background/40 p-4 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
        />
      </div>

      <div className="flex flex-col-reverse items-start gap-4 pt-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground">
          Les informations transmises sont strictement confidentielles.
        </p>
        <button
          type="submit"
          className="btn-primary group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground"
        >
          Envoyer ma demande
          <ArrowUpRight
            size={14}
            className="transition-transform duration-500 group-hover:rotate-45"
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `enquiry-${name}`;
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-3 block">
        {label}
      </label>
      <input
        id={id}
        name={name}
        required={required}
        type="text"
        autoComplete={autoComplete}
        className="w-full border-0 border-b border-white/15 bg-transparent pb-3 text-base text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-0"
      />
    </div>
  );
}

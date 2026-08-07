import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Linkedin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/notre-approche", label: "Notre Approche" },
  { to: "/pour-qui", label: "Pour Qui" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/5 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-sf flex h-20 items-center justify-between gap-4">
        <Link
          to="/"
          className="group relative z-10 flex h-10 shrink-0 items-center text-foreground transition-opacity duration-300 hover:opacity-90"
          aria-label={`${SITE.name} — Accueil`}
        >
          <BrandLogo variant="header" />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:gap-10 md:flex"
          aria-label="Navigation principale"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative py-1 text-sm text-foreground/75 transition-colors duration-300 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full group-data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="btn-outline inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-foreground"
          >
            Prenons Rendez-vous
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-2.5 text-foreground transition-colors hover:border-primary/50 md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-white/5 transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="container-sf flex flex-col gap-5 py-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-lg text-foreground/90 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground"
          >
            Prenons Rendez-vous
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-24 pb-10">
      <div className="container-sf">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              aria-label={`${SITE.name} — Accueil`}
              className="inline-flex text-foreground transition-opacity hover:opacity-90"
            >
              <BrandLogo variant="footer" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cabinet de conseil en stratégie, leadership et transformation
              organisationnelle. Nous accompagnons les dirigeants qui font de
              la complexité un levier de succès.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-5">Navigation</div>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-foreground/75 transition-colors duration-300 hover:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">Contact</div>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-foreground/75">
                  E-mail :{" "}
                  <span className="text-foreground/90">{SITE.email}</span>
                </span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 text-foreground/75 transition-colors duration-300 hover:text-primary"
                >
                  <Phone size={14} aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/75 transition-colors duration-300 hover:text-primary"
                >
                  <Linkedin size={14} aria-hidden="true" /> LinkedIn
                </a>
              </li>
              <li className="text-muted-foreground">
                Autres réseaux : {SITE.socials.other}
              </li>
              <li className="text-muted-foreground">Paris · Marseille · International</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {SITE.name} — Tous droits réservés.
          </div>
          <div>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
            >
              The Innovations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

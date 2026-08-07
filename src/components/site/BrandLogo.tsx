import { SITE } from "@/lib/site";

type BrandLogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

/** Crisp vector wordmark sized for the site chrome (avoids low-res PNG blow-up). */
export function BrandLogo({ className = "", variant = "header" }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <svg
      role="img"
      aria-label={SITE.name}
      viewBox={isFooter ? "0 0 210 88" : "0 0 168 58"}
      className={
        className ||
        (isFooter
          ? "block h-12 w-auto max-w-[168px]"
          : "block h-9 w-auto max-w-[120px] md:h-10 md:max-w-[132px]")
      }
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{SITE.name}</title>

      <text
        x="2"
        y="24"
        fill="currentColor"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="2"
      >
        STRAT
      </text>

      <text
        x="2"
        y="48"
        fill="currentColor"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="14"
        fontWeight="600"
      >
        &amp;
      </text>

      <text
        x="18"
        y="50"
        fill="currentColor"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="2"
      >
        FL
      </text>

      {/* Brand O — pink dotted ring */}
      <g transform="translate(68 38)" aria-hidden="true">
        <circle cx="0" cy="-13" r="2.2" fill="#C93B8A" />
        <circle cx="6.5" cy="-10.5" r="1.7" fill="#E878B4" />
        <circle cx="-6.5" cy="-10.5" r="1.7" fill="#E878B4" />
        <circle cx="0" cy="-17.5" r="1.5" fill="#C93B8A" />
        <circle cx="11" cy="-4.5" r="2" fill="#C93B8A" />
        <circle cx="-11" cy="-4.5" r="2" fill="#C93B8A" />
        <circle cx="13" cy="4" r="2.2" fill="#E878B4" />
        <circle cx="-13" cy="4" r="2.2" fill="#E878B4" />
        <circle cx="10" cy="11" r="1.9" fill="#C93B8A" />
        <circle cx="-10" cy="11" r="1.9" fill="#C93B8A" />
        <circle cx="3.5" cy="14" r="1.7" fill="#E878B4" />
        <circle cx="-3.5" cy="14" r="1.7" fill="#E878B4" />
        <circle cx="0" cy="15" r="1.5" fill="#C93B8A" />
      </g>

      <text
        x="94"
        y="50"
        fill="currentColor"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="2"
      >
        W
      </text>

      {isFooter && (
        <text
          x="2"
          y="78"
          fill="currentColor"
          fillOpacity="0.5"
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
          fontSize="8"
          fontWeight="500"
          letterSpacing="1.8"
        >
          INNOVATE — ALIGN — TRANSFORM
        </text>
      )}
    </svg>
  );
}

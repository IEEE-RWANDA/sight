// The site identifier (top-left of the header, and in the footer), built from the
// OFFICIAL logo files in /public exactly as the sub-brand guidelines describe.
//   light = on the white header   ·   dark = on the IEEE Dark Blue footer
import { site } from "@/content";

type Tone = "light" | "dark";

/** IEEE SIGHT logo + red "wedge" identifier box, recreated from the official
 *  SIGHT identifier template (HT guideline p. 8) with our group's name. */
function Sight({ tone }: { tone: Tone }) {
  return (
    <svg viewBox="0 0 290.3 181.3" className="h-14 w-auto sm:h-20" role="img" aria-label={`IEEE SIGHT ${site.identifierLabel}`}>
      <image href={tone === "light" ? "/sight/sight-logo.svg" : "/sight/sight-logo-white.svg"} x="0" y="0" width="290.3" height="132.5" />
      <path d="M289.34 163.02V149.96H17.85L.47 167.34v13H272.03Z" fill="#BA0C2F" />
      <text x="145" y="171.3" textAnchor="middle" fill="#FFFFFF" fontFamily="'Open Sans', Calibri, sans-serif" fontWeight="700" fontSize="19.5">
        {site.identifierLabel}
      </text>
    </svg>
  );
}

export default function Identifier({ tone = "light" }: { tone?: Tone }) {
  return <Sight tone={tone} />;
}

/** Official IEEE Master Brand. Websites must use black or white (not blue). */
export function MasterBrand({ tone = "light", className = "" }: { tone?: Tone; className?: string }) {
  return (
    <a href="https://www.ieee.org" className={`shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tone === "light" ? "/brand/ieee-mb-black.png" : "/brand/ieee-mb-white.png"}
        alt="IEEE"
        width={479}
        height={140}
        className="h-[34px] w-auto min-w-[116px]"
      />
    </a>
  );
}

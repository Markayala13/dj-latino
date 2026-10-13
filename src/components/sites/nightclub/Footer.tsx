import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { CONTACT, TAGLINE } from "./data";
import { SocialLinks } from "./social";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto grid w-full max-w-[1140px] gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:items-start">
        <div>
          <Link href="#top" className="flex items-baseline gap-1.5 leading-none">
            <span className="font-heading text-[20px] font-extrabold uppercase tracking-tight text-white">
              DJ Pachanga
            </span>
            <span className="font-script text-[26px] leading-none text-[var(--color-club-green)]">
              latina
            </span>
          </Link>
          <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-white/55">
            {TAGLINE} para quinceañeras, bodas, posadas y todo tipo de evento.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[15px] font-bold uppercase tracking-wide text-white">
            Contacto
          </h4>
          <a href={`tel:${CONTACT.phone.replace(/[^0-9+]/g, "")}`} className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-[var(--color-club-green)]">
            <Phone className="mt-0.5 size-4 shrink-0 text-[var(--color-club-green)]" />
            {CONTACT.phone}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-1 size-5 shrink-0 text-[var(--color-club-green)]" />
          <div>
            <h4 className="font-heading text-[15px] font-bold uppercase tracking-wide text-white">
              Zonas de servicio
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {CONTACT.areas}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-[15px] font-bold uppercase tracking-wide text-white">
            Síguenos
          </h4>
          <SocialLinks className="mt-3 flex-wrap" />
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-white/10 md:col-span-4">
          <iframe
            title="Área de servicio — Los Ángeles"
            src="https://www.google.com/maps?q=Los+Angeles,+CA&z=9&output=embed"
            className="h-[260px] w-full md:h-[300px]"
            style={{ filter: "invert(0.92) hue-rotate(180deg) brightness(0.9) contrast(0.95)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="mx-auto w-full max-w-[1140px] px-5 text-center text-xs uppercase tracking-[1.5px] text-white/40">
          © 2026 DJ Pachanga Latina. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

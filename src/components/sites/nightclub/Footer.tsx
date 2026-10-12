import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { SOCIALS, CONTACT, TAGLINE } from "./data";

type IconProps = { className?: string };

const SOCIAL_ICONS: Record<string, React.ComponentType<IconProps>> = {
  Facebook: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H17V4.6c-.29-.04-1.28-.13-2.44-.13-2.42 0-4.06 1.47-4.06 4.17v2.33H7.7V14h2.8v8h3z" />
    </svg>
  ),
  Twitter: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2.25h3.3l-7.2 8.24 8.48 11.26h-6.64l-5.2-6.8-5.95 6.8H1.0l7.72-8.82L.56 2.25H7.4l4.7 6.22 6.14-6.22zm-1.16 17.52h1.83L6.98 4.13H5.02l12.06 15.64z" />
    </svg>
  ),
  Instagram: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.14 0-3.52.01-4.76.07-.9.04-1.39.19-1.72.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.82-.32 1.72-.06 1.24-.07 1.62-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.39.32 1.72.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.82.28 1.72.32 1.24.06 1.62.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.19 1.72-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.82.32-1.72.06-1.24.07-1.62.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.39-.32-1.72a2.86 2.86 0 00-.69-1.06 2.86 2.86 0 00-1.06-.69c-.33-.13-.82-.28-1.72-.32-1.24-.06-1.62-.07-4.76-.07zm0 3.06a4.98 4.98 0 110 9.96 4.98 4.98 0 010-9.96zm0 8.21a3.23 3.23 0 100-6.46 3.23 3.23 0 000 6.46zm6.34-8.41a1.16 1.16 0 11-2.32 0 1.16 1.16 0 012.32 0z" />
    </svg>
  ),
  Youtube: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.57V8.43L15.8 12l-6.2 3.57z" />
    </svg>
  ),
  Tiktok: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 01-1.01-2.82h-3.3v12.56a2.58 2.58 0 11-1.83-2.47V9.73a5.88 5.88 0 00-.75-.05 5.9 5.9 0 105.9 5.9V9.01a7.57 7.57 0 004.42 1.42V7.13a4.28 4.28 0 01-2.42-1.31z" />
    </svg>
  ),
};

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
          <div className="mt-3 flex gap-3">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.label];
              if (!Icon) return null;
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-[var(--color-club-green)] hover:bg-[var(--color-club-green)] hover:text-white"
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>
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

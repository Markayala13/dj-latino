import { SOCIALS } from "./data";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

/** White glyphs rendered on top of each brand's original color tile. */
const GLYPHS: Record<string, React.ComponentType<IconProps>> = {
  Facebook: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H17V4.6c-.29-.04-1.28-.13-2.44-.13-2.42 0-4.06 1.47-4.06 4.17v2.33H7.7V14h2.8v8h3z" />
    </svg>
  ),
  Instagram: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.14 0-3.52.01-4.76.07-.9.04-1.39.19-1.72.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.82-.32 1.72-.06 1.24-.07 1.62-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.39.32 1.72.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.82.28 1.72.32 1.24.06 1.62.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.19 1.72-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.82.32-1.72.06-1.24.07-1.62.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.39-.32-1.72a2.86 2.86 0 00-.69-1.06 2.86 2.86 0 00-1.06-.69c-.33-.13-.82-.28-1.72-.32-1.24-.06-1.62-.07-4.76-.07zm0 3.06a4.98 4.98 0 110 9.96 4.98 4.98 0 010-9.96zm0 8.21a3.23 3.23 0 100-6.46 3.23 3.23 0 000 6.46zm6.34-8.41a1.16 1.16 0 11-2.32 0 1.16 1.16 0 012.32 0z" />
    </svg>
  ),
  Tiktok: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 01-1.01-2.82h-3.3v12.56a2.58 2.58 0 11-1.83-2.47V9.73a5.88 5.88 0 00-.75-.05 5.9 5.9 0 105.9 5.9V9.01a7.57 7.57 0 004.42 1.42V7.13a4.28 4.28 0 01-2.42-1.31z" />
    </svg>
  ),
  Maps: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  ),
};

/** Each network's original brand color (background of the tile). */
const BRAND_BG: Record<string, string> = {
  Facebook: "#1877F2",
  Instagram:
    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  Tiktok: "#000000",
  Maps: "#EA4335",
};

/** Row of social links in each brand's original colors; shared by footer and mobile menu. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {SOCIALS.map((s) => {
        const Glyph = GLYPHS[s.label];
        if (!Glyph) return null;
        return (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: BRAND_BG[s.label] }}
            className="flex size-12 items-center justify-center rounded-lg text-white shadow-sm ring-1 ring-white/15 transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            <Glyph className="size-6" />
          </a>
        );
      })}
    </div>
  );
}

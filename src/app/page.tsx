import Image from "next/image";
import { MapPin, Camera, Heart, Crown, PartyPopper, Quote, Monitor, Film, Mic } from "lucide-react";
import { Header } from "@/components/sites/nightclub/Header";
import { Footer } from "@/components/sites/nightclub/Footer";
import { ClubButton, GreenRule, SectionTitle } from "@/components/sites/nightclub/shared";
import { Reveal, CountUp } from "@/components/sites/nightclub/animations";
import { VideoCarousel } from "@/components/sites/nightclub/VideoCarousel";
import { WhatsAppFab } from "@/components/sites/nightclub/WhatsAppFab";
import {
  BRAND,
  TAGLINE,
  STATS,
  LINEUP,
  OFFERS,
  AREAS,
  SERVICES,
  SCREEN_PACKAGE,
  TESTIMONIALS,
  CONTACT,
  SOCIALS,
} from "@/components/sites/nightclub/data";

const container = "mx-auto w-full max-w-[1140px] px-5";

const SITE_URL = "https://djpachangalatina.com";

// Datos estructurados para SEO local (Google Rich Results / Knowledge Panel).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BRAND,
  alternateName: `${BRAND} — ${TAGLINE}`,
  description:
    "DJ profesional y Photobooth 360 para quinceañeras, bodas, posadas y todo evento. Pantallas para eventos, slideshow de video y fotos, micrófonos inalámbricos, audio e iluminación.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  telephone: `+1${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`,
  email: CONTACT.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Los Angeles" },
    { "@type": "AdministrativeArea", name: "Orange County" },
    { "@type": "Place", name: "San Fernando Valley" },
  ],
  hasMap: SOCIALS.find((s) => s.label === "Maps")?.href,
  sameAs: SOCIALS.filter((s) => s.label !== "Maps").map((s) => s.href),
  makesOffer: [...OFFERS, ...SCREEN_PACKAGE.items.map((i) => i.title)].map(
    (name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    }),
  ),
};

const SERVICE_ICONS = {
  camera: Camera,
  heart: Heart,
  crown: Crown,
  party: PartyPopper,
} as const;

const PACKAGE_ICONS = {
  monitor: Monitor,
  film: Film,
  mic: Mic,
} as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="top" className="flex-1 bg-black">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-black">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/sites/nightclub/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/sites/nightclub/dj.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
          {/* malla negra de puntos */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: "radial-gradient(rgba(0,0,0,0.55) 1px, transparent 1.2px)",
              backgroundSize: "4px 4px",
            }}
          />
          <div className={`relative ${container} flex min-h-[88vh] items-center justify-center py-24`}>
            <div className="animate-hero-rise relative z-10 flex flex-col items-center text-center">
              <span className="mb-4 font-script text-[26px] leading-none text-[var(--color-club-green)] sm:text-[30px]">
                {TAGLINE}
              </span>
              <h1 className="font-title mx-auto max-w-[14ch] text-[30px] uppercase leading-[1.12] text-white sm:text-[46px] lg:text-[64px]">
                DJ Pachanga Latina
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/80">
                DJ para quinceañeras, bodas, posadas y todo evento en Los Ángeles,
                Condado de Orange y San Fernando Valley.
              </p>
              <div className="mt-8">
                <ClubButton href="#contacto" withArrow>
                  Cotiza tu evento
                </ClubButton>
              </div>
            </div>

            {/* Indicador de scroll tipo mouse */}
            <a
              href="#sobre"
              aria-label="Desliza hacia abajo"
              className="animate-mouse-bob absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
            >
              <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/70 p-1.5">
                <span className="animate-scroll-wheel size-1.5 rounded-full bg-[var(--color-club-green)]" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-white/60">
                Desliza
              </span>
            </a>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="border-y border-white/10 bg-black">
          <div className={`${container} grid grid-cols-1 gap-y-10 py-14 sm:grid-cols-2 md:grid-cols-4`}>
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 120}
                className="flex flex-col items-center text-center md:border-r md:border-white/10 md:last:border-r-0"
              >
                <div className="flex items-start">
                  <span className="font-heading text-[48px] font-bold leading-none text-white md:text-[56px]">
                    <CountUp value={Number(s.value)} />
                  </span>
                  <span className="font-script text-[44px] leading-none text-[var(--color-club-green)]">+</span>
                </div>
                <span className="mt-3 text-sm uppercase tracking-wide text-white/70">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== SOBRE EL DJ ===== */}
        <section id="sobre" className="bg-black py-14">
          <div className={`${container} grid items-center gap-10 lg:grid-cols-2`}>
            <Reveal>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-xl">
                <Image
                  src="/sites/nightclub/dj.png"
                  alt="DJ Pachanga Latina"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <GreenRule className="mb-6" />
              <SectionTitle text="CONOCE A TU DJ" className="text-[28px] md:text-[40px]" />
              <p className="mt-6 text-[15px] leading-relaxed text-white/60">
                Detrás de DJ Pachanga Latina hay años de experiencia animando
                quinceañeras, bodas, posadas y todo tipo de eventos en el sur de
                California. Música latina, cumbia, banda, reggaetón y los éxitos del
                momento para mantener la pista llena toda la noche.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                Equipo profesional de audio e iluminación, cabina Photobooth 360 y la
                energía para hacer de tu evento una noche inolvidable.
              </p>
              <div className="mt-8">
                <ClubButton href="#contacto" withArrow>
                  Reserva tu fecha
                </ClubButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== PARA TODO EVENTO ===== */}
        <section id="eventos" className="bg-black py-14">
          <Reveal className={`${container} flex flex-col items-center text-center`}>
            <GreenRule className="mb-6" />
            <SectionTitle text="PARA TODO EVENTO" className="text-[32px] md:text-[48px]" />
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60">
              Ponemos la música y el ambiente para que tus invitados no dejen de bailar.
              Sea una celebración íntima o una gran fiesta, nosotros nos encargamos.
            </p>
          </Reveal>

          <div className={`${container} mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
            {LINEUP.map((item, i) => (
              <Reveal key={item.last} delay={i * 140}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt={`${item.first} ${item.last}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-center">
                    <span className="block font-heading text-[13px] font-semibold uppercase leading-tight tracking-[1.5px] text-[var(--color-club-green)]">
                      {item.first}
                    </span>
                    <span className="block font-heading text-[30px] font-extrabold uppercase leading-tight text-white">
                      {item.last}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12 flex justify-center">
            <ClubButton href="#contacto">Reserva tu fecha</ClubButton>
          </Reveal>
        </section>

        {/* ===== NUESTROS SERVICIOS ===== */}
        <section id="servicios" className="bg-black py-14">
          <div className={`${container} grid gap-12 lg:grid-cols-2 lg:items-center`}>
            <Reveal>
              <GreenRule className="mb-6" />
              <SectionTitle text="NUESTROS SERVICIOS" className="text-[32px] leading-[1.1] md:text-[48px]" />
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
                DJ Pachanga Latina combina la mejor música latina con equipo profesional
                de audio e iluminación y nuestra cabina Photobooth 360 para crear
                recuerdos inolvidables en cada evento.
              </p>
              <div className="mt-8">
                <ClubButton href="#contacto" variant="ghost" withArrow>
                  Cotizar
                </ClubButton>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {OFFERS.map((o) => (
                  <li key={o}>
                    <a
                      href="#contacto"
                      className="group block py-6 font-heading text-[24px] font-bold uppercase text-white transition-colors hover:text-[var(--color-club-green)] md:text-[30px]"
                    >
                      {o}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ===== ZONAS DE SERVICIO ===== */}
        <section id="zonas" className="bg-black py-14">
          <Reveal className={`${container} flex flex-col items-center text-center`}>
            <GreenRule className="mb-6" />
            <SectionTitle text="ZONAS DE SERVICIO" className="text-[32px] md:text-[48px]" />
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
              Llevamos la fiesta a donde estés. Cubrimos tres grandes áreas del sur de California.
            </p>
          </Reveal>

          <Reveal delay={120} className={`${container} mt-12`}>
            <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
              {AREAS.map((a) => (
                <div
                  key={a.title}
                  className="flex flex-col gap-4 px-2 py-7 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                    <span className="min-w-[90px] font-heading text-sm font-semibold uppercase tracking-wide text-[var(--color-club-green)]">
                      {a.tag}
                    </span>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 size-5 shrink-0 text-[var(--color-club-green)]" />
                      <div>
                        <h3 className="font-heading text-[22px] font-bold uppercase text-white md:text-[26px]">
                          {a.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/50">{a.coverage}</p>
                      </div>
                    </div>
                  </div>
                  <ClubButton href="#contacto">Reservar</ClubButton>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ===== TAMBIÉN OFRECEMOS ===== */}
        <section className="bg-black py-14">
          <Reveal className={`${container} flex flex-col items-center text-center`}>
            <GreenRule className="mb-6" />
            <SectionTitle text="TAMBIÉN OFRECEMOS" className="text-[32px] md:text-[48px]" />
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
              Un paquete completo para cada ocasión, desde la música hasta la cabina
              Photobooth 360 que todos querrán probar.
            </p>
            <div className="mt-8">
              <ClubButton href="#contacto">Ver paquetes</ClubButton>
            </div>
          </Reveal>

          <div className={`${container} mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}>
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.icon];
              return (
                <Reveal key={`${s.title}-${i}`} delay={i * 120}>
                  <div className="group flex flex-col items-center text-center">
                    <span className="flex size-[72px] items-center justify-center rounded-full border border-[var(--color-club-green)]/40 bg-[var(--color-club-green)]/10 text-[var(--color-club-green)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--color-club-green)] group-hover:text-white">
                      <Icon className="size-8" />
                    </span>
                    <h3 className="mt-6 font-heading text-[18px] font-bold uppercase text-white">{s.title}</h3>
                    <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-white/55">{s.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ===== PAQUETE: PANTALLAS + VIDEO + MICRÓFONOS ===== */}
        <section id="paquete" className="bg-black pb-14">
          <Reveal className={container}>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-club-green)]/40 bg-gradient-to-b from-[var(--color-club-green)]/10 to-transparent p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <span className="font-heading text-sm font-semibold uppercase tracking-[2px] text-[var(--color-club-green)]">
                  {SCREEN_PACKAGE.tag}
                </span>
                <SectionTitle text={SCREEN_PACKAGE.title} className="mt-3 text-[26px] md:text-[38px]" />
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60">
                  {SCREEN_PACKAGE.intro}
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {SCREEN_PACKAGE.items.map((item, i) => {
                  const Icon = PACKAGE_ICONS[item.icon];
                  return (
                    <Reveal key={item.title} delay={i * 120}>
                      <div className="flex h-full flex-col items-center rounded-xl border border-white/10 bg-black/40 p-6 text-center transition-colors hover:border-[var(--color-club-green)]/50">
                        <span className="flex size-[64px] items-center justify-center rounded-full border border-[var(--color-club-green)]/40 bg-[var(--color-club-green)]/10 text-[var(--color-club-green)]">
                          <Icon className="size-7" />
                        </span>
                        <h3 className="mt-5 font-heading text-[16px] font-bold uppercase text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/55">{item.text}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <div className="mt-10 flex justify-center">
                <ClubButton href="#contacto" withArrow>
                  Cotiza el paquete
                </ClubButton>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== PHOTOBOOTH 360 (CTA + galería) ===== */}
        <section
          id="galeria"
          className="relative overflow-hidden bg-cover bg-center py-16"
          style={{ backgroundImage: "url('/sites/nightclub/photobooth-bg.jpg')" }}
        >
          {/* degradado: funde arriba y abajo con el negro */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/55 to-black" />
          {/* malla negra de puntos para suavizar la imagen */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: "radial-gradient(rgba(0,0,0,0.55) 1px, transparent 1.2px)",
              backgroundSize: "4px 4px",
            }}
          />
          <Reveal className={`relative ${container} flex flex-col items-center text-center`}>
            <GreenRule className="mb-6" />
            <SectionTitle text="PHOTOBOOTH 360" className="text-[32px] md:text-[48px]" />
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
              Nuestra cabina 360° graba videos espectaculares con tus invitados: luces,
              props y entrega al instante para compartir en redes. El hit de cualquier fiesta.
            </p>
            <div className="mt-8">
              <ClubButton href="#contacto">Agrega el 360 a tu evento</ClubButton>
            </div>
          </Reveal>

          {/* Media band */}
          <div className={`relative ${container} mt-16`}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-b border-white/15 pb-6 text-sm uppercase tracking-wide text-white/80">
              <span>DJ en vivo</span>
              <span>Photobooth 360</span>
              <span>Audio e iluminación</span>
            </div>
            <div className="relative mt-8 grid gap-4 md:grid-cols-2">
              <Reveal>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/sites/nightclub/ev-05.jpg"
                    alt="Invitados bailando en la pista"
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black">
                  <video
                    className="h-full w-full object-cover"
                    src="/sites/nightclub/clip-05.mp4"
                    poster="/sites/nightclub/poster-05.jpg"
                    controls
                    preload="none"
                    playsInline
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== VIDEOS ===== */}
        <section id="videos" className="bg-black py-14">
          <Reveal className={`${container} flex flex-col items-center text-center`}>
            <GreenRule className="mb-6" />
            <SectionTitle text="VIDEOS" className="text-[32px] md:text-[48px]" />
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
              Un vistazo a la pachanga: así se vive una noche con DJ Pachanga Latina.
            </p>
          </Reveal>

          <div className={`${container} mt-12`}>
            <VideoCarousel />
          </div>
        </section>

        {/* ===== TODOS GOZAN ===== */}
        <section className="bg-black py-16">
          <Reveal className={`${container} flex flex-col items-center text-center`}>
            <SectionTitle
              text="TODOS GOZAN CON DJ PACHANGA LATINA"
              className="max-w-[18ch] text-[28px] leading-[1.15] md:text-[42px]"
            />
            <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-white/60">
              Más de una década poniendo el ambiente en las mejores celebraciones del sur
              de California. Música para todos los gustos, atención profesional y la energía
              que tu fiesta merece.
            </p>
          </Reveal>
        </section>

        {/* ===== TESTIMONIOS ===== */}
        <section className="bg-black pb-16">
          <Reveal className={`${container} flex flex-col items-center text-center`}>
            <GreenRule className="mb-6" />
            <SectionTitle text="LO QUE DICEN" className="text-[32px] md:text-[48px]" />
          </Reveal>

          <div className={`${container} mt-12 grid gap-6 md:grid-cols-3`}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 140}>
                <figure className="flex h-full flex-col border border-white/10 bg-[#0d0d0d] p-8 transition-colors hover:border-[var(--color-club-green)]/40">
                  <Quote className="size-6 text-[var(--color-club-green)]" />
                  <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/70">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="flex size-[52px] items-center justify-center rounded-full bg-[var(--color-club-green)]/15 font-heading text-[18px] font-bold text-[var(--color-club-green)]">
                      {t.name.charAt(0)}
                    </span>
                    <div className="text-left">
                      <div className="font-heading text-[15px] font-bold uppercase text-white">{t.name}</div>
                      <div className="text-sm text-[var(--color-club-green)]">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

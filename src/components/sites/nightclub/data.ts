// Content for DJ Pachanga Latina — DJ & Photobooth 360.
// Service areas: Los Ángeles, Condado de Orange, San Fernando Valley.

export const BRAND = "DJ Pachanga Latina";
export const TAGLINE = "DJ & Photobooth 360";

// Single-page site: nav links are in-page anchors.
export const NAV_LINKS = [
  { label: "INICIO", href: "#top" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "EVENTOS", href: "#eventos" },
  { label: "ZONAS", href: "#zonas" },
  { label: "VIDEOS", href: "#videos" },
  { label: "CONTACTO", href: "#contacto" },
] as const;

// NOTE: placeholder marketing numbers — edit with your real figures.
export const STATS = [
  { value: "10", label: "Años de experiencia" },
  { value: "500", label: "Eventos realizados" },
  { value: "1000", label: "Invitados felices" },
  { value: "100", label: "Clientes satisfechos" },
] as const;

// "Para todo evento" — tipos de evento (fotos reales de eventos).
export const LINEUP = [
  { first: "FIESTAS DE", last: "QUINCE AÑOS", img: "/sites/nightclub/ev-02.jpg" },
  { first: "BODAS Y", last: "ANIVERSARIOS", img: "/sites/nightclub/ev-11.jpg" },
  { first: "POSADAS Y", last: "FIESTAS", img: "/sites/nightclub/ev-10.jpg" },
] as const;

// Nuestros servicios (lista grande).
export const OFFERS = [
  "DJ PROFESIONAL",
  "PHOTOBOOTH 360",
  "AUDIO E ILUMINACIÓN",
  "ANIMACIÓN Y MC",
] as const;

// Zonas de servicio (reutiliza el bloque de "eventos").
export const AREAS = [
  { tag: "ÁREA 01", title: "LOS ÁNGELES", coverage: "Cobertura en todo el condado de Los Ángeles", soldOut: false },
  { tag: "ÁREA 02", title: "CONDADO DE ORANGE", coverage: "Anaheim, Santa Ana, Irvine y alrededores", soldOut: false },
  { tag: "ÁREA 03", title: "SAN FERNANDO VALLEY", coverage: "Van Nuys, Burbank, Northridge y más", soldOut: false },
] as const;

// También ofrecemos (tarjetas con ícono). `icon` mapea a un ícono de lucide.
export const SERVICES = [
  { icon: "camera", title: "PHOTOBOOTH 360", text: "Cabina 360° con video, props y entrega al instante." },
  { icon: "heart", title: "BODAS", text: "La música perfecta para tu gran día, del vals a la pista." },
  { icon: "crown", title: "QUINCEAÑERAS", text: "Vals, baile sorpresa y la mejor pachanga toda la noche." },
  { icon: "party", title: "EVENTOS PRIVADOS", text: "Posadas, cumpleaños y eventos corporativos." },
] as const;

// Sección de videos — clips reales de eventos.
export const VIDEOS = [
  { src: "/sites/nightclub/clip-01.mp4", poster: "/sites/nightclub/poster-01.jpg", title: "En vivo" },
  { src: "/sites/nightclub/clip-02.mp4", poster: "/sites/nightclub/poster-02.jpg", title: "Quinceañera" },
  { src: "/sites/nightclub/clip-04.mp4", poster: "/sites/nightclub/poster-04.jpg", title: "Pista llena" },
  { src: "/sites/nightclub/clip-05.mp4", poster: "/sites/nightclub/poster-05.jpg", title: "Fiesta" },
  { src: "/sites/nightclub/clip-08.mp4", poster: "/sites/nightclub/poster-08.jpg", title: "Ambiente" },
  { src: "/sites/nightclub/clip-09.mp4", poster: "/sites/nightclub/poster-09.jpg", title: "Boda" },
  { src: "/sites/nightclub/clip-11.mp4", poster: "/sites/nightclub/poster-11.jpg", title: "Baile" },
  { src: "/sites/nightclub/clip-14.mp4", poster: "/sites/nightclub/poster-14.jpg", title: "Pachanga" },
] as const;

// Testimonios de ejemplo — reemplázalos con reseñas reales.
export const TESTIMONIALS = [
  {
    quote:
      "DJ Pachanga Latina hizo de los quince de mi hija una noche inolvidable. ¡La pista no se vació ni un minuto!",
    name: "MARÍA G.",
    role: "Quinceañera",
    avatar: "/sites/nightclub/team-13.jpg",
  },
  {
    quote:
      "Contratamos DJ y Photobooth 360 para nuestra boda. Puntuales, profesionales y con una energía increíble.",
    name: "JORGE & ANA",
    role: "Boda",
    avatar: "/sites/nightclub/testimonial-2.jpg",
  },
  {
    quote:
      "La posada de la familia fue todo un éxito. Buena música, buen ambiente y el 360 fue el hit de la noche.",
    name: "CARLOS R.",
    role: "Posada",
    avatar: "/sites/nightclub/team-photo-3.jpg",
  },
] as const;

// Contacto — rellena con tus datos reales.
export const CONTACT = {
  phone: "(562) 521-2113",
  whatsapp: "15625212113",
  email: "hola@djpachangalatina.com",
  areas: "Los Ángeles · Condado de Orange · San Fernando Valley",
  hours: "Todos los días · reserva con anticipación",
} as const;

export const SOCIALS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Tiktok", href: "#" },
] as const;

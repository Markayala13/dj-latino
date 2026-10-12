import Link from "next/link";
import { CONTACT } from "./data";

export function WhatsAppFab() {
  const href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero cotizar mi evento con DJ Pachanga Latina.",
  )}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-8" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 01-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.45 9.45 0 01-1.45-5.04c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.72 2.78a9.42 9.42 0 012.78 6.72c0 5.23-4.26 9.49-9.49 9.49zm8.08-17.57A11.37 11.37 0 0012.04.5C5.76.5.66 5.6.66 11.88c0 2.09.55 4.13 1.59 5.93L.5 23.5l5.83-1.53a11.33 11.33 0 005.71 1.46h.01c6.28 0 11.38-5.1 11.38-11.38 0-3.04-1.18-5.9-3.33-8.05z" />
      </svg>
    </Link>
  );
}

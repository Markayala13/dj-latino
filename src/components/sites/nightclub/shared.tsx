import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ClubButtonProps = {
  children: React.ReactNode;
  href?: string;
  withArrow?: boolean;
  variant?: "solid" | "ghost";
  className?: string;
};

/** Square DJ-kit button: Encode Sans Expanded 700, green border, inverts on hover. */
export function ClubButton({
  children,
  href = "#",
  withArrow = false,
  variant = "solid",
  className,
}: ClubButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 border-2 font-heading text-[16px] font-bold uppercase leading-none tracking-[0.5px] transition-colors duration-300",
        "border-[var(--color-club-green)] px-[30px] py-[15px]",
        variant === "solid"
          ? "bg-[var(--color-club-green)] text-white hover:bg-transparent hover:text-[var(--color-club-green)]"
          : "bg-transparent text-[var(--color-club-green)] hover:bg-[var(--color-club-green)] hover:text-white",
        className,
      )}
    >
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

/** Small green divider line used above section titles. */
export function GreenRule({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "block h-[3px] w-[50px] bg-[var(--color-club-green)]",
        className,
      )}
    />
  );
}

/** Plain solid section title (no outline echo). */
export function SectionTitle({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-heading font-extrabold uppercase leading-[1.1] text-white",
        className,
      )}
    >
      {text}
    </Tag>
  );
}

type LayeredHeadingProps = {
  text: string;
  className?: string;
  /** stroke width of the echo copy */
  strokeClass?: string;
  as?: "h1" | "h2" | "h3";
  /** font utility for the heading (defaults to the template heading font) */
  fontClass?: string;
  /** optional animation utility applied to the solid title (e.g. neon glow) */
  animateClass?: string;
};

/**
 * Display heading rendered as the source does it: a solid white title with an
 * outlined (stroke-only) echo offset behind it.
 */
export function LayeredHeading({
  text,
  className,
  strokeClass = "text-outline",
  as: Tag = "h2",
  fontClass = "font-heading",
  animateClass,
}: LayeredHeadingProps) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-[6px] top-[6px] select-none font-extrabold uppercase",
          fontClass,
          strokeClass,
          className,
        )}
      >
        {text}
      </span>
      <Tag
        className={cn(
          "relative font-extrabold uppercase text-white",
          fontClass,
          animateClass,
          className,
        )}
      >
        {text}
      </Tag>
    </span>
  );
}

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  inverted?: boolean;
}

export default function Logo({ className = "", inverted = false }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/Horizontal%20Logo%20Transparent.png"
      alt="Jetz Aviation"
      className={`h-10 w-auto object-contain ${inverted ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}

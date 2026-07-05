interface LogoProps {
  className?: string;
  height?: number;
  inverted?: boolean;
}

export default function Logo({ className = "", height = 56, inverted = false }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/Horizontal%20Logo%20Transparent.png"
      alt="Jetz Aviation"
      style={{ height: `${height}px` }}
      className={`w-auto object-contain ${inverted ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}

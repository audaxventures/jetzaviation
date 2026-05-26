import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  inverted?: boolean;
}

export default function Logo({ className = "", width = 180, height = 50, inverted = false }: LogoProps) {
  return (
    <Image
      src="/Horizontal Logo Transparent.png"
      alt="Jetz Aviation"
      width={width}
      height={height}
      className={`h-10 w-auto object-contain ${inverted ? "brightness-0 invert" : ""} ${className}`}
      preload
    />
  );
}

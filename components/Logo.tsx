"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  inverted?: boolean;
}

export default function Logo({ className = "", width = 180, height = 50, inverted = false }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const src = imgError
    ? "/Horizontal_Logo_Transparent.svg"
    : "/Horizontal_Logo_Transparent.png";

  return (
    <Image
      src={src}
      alt="Jetz Aviation"
      width={width}
      height={height}
      className={`h-10 w-auto object-contain ${inverted ? "brightness-0 invert" : ""} ${className}`}
      onError={() => setImgError(true)}
      priority
    />
  );
}

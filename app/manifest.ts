import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jetz Aviation",
    short_name: "Jetz Aviation",
    description:
      "Aircraft brokerage, acquisition strategy, valuation, and aviation consulting for clients across Canada and the United States.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAFB",
    theme_color: "#0F2D3D",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

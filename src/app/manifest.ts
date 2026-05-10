import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shopify Mastery Hub",
    short_name: "Mastery Hub",
    description: "Uncompromised Shopify Mastery Training Environment.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#95FF00",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/favicon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}

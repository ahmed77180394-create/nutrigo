import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NutriGo - Premium Healthy Food Subscription",
    short_name: "NutriGo",
    description: "Chef-prepared, nutritionist-designed healthy meals delivered fresh to your door.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F1E8",
    theme_color: "#344B37",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

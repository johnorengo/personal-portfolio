import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Orengo | Full Stack Software Engineer",
    short_name: "John Orengo",
    description: "Full stack software engineering, cybersecurity, cloud and network security, and business systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0e22",
    theme_color: "#0c0e22",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

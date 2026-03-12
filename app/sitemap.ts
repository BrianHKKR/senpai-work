import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://senpai.work";

  const routes = [
    "",
    "/register",
    "/tasks",
    "/about",
    "/how-it-works",
    "/privacy",
    "/legal",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    // Default (Japanese)
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/tasks" ? "daily" : "weekly",
      priority: route === "" ? 1.0 : route === "/register" ? 0.9 : 0.7,
    });

    // Japanese explicit
    entries.push({
      url: `${baseUrl}/ja${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/tasks" ? "daily" : "weekly",
      priority: route === "" ? 0.9 : 0.6,
    });

    // English
    entries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/tasks" ? "daily" : "weekly",
      priority: route === "" ? 0.9 : 0.6,
    });
  }

  return entries;
}

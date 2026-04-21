export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thanks"],
    },
    sitemap: "https://southnaticklaw.com/sitemap.xml",
  };
}

export default function robots() {
  const siteUrl = "https://verdenfarms.co.tz";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

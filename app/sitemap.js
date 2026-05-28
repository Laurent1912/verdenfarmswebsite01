export default function sitemap() {
  const siteUrl = "https://verdenfarms.co.tz";
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

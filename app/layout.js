import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const siteUrl = "https://verdenfarms.co.tz";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Verden Farms — Climate-Smart Vertical Farming in Tanzania",
    template: "%s | Verden Farms",
  },
  description:
    "Verden Farms builds climate-smart vertical farming systems that help households, businesses and communities grow more fresh produce in less space, using up to 95% less water.",
  keywords: [
    "vertical farming",
    "agritech Tanzania",
    "climate-smart agriculture",
    "vertical farming towers",
    "urban farming Africa",
    "hydroponics Tanzania",
    "fresh produce Iringa",
    "sustainable agriculture",
    "Verden Farms",
  ],
  authors: [{ name: "Verden Farms" }],
  creator: "Verden Farms",
  publisher: "Verden Farms",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Verden Farms",
    title: "Verden Farms — Growing More Food in Less Space",
    description:
      "Climate-smart vertical farming systems designed for African environments. Grow fresh produce efficiently with limited space and less water.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Verden Farms — Climate-Smart Vertical Farming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verden Farms — Climate-Smart Vertical Farming",
    description:
      "Growing more food in less space with climate-smart vertical farming systems built for Africa.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "agriculture",
};

export const viewport = {
  themeColor: "#166534",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Verden Farms",
  url: siteUrl,
  description:
    "Agritech company building climate-smart vertical farming systems for African environments.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mtwivila B near Magic Site",
    addressLocality: "Iringa",
    addressCountry: "TZ",
  },
  areaServed: "Tanzania",
  knowsAbout: [
    "Vertical Farming",
    "Climate-Smart Agriculture",
    "Sustainable Food Production",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-700 focus:px-5 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

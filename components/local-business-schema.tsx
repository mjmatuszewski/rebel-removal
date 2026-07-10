import { PHONE_HREF, SERVICE_AREA_TOWNS, SITE_URL } from "@/lib/site-config";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rebel Removal",
    description:
      "Junk removal, cleanouts, and moving help for homes and businesses in Oxford, MS and surrounding areas.",
    url: SITE_URL,
    telephone: PHONE_HREF.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oxford",
      addressRegion: "MS",
      addressCountry: "US",
    },
    areaServed: SERVICE_AREA_TOWNS.map((town) => ({
      "@type": "City",
      name: town,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

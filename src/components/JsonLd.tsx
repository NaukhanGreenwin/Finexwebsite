import Script from "next/script";

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization structured data
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Finex Development",
  description: "Leaders in construction and facility maintenance services in Mississauga, Ontario.",
  url: "https://finexdevelopment.com",
  logo: "https://finexdevelopment.com/logo.png",
  foundingDate: "2002",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2179 Dunwin Drive, Unit #2",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5L 1X2",
    addressCountry: "CA",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-905-555-0123",
      contactType: "customer service",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-905-555-0124",
      contactType: "emergency",
      availableLanguage: "English",
    },
  ],
  email: "info@finexdevelopment.com",
  sameAs: [
    "https://facebook.com/finexdevelopment",
    "https://twitter.com/finexdevelopment",
    "https://linkedin.com/company/finexdevelopment",
  ],
};

// Local Business structured data
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://finexdevelopment.com/#organization",
  name: "Finex Development",
  description: "Professional construction and facility maintenance services including plumbing, electrical, HVAC, handyman services, and emergency repairs.",
  url: "https://finexdevelopment.com",
  telephone: "+1-905-555-0123",
  email: "info@finexdevelopment.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2179 Dunwin Drive, Unit #2",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5L 1X2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.5890",
    longitude: "-79.6441",
  },
  openingHours: [
    "Mo-Fr 08:00-18:00",
    "Sa-Su 09:00-16:00",
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "43.5890",
      longitude: "-79.6441",
    },
    geoRadius: "50000", // 50km radius
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction and Facility Maintenance Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plumbing Services",
          description: "Complete plumbing solutions for residential and commercial properties including repairs, installations, and maintenance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electrical Services",
          description: "Licensed electrical work including wiring, installations, repairs, and safety inspections.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HVAC Services",
          description: "Heating, ventilation, and air conditioning services including installation and maintenance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Facility Management",
          description: "Comprehensive facility management solutions that streamline operations and reduce costs.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};

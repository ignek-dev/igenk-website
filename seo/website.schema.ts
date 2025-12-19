// seo/website.schema.ts
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "IGNEK",
  "url": "https://develop.ignek.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://develop.ignek.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

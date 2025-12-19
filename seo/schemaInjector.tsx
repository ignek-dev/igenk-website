import Script from "next/script";

type Props = {
  schema: object;
  id: string;
};

export default function SchemaInjector({ schema, id }: Props) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}

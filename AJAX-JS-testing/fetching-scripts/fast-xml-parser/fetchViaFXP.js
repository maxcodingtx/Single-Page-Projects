import { XMLParser } from "https://cdn.jsdelivr.net/npm/fast-xml-parser@5.3.2/+esm";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

async function fetchXmlAsJson(url) {
  const res = await fetch(url, { headers: { Accept: "application/xml,*/*" } });
  if (!res.ok) throw new Error(`Failed to fetch XML: ${res.status}`);
  const xmlText = await res.text();
  return parser.parse(xmlText);
}

// for global access
window.FXP = {
  fetchXmlAsJson,
};

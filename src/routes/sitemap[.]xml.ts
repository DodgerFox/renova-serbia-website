import { createFileRoute } from "@tanstack/react-router";
import { getRequestUrl } from "@tanstack/react-start/server";
import { sitemapXml } from "@/data/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const origin = new URL(getRequestUrl()).origin;
        return new Response(sitemapXml(origin), {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});

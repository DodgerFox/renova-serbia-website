import { createFileRoute } from "@tanstack/react-router";
import { getRequestUrl } from "@tanstack/react-start/server";
import { robotsTxt } from "@/data/seo";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () => {
        const origin = new URL(getRequestUrl()).origin;
        return new Response(robotsTxt(origin), {
          headers: { "content-type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});

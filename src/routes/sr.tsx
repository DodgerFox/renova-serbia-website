import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/renova/home";
import { seoHead } from "@/data/seo";
import { getSiteOrigin } from "@/lib/site-origin";

export const Route = createFileRoute("/sr")({
  loader: () => getSiteOrigin(),
  head: ({ loaderData }) => seoHead("sr", loaderData ?? ""),
  component: () => <HomePage lang="sr" />,
});

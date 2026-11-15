import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/renova/home";
import { seoHead } from "@/data/seo";
import { getSiteOrigin } from "@/lib/site-origin";

export const Route = createFileRoute("/")({
  loader: () => getSiteOrigin(),
  head: ({ loaderData }) => seoHead("ru", loaderData ?? ""),
  component: () => <HomePage lang="ru" />,
});

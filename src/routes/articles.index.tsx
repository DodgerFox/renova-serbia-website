import { createFileRoute } from "@tanstack/react-router";
import { JournalIndex } from "@/components/renova/journal";
import { articlesIndexHead } from "@/data/articles";
import { getSiteOrigin } from "@/lib/site-origin";

export const Route = createFileRoute("/articles/")({
  loader: () => getSiteOrigin(),
  head: ({ loaderData }) => articlesIndexHead("ru", loaderData ?? ""),
  component: () => <JournalIndex lang="ru" />,
});

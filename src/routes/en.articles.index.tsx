import { createFileRoute } from "@tanstack/react-router";
import { JournalIndex } from "@/components/renova/journal";
import { articlesIndexHead } from "@/data/articles";
import { getSiteOrigin } from "@/lib/site-origin";

export const Route = createFileRoute("/en/articles/")({
  loader: () => getSiteOrigin(),
  head: ({ loaderData }) => articlesIndexHead("en", loaderData ?? ""),
  component: () => <JournalIndex lang="en" />,
});

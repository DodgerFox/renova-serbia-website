import { createFileRoute } from "@tanstack/react-router";
import { JournalIndex } from "@/components/renova/journal";
import { articlesIndexHead } from "@/data/articles";
import { getSiteOrigin } from "@/lib/site-origin";

export const Route = createFileRoute("/sr/articles/")({
  loader: () => getSiteOrigin(),
  head: ({ loaderData }) => articlesIndexHead("sr", loaderData ?? ""),
  component: () => <JournalIndex lang="sr" />,
});

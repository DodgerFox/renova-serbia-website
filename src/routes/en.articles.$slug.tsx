import { createFileRoute, notFound } from "@tanstack/react-router";
import { JournalArticle } from "@/components/renova/journal";
import { articleHead, getArticle } from "@/data/articles";
import { getSiteOrigin } from "@/lib/site-origin";

export const Route = createFileRoute("/en/articles/$slug")({
  beforeLoad: ({ params }) => {
    if (!getArticle(params.slug)) throw notFound();
  },
  loader: () => getSiteOrigin(),
  head: ({ loaderData, params }) => articleHead("en", loaderData ?? "", params.slug),
  component: () => {
    const { slug } = Route.useParams();
    return <JournalArticle lang="en" slug={slug} />;
  },
});

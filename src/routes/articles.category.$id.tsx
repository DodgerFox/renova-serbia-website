import { createFileRoute, notFound } from "@tanstack/react-router";
import { JournalCategory } from "@/components/renova/journal";
import { categoryHead, getCategory } from "@/data/articles";
import { getSiteOrigin } from "@/lib/site-origin";

export const Route = createFileRoute("/articles/category/$id")({
  beforeLoad: ({ params }) => {
    if (!getCategory(params.id)) throw notFound();
  },
  loader: () => getSiteOrigin(),
  head: ({ loaderData, params }) => categoryHead("ru", loaderData ?? "", params.id),
  component: () => {
    const { id } = Route.useParams();
    return <JournalCategory lang="ru" id={id} />;
  },
});

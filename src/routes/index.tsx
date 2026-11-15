import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/renova/home";

export const Route = createFileRoute("/")({
  component: HomePage,
});

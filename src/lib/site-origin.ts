import { createServerFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";

export const getSiteOrigin = createServerFn({ method: "GET" }).handler(() => {
  return new URL(getRequestUrl()).origin;
});

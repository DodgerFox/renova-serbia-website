/**
 * Gzip text responses (HTML, JS, CSS, JSON). Static files are compressed at
 * build time; this covers the rendered HTML, which otherwise leaves the
 * server uncompressed.
 */
const COMPRESSIBLE = /text\/|javascript|json|xml|\bsvg\b|wasm/i;

export default async function gzipMiddleware(
  event: { req: { headers: Headers } },
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const response = await next();
  if (!(response instanceof Response) || !response.body) return response;
  if (response.status === 204 || response.status === 304) return response;
  if (response.headers.get("content-encoding")) return response;

  const accept = event.req.headers.get("accept-encoding") ?? "";
  if (!/\bgzip\b/i.test(accept)) return response;

  const type = response.headers.get("content-type") ?? "";
  if (!COMPRESSIBLE.test(type)) return response;

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.set("content-encoding", "gzip");
  const vary = headers.get("vary");
  if (!vary) headers.set("vary", "Accept-Encoding");
  else if (!/accept-encoding/i.test(vary)) headers.set("vary", `${vary}, Accept-Encoding`);

  return new Response(response.body.pipeThrough(new CompressionStream("gzip")), {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

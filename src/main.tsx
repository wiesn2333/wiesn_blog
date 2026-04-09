import { prerender as ssr, hydrate } from "preact-iso";
import { App } from "./app.tsx";
import type { ContainerNode } from "preact";

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app") as ContainerNode);
}

export async function prerender() {
  return await ssr(<App />);
}

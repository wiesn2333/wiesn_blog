import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { plugin as markdown, Mode } from "vite-plugin-markdown";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: "#app",
      },
    }),
    tailwindcss(),
    markdown({ mode: [Mode.REACT] }),
    svgr(),
  ],
});

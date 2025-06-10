import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://agency-template.vbartalis.dev",
  base: "",
  devToolbar: {
    enabled: false
  }
});

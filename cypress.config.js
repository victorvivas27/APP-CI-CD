import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "2n6w8u",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4173",
  },
});

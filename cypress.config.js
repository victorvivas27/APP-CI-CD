import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "2n6w8u",
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4173",
    video: true,                     // activa la grabación de video
    videosFolder: 'cypress/videos', // carpeta donde se guardan
    videoCompression: 32,           // compresión (0 = sin comprimir)
    videoUploadOnPasses: true,      // true: guarda siempre; false: solo si fallan
    trashAssetsBeforeRuns: true     // borra videos anteriores antes de correr
  },
});

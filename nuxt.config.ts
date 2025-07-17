import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components:true,
  vite: {
    optimizeDeps: {
      include: ['three']
    },
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@tresjs/nuxt'],
  css: ['~/assets/css/main.css'],
 
});
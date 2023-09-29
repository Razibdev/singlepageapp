export default defineNuxtConfig({
  build: {
    transpile: ["my-package"],
    analyze: true,
    // extractCSS: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/style/app.scss", "~/assets/style/tailwind.css"],
  app: {
    head: {
      // script: [
      //   {
      //     src: "assets/admin/assets/js/dashboard.js",
      //     crossorigin: "anonymous",
      //   },
      // ],

      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
          integrity:
            "sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
    },
  },
});

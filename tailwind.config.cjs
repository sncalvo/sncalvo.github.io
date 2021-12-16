module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  // more options here
  theme: {
    extend: {
      backgroundImage: {
        presentation: "url(/assets/test-background.png)",
      },
    },
  },
};

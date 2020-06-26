module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};

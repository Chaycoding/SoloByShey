/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      backgroundImage: {
        newsletter: `url(/src/components/images/newsletter.webp)`,
      },
    },
  },
  plugins: [],
};

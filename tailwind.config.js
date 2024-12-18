/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E3A8A",  // Couleur principale
          secondary: "#9333EA", // Couleur secondaire
          accent: "#10B981",   // Couleur d'accentuation
          neutral: "#111827",  // Couleur neutre
          "base-100": "#FFFFFF", // Couleur de fond
        },
      },
    ],
  },
};


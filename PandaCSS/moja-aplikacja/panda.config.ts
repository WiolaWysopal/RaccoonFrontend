import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#6495ed" },
          secondary: { value: "#0000ff" },
          accent: { value: "#32CD32" },
        },
      },
    },
  },

  // Global styles
  globalCss: {
    body: {
      bg: "gray.100",
      fontFamily: "sans",
      color: "gray.900",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});

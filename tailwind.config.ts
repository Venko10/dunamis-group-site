import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dunamis: {
          blue: "#003366",
          gray: "#E6E6E6",
          mint: "#00C896",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

export default config;

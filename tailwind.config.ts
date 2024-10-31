import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'space': '#0A192F',
        'space-light': '#112240',
        'electric': '#64FFDA',
        'neural': '#8892b0',
        'cloud': '#E6F1FF',
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(to right, #64FFDA, #66a6ff, #fad0c4)',
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  plugins: [],
};

export default config;

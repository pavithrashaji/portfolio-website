import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderStyle: {
        dotted: 'dotted',
        dashed: 'dashed',
      },
      borderImage: {
        'dotted': 'radial-gradient(circle, transparent 20%, black 20%) 1',
      },
      colors: {
        'custom-start': '#4A3346',  
        'custom-mid': '#3F1B43',  
        'custom-end': '#330040', 
        'custom-nav-bg': '#a88dbc',
        'custom-nav-bg-2': '#967ba9',
        'custom-nav-bg-3': '#967ba9',
      },
    },
  },
  plugins: [],
};

export default config;

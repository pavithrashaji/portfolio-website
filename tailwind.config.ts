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
        'custom-start': '#E0B1CB',  
        'custom-mid': '#BE95C4',  
        'custom-end': '#9F86C0', 
        'custom-nav-bg': '#514374',
        'custom-nav-bg-2': '#231942',
      },
    },
  },
  plugins: [],
};

export default config;

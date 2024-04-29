import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'home-background':"url('https://img.freepik.com/premium-vector/technological-background-design_23-2148503796.jpg')",
      },
      colors: {
        'custom-blue': '#1877f2',
        'bg-color': '#f0f2f5',
        'green-btn': '#42b72a',
        'background':'#9AC8CD',
        'box-color':'#3C5B6F',
        'custom-btn':'#453F78', 
        'custom-header':'#1679AB',
      },
    },
  },
  plugins: [],
};
export default config;

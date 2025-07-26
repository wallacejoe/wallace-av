import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#C4B9BD',
        primary: '#0D0106',
        secondary: '#3D5A80',
        accent: '#9B287B',
        accent2: '#95B8D1',
      },
    },
  },
  plugins: [scrollbarHide],
};
export default config;

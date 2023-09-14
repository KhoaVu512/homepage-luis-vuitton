import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily: {
      body: [
        "Louis Vuitton Web",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
     },
     boxShadow: {
      border: "insert 0 0 0 1px #fff",
      "link-underline": "0 1px 0  rgba(0,0,0,.6)",
     },
     backgroundColor: {
      "video-gardient": "linear-gradient(180deg, #000 0%, transparent 100%)",
     }
    },
  },
  plugins: [],
}
export default config

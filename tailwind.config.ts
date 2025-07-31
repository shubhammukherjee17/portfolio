import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'mobile-sm': { 'min': '320px', 'max': '374px' },
        'mobile-md': { 'min': '375px', 'max': '414px' },
        'mobile-lg': { 'min': '415px', 'max': '480px' },
      },
    }
  },
  plugins: [],
}

export default config
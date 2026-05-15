import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          muted: '#b8962e',
          pale: '#f5d06a',
        },
        surface: {
          primary: '#0a0a0f',
          secondary: '#111118',
          card: '#0d0d14',
          darkest: '#050508',
        },
      },
      fontFamily: {
        'dm-serif': ['var(--font-dm-serif)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

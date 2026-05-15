import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent — warm terracotta/clay
        'physio-clay': '#C96F4A',
        'physio-clay-dark': '#A85A39',
        'physio-clay-hover': '#8B4A2F',
        'physio-clay-light': '#F1D6C8',
        // Backgrounds
        'physio-warm': '#F7F3EC',
        'physio-sand': '#E8DDD0',
        'physio-sand-deep': '#D4C9BA',
        // Optional cool supporting tone
        'physio-cool': '#D7E1E5',
        // Text
        'physio-text': '#1F2933',
        'physio-mid': '#4A4540',
        'physio-muted': '#8A8178',
        // Border
        'physio-border': '#D9CFC4',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        charcoal: {
          DEFAULT: '#2D3436',
          light: '#3D4446',
          dark: '#1D2426',
        },
        cream: {
          DEFAULT: '#FAF9F7',
          dark: '#F0EFED',
        },
        terracotta: {
          DEFAULT: '#C17F59',
          light: '#D4967A',
          dark: '#A66B48',
        },
        sage: {
          DEFAULT: '#7D9F85',
          light: '#9AB8A1',
          dark: '#6A8A72',
        },
        // Service colors
        water: '#4A9BD9',
        fire: '#E85D3B',
        mold: '#5B8C5A',
        biohazard: '#D4A84B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;

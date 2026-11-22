import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // RemzTech Brand Palette (Updated)
        remz: {
          white: '#F0F5F7',
          'dark-teal': '#162623',
          'mid-teal': '#295255',
          'light-teal': '#577877',
          // Semantic aliases
          primary: '#295255',
          'primary-hover': '#1e3d40',
          'primary-light': '#E8EEF0',
          secondary: '#162623',
          'secondary-hover': '#0d1a18',
          accent: '#577877',
          'accent-hover': '#456060',
          muted: '#577877',
          'muted-light': '#E8EEF0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.925rem + 0.375vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1.025rem + 0.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 1.5rem + 2.5vw, 3rem)',
        'fluid-4xl': 'clamp(2.5rem, 1.75rem + 3.75vw, 4rem)',
        'fluid-5xl': 'clamp(3rem, 2rem + 5vw, 5rem)',
      },
      spacing: {
        'fluid-xs': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem)',
        'fluid-sm': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',
        'fluid-md': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',
        'fluid-lg': 'clamp(1.5rem, 1.1rem + 2vw, 2rem)',
        'fluid-xl': 'clamp(2rem, 1.4rem + 3vw, 3rem)',
        'fluid-2xl': 'clamp(3rem, 2rem + 5vw, 5rem)',
        'fluid-3xl': 'clamp(4rem, 2.5rem + 7.5vw, 7.5rem)',
      },
      borderRadius: {
        'fluid-sm': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.375rem)',
        'fluid-md': 'clamp(0.375rem, 0.3rem + 0.375vw, 0.5rem)',
        'fluid-lg': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',
        'fluid-xl': 'clamp(0.75rem, 0.6rem + 0.75vw, 1rem)',
        'fluid-2xl': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',
      },
      boxShadow: {
        'remz-sm': '0 1px 2px 0 rgb(22 38 35 / 0.05)',
        'remz-md': '0 4px 6px -1px rgb(22 38 35 / 0.1), 0 2px 4px -2px rgb(22 38 35 / 0.1)',
        'remz-lg': '0 10px 15px -3px rgb(22 38 35 / 0.1), 0 4px 6px -4px rgb(22 38 35 / 0.1)',
        'remz-xl': '0 20px 25px -5px rgb(22 38 35 / 0.1), 0 8px 10px -6px rgb(22 38 35 / 0.1)',
        'remz-glow': '0 0 0 1px rgb(41 82 85 / 0.3), 0 0 20px -5px rgb(41 82 85 / 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionDuration: {
        'fluid-fast': '150ms',
        'fluid-normal': '300ms',
        'fluid-slow': '500ms',
      },
      transitionTimingFunction: {
        'remz-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'remz-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
export default config
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      boxShadow: {
        input: '0px 0px 0px 2px #E2F0FB',
        'input-inverted': '0px 0px 0px 2px #06467D',
        navbar: '0px 1px 0px 0px rgba(83, 100, 126, 0.13)',
        'navbar-inverted': '0px 1px 0px 0px rgba(83, 100, 126, 0.13)'
      },
      colors: {
        transparents: {
          100: 'rgba(77, 99, 132, 0.06)',
          200: 'rgba(83, 100, 126, 0.09)',
          300: 'rgba(83, 100, 126, 0.13)',
          400: 'rgba(83, 100, 126, 0.18)'
        },
        gray: {
          50: '#FAFBFC',
          100: '#F0F2F5',
          200: '#E7EAEE',
          300: '#D9DDE2',
          400: '#B7BCC5',
          500: '#949BA7',
          600: '#70798A',
          700: '#515D71',
          800: '#2E3849',
          900: '#0F1826'
        },
        green: {
          50: '#EFFCF5',
          100: '#D7F6E6',
          200: '#BDF0D5',
          300: '#7DD5A8',
          400: '#3EBA7C',
          500: '#299F64',
          600: '#1E8553',
          700: '#147244',
          800: '#065E39',
          900: '#024529'
        },
        blue: {
          50: '#F2FAFF',
          100: '#E2F0FB',
          200: '#CAE6FC',
          300: '#94C9F1',
          400: '#66B1EB',
          500: '#3793DA',
          600: '#1A78C0',
          700: '#115F9E',
          800: '#06467D',
          900: '#02284F'
        },
        purple: {
          50: '#F9F8FF',
          100: '#EBE5FD',
          200: '#D9CCFF',
          300: '#B8A4F1',
          400: '#977DE4',
          500: '#886ED8',
          600: '#795FC7',
          700: '#5B40AB',
          800: '#442890',
          900: '#2E1472'
        },
        red: {
          50: '#FFF5F6',
          100: '#FCE5E7',
          200: '#FED0D4',
          300: '#FAA4AB',
          400: '#F8757D',
          500: '#EC535A',
          600: '#D4343C',
          700: '#BB1B21',
          800: '#A00F16',
          900: '#710006'
        },
        yellow: {
          50: '#FDF6EF',
          100: '#FAE9D9',
          200: '#FADEC4',
          300: '#F9CAA1',
          400: '#E7B081',
          500: '#D99862',
          600: '#C27C46',
          700: '#A86534',
          800: '#905122',
          900: '#713804'
        }
      },
      animation: {
        // Fade up and down
        'fade-up': 'fade-up 0.5s',
        'fade-down': 'fade-down 0.5s',
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        // Fade up and down
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '80%': {
            opacity: '0.6'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '80%': {
            opacity: '0.6'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('radix-side-top', '&[data-side="top"]');
      addVariant('radix-side-bottom', '&[data-side="bottom"]');
    })
  ]
} satisfies Config;

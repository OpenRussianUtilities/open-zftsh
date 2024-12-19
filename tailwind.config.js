import animate from 'tailwindcss-animate';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/@selemondev/svelte-marquee/dist/*.svelte"],
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff",
        "secondary": "#000000"
      },
      fontFamily: {
        "nunito": ["Nunito Sans", "monospace", "sans-serif"],
        "pt": ["PT Serif", "serif"],
        "computer-modern": ["Computer Modern Serif", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]
      },

      keyframes: {
				'marquee-left': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-up': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				}
			},
			animation: {
				'marquee-left': 'marquee-left var(--duration, 40s) linear infinite',
				'marquee-up': 'marquee-up var(--duration, 40s) linear infinite'
			}
    },
  },
  plugins: [animate],
}


import type { Config } from 'tailwindcss';

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@tremor/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		transparent: 'transparent',
		current: 'currentColor',
		fontFamily: {
			sans: [
				'Nexa',
				'Poppins',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
		},
		extend: {
			flexGrow: {
				2: '2',
			},
			colors: {
				// light mode
				brand: {
					faint: '#f0f3fe', // blue-50
					muted: '#c4cff9', // blue-200
					subtle: '#5d7bec', // blue-400
					DEFAULT: '#4a61e7', // blue-500
					emphasis: '#2c30c9', // blue-700
					inverted: '#ffffff', // white
					'50': '#f0f3fe',
					'100': '#dee3fb',
					'200': '#c4d0f9',
					'300': '#9cb0f4',
					'400': '#6c88ee',
					'500': '#4a61e7',
					'600': '#3542db',
					'700': '#2c30c9',
					'800': '#2a2aa3',
					'900': '#272981',
					'950': '#1c1c4f',
				},
				background: {
					muted: '#f9fafb', // gray-50
					subtle: '#f3f4f6', // gray-100
					DEFAULT: '#ffffff', // white
					emphasis: '#374151', // gray-700
				},
				border: {
					DEFAULT: '#e5e7eb', // gray-200
				},
				ring: {
					DEFAULT: '#e5e7eb', // gray-200
				},
				content: {
					subtle: '#9ca3af', // gray-400
					DEFAULT: '#6b7280', // gray-500
					emphasis: '#374151', // gray-700
					strong: '#111827', // gray-900
					inverted: '#ffffff', // white
				},
				// Deprecated. Change all occurances from tremor-[color] to just [color]
				tremor: {
					brand: {
						faint: '#f0f3fe', // blue-50
						muted: '#c4cff9', // blue-200
						subtle: '#5d7bec', // blue-400
						DEFAULT: '#4a61e7', // blue-500
						emphasis: '#2c30c9', // blue-700
						inverted: '#ffffff', // white
					},
					background: {
						muted: '#f9fafb', // gray-50
						subtle: '#f3f4f6', // gray-100
						DEFAULT: '#ffffff', // white
						emphasis: '#374151', // gray-700
					},
					border: {
						DEFAULT: '#e5e7eb', // gray-200
					},
					ring: {
						DEFAULT: '#e5e7eb', // gray-200
					},
					content: {
						subtle: '#9ca3af', // gray-400
						DEFAULT: '#6b7280', // gray-500
						emphasis: '#374151', // gray-700
						strong: '#111827', // gray-900
						inverted: '#ffffff', // white
					},
				},
			},
			fontSize: {
				'base-sm': ['0.75rem', { lineHeight: '1rem' }],
				'base-md': ['0.875rem', { lineHeight: '1.25rem' }],
				'base-lg': ['1rem', { lineHeight: '1.5rem' }],
				'label-sm': ['0.75rem', { lineHeight: '1rem' }],
				'label-md': ['0.875rem', { lineHeight: '1.25rem' }],
				'label-lg': ['1rem', { lineHeight: '1.5rem' }],
				'heading-sm': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
				'heading-md': [
					'1.125rem',
					{ lineHeight: '1.75rem', fontWeight: '500' },
				],
				'heading-lg': [
					'1.875rem',
					{ lineHeight: '2.25rem', fontWeight: '500' },
				],
				'metric-sm': ['1.5rem', { lineHeight: '1.75rem', fontWeight: '600' }],
				'metric-md': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }],
			},
			keyframes: {
				hide: {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
				slideDownAndFade: {
					from: { opacity: '0', transform: 'translateY(-6px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				slideLeftAndFade: {
					from: { opacity: '0', transform: 'translateX(6px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				slideUpAndFade: {
					from: { opacity: '0', transform: 'translateY(6px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				slideRightAndFade: {
					from: { opacity: '0', transform: 'translateX(-6px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				accordionOpen: {
					from: { height: '0px' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				accordionClose: {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: { height: '0px' },
				},
				dialogOverlayShow: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				dialogContentShow: {
					from: {
						opacity: '0',
						transform: 'translate(-50%, -45%) scale(0.95)',
					},
					to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
				},
				drawerSlideLeftAndFade: {
					from: { opacity: '0', transform: 'translateX(100%)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				drawerSlideRightAndFade: {
					from: { opacity: '1', transform: 'translateX(0)' },
					to: { opacity: '0', transform: 'translateX(100%)' },
				},
			},
			animation: {
				hide: 'hide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideDownAndFade:
					'slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideLeftAndFade:
					'slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideUpAndFade: 'slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideRightAndFade:
					'slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				// Accordion
				accordionOpen: 'accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)',
				accordionClose: 'accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)',
				// Dialog
				dialogOverlayShow:
					'dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				dialogContentShow:
					'dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				// Drawer
				drawerSlideLeftAndFade:
					'drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				drawerSlideRightAndFade: 'drawerSlideRightAndFade 150ms ease-in',
			},
		},
	},
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
	],
	plugins: [],
} satisfies Config;

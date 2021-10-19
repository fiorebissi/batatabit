module.exports = {
	mode: `jit`,
	purge: [
		`./**/*.tsx`
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => {
			return {
				...theme(`colors`),
				'bitcoin-orange': `#F7931A`,
				'warm-black': `#201E1C`,
				'soft-orange': `#FFE9D5;`,
				'secondary-blue': `#1A9AF7;`,
				'soft-blue': `#E7F5FF`,
				'warm-black2': `#282623;`,
				'batata-gray': `#BABABA;`,
				'off-white': ` #FAF8F7;`
			}
		},
		textColor: (theme) => {
			return {
				...theme(`colors`),
				'bitcoin-orange': `#F7931A`,
				'warm-black': `#201E1C`,
				'soft-orange': `#FFE9D5;`,
				'secondary-blue': `#1A9AF7;`,
				'soft-blue': `#E7F5FF`,
				'warm-black2': `#282623;`,
				'batata-gray': `#BABABA;`,
				'off-white': ` #FAF8F7;`,
				'batata-gray2': `#757575`,
				orange: `#FF9536`
			}
		},
		gradientColorStops: (theme) => {
			return {
				...theme(`colors`),
				'bitcoin-orange': `#F7931A`,
				'warm-black': `#201E1C`,
				'soft-orange': `#FFE9D5;`,
				'secondary-blue': `#1A9AF7;`,
				'soft-blue': `#E7F5FF`,
				'warm-black2': `#282623;`,
				'batata-gray': `#BABABA;`,
				'off-white': ` #FAF8F7;`
			}
		},
		borderColor: (theme) => {
			return {
				...theme(`colors`),
				'bitcoin-orange': `#F7931A`,
				'warm-black': `#201E1C`,
				'soft-orange': `#FFE9D5;`,
				'secondary-blue': `#1A9AF7;`,
				'soft-blue': `#E7F5FF`,
				'warm-black2': `#282623;`,
				'batata-gray': `#BABABA;`,
				'off-white': ` #FAF8F7;`
			}
		},
		placeholderColor: (theme) => {
			return {
				...theme(`colors`),
				'bitcoin-orange': `#F7931A`,
				'warm-black': `#201E1C`,
				'soft-orange': `#FFE9D5;`,
				'secondary-blue': `#1A9AF7;`,
				'soft-blue': `#E7F5FF`,
				'warm-black2': `#282623;`,
				'batata-gray': `#BABABA;`,
				'off-white': ` #FAF8F7;`
			}
		},
		extend: {}
	},
	variants: {
		backgroundColor: [`checked`],
		borderColor: [`checked`],
		opacity: [`disabled`]
	},
	plugins: []
}

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
				'blue-total': `#4632FF`,
				'blue-light-total': `#009cea`,
				'red-total': `#ED0000`,
				'gray-light-landing': `#E5E4E4`,
				'gray-light-total': `#BFBCBC`
			}
		},
		textColor: (theme) => {
			return {
				...theme(`colors`),
				'red-total': `#ED0000`,
				'gray-total': `#374649`,
				'gray-pearl': `#464749`,
				'blue-total': `#0b6cb5`,
				'blue-light-total': `#009cea`,
				'blue-codigo-total': `#285bff`,
				'blue-light': `#079BEB`,
				'gray-landing': `#293639`,
				'blue-landing': `#1D3E8A`,
				'gray-dark-total': `#161615`,
				'gray-bases-total': `#B7CBD3`,
				'green-total': `#5a98a8`
			}
		},
		gradientColorStops: (theme) => {
			return {
				...theme(`colors`),
				'blue-total': `#4632FF`,
				'blue-light-total': `#009cea`,
				'red-total': `#ED0000`,
				'orange-total': `#EF6F00`,
				'brown-total': `#b9a588`,
				'brown-light-landing': `#e5dbc9`,
				'brown-landing': `#d6c7ae`
			}
		},
		borderColor: (theme) => {
			return {
				...theme(`colors`),
				'red-total': `#ED0000`,
				'gray-total': `#374649`
			}
		},
		placeholderColor: (theme) => {
			return {
				...theme(`colors`),
				'gray-total': `#464749`,
				'red-total': `#ED0000`
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

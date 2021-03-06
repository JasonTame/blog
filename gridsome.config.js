// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')

const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production')
	postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
	siteName: 'Jason Blog',
	plugins: [],
	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins,
			},
		},
	},
}

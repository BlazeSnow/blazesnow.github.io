import DefaultTheme from 'vitepress/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import "@fontsource/monaspace-neon";
import './fonts.css'
import './custom.css'
import template from './template.vue';

export default {
	extends: DefaultTheme,
	Layout: template,
	enhanceApp: (ctx) => {
		googleAnalytics({
			id: 'AW-16752995804',
		})
	}
}
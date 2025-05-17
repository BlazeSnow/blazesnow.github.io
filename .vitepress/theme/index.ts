import DefaultTheme from 'vitepress/theme'
import './fonts.css'
import './color.css'
import { h } from 'vue'
import layout_404 from './404.vue'
import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
	extends: DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'not-found': () => h(layout_404)
		})
	},
	enhanceApp: (ctx) => {
		googleAnalytics({
			id: 'G-N6Q98Q8D1N',
		})
	},
}
import DefaultTheme from 'vitepress/theme'
import '@fontsource/monaspace-neon'
import './fonts.css'
import './color.css'
import { h } from 'vue'
import layout_404 from './404.vue'

export default {
	extends: DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'not-found': () => h(layout_404)
		})
	},
}
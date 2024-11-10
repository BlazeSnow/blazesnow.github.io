import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import "@fontsource/monaspace-neon";
import './fonts.css'
import './custom.css'
import layout_404 from './404.vue';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// 404
			'not-found': () => h(layout_404),
		})
	},
}
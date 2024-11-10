import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import "@fontsource/monaspace-neon";
import './fonts.css'
import './custom.css'
import layout_404 from './404.vue';

import {
	NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// 404
			'not-found': () => h(layout_404),
			// 高亮标题跳转
			'layout-top': () => [
				h(NolebaseHighlightTargetedHeading),
			],
		})
	},
	enhanceApp: (ctx) => {
		googleAnalytics({
			id: 'AW-16752995804',
		})
	},
}
import DefaultTheme from 'vitepress/theme'
import './fonts.css'
import './color.css'
import { h } from 'vue'
import layout_404 from './404.vue'
import FirstPartyBadge from './FirstPartyBadge.vue'
import StopSupportBadge from './StopSupportBadge.vue'
import TitleIcon from './TitleIcon.vue'
import '@fontsource/monaspace-neon';

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component('FirstPartyBadge', FirstPartyBadge)
		app.component('StopSupportBadge', StopSupportBadge)
		app.component('TitleIcon', TitleIcon)
	},
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'not-found': () => h(layout_404)
		})
	}
}

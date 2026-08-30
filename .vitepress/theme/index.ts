/// <reference path="../env.d.ts" />
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './fonts.css'
import './color.css'
import { h } from 'vue'
import layout_404 from './404.vue'
import AdminBadge from './AdminBadge.vue'
import FirstPartyBadge from './FirstPartyBadge.vue'
import StopSupportBadge from './StopSupportBadge.vue'
import TitleIcon from './TitleIcon.vue'
import KeyCap from './KeyCap.vue'
import WinKey from './WinKey.vue'
import StatusDot from './StatusDot.vue'
import FooterStatus from './FooterStatus.vue'
import ProjectPage from './components/ProjectPage.vue'
import ProjectHero from './components/ProjectHero.vue'
import DownloadLinks from './components/DownloadLinks.vue'
import ScreenshotGallery from './components/ScreenshotGallery.vue'
import ProjectLinks from './components/ProjectLinks.vue'

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component('AdminBadge', AdminBadge)
		app.component('FirstPartyBadge', FirstPartyBadge)
		app.component('StopSupportBadge', StopSupportBadge)
		app.component('TitleIcon', TitleIcon)
		app.component('KeyCap', KeyCap)
		app.component('WinKey', WinKey)
		app.component('ProjectPage', ProjectPage)
		app.component('ProjectHero', ProjectHero)
		app.component('DownloadLinks', DownloadLinks)
		app.component('ScreenshotGallery', ScreenshotGallery)
		app.component('ProjectLinks', ProjectLinks)
	},
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'not-found': () => h(layout_404),
			'nav-bar-title-after': () => h(StatusDot),
			'layout-bottom': () => h(FooterStatus)
		})
	}
} satisfies Theme

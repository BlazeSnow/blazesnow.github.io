/// <reference path="../env.d.ts" />
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './fonts.css'
import './color.css'
import { h } from 'vue'
import layout_404 from '../custom/404.vue'
import AdminBadge from '../custom/Badge/AdminBadge.vue'
import FirstPartyBadge from '../custom/Badge/FirstPartyBadge.vue'
import StopSupportBadge from '../custom/Badge/StopSupportBadge.vue'
import TitleIcon from '../custom/InPageComponent/TitleIcon.vue'
import KeyCap from '../custom/InPageComponent/KeyCap.vue'
import WinKey from '../custom/InPageComponent/WinKey.vue'
import StatusDot from '../custom/StatusComponent/StatusDot.vue'
import FooterStatus from '../custom/StatusComponent/FooterStatus.vue'
import ProjectPage from '../custom/ProductPage/ProjectPage.vue'
import ProjectHero from '../custom/ProductPage/ProjectHero.vue'
import DownloadLinks from '../custom/ProductPage/DownloadLinks.vue'
import ScreenshotGallery from '../custom/ProductPage/ScreenshotGallery.vue'
import ProjectLinks from '../custom/ProductPage/ProjectLinks.vue'

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

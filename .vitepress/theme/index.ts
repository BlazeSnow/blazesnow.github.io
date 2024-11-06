import DefaultTheme from 'vitepress/theme'
import "@fontsource/monaspace-neon";
import './fonts.css'
import './custom.css'
import layoutwithads from './Layout.vue';
import layout from './404.vue'

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		const hostname = window.location.hostname;
		if (hostname === 'example.org' || hostname === 'www.example.org') {
			app.component('Layout', layoutwithads);
		} else {
			app.component('Layout', layout);
		}
	}
}
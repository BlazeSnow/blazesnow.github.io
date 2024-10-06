import DefaultTheme from 'vitepress/theme'
import "@fontsource/monaspace-neon/500.css";
import './fonts.css'
import './custom.css'
import layout_404 from './404.vue'

export default {
	extends: DefaultTheme,
	Layout: layout_404,
}
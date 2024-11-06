import DefaultTheme from 'vitepress/theme'
import "@fontsource/monaspace-neon";
import './fonts.css'
import './custom.css'
import layout from './layout.vue';

export default {
	extends: DefaultTheme,
	Layout: layout,
}
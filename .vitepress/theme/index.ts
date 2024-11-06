import DefaultTheme from 'vitepress/theme'
import "@fontsource/monaspace-neon";
import './fonts.css'
import './custom.css'
import layout from './Layout.vue';

export default {
	extends: DefaultTheme,
	Layout: layout,
}
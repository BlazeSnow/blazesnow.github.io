import DefaultTheme from 'vitepress/theme'
import "@fontsource/monaspace-neon";
import './fonts.css'
import './custom.css'
import MyLayout from './MyLayout.vue';

export default {
	extends: DefaultTheme,
	Layout: MyLayout
}
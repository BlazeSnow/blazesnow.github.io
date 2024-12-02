import DefaultTheme from 'vitepress/theme'
import "@fontsource/monaspace-neon/400.css";
import './fonts.css'
import './custom.css'
import MyLayout from './MyLayout.vue';

export default {
	extends: DefaultTheme,
	Layout: MyLayout
}
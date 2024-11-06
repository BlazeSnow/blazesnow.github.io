import DefaultTheme from 'vitepress/theme'
import "@fontsource/monaspace-neon";
import './fonts.css'
import './custom.css'
import template from './template.vue';

export default {
	extends: DefaultTheme,
	Layout: template,
}
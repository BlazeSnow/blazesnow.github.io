import DefaultTheme from 'vitepress/theme'
import './custom.css'
import layout_404 from './404.vue'

export default {
	extends: DefaultTheme,
	Layout: layout_404
}
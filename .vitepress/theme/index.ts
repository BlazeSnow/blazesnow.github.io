import DefaultTheme from 'vitepress/theme'
import './custom.css'
import layout_404 from './layout_404.vue'

export default {
    extends: DefaultTheme,
    Layout: layout_404
}
import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
    enhanceApp: (ctx) => {
        googleAnalytics({
            id: 'G-1KLV0EED8K',
        })
    }
}
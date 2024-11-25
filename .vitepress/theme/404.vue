<script setup>
import DefaultTheme from 'vitepress/theme'
import custombutton from './custombutton.vue'
const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <!-- not-found -->
        <template #not-found>
            <div id="VPContent" class="VPContent">
                <div class="NotFound">
                    <p class="code">
                        404
                    </p>

                    <h1 class="title">
                        页面未找到
                    </h1>

                    <div class="divider"></div>

                    <blockquote class="quote">
                        抱歉，没有找到您需要的页面，点击下方按钮前往查找页面，查找变更的网页。
                    </blockquote>

                    <br>

                    <custombutton label="前往查找页面" link="/find" />
                </div>
            </div>
        </template>
    </Layout>
</template>

<style scoped>
div.NotFound {
    padding: 64px 24px 96px;
    text-align: center;
}

div.NotFound p.code {
    line-height: 92px;
    font-size: 92px;
    font-weight: 600;
}

div.NotFound h1.title {
    padding-top: 12px;
    letter-spacing: 2px;
    line-height: 40px;
    font-size: 40px;
    font-weight: 700;
}

div.NotFound div.divider {
    margin: 24px auto 18px;
    width: 300px;
    height: 1px;
    background-color: var(--vp-c-divider);
}

div.NotFound blockquote.quote {
    margin: 0 auto;
    max-width: fit-content;
    line-height: 1.6;
    font-size: 20px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

div.NotFound div.action {
    padding-top: 50px;
}

div.NotFound a.VPButton.medium.brand {
    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color .25s, border-color .25s, background-color .25s;
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
}
</style>
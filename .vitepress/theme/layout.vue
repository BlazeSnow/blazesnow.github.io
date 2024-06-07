<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <!-- 404页面 -->
        <template #not-found>
            <div class="VPContent" id="VPContent">
                <div class="NotFound">
                    <p class="code">
                        404
                    </p>
                    <h1 class="title">
                        页面未找到
                    </h1>
                    <div class="divider"></div>
                    <blockquote class="quote">
                        抱歉，没有找到您需要的页面
                    </blockquote>
                    <div class="action">
                        <a class="link" href="/" aria-label="回到主页">
                            回到主页
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </Layout>
</template>

<style scoped>
/* 404页面的页面格式 */

#not-found div.VPContent {
    flex-grow: 1;
    flex-shrink: 0;
    margin: var(--vp-layout-top-height, 0px) auto 0;
    width: 100%;
}

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
    max-width: auto;
    line-height: 1.6;
    font-size: 20px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

div.NotFound div.action {
    padding-top: 50px;
}

div.NotFound a.link {
    display: inline-block;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 10px;
    padding: 4px 20px;
    font-size: 20px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
    transition: border-color 0.25s, color 0.25s;
}
</style>
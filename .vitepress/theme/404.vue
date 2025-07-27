<script setup>
</script>

<template>
    <div class="NotFound">
        <p class="code">
            404
        </p>
        <h1 class="title">
            页面未找到
        </h1>
        <div class="quote">
            抱歉，没有找到您需要的页面
            <br></br>
            <a class="link" href="/Deprecated">查看停止支持及弃用的页面</a>
        </div>
        <div class="action">
            <a class="link" href="/">回到首页</a>
        </div>
    </div>
</template>

<style scoped>
div.NotFound {
    padding: 64px 24px 96px;
    text-align: center;
}

div.NotFound p.code {
    line-height: 1;
    font-size: 5rem;
}

div.NotFound h1.title {
    padding-top: 1rem;
    line-height: 1;
    font-size: 2.5rem;
}

div.NotFound div.quote {
    padding-top: 2rem;
    line-height: 1.6;
    font-size: 1.2rem;
    color: var(--vp-c-text-2);
}

div.NotFound div.quote a.link {
    color: var(--vp-button-brand-bg);
    text-decoration: underline;
    text-underline-offset: 2px;
}

div.NotFound div.action {
    padding-top: 2rem;
}

div.NotFound div.action a.link {
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    border-radius: 20px;
    padding: 0 20px;
    line-height: 2.4rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
}
</style>
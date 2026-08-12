<script setup lang="ts">
import { computed, ref } from 'vue'
import { STATUS_PAGE_URL, useStatus } from './useStatus'

// 页脚状态块：Teleport 到页脚容器内。
// 侧边栏页面页脚被隐藏（display:none），此时不渲染也不请求。
const footerEl = ref<HTMLElement | null>(null)

function setupFooter() {
    const footer = document.querySelector('.VPFooter')
    if (!footer || getComputedStyle(footer).display === 'none') {
        return false
    }
    const container = footer.querySelector('.container')
    if (!container) {
        return false
    }
    footerEl.value = container as HTMLElement
    return true
}

const { state, label, summary, updatedAt } = useStatus(setupFooter)

const updatedTime = computed(() => {
    if (!updatedAt.value) {
        return ''
    }
    return updatedAt.value.toLocaleTimeString('zh-CN', { hour12: false })
})

// 仅显示非零的统计项
const countItems = computed(() => {
    const items: string[] = []
    if (summary.value.ongoingIncidents > 0) {
        items.push(`${summary.value.ongoingIncidents} 起进行中的事故`)
    }
    if (summary.value.inProgressMaintenances > 0) {
        items.push(`${summary.value.inProgressMaintenances} 项进行中的维护`)
    }
    if (summary.value.scheduledMaintenances > 0) {
        items.push(`${summary.value.scheduledMaintenances} 项计划维护`)
    }
    return items
})
</script>

<template>
    <Teleport v-if="footerEl" :to="footerEl">
        <div class="footer-status">
            <p class="status-line">
                <span class="dot" :class="state"></span>
                <span>{{ label }}</span>
            </p>
            <p v-if="countItems.length > 0" class="meta-line">
                <span v-for="item in countItems" :key="item">{{ item }}</span>
            </p>
            <p class="meta-line">
                <span v-if="updatedTime">上次更新 {{ updatedTime }}</span>
                <a :href="STATUS_PAGE_URL" target="_blank" rel="noopener noreferrer">前往状态页查看详情</a>
            </p>
        </div>
    </Teleport>
</template>

<style scoped>
.footer-status {
    margin-top: 12px;
    font-size: 14px;
    line-height: 24px;
    color: var(--vp-c-text-2);
}

.status-line {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin: 0;
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.meta-line {
    margin: 0;
}

.meta-line span + *::before {
    content: ' · ';
}

.meta-line a {
    color: var(--vp-c-brand-1);
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex: 0 0 auto;
    transition: background-color 0.3s ease;
}

.dot.operational {
    background-color: #22c55e;
}

.dot.maintenance {
    background-color: #f59e0b;
}

.dot.incident {
    background-color: #ef4444;
    animation: status-pulse 1.5s ease-in-out infinite;
}

.dot.loading,
.dot.unknown {
    background-color: #9ca3af;
}

@keyframes status-pulse {
    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
    }
    50% {
        box-shadow: 0 0 0 5px rgba(239, 68, 68, 0);
    }
}
</style>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { STATUS_PAGE_URL, useStatus } from './useStatus'

// 标题栏的容器节点：把圆点从标题链接内部搬到容器中，避免嵌套 <a>，并让悬停显示正确的状态页地址
const teleportTarget = ref(null)

const { state: statusState, label: statusLabel } = useStatus()

const dotTitle = computed(() => {
    if (statusState.value === 'loading' || statusState.value === 'unknown') {
        return statusLabel.value
    }
    return `${statusLabel.value}，点击查看详情`
})

onMounted(() => {
    teleportTarget.value = document.querySelector('.VPNavBarTitle') ?? null
})
</script>

<template>
    <!-- 用 Teleport 把圆点从标题链接内部搬到容器中，避免嵌套 <a>，并让悬停显示正确的状态页地址 -->
    <a
        class="vp-status-dot"
        :href="STATUS_PAGE_URL"
        target="_blank"
        rel="noopener noreferrer"
        :title="dotTitle"
        :aria-label="statusLabel"
    >
        <span class="dot" :class="statusState"></span>
    </a>
</template>

<style scoped>
.vp-status-dot {
    display: inline-flex;
    align-items: center;
    margin-left: 8px;
    line-height: 0;
    cursor: pointer;
    text-decoration: none;
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

<style>
/* 全局样式：让标题链接与状态圆点并排，圆点紧跟标题文字。
   这些选择器指向 VitePress 内部元素，需要非 scoped 样式才能命中。 */
.VPNavBarTitle {
    display: flex;
    align-items: center;
}

.VPNavBarTitle > .title {
    width: auto;
}

/* 标题链接宽度变为内容宽度后，侧边栏页面的分隔线移到容器上，保持通栏效果 */
.VPNavBarTitle.has-sidebar {
    border-bottom: 1px solid var(--vp-c-divider);
}

.VPNavBarTitle.has-sidebar > .title {
    border-bottom-color: transparent !important;
}
</style>

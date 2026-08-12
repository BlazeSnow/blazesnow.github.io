<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// incident.io 状态页与公开汇总 API
const STATUS_PAGE_URL = 'https://status.blazesnow.com/'
const SUMMARY_API = 'https://status.blazesnow.com/api/v1/summary'
// 轮询间隔（毫秒）
const REFRESH_INTERVAL = 60_000

// loading | operational | maintenance | incident | unknown
const state = ref('loading')
const label = ref('正在获取网站状态…')

async function fetchStatus() {
    try {
        const res = await fetch(SUMMARY_API, { cache: 'no-store' })
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
        }
        const data = await res.json()
        const ongoingIncidents = data.ongoing_incidents || []
        const inProgressMaintenances = data.in_progress_maintenances || []
        if (ongoingIncidents.length > 0) {
            state.value = 'incident'
            label.value = '网站存在进行中的事故，点击查看详情'
        } else if (inProgressMaintenances.length > 0) {
            state.value = 'maintenance'
            label.value = '网站正在维护中，点击查看详情'
        } else {
            state.value = 'operational'
            label.value = '全部系统正常运行'
        }
    } catch {
        state.value = 'unknown'
        label.value = '无法获取网站状态'
    }
}

function openStatusPage(event) {
    window.open(STATUS_PAGE_URL, '_blank', 'noopener')
}

let timer
onMounted(() => {
    fetchStatus()
    timer = setInterval(fetchStatus, REFRESH_INTERVAL)
})
onUnmounted(() => {
    clearInterval(timer)
})
</script>

<template>
    <!-- 使用 span 而非 a：本组件位于标题链接内部，避免嵌套 <a> -->
    <span
        class="vp-status-dot"
        role="link"
        tabindex="0"
        :title="label"
        :aria-label="label"
        @click.stop.prevent="openStatusPage"
        @keydown.enter.prevent="openStatusPage"
    >
        <span class="dot" :class="state"></span>
    </span>
</template>

<style scoped>
.vp-status-dot {
    display: inline-flex;
    align-items: center;
    margin-left: 8px;
    cursor: pointer;
    user-select: none;
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

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface ServiceStatus {
    description: string;
    indicator: 'none' | 'minor' | 'major' | 'critical';
}

const status = ref<ServiceStatus | null>(null)
const loading = ref(true)

const STATUS_API_URL = 'https://blazesnow.statuspage.io/api/v2/status.json'

const fetchServiceStatus = async () => {
    try {
        const response = await fetch(STATUS_API_URL)

        if (!response.ok) {
            throw new Error(`HTTP 错误: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()

        if (data && data.status && typeof data.status.description === 'string' && typeof data.status.indicator === 'string') {
            status.value = data.status
        } else {
            throw new Error('API 响应数据结构不符合预期')
        }
    } catch (error) {
        console.error('无法获取服务状态:', error)
        status.value = { description: '服务状态获取失败', indicator: 'critical' }
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchServiceStatus()
})
</script>

<template>
    <h2>网站状态</h2>

    <div v-if="loading" class="status-loading">
        当前状态：正在加载……
    </div>

    <div v-else class="status-display">
        <p>
            当前状态：
            <span :class="['indicator', status?.indicator || 'critical']">
                {{ status?.description || '未知状态' }}
            </span>
        </p>
    </div>

    <p class="external-link">
        查看本网站的运行状态及可用域名：
        <a href="https://blazesnow.statuspage.io/" target="_blank" rel="noopener noreferrer">
            https://blazesnow.statuspage.io/
        </a>
    </p>
</template>

<style scoped>
.indicator {
    font-weight: bold;
}

.indicator.none {
    color: green;
}

.indicator.minor {
    color: orange;
}

.indicator.major {
    color: red;
}

.indicator.critical {
    color: darkred;
}

.status-loading {
    color: #666;
    font-style: italic;
}

.status-display p {
    margin-bottom: 10px;
}
</style>

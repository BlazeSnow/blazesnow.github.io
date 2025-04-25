<script setup lang="ts">
import { ref, onMounted } from 'vue'

const status = ref(null)
const loading = ref(true)

onMounted(async () => {
    try {
        const response = await fetch('https://blazesnow.statuspage.io/api/v2/status.json')
        const data = await response.json()
        status.value = data.status
    } catch (error) {
        console.error('无法获取服务状态:', error)
        status.value = { description: '无法获取状态', indicator: 'critical' }
    } finally {
        loading.value = false
    }
})
</script>

<template lang="html">
    <h2>网站状态</h2>

    <div v-if="loading">
        当前状态：正在加载……
    </div>

    <div v-else>
        <p :style="{
            color: status.indicator === 'none' ? 'green' :
                status.indicator === 'minor' ? 'orange' :
                    status.indicator === 'major' ? 'red' : 'darkred'
        }">当前状态：{{ status.description }}</p>
    </div>

    <p>
        查看本网站的运行状态及可用域名：
        <a href="https://blazesnow.statuspage.io/" target="_blank">
            https://blazesnow.statuspage.io/
        </a>
    </p>
</template>

<style scoped>
.indicator {
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
}

.indicator.none {
    color: white;
    background-color: green;
}

.indicator.minor {
    color: white;
    background-color: orange;
}

.indicator.major {
    color: white;
    background-color: red;
}

.indicator.critical {
    color: white;
    background-color: darkred;
}
</style>

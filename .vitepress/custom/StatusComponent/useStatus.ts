import { onMounted, ref } from 'vue'

// incident.io 状态页与公开汇总 API
export const STATUS_PAGE_URL = 'https://status.blazesnow.com/'
export const SUMMARY_API = 'https://status.blazesnow.com/api/v1/summary'
// 轮询间隔（毫秒）
export const REFRESH_INTERVAL = 60_000

export type StatusState = 'loading' | 'operational' | 'maintenance' | 'incident' | 'unknown'

export interface StatusSummary {
    ongoingIncidents: number
    inProgressMaintenances: number
    scheduledMaintenances: number
}

// 模块级共享状态：标题圆点与页脚状态块共用同一份数据与同一条轮询循环，
// 避免每个组件各自请求一次状态接口。
const state = ref<StatusState>('loading')
const label = ref('正在获取网站状态…')
const summary = ref<StatusSummary>({
    ongoingIncidents: 0,
    inProgressMaintenances: 0,
    scheduledMaintenances: 0,
})
const updatedAt = ref<Date | null>(null)

let started = false
let fetching = false
let timer: ReturnType<typeof setInterval> | undefined

async function fetchStatus() {
    // 上一次请求未返回时跳过本次，避免请求堆积、旧响应覆盖新状态
    if (fetching) {
        return
    }
    fetching = true
    try {
        const res = await fetch(SUMMARY_API, { cache: 'no-store' })
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
        }
        const data = await res.json()
        const ongoingIncidents = (data.ongoing_incidents || []).length
        const inProgressMaintenances = (data.in_progress_maintenances || []).length
        const scheduledMaintenances = (data.scheduled_maintenances || []).length
        summary.value = { ongoingIncidents, inProgressMaintenances, scheduledMaintenances }
        updatedAt.value = new Date()
        if (ongoingIncidents > 0) {
            state.value = 'incident'
            label.value = `网站存在 ${ongoingIncidents} 起进行中的事故`
        } else if (inProgressMaintenances > 0) {
            state.value = 'maintenance'
            label.value = `网站正在维护中（${inProgressMaintenances} 项）`
        } else {
            state.value = 'operational'
            label.value = '全部系统正常运行'
        }
    } catch {
        state.value = 'unknown'
        label.value = '无法获取网站状态'
    } finally {
        fetching = false
    }
}

// 首次调用时启动轮询；onMounted 只在客户端执行，不会在构建期发起请求
function startPolling() {
    if (started) {
        return
    }
    started = true
    fetchStatus()
    timer = setInterval(fetchStatus, REFRESH_INTERVAL)
}

/**
 * 获取共享的 incident.io 状态汇总。多个组件可各自调用，读到的是同一份状态。
 */
export function useStatus() {
    onMounted(() => {
        startPolling()
    })

    return { state, label, summary, updatedAt }
}
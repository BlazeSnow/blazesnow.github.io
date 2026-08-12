import { onMounted, onUnmounted, ref } from 'vue'

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

/**
 * 获取 incident.io 状态汇总并定时轮询。
 * 传入的 enabled 回调在挂载时执行：返回 false 则不发起请求（例如页脚在侧边栏页面被隐藏时）。
 */
export function useStatus(enabled?: () => boolean) {
    const state = ref<StatusState>('loading')
    const label = ref('正在获取网站状态…')
    const summary = ref<StatusSummary>({
        ongoingIncidents: 0,
        inProgressMaintenances: 0,
        scheduledMaintenances: 0,
    })
    const updatedAt = ref<Date | null>(null)

    async function fetchStatus() {
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
        }
    }

    let timer: ReturnType<typeof setInterval> | undefined
    onMounted(() => {
        if (enabled && !enabled()) {
            return
        }
        fetchStatus()
        timer = setInterval(fetchStatus, REFRESH_INTERVAL)
    })
    onUnmounted(() => {
        clearInterval(timer)
    })

    return { state, label, summary, updatedAt }
}

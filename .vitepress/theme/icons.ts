/**
 * 站点图标库的统一处理：地址映射与深色模式反色判定。
 */

import coloredIcons from './colored-icons.json'

/** 彩色图标清单（见 colored-icons.json）：深色模式下不反色，新增彩色图标时登记进去，其余图标一律自动反色 */
export const COLORED_ICONS = new Set<string>(coloredIcons)

/** 站点图标库中的图标名（/icon/{icon}.svg）对应的地址 */
export function resolveIconSrc(icon: string): string {
	return `/icon/${icon}.svg`
}

interface IconProps {
	/** 图标库中的图标名 */
	icon?: string
	/** 直接指定的图标地址 */
	src?: string
	/** 强制按彩色图标处理 */
	color?: boolean
}

/** 是否按单色图标处理：彩色清单内或显式 color 时不反色，其余一律深色模式反色 */
export function isMonoIcon({ icon = '', src = '', color = false }: IconProps): boolean {
	if (color) return false
	const name = icon || src.split('/').pop()?.replace(/\.\w+$/, '') || ''
	return !COLORED_ICONS.has(name)
}

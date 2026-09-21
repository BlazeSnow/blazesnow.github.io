import type { DefaultTheme } from 'vitepress'
import { changelog, dns, mc, nodejs, remote } from './misc'
import { windows } from './windows'
import { ubuntu } from './ubuntu'
import { docker } from './docker'
import { dockerseries } from './dockerseries'

export const sidebar: DefaultTheme.Sidebar = {
  ...changelog,
  ...windows,
  ...dns,
  ...remote,
  ...nodejs,
  ...ubuntu,
  ...docker,
  ...dockerseries,
  ...mc
}

import { defineConfig } from 'vitepress'
import { en } from './config/en'
import { vi } from './config/vi'
import { sharedConfig } from './config/shared'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      ...en
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      ...vi
    }
  }
})

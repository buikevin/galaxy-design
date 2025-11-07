import { defineConfig } from 'vitepress'
import path from 'path'

export const sharedConfig = defineConfig({
  title: 'Galaxy UI',

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../')
      }
    },
    ssr: {
      noExternal: ['radix-vue'],
    },
    optimizeDeps: {
      exclude: ['vue-echarts', 'echarts']
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#06B6D4' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Galaxy UI CLI' }],
    ['meta', { name: 'og:image', content: 'https://galaxy-ui-cli.vercel.app/galaxy-logo.png' }],
    ['meta', { name: 'author', content: 'Bùi Trọng Hiếu (kevinbui)' }],
    ['meta', { name: 'og:author', content: 'Bùi Trọng Hiếu (kevinbui)' }],
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },

  themeConfig: {
    logo: '/logo.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/buikevin/galaxy-design' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          vi: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả',
                resetButtonTitle: 'Xóa tìm kiếm',
                footer: {
                  selectText: 'để chọn',
                  navigateText: 'để di chuyển',
                  closeText: 'để đóng'
                }
              }
            }
          }
        }
      }
    }
  }
})

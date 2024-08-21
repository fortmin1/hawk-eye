import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "鹰眼小站",
  themeConfig: {
    siteTitle: '鹰眼小站',
    logo:"logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '博客推荐', items:[
          { text: '前端', link: '/hoard/website/frontend' },
          { text: '后端', link: '/hoard/website/backend' },
          { text: '计算机基础', link: '/hoard/website/basic-computer' },
        ]
      },
      { text: '书籍推荐', items:[
          { text: '前端', link: '/hoard/books/frontend' },
          { text: '后端', link: '/hoard/books/backend' },
          { text: '计算机基础', link: '/hoard/books/basic-computer' },
        ]
      },
    ],

    sidebar: {
      '/frontend/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: './Test' },
          ]
        },
        {
          text: 'A',
          items: [
            { text: 'Index', link: './Test' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fortmin1/hawk-eye' },
      {
        icon: 'cqyy.svg',
        link: 'https://ai.cqut.edu.cn/info/1082/2443.htm',
      }
    ]
  }
})

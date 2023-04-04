import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
export default defineUserConfig({
  title: '个人博客',//标题
  description: '记录点东西',
  // 一些好用的插件
  plugins: [
    // 返回顶部
    backToTopPlugin(),
    mediumZoomPlugin(),
    // docsearchPlugin(),
    nprogressPlugin(),
  ],
  theme: defaultTheme({
    navbar: [
      { text: 'github', link: 'https://github.com/tyj-321' }
    ],
    sidebar: [
      {
        text: '2023',
        link: '/menu/2023/pnpm.html',
        collapsible: false,
        children: [
          '/menu/2023/pnpm.md'
        ]
      },
      {
        text: '2022',
        link: '/menu/2022/eslint&prettier.html',
        collapsible: true,
        children: [
          '/menu/2022/用户体验法则.md',
          '/menu/2022/eslint&prettier.md',
          '/menu/2022/switchTheme.md',
          '/menu/2022/async&await.md',
          '/menu/2022/weixinOauth.md',
          '/menu/2022/VirtualDOM&Diff.md',
          '/menu/2022/debugger.md',
          '/menu/2022/css-box.md',
          '/menu/2022/Browser-cache.md',
        ]
      },
      {
        text: '2021',
        link: '/menu/2021/2021review.html',
        collapsible: true,
        children: [
          '/menu/2021/2021review.md',
          '/menu/2021/v-modelSkill.md',
          '/menu/2021/debounce&throttle.md',
          '/menu/2021/Mobilefit.md',
          '/menu/2021/cssLayout.md',
          '/menu/2021/VueReactive.md',
          '/menu/2021/Typescript.md',
          '/menu/2021/Docker.md',
          '/menu/2021/composition-api.md',
          '/menu/2021/jsextend.md',
          '/menu/2021/modulefederation.md',
          '/menu/2021/mixins-vuex.md',
          '/menu/2021/learnroad.md',
          '/menu/2021/event-loop.md',
          '/menu/2021/codeStyle.md',
          '/menu/2021/internet.md',
          '/menu/2021/less-scss.md',
          '/menu/2021/vscodePlugin.md',
          '/menu/2021/chromePlugin.md',
          '/menu/2021/dataType.md',
          '/menu/2021/workSummary.md',
          '/menu/2021/teamWork.md',
        ]
      }
    ]
  }),
})
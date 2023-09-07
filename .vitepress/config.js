import { fileURLToPath, URL } from 'node:url'

export default {
  title: "学思刻",
  description: "一个优质学习资源导航平台。",
  lastUpdated: true,
  titleTemplate: false,
  srcDir: "./src",
  outDir: "./dist",
  themeConfig: {
    outline: {
      label: "页面导航",
    },
    lastUpdatedText: "最后更新于",
    editLink: {
      pattern: "https://github.com/awxiaoxian2020/thidy/edit/master/src/:path",
      text: "在 GitHub 编此页面",
    },
    footer: {
        icpRecordCode: "皖ICP备2021004162号-2",
        publicSecurityRecordCode: "皖公网安备 34011102003461 号"
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/CustomFooter.vue', import.meta.url)
          )
        }
      ]
    }
  }
};

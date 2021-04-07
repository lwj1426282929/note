const head = require('./config/config.head')
const themeConfig = require('./config/config.theme')
const plugins = require('./config/config.plugin')

module.exports = {
  port: 80,
  base: '/note/',
  head,
  serviceWorker: true, // 离线缓存（https）
  cache: true,
  locales: {
    '/': {
      title: '笔记',
      lang: 'zh-CN',
    },
  },
  themeConfig,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '/assets',
      },
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins,
}

module.exports = {
  mode: 'auto', // 背景模式, 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
  type: 'blog',
  author: '赖维健',
  authorAvatar: '/avatar.jpg',
  logo: '/avatar.jpg',
  startYear: '2021', // 项目开始年份
  lastUpdated: '上次更新',
  huawei: true,
  noFoundPageByTencent: false, // 开启404腾讯公益
  smoothScroll: true,

  /* 搜索 */
  search: true,
  searchMaxSuggestions: 10, // 搜索建议最大显示条数

  /* 备案 */
  record: '', // ICP 备案文案
  recordLink: '', // ICP 备案指向链接
  cyberSecurityRecord: '', // 公安部备案文案
  cyberSecurityLink: '', // 公安部备案指向链接

  /* 博客配置 */
  blogConfig: {
    /* 分类 */
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类', // 默认文案 “分类”
    },

    /* 标签 */
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签', // 默认文案 “标签”
    },

    /* 信息栏，作者头像和姓名下方 */
    socialLinks: [
      { icon: 'reco-github', link: 'https://github.com/lwj1426282929' },
      { icon: 'reco-mayun', link: 'https://gitee.com/lwj1426282929' },
      { icon: 'reco-npm', link: 'https://www.npmjs.com/~lwj1426282929' },
    ],
  },

  // 评论
  valineConfig: {
    appId: 'e6ojaBbYmQvJLNWeBouhonP6-gzGzoHsz', // your appId
    appKey: '050ScrJoJUW37QqwVwzSmKoX', // your appKey
  },

  /* 导航栏 */
  nav: [
    {
      text: '首页',
      link: '/',
      icon: 'reco-home',
    },
    {
      text: '时间轴',
      link: '/timeline/',
      icon: 'reco-date',
    },
    {
      text: '留言板',
      link: '/message/',
      icon: 'reco-message',
    },
    {
      text: '关于我',
      link: '/about/',
      icon: 'reco-account',
    },
  ],

  /* 侧边栏 */
  sidebar: false,

  /* 友情链接 */
  friendLink: [
    {
      title: 'vuepress-theme-reco',
      desc: '一款简洁而优雅的 vuepress 博客 & 文档 主题。',
      email: '',
      logo: '',
      link: 'https://vuepress-theme-reco.recoluan.com/',
    },
    {
      title: 'VuePress',
      desc: 'Vue 驱动的静态网站生成器',
      email: '',
      link: 'https://vuepress.vuejs.org/zh/',
    },
  ],
}

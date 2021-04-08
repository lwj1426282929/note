const demoCode = require('../plugins/demo-code')

module.exports = [
  // 看板娘
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: ['whiteCat'],
      clean: true,
      modelStyle: {
        position: 'fixed',
        right: '65px',
        bottom: '0px',
        zIndex: 99999,
        pointerEvents: 'none',
      },
    },
  ],

  // 彩带
  [
    'ribbon-animation',
    {
      size: 90, // 默认数据
      opacity: 0.3, //  透明度
      zIndex: -1, //  层级
      opt: {
        colorSaturation: '80%', // 色带HSL饱和度
        colorBrightness: '60%', // 色带HSL亮度量
        colorAlpha: 0.65, // 带状颜色不透明度
        colorCycleSpeed: 6, // 在HSL颜色空间中循环显示颜色的速度有多快
        verticalPosition: 'center', // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        horizontalSpeed: 200, // 到达屏幕另一侧的速度有多快
        ribbonCount: 2, // 在任何给定时间，屏幕上会保留多少条带
        strokeSize: 0, // 添加笔划以及色带填充颜色
        parallaxAmount: -0.5, // 通过页面滚动上的因子垂直移动色带
        animateSections: true, // 随着时间的推移，为每个功能区添加动画效果
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true, // 滑动彩带
    },
  ],

  // 复制代码
  [
    'one-click-copy',
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
        'div[class*="code-block__inner-code"]',
        '.copy-container',
      ],
      copyMessage: '复制成功',
      duration: 1000,
    },
  ],

  // demo-code
  [demoCode],
]

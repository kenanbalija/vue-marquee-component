/** 跑马灯容器 */
import Marquee from './src/components/Marquee'
/** 跑马灯Slide */
import Slide from './src/components/Slide'

const install = (app) => {
  // 判断是否可以安装
  if (install.installed) return

  app.component(Marquee.name, Marquee)
  app.component(Slide.name, Slide)

  install.installed = true
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Marquee,
  Slide
}
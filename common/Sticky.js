/**
 * @class sticky
 * @description 追従と固定を切り替える。
 */

import { TweenMax } from "gsap";

export default class sticky {
  constructor(elem) {
    this.elem = elem
    this.flg = false

    this.footer = document.querySelector('[data-key="footer"]')
    this.bindEvent()
  }

  bindEvent() {
    window.addEventListener('scroll', this.posCheck.bind(this))
  }

  posCheck() {
    const currentScrollPosition = window.pageYOffset + window.innerHeight
    const targetPosition = this.footer.offsetTop
    const positionStyle = currentScrollPosition > targetPosition ? {
      'position': 'absolute',
      'z-index': 100
    } : {
      'position': 'fixed',
      'z-index': 9991
    }

    TweenMax.set(this.elem, {
      css: positionStyle
    })
  }
}
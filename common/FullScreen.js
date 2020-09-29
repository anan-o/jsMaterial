/**
 * @class FullScreen
 * @description 全画面表示したい。
 */

import GetWindowSize from '../utils/GetWindowSize'

export default class FullScreen {
  constructor(elem) {
    console.log(elem);
    this.elem = elem
    this.windowSize = new GetWindowSize()
    this.set()
    this.bindEvent()
  }
  bindEvent() {
    window.addEventListener('resize',this.set.bind(this))
  }
  set() {
    this.elem.style.height = `${this.windowSize.height()}px`
    this.elem.style.width = `${this.windowSize.width()}px`
  }
}
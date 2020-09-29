/**
 * @class FixedObject
 * @description 縦横比をできるだけfitさせる
 */

import winsize from '../utils/GetWindowSize'
import mq from '../utils/Mq'
import ratio from '../utils/GetRatio'

export default class FixedObject {
  constructor(elem) {
    this.elem = elem
    this.winsize = new winsize()
    this.mq = new mq()
    this.ratio = new ratio()
    this.init()
  }

  init() {
    this.event()
  }

  event() {
    window.addEventListener('load', () => this.setwindowsize())
    window.addEventListener('resize', () => this.setwindowsize())
  }

  /**
   * @method setwindowsize
   * @desc 画面のサイズは場に応じてできるだけ綺麗にハマるようにする。
   */
  setwindowsize() {
    if (this.mq.judge() === 'PC' && this.ratio.get(this.mq.judge()) === 'Landscape') {
      this.elem.style.height = 'auto'
      this.elem.style.width = this.winsize.width()
    }
    else if (this.mq.judge() === 'PC' && this.ratio.get(this.mq.judge()) === 'Portrait') {
      this.elem.style.height = this.winsize.height()
      this.elem.style.width = 'auto'
    }
    else if (this.mq.judge() === 'SP' && this.ratio.get(this.mq.judge()) === 'Landscape') {
      this.elem.style.height = this.winsize.height()
      this.elem.style.width = 'auto'
    }
    else if (this.mq.judge() === 'SP' && this.ratio.get(this.mq.judge()) === 'Portrait') {
      this.elem.style.height = 'auto'
      this.elem.style.width = this.winsize.width()
    }
  }
}
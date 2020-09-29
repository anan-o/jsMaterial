/**
 * @class GetRatio
 * @description 縦横比の取得
 */

import winsize from './GetWindowSize'

export default class GetRatio {
  constructor() {
    this.winsize = new winsize()
  }
  get(devise) {
    let ratio
    switch (devise) {
      case 'PC':
        ratio = 16 / 9
        break;
      case 'SP':
        ratio = 1124 / 2436
        break;
      default:
        break;
    }
    return this.winsize.width() / this.winsize.height() > ratio ? 'Landscape' : 'Portrait'
  }
}

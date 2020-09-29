/**
 * @class Anchor
 * @description アンカーするJS
 */

import Jump from 'jump.js'
import CE from '../events/CustomEvents'
import DE from '../events/DispatchEvents'

export default class Anchor {
  constructor(el) {
    /**
     * @constructor
     * @class [this.CE]
     * @classdesc eventをDispatchするときのeventを管轄してる。
     *
     * @class[this.DE]
     * @classdesc eventをDispatchするjs
     *
     * @param {HTMLElement} this.el - アンカーを設定するDOM
     * @param {Number} this.speed - アンカーのスピード(ms)
     */
    this.CE = new CE()
    this.DE = new DE()
    this.el = el
    this.speed = 500

    this.eventBinds()
  }

  /**
   * @method eventBinds
   * @desc eventをbindる
   */
  eventBinds() {
    this.el.addEventListener('click', () => {
      this.act(this.el.dataset.target)
    })
  }

  /**
   * @async act
   * @desc 指定のアクション実行後、カスタムイベントを発火
   * @param {String} target - アンカー先のクラス名
   */
  async act(target) {
    await this.toTarget(target)
    await this.DE.add(this.CE.ANCHOR_MOVED)
  }

  /**
   * @method toTarget
   * @desc jump.jsを用いてアンカーアニメーションを行う 終了後はカスタムイベントを返す
   * @param {String} target - アンカー先のクラス名
   * @return {String} カスタムイベントの文字列
   */
  toTarget(target) {
    return new Promise(resolve => {
      Jump(target, {
        duration: this.speed,
        callback: () => {resolve(this.CE.ANCHOR_MOVED)}
      })
    })
  }
}

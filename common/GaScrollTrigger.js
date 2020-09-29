/**
 * @class GaScrollTrigger
 * @description 読了率図る系のGAで使うjs
 */

export default class GaScrollTrigger {
  constructor(elem) {
    /**
     * @type {HTMLElement} - 計測する際に区切るエリア data-gatargetの中にはgaで読み取るための文字列を設置する
     */
    this.chkPoint = elem.querySelectorAll('[data-gatarget]')

    this.init()
  }
  /**
   * @function
   * this.chkPoinをobject型に再構築
   */
  init() {

    /**
     * @type {object} 計測する際に区切るエリア data-gatargetの中にはgaで読み取るための文字列を設置する
     * @prop {string} value 該当エレメントのGAで使うラベル名
     * @prop {HTMLElement} elem 該当のエレメント
     * @prop {flag} boolean 測量自体は一度のみなので一度計測されたら飛ばさないようにするフラグ
     * @prop {number} pos 該当エレメントの下部の位置
     */
    this.chkPoint = Array.from(this.chkPoint).map(elem => ({
      value: elem.dataset.gatarget,
      elem,
      flag: false,
      pos: elem.getBoundingClientRect().bottom,
    }))
    this.event()
  }

  /**
   * @function
   * スクロールしたら発火
   */
  event() {
    window.addEventListener('scroll', this.act.bind(this))
  }

  /**
   * @function
   * スクロールすると発火する
   * アコーディオンなどの影響でサイト全体の高さが変わる可能性があるためスクロールする度に高さは再計測している。
   * 一度のみの計測のため一度発火したらサイド発火できないようにする。
   */
  act() {
    this.chkPoint.forEach(obj => {
      obj['pos'] = obj.elem.getBoundingClientRect().bottom
      if (obj['pos'] <= window.innerHeight && obj.flag === false) {
        obj.flag = true
        gtag('event', location.pathname, {
          'event_category': "読了率",
          'event_label': obj.value,
          'non_interaction': true
        });
      }
    })
  }
}


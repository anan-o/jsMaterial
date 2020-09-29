/**
 * @class ScrollEvents
 * @description
 * オブジェクト単位でスクロール判定してフェードインなど一度だけ発火する何かをしたい時に使う.js
 * 参考用にgsapでフェードインする系がコメントアウトで入ってる
 */

// import TweenMax from 'gsap'

export default class ScrollEvents {
  constructor(elem)
  {
    /**
     * @type {HTMLElement} 対象のエレメント
     */
    this.elem = elem

    /**
     * @type {boolean} 一度だけ発火するためにフラグを用意
     */
    this.flg = false

    /**
     * @type {number} 画面の何%進んだら発火するかの調整 デフォ85%
     */
    this.per = 0.85

    this.bindEvents()
  }

  /**
   * @function
   * スクロールしたら発火
   */
  bindEvents() {
    //初回読み込み時にスクロールしないと表示されず驚きの白さになるのを回避するため一度だけ発火
    this.act()
    // TweenMax.set(this.elem, { opacity: 0, y: 50 })
    window.addEventListener('scroll', this.act.bind(this))
  }

  /**
   * @function
   * 要素の位置を取得して
   * 要件を満たしていればイベントが一度発火する
   */
  act() {
    const topBorder = this.elem.getBoundingClientRect().top
    if (topBorder < window.innerHeight * this.per) {
      if (!this.flg) {
        this.flg = true
        // TweenMax.to(this.elem, 1.5, { opacity: 1, y: 0 })
      }
    }
  }
}
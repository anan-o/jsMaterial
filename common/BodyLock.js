/**
 * @class BodyLock
 * @description 簡易的にjsを止める
 * @todo 現時点ではios/safariでは動かないので高さとるタイプに改修する。
 */

export default class BodyLock {
  constructor() {
    this.body = document.querySelector('body')
  }
  lock() {
    this.body.style.overflow='hidden'
  }
  unlock() {
    this.body.style.overflow = ''
  }
}
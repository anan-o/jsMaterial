/**
 * @class Iechk
 * @description IEを使用しているかどうかのだし分け
 */

export default class Iechk {
  chk() {
    return document.documentMode !== undefined ? true : false
  }
}

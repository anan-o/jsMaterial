/**
 * @class Mq
 * @description jsでメディアクエリを定義し出し分ける。
 */

export default class Mq {
  constructor() {
    this.BLAKE_POINT = 'screen and (min-width: 768px)'
  }
  judge() {
    return matchMedia(this.BLAKE_POINT).matches ? 'PC': 'SP'
  }
}
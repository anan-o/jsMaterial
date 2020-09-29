/**
 * @class CustomEvents
 * @description カスタムイベントを登録する
 */

export default class DispatchEvent {
  add(event) {
    window.dispatchEvent(new CustomEvent(event))
  }
}
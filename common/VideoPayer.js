/**
 * @class VideoPlayer
 * @description Youtube埋め込み
 */

import ytPlayer from 'yt-player'

export default class VideoPlayer {
  constructor(elem, { key }) {
    this.ID = key
    this.player = new ytPlayer(elem)
    this.close = Array.from(document.querySelectorAll("[data-roll='modalClose']"))
    this.init()
  }
  init() {
    this.player.load(this.ID)
    this.eventBinds()
  }
  eventBinds() {
    this.close.forEach(btn => {
      btn.addEventListener('click',() => {
        this.player.stop()
      })
    })
  }
}
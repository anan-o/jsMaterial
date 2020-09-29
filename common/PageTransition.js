/**
 * @class PageTransition
 * @description ページ遷移をすぐさせずになんかしてから遷移させる.js
 */

import TweenMax from 'gsap'

export default class PageTransition {
  constructor() {
    this.wrap = document.querySelector('#wp')
    this.init(document.querySelectorAll('a'))
  }
  init(linkPkg) {
    //ページタブ繊維じゃないものをアニメーションさせる
    const links = Array.from(linkPkg).filter(e => e.getAttribute('target') !== '_blank')
    this.eventbinds(links)
  }
  eventbinds(btn) {
    window.addEventListener('load', () => {
      this.loadEvents()
    })
    btn.map(b => {
      b.addEventListener('click', event => {
        event.preventDefault()
        this.act(b.href)
      })
    })
  }
  act(link) {
    TweenMax.to(this.wrap, 0.3, {
      opacity: 0,
      onComplete() {
        window.location.href = link
      }
    })
  }
  loadEvents() {
    TweenMax.to(this.wrap, 0.3, {
      opacity: 1
    })
  }
}
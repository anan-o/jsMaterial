/**
 * @class themaSelector
 * @description スクロール量でクラスが変動する
 */

export default class themaSelector {
  constructor() {
    this.init(document.querySelectorAll('[data-section]'))
    this.wrap = document.querySelector('#wp')

  }
  init(section) {
    this.windowHeight = window.innerHeight
    this.chk_points = this.getPositions(section)
    this.events(section)
  }
  events(section) {
    window.addEventListener('scroll', () => {
      this.judge(window.pageYOffset)
    })
    window.addEventListener('resize', () => {
      this.chk_points = this.getPositions(section)
      this.windowHeight = window.innerHeight
    })
    window.addEventListener('load', () => {
      this.judge(window.pageYOffset)
    })
  }
  judge(pos) {
    this.chk_points.map(obj => {
      if (pos + this.windowHeight / 2 > obj.top && pos + this.windowHeight / 2 < obj.bottom) this.addThema(obj.name)
    })
  }
  addThema(name) {
    this.chk_points.map(obj => {
      name === obj.name ? this.wrap.classList.add(`thema-${obj.name}`) : this.wrap.classList.remove(`thema-${obj.name}`)
    })
  }
  getPositions(items) {
    return items = Array.from(items).map(dom => {
      const top = window.pageYOffset + dom.getBoundingClientRect().top
      const bottom = window.pageYOffset + dom.getBoundingClientRect().bottom
      return {
        name: dom.getAttribute("id"), top, bottom
      }
    })
  }
}
/**
 * @class CookieControll
 * @description Cookieをsetしたりgetしたり
 */

export default class CookieControll {

  /**
   * @function
   * keyに基づいたクッキーを取得する
   *
   * @param {string} key - 取得するクッキーのkey
   * @return {string} keyに紐づいた値
   */
  get(key) {
    let result = []
    const cookies = document.cookie
    if (cookies !== '') {
      const cookieArray = cookies.split(';')
      for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].split('=')
        if (cookie[0].indexOf(key) !== -1) result = decodeURIComponent(cookie[1])
      }
    }
    if (result.length > 0) return result
  }

  /**
   * @function
   * クッキーを焼く
   *
   * @param {string} key - 焼くクッキーのkey
   * @param {any} param -  何を焼くか何入れてもいいけど結局string
   * @param {number} time - 有効期間
   */
  set(key, param, time) {
    let cookies = `${key}=${param};`
    const expire = new Date()
    expire.setTime(expire.getTime() + 1000 * 3600 * 24 * time)
    expire.toGMTString()
    cookies += (time) ? ` path=/; expires=${expire};` : ` path=/;`
    document.cookie = cookies
  }
}
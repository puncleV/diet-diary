export default class Auth {
  static loggedIn () {
    // todo check token on backend
    return localStorage.token
  }

  static login (token) {
    localStorage.token = token
  }

  static logout () {
    delete localStorage.token
    // todo delete session on backend
  }
}

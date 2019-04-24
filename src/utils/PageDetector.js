// detect page by vue route
export default class PageDetector {
  constructor (route) {
    this.route = route
  }

  get isHomePage () {
    return this.route.path === '/'
  }

  get isAboutPage () {
    return this.route.path === '/about'
  }

  get isContactPage () {
    return this.route.path === '/contact'
  }

  get isPostListPage () {
    return this.route.path === '/posts'
  }
}
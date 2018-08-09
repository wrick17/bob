const routes = require('next-routes')

module.exports = routes()
  .add('about', '/about-us')
  .add('home', '/', 'page')
  .add('page', '/:pageId', 'page')
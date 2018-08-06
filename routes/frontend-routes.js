const routes = require('next-routes')

module.exports = routes()
  .add('about', '/about-us')
  .add('home', '/:siteId', 'page')
  .add('page', '/:siteId/:pageId', 'page')
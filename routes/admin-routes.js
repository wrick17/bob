const routes = require('next-routes')

module.exports = routes()
  .add('admin', '/')
  .add('login', '/login')
  .add('website', '/:siteId')
const routes = require('next-routes')

module.exports = routes()
  .add('admin', '/')
  .add('website', '/:siteId')
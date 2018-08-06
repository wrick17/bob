const express = require('express')
const next = require('next')
const routes = require('./routes/frontend-routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express()
    server.use(handler)
    
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    process.exit(1)
  })
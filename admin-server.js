const express = require('express')
const next = require('next')
const routes = require('./routes/admin-routes')
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express()
    server.use(handler)
    server.use(cookieParser())
    
    server.listen(7000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:7000')
    })
  })
  .catch((ex) => {
    process.exit(1)
  })
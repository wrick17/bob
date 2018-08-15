const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'http://api.labyrinth21.com/v1' : 'http://localhost:8080/v1'
}
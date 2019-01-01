const { server } = require('./server_modules/server')
const {port, router} = require('./config')

server({port, router})
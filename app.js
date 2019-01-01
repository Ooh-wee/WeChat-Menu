const { server } = require('./server_modules/server')
const {port, pagePath} = require('./config')

server({port, pagePath})
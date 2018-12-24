let router = (req, res) => {
  const url = require('url')
  let parseUrl = url.parse(req.url).path
  switch(parseUrl){
      case '/favicon.ico':
      return
      default:
      res.writeHead(200, {'Content-type': 'text/plain'})
      res.end(`Hello World ! pathNow is ${parseUrl.split('/')[1]}`)
      break
  }
}

module.exports = {
    router
}
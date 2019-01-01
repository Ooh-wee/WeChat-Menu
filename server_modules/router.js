let router = (req, res) => {
  const url = require('url')
  let parseUrl = url.parse(req.url).path
  let getUrl = '/'
  switch(parseUrl){
      case '/favicon.ico':
      return
      default:
      res.writeHead(200, {'Content-type': 'text/plain'})
      res.end(`Hello World ! PathNow is ${(getUrl = parseUrl.split('/')[1]) == '' ? '/': empUrl}`)
      break
  }
}

module.exports = {
    router
}
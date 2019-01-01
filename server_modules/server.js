const http = require('http')

let showPages = (option = {pathName: '404', mathod: 'GET', pagePath: null}) => {
   let {pathName, mathod, pagePath} = option
   console.log('pagePath: ===> ', pagePath)
   if(pathName == '404'){
       return {data: {}, status: false}
   } else {
       return {data: {}, status: true, option}
   }
}

let router = ({req, res, pagePath}) => {
    const url = require('url')
    let parseUrl = url.parse(req.url).path
    let getUrl = parseUrl.split('/')[1]
    switch(getUrl){
        case 'favicon.ico':
        return
        default:
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end(`${JSON.stringify(
            showPages({
                pathName: (getUrl == '' ? 'index': getUrl),
                method: req.method,
                pagePath,
            }))
        }`)
        break
    }
  }


let server = (option = {router: '/', port: 3000}) => {
    let {pagePath, port} = option
    return http.createServer((req, res) => {
        router({req, res, pagePath})
    }).listen(port, (err) => {
        if(!err){
            console.log(`Server start on port ${port}`)
        } else {
            throw `Server start failure ${err}`
        }
    })
}

module.exports = {
    server,
    router
}
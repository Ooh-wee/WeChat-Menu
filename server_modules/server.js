const http = require('http')
const path = require('path')

function titleCase5(str) {  
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());  
}  


let showPages = (option = {pathName: '404'}) => {
   let {pathName, method, pagePath, errorRes} = option
   switch(pathName){
     case 404:
     return errorRes
     default:

     let getPage = path.resolve(__dirname, pagePath)   
     console.log(`method.toLowerCase() + titleCase5(pathName) ===> `, method.toLowerCase() + titleCase5(pathName))
     let data = require(getPage)[method.toLowerCase() + titleCase5(pathName)] 
     if(data)
      return {data: data(), status: true}
     else 
     console.log('Path error !')
     return errorRes
   }
}

let router = options => {
    let {req, res, config} = options
    const url = require('url')
    let parseUrl = url.parse(req.url).path
    let getUrl = parseUrl.split('/')[1]
    switch(getUrl){
        case 'favicon.ico':
        return
        default:
        res.writeHead(200, {'Content-type': 'text/plain'})
        let showPageRes = showPages(
            Object.assign(config, {
            pathName: (getUrl == '' ? 'index': getUrl),
            method: req.method,
            })
        )
        res.end(`${JSON.stringify(showPageRes)}`)
        break
    }
  }


let server = (config = {router: '/', port: 3000}) => {
    return http.createServer((req, res) => {
        router(Object.assign({config}, {req, res}))
    }).listen(config.port, (err) => {
        if(!err){
            console.log(`Server start on port ${config.port}`)
        } else {
            throw `Server start failure ${err}`
        }
    })
}

module.exports = {
    server,
    router
}
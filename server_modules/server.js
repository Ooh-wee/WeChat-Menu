const http = require('http')
const path = require('path')

function titleCase5(str) {  
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());  
}  


let showPages = (option = {pathName: '404'}) => {
   let {pathName, method, pagePath} = option
   if(pathName == 404){
       return {data: {}, status: false}
   } else {
       let getPage = path.resolve(__dirname, pagePath)
       let data = require(getPage)[method.toLowerCase() + titleCase5(pathName)]() 
       if(data)
        return {data, status: true, option}
       else 
        data = {}
        return {data, status: false, option}   
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
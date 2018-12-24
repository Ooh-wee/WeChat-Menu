let server = (port = 3000) => {
    const http = require('http')
    return http.createServer((req, res) => {
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end('Hello World !')
    }).listen(port, (err) => {
        if(!err){
            console.log(`Server start on port ${port}`)
        } else {
            throw `Server start failure ${err}`
        }
    })
}

module.exports = {
    server
}
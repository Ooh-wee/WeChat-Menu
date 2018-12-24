const http = require('http')
const { router } =  require('./router')

let server = (port = 3000) => {
    
    return http.createServer((req, res) => {
        router(req, res)
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
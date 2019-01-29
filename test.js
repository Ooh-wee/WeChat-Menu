let {
    dbConnect,
    dbNewCollection
} = require('./server_modules/connect')
const config = require('../config')


// connect mongodb
let test = async() => {
  let res = await dbConnect(config)
  console.log('db success !')
  let newCol = await dbNewCollection(res)
  console.log(newCol)
}    

test();

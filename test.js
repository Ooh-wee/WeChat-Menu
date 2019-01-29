let {
    dbCollection
} = require('./server_modules/connect')
const config = require('./config')


// connect mongodb
let test = async() => {
  let res = await dbCollection(Object.assign(config, {colName: 'test'}))
  console.log(res)
}    

test();

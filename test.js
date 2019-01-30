let {
  dbDeleteOne
} = require('./server_modules/connect')
const config = require('./config')


// connect mongodb
let test = async() => {
  let res = await dbDeleteOne(Object.assign(config, {colName: 'test', 
    updateBefore: {
      userName: 'zhangsan'
    }
  }))
  console.log(res)
}    

test();

let {
  dbInsertOne
} = require('./server_modules/connect')
const config = require('./config')


// connect mongodb
let test = async() => {
  let res = await dbInsertOne(Object.assign(config, {colName: 'test', insertData: {
    userName: 'yuanjing',
    userPwd: '123'
  }}))
  console.log(res)
}    

test();

let {
  dbSelectOne
} = require('./server_modules/connect')
const config = require('./config')


// connect mongodb
let test = async() => {
  let res = await dbSelectOne(Object.assign(config, {colName: 'test', selectData: {
    userName: 'yuanjing',
    userPwd: '123'
  }}))
  console.log(res)
}    

test();

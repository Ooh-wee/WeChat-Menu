const config = require('./config')

let test = async() => {
  let res = await dbInsertOne(Object.assign(config, {colName: 'test', 
  insertData: {
      userName: 'zhangsan'
    }
  }))
  console.log(res)
}    


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
 
let connect = () => 
    new Promise((reslove, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            err? reject(err): null
            console.log("Success !")
            reslove(db)
        });
    })

let test = async() => {
  let db = await connect()
  console.log('testFun success !')
  db.close()
}    

test();

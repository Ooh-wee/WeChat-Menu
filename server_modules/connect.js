const MongoClient = require('mongodb').MongoClient;


let dbConnect = options => 
    new Promise((reslove, reject) => {
      let {
        dbUrl,
        dbName
      } = options
        MongoClient.connect(dbUrl + dbName, { useNewUrlParser: true }, function(err, db) {
            err? reject(err): null
            console.log("Success !")
            reslove({db, name: dbName})
            db.close()
            // Warning !!! db should close !!!
        });
    })
   
let dbNewCollection = options => 
  new Promise((reslove, reject) => {
    let {
      dbName
    } = options
    db.db(name).createCollection(dbName, function (err, res) {
      err ? reject(err) : null
      reslove(res)
      db.close()
    })
  })   

let dbCollection = options => 
  new Promise((reslove, reject) => {
    let {
      dbUrl,
      dbName,
      colName
    } = options
      MongoClient.connect(dbUrl + dbName, { useNewUrlParser: true }, function(err, db) {
          err? reject(err): null
          console.log("Success !")
          reslove(db.db(colName).collection)
          db.close()
          // Warning !!! db should close !!!
      });
  })

let dbInsert = () => {

} 

let dbDelete = () => {

}

let dbUpdate = () => {

}

let dbSelect = () => {
  
}

module.exports = {
  dbConnect,
  dbNewCollection,
  dbCollection,
  dbInsert,
  dbDelete,
  dbUpdate,
  dbSelect
}    


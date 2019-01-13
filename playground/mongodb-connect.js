// const MongoClient = require('mongodb').MongoClient

    const {MongoClient, ObjectID} = require('mongodb')

// var user = {name: "Manish", age: 19}

// var {name} = user;

console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err)
    {
        return console.log("Unable to connect to the database server")
    }
    console.log("Connected to MongoDb Server")

    // db.collection('Todos').insertOne({
    //     name: "Manish Upadhyaya",
    //     email: "manishupadhyayaofficial@hotmail.com"
    // },(err, result)=>{
    //     if(err){
    //         return console.log("Unable to insert data into the database", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name:"Rockstar Manish",
    //     age: 19,
    //     location: "Silchar"
    // }, (err,result)=>{
    //     if(err)
    //     {
    //         return console.log("Unable to insert data into the Todos collection")
    //     }
    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    db.close()
})
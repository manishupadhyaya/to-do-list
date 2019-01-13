const {
    MongoClient,
    ObjectId
} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log("Unable to connect to the MongoDB Server");
    }
    console.log("Connected to the MongoDB Server")
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5c37472eea05b83714942d70")
    }, {
        $set: {
            name: "YO!"
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    },(result)=>{
        console.log(result)
    })

    db.close();
})
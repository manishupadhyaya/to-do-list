const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err)
    {
        return console.log("Unable to connect to the database server")
    }
    console.log("Connected to MongoDb Server")

    // db.collection('Todos').find({ _id: new ObjectID("5c374b87baeabd5df246cdbc") }).toArray().then((doc)=>{
    //     console.log(JSON.stringify(doc, undefined, 2))
    // },(err)=>{
    //     if(err)
    //     {
    //         console.log("Could not find the data", err);
    //     }
    // })

    
    db.collection('Todos').find().count().then((count)=>{
        console.log("Todos count: ",count)
    },(err)=>{
        if(err)
        {
            console.log("Could not find the data", err);
        }
    })

    db.close()
})
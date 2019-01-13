const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        console.log("Unable to connect to the MongoDB Server");
    }
    console.log("Connected to the MongoDB Server")

    // db.collection('Todos').deleteMany({text: "Eating Dinner"}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     if(err)
    //     {
    //         return console.log("Unable to Delete the required Items");
    //     }
    // })

    // db.collection('Users').findOneAndDelete({_id: new ObjectId('5c374223595d713da82bd486')}).then((result)=>{
    //     console.log(JSON.stringify(result, undefined, 2))
    // },(err)=>{
    //     console.log("Couldn't find the data to be deleted");
    // })

    db.collection('Users').findOneAndUpdate({_id: 12345},{name:"Manish"},(result)=>{
        console.log("Updated data successfully:\n",result);
    },(err)=>{
        if(err)
        {
            return console.log("Could'nt Update data in the database");
        }
    })

    db.close();
})
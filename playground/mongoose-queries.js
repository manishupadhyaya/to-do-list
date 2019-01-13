var {ObjectId} = require('mongodb')
var {mongoose} = require('./../server/db/mongoose')
var {Todo} = require('./../server/models/todo')
var {User} = require('./../server/models/user')

// var id = '5c38a96a9d9cba04165c6e11'

// if(ObjectId.isValid(id))
// {
//     console.log("Id is valid")
// }
// else
// {
//     console.log("Id is not valid")
// }

// Todo.find({
//     _id: id
// }).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log("The following error has been duly noted")
// })

// Todo.findOne({
//     _id: id
// }).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log("The following error has been duly noted")
// })

// Todo.findById(id).then((res)=>{
//     if(!res)
//     {
//         return console.log("No todo with the id is found")
//     }
//     console.log(res)
// }).catch((e)=>{
//     console.log(e);
// })

var id = '5c39e61bc3d1c06044f170cb'

if(!ObjectId.isValid(id))
{
    console.log("Id not valid")
}

User.findById(id).then((user)=>{
    if(!user)
    {
        return console.log("No result found for the query")
    }
    console.log('User',JSON.stringify(user, undefined, 2))
}).catch((e)=>{
    console.log(e);
})
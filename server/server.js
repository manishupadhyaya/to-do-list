var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} =require('mongodb')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express()

var port = process.env.PORT || 3000

app.use(bodyParser.json())

// app.post('/todos', (req,res)=>{
      
//     var todo = new Todo({
//         text: req.body.text
//     })

//    todo.save().then((result)=>{
//         res.send(result)
//     },(err)=>{
//         res.status(400).send(err)
//     }) 

// },(err)=>{
//     console.log('Unable to send post request',err)
// })

// app.post('/users', (req,res)=>{
//     var user = new User({
//         email: req.body.email
//     })

//     user.save().then((result)=>{
//         res.send(result)
//     },(err)=>{
//         res.status(400).send(err)
//     })
// })

app.get('/todos',(req,res)=>{
    Todo.find().then((result)=>{
        res.send({result});
    }).catch((e)=>{
        res.status(404).send()
    })
})

// app.get('/todo',(req,res)=>{
//     Todo.findOne({text: "Something to do"}).then((result)=>{
//         res.send(result)
//     },(err)=>{
//         res.send(404).send(err);
//     })
// })

app.get('/todos/:id', (req, res) => {
    var id = req.params.id
    if (!ObjectId.isValid(id)) {
        return res.status(404).send("Invalid Id")
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send("No such id found")
        }
        return res.send(todo)
    })
})

app.listen(PORT,()=>{
    console.log(`App has started on port ${PORT}`)
})
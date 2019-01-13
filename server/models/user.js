var mongoose = require('mongoose')

var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

// var otherUser = new User({
//     email: "yo@gmail.com"
// })

// otherUser.save().then((result)=>{
//     console.log(JSON.stringify(result, undefined, 2))
// },(err)=>{
//     if(err){
//         return console.log("Unable to save data to the database")
//     }
// })

module.exports = {User}
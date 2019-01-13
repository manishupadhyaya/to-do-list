var mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://u2zcewmxgbofn0k:5xBnZAyRoxIq6yo3ujt5@bbb8bpdtss5raps-mongodb.services.clever-cloud.com:27017/bbb8bpdtss5raps')

module.exports = {mongoose}
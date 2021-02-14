const mongoose = require('mongoose')
const Schema = mongoose.Schema
const origin_UrlSchema = new Schema({
   originUrl:{
    type: String,
    required: 'true'
   },
   shortId: {
      type: String,
      required: 'true'
   }
})

module.exports = mongoose.model('origin_URL', origin_UrlSchema)
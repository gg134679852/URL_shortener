const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortIdSchema = new Schema({
  shortId: {
    type: String,
    required: 'true'
  },
  originUrl: {
    type: String,
    required: 'true'
  }
})

module.exports = mongoose.model('shortId', shortIdSchema)
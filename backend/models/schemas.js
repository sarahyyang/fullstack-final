const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    key: {type:String},
    title: {type:String},
    content: {type:String}
})

const Notes = mongoose.model('Notes', noteSchema, 'notes')

module.exports = Notes
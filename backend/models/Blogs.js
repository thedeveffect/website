const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: String, 
    category: String, 
    content: String,
    date: Date
})

const BlogModel = mongoose.model('blogs', BlogSchema)
module.exports = BlogModel
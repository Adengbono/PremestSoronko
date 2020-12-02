const mongoose = require('mongoose');

const useSchema = new mongoose.Schema({
    nameOfAuthor: {type: String, minlenghth: 5, maxlength: 16}, 
    titleOfBook: {type: String, minlenghth: 5, maxlength: 16},
    numberOfPages: {type: Number},
    bookISBN:{type: Number},
    bookLikes:{type:Number}
     
})

const author = mongoose.model('author', userSchema)

module.exports = author
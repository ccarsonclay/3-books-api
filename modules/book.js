const mongoose = reguire('mongoose')
const { Schema } = mongoose 

//Schema
const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String,
})

const Book = mongoose.model('Book', bookSchema);

module.exports 
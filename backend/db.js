const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://soharwardiandco27:xaW7xYyU8m4uyM3R@cluster0.fb1kp.mongodb.net/todos")

const todoScehema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo = mongoose.model('todos', todoScehema)

module.exports = {
    todo
}
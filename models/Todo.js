const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    date: {
        type: String
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
})


module.exports = Todo = mongoose.model("todo", TodoSchema)
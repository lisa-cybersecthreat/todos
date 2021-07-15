const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://lisa:to0968352100@cluster0.5cnyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB is connected...")
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB;
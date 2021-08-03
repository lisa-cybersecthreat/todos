const express = require("express");
// const connectDB = require("./db");
const cors = require("cors");
const mongoose = require("mongoose")
const dotenv = require("dotenv")

// connectDB()

const app= express();
dotenv.config()
// app.use(cors({
//     origin: true,
//     credentials: true
// }))
app.use( (req, res, next) =>{

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'content-type');

    // Set to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    next();// Pass to next layer of middleware
});

app.use(express.json({extended: false}))

app.get("/", (req, res) => { res.send(" heollo world ")})
app.use("/todos", require("./api/todos"));


const PORT = process.env.PORT || 9000
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`server running on *${PORT}`)))
.catch((err) => console.log(err.message))

mongoose.set("useFindAndModify", false)
// app.listen(PORT, () => console.log(`server running on *${PORT}`))
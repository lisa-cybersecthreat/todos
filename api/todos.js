const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
    Todo.find()
    .then( data => res.json(data))
    .then(err => console.log(`err: ${err}`))
})

router.post("/", (req, res) => {
    Todo.create(req.body)
    .then( data => res.json(data))
    .then(err => console.log(`err: ${err}`))
})

router.get("/:id", (req, res) => {
    Todo.findById(req.params.id)
    .then( data => res.json(data))
    .then(err => console.log(`err: ${err}`))
})

router.put("/:id", (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(`update: ${data}`))
    .then(err => console.log(`err: ${err}`))
})

router.delete("/:id", (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
    .then(data => res.json(data))
    .then(err => console.log(`err: ${err}`))
})

module.exports = router;
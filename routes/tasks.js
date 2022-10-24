const express = require('express')

var router = express.Router()

router.get("/", (req , res) => {
    res.send("fetch task from router")
    console.log("get tasks")
})

function fetchTaskFn(req, res) {
    res.send("will fetch tasks from db ?")
    console.log("fetch tasks") 
}

module.exports = router

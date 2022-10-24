const express = require('express')

function fetchTaskFn(req, res) {
    res.send("will fetch tasks from db ?")
    console.log("fetch tasks") 
}

module.exports = { fetchTaskFn }

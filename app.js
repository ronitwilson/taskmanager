const express = require('express')

const app = express()

const port = process.env.PORT || 5000;

app.get('/hello', (req, res) => {
    res.send("task manager app")
    console.log("hello route") }

)

app.get('/api/v1/tasks', (req, res) => {
    res.send("will fetch tasks")
    console.log("fetch tasks") }

)


app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})


console.log('Task Manager App')

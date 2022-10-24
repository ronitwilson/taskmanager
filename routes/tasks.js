const express = require('express')
const contTasks = require('../controllers/tasks')

var router = express.Router()

router.get("/", contTasks.fetchTaskFn)

module.exports = router

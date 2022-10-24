const express = require('express')
const {fetchAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')

var router = express.Router()

router.route('/').get(fetchAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router

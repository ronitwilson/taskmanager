function fetchAllTasks(req, res) {
    res.send("will fetch tasks from db ?")
    console.log("fetch tasks") 
}

function createTask(req, res) {
    res.send("createTask")
}

function getTask(req, res) {
    res.send("get task")
}

function updateTask(req, res) {
    res.send("task updated")
    console.log("fetch tasks") 
}

function deleteTask(req, res) {
    res.send("delete tasks")
    console.log("fetch tasks") 
}

module.exports = {
    fetchAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}

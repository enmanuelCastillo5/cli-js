const { connection } = require('../db')
const Task = require('../models/Task')


const addTask = async (task) => {
    await Task.create(task)
    console.log('Task was created')
    await connection.close()
}


module.exports = {
    addTask
}
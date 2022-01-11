const { connection } = require('../db')
const Task = require('../models/Task')


const addTask = async (task) => {
    await Task.create(task)
    console.log('Task was created')
    await connection.close()
}

const ListTask = async () => {
    const tasks = await Task.find().lean()
    console.table(tasks.map(task => ({
        _id: task._id.toString(),
        title: task.title,
        description: task.description
    })))
    await connection.close()
    process.exit(0)
}

module.exports = {
    addTask,
    ListTask
}
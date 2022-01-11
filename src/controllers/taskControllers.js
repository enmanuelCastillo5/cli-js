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
const DeleteTask = async (_id) => {
    await Task.findByIdAndDelete(_id)
    console.log(`Delete: ${_id}`)
    await connection.close()
}

module.exports = {
    addTask,
    ListTask,
    DeleteTask
}
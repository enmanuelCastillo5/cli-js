const { connection } = require('../db')
const Task = require('../models/Task')


const addTask = async (task) => {
    await Task.create(task)
    console.log('Task was created')
    await connection.close()
}

const findTask = async (text) => {
    const search = new RegExp(text, 'i')
    const tasks = await Task.find({
        $or: [{title: search}, {description: search}]
    })
    if(tasks.length == 0){
        console.log('tasks not found')
        await connection.close()
        process.exit(0)
    }
    console.table({
        id: tasks[0]._id.toString(),
        title: tasks[0].title,
        description: tasks[0].description
    })
    await connection.close()
    process.exit(0)
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
const ListTaskId = async (_id) => {
    const taskId = await Task.findById(_id).lean()
    console.table({
        _id: taskId._id.toString(),
        title: taskId.title,
        description: taskId.description
    })
    await connection.close()
}

const updateTask = async (_id, newTask) => {
   await Task.updateOne({_id}, newTask)
    console.log(`Task Updated: ${_id}}`)
    await connection.close()
}

module.exports = {
    addTask,
    ListTask,
    DeleteTask,
    ListTaskId,
    updateTask,
    findTask
}
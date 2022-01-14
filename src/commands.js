const { program } = require('commander');
const { prompt } = require('inquirer')

const { addTask, ListTask, ListTaskId, DeleteTask, updateTask, findTask } = require('./controllers/taskControllers')

program.version('0.0.1').description('A command line tool for managing Tasks');

const taskQuestions = [
    {
        type: 'input',
        message: 'task Title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'task Description',
        name: 'description'
    }
]

program.command('new ').alias('n').action( async () => {
   const answer = await prompt(taskQuestions)
    addTask(answer)
});

program.command('list').alias('l').action( async () => {
    ListTask()
})

program.command('listId <id>').alias('lid').action( async (_id) => {
    ListTaskId(_id)
})

program.command('find <task>').alias('f').action( async (text) => {
    findTask(text)
})

program.command('del <id>').alias('d').action( async (_id) => {
    DeleteTask(_id)
})

program.command('update <id>').alias('u').action( async (_id) => {
    const answer = await prompt(taskQuestions)
    await updateTask(_id, answer)
})
program.parse(process.argv);
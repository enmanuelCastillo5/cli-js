const { program } = require('commander');
const { prompt } = require('inquirer')

const { addTask, ListTask, DeleteTask } = require('./controllers/taskControllers')

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


program.command('save ').alias('s').action( async () => {
   const answer = await prompt(taskQuestions)
    addTask(answer)
});

program.command('list').alias('l').action( async () => {
    ListTask()
})

program.command('del <id>').alias('d').action( async (_id) => {
    DeleteTask(_id)
})
program.parse(process.argv);
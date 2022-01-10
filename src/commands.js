const { program } = require('commander');
const { prompt } = require('inquirer')

const { addTask } = require('./controllers/taskControllers')

program.version('0.0.1').description('A command line tool for managing Tasks');

program.command('save ').action( async () => {
   const answer = await prompt([
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
    ])
    addTask(answer)
});
program.parse(process.argv);
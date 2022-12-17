import inquirer from "inquirer";
import chalk from "chalk";
type taskType = [{}];
let tasks: taskType = [{}];
let questions = [
    {
        name: "Task Name",
        type: "input",
        message: "Enter a task name",
        validate: ((value:string) => {
            if (value === "") {
                console.log(chalk.redBright(">>>>> Please enter a task name to continue"));
                return false;
            }
            return true;
        })
    },
    {
        name: "Task Description",
        type: "input",
        message: "Enter task description",
    }
]

let questions1 = [
    {
        name: "moreTasks",
        type: "list",
        message: chalk.yellowBright("Do you want to enter more tasks ?"),
        choices: ["Yes, I want to enter another task","No, show me already entered tasks"]
    }
]
function run() {
inquirer.prompt(questions)

.then((answers) => {
    tasks.push(answers);
    return tasks;
})
.then((tasks) => {
    inquirer.prompt(questions1)
    .then((answers) => {
        if (answers.moreTasks === "No, show me already entered tasks") {
            console.table(tasks);
            let msg = chalk.redBright("Please complete the above Todo List ASAP. I can't hold it long enough !");
            console.log(msg);

        }
        else {
            run();
        }
    })
})
}
run();
import inquirer from "inquirer";
import chalk from "chalk";

let questions = [
    {
        name: "operation",
        type: "list",
        message: "Select an operation to perform",
        choices: ["Addition","Subtraction", "Multiplication", "Division", "Modulus"]
    },
    {
        name: "num1",
        type: "input",
        message: "Enter the first number",
        validate: (num1:any) => {
            if (isNaN(num1) || num1 === "") {
                console.log(chalk.redBright("\nError : Not a valid number. Please provide a valid number."));
                
            }
            else {
                return true;
            }
        }
    },
    {
        name: "num2",
        type: "input",
        message: "Enter the second number",
        validate: (num2:any) => {
            if (isNaN(num2) || num2 === "") {
                console.log(chalk.redBright("\nError : Not a valid number. Please provide a valid number."));
            }
            else {
                return true;
            }
        }
    }
]

inquirer.prompt(questions)

.then((answer) => {
    answer.num1 = Number(answer.num1);
    answer.num2 = Number(answer.num2);
    switch(answer.operation) {
        case "Addition": {
            let add:number = ((x, y) => x + y) (answer.num1,answer.num2);
            console.log(`The result is `+ chalk.greenBright(`${add}`));
            break;
        }
        case "Subtraction": {
            let subtract = ((x, y) => x - y) (answer.num1,answer.num2);
            console.log(`The result is `+ chalk.greenBright(`${subtract}`));
            break;
        }
        case "Multiplication": {
            let multiply = ((x, y) => x * y) (answer.num1,answer.num2);
            console.log(`The result is `+ chalk.greenBright(`${multiply}`));
            break;
        }
        case "Division": {
            let divide = ((x, y) => x / y) (answer.num1,answer.num2);
            console.log(`The result is `+ chalk.greenBright(`${divide}`));
            break;
        }
        case "Modulus": {
            let mod = ((x, y) => x % y) (answer.num1,answer.num2);
            console.log(`The result is `+ chalk.greenBright(`${mod}`));
            break;
        }
        default: {
            console.log("Something went wrong");
        }
    } 
})
import inquirer from "inquirer";
import { createSpinner } from 'nanospinner';
import chalk from "chalk";

let set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let userId = "";
for(let i=0; i<=9; i++) {
    let userIdgen = Math.floor(Math.random() * set.length -1) + 1;
    userId += set.charAt(userIdgen);
}

let pin = Math.floor(Math.random() * 8999) + 1000;
console.log(`User Id : ${userId}`);
console.log(`PIN : ${pin}`);

let questions = [
    {
        name: "userIdQuestion",
        type: "input",
        message: "Enter the User Id given above",
        validate: (value:string) => {
            if (value !== userId) {
                console.log(chalk.redBright("\n>>> Incorrect User Id. Please enter again correctly"));
                return false;
            }
            return true;
        }
    },
    {
        name: "pinQuestion",
        type: "input",
        message: "Enter the pin given above",
        validate: (value:string) => {
            if (value) {
                let value1;
                if (value1 = Number(value)) {
                    if (value1 === pin) {
                        return true;
                    }
                    else {
                        console.log(chalk.redBright("\n>>> Incorrect Pin. Please enter again correctly"));
                        return false;
                    }
                }
                else {
                    console.log(chalk.redBright("\n>>> Incorrect Pin. Please enter again correctly"));
                    return false;
                }
            }
            else {
                console.log(chalk.redBright("\n>>> Incorrect Pin. Please enter again correctly"));
                return false;
            }
        }
    }
]

inquirer.prompt(questions)

.then((answers) => {
    function spinners() {
        const spinner = createSpinner();
        let verifyText = chalk.yellowBright("Verifying .... Please wait")
        spinner.start({ text: verifyText, color: 'red' });
        setTimeout(() => {
            let atmText = chalk.greenBright("Atm functionalities unlocked")
            spinner.success({ text: atmText});
            spinner.clear();  
        }, 3000);
    }
    spinners();
})
.then((value) => {
    
    let atmQuestions = [
        {
            name: "selectFunctionality",
            type: "list",
            message: "Please select atm functionality you would like to use",
            choices: ["Available Balance", "Cash Withdrawl", "Funds Transfer"]
        }
    ]

    setTimeout(() => {
        inquirer.prompt(atmQuestions)
    
    .then(() => {
        console.log(chalk.redBright(" >>> Soory its not you ! ATM is out of cash. GoodBye!"));
    })
    }, 3000);
})


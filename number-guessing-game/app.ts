import figlet from "figlet";
import inquirer from "inquirer";
import chalk from "chalk";


console.log(figlet.textSync("Number Guessing Game", 
{
    font: "Big",
}))



let ranNum = Math.floor(Math.random() * 11);

console.log(ranNum);

let q1 = [{
    name: "numQues",
    type: "input",
    message: "Computer has selected a random number between 0 - 10. Guess the number and enter:",
    validate: (num:any) => {
        if (isNaN(num) || num === "") {
            console.log(chalk.redBright("\n<<< Please enter number only. >>>"));
            return false;
        }
        return true;
    }
}];
inquirer.prompt(q1)

.then((answer) => {
    answer.numQues = Number(answer.numQues);
    if (answer.numQues !== ranNum) {
        console.log("Your number does not matches computer number");
        console.log(`Your Number : ${answer.numQues}`);
        console.log(`Computer Number : ${ranNum}`);
    }
    else {
        console.log("Your number matches with the computer number");
    }
})


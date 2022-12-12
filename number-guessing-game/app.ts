import figlet from "figlet";
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { neon, rainbow } from "chalk-animation";


let welcomeMessage = (figlet.textSync("Number Guessing Game", 
{
    font: "Big",
}));
console.log(chalk.blueBright(welcomeMessage));


let ranNum = Math.floor(Math.random() * 11);

// console.log(ranNum);

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
        let winMessage = figlet.textSync("Congrats ! You Win", 
        {
            font: "Big",
        });
        chalkAnimation.neon(winMessage);
        
        setTimeout(() => {
            console.log("");
        }, 5000);
    }
})


import inquirer from "inquirer";

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
                console.log("\nIncorrect User Id. Please enter again correctly");
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
                        console.log("\nIncorrect Pin. Please enter again correctly");
                        return false;
                    }
                }
                else {
                    console.log("\nIncorrect Pin. Please enter again correctly");
                    return false;
                }
            }
            else {
                console.log("\nIncorrect Pin. Please enter again correctly");
                return false;
            }
        }
    }
]

inquirer.prompt(questions)

.then((answers) => {
    console.log("Atm functionalities unlocked");
})

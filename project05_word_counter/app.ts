import inquirer from "inquirer";
let question = [
    {
        name: "text",
        type: "input",
        message: "Enter something to count characters",
        validate: ((value:string) => {
            if (value === "") {
                console.log("Please enter something");
                return false;
            }
            return true;
        })
    }
]

inquirer.prompt(question)

.then((answer) => {
    console.log(answer);
    let value = answer.text;
    console.log(value);
    for (const i of value) {
        if (i === " " || i === "    ") {
            continue;
        }
        else {
            console.log(i);
        }
    }
})
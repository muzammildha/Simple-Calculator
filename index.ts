#! user/bin/env node

import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "FirstNumber"},
    {message: "Enter Second Number", type: "number", name: "SecondNumber"},
    {message: "Select one of the operators", type: "list", name: "operator", choices: ["+", "-", "x", "/", "^"],
    
    },
]);

if (answer.operator === "+"){console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "-"){console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "x"){console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "/"){console.log(answer.FirstNumber / answer.SecondNumber);
} else if (answer.operator === "^"){console.log(answer.FirstNumber ** answer.SecondNumber);
} else {console.log("please enter a valid opertor")}



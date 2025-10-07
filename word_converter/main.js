import inquirer from "inquirer";
let ans = await inquirer.prompt({
    type: "input",
    name: "user_ans",
    message: "please enter your sentence"
});
let result = ans.user_ans.trim().split(" ").length;
console.log(`your words is ${result}`);

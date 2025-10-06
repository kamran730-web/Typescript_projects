import inquirer from "inquirer";
const ans = await inquirer.prompt([{
        type: "number",
        name: "first_number",
        message: "Enter your First Number : "
    },
    {
        type: "number",
        name: "Second_number",
        message: "Enter your Secoond Number : "
    },
    {
        type: "list",
        name: "operators",
        message: "please select operation type",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
if (ans.operators === "addition") {
    console.log(ans.first_number + ans.Second_number);
}
else if (ans.operators === "subtraction") {
    console.log(ans.first_number + ans.Second_number);
}
else if (ans.operators === "multiplication") {
    console.log(ans.first_number + ans.Second_number);
}
else {
    console.log(ans.first_number / ans.Second_number);
}

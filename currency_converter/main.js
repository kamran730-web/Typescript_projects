import inquirer from "inquirer";
let currency_value = {
    PKR: 281.25,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "converting from",
        choices: ["PKR", "UAE", "USD"]
    }, {
        type: "list",
        name: "to",
        message: "converting to",
        choices: ["PKR", "UAE", "USD"]
    }, {
        type: "number",
        name: "amount",
        message: "your amount to convert"
    }
]);
let result = currency_value[ans.to] / currency_value[ans.from] * ans.amount;
console.log(`converted amount : ${Math.floor(result)}`);

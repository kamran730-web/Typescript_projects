import inquirer from "inquirer"
let guess_number:number = Math.floor((Math.random()*5) + 1)

let userinput = await inquirer.prompt({
    type:"number",
    name:"guessed_number",
    message:"Guess a number 1 - 5  : "
})
if(userinput.guessed_number === guess_number){
    console.log("Congratulatons, you guessed correctly.");
    
}else{
    console.log(`try again,correct number is ${guess_number}`);
    
}
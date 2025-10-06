import inquirer from "inquirer";

let my_Balance = 0
let isContinue = true
let pincode = 40776

let passo = await inquirer.prompt({
    type:"number",
    name:"check_password",
    message:"enter the pincode plz: "
})

console.log("Welcome to ATM");
if (passo.check_password === 40776){
    
do {
    let ans = await inquirer.prompt([{
        type:"list",
        name:"list",
        message:"Select Any Option",
        choices:["Deposite","Withdraw","Fast Cash","Balance Check"]
    }])

    // ------------------------------Deposite--------------------------------

    if(ans.list === "Deposite"){
        let ans = await inquirer.prompt({
            type:"number",
            name:"Deposite_amount",
            message:"Please Enter your Amount"
        })
        if(ans.Deposite_amount  > 0){
            my_Balance += ans.Deposite_amount
            
        }
    }
    // ------------------------------Withdraw--------------------------------

    else if(ans.list === "Withdraw"){
        let ans = await inquirer.prompt({
            type:"number",
            name:"Withdraw_amount",
            message:"Please enter your amount"
        })
        if(ans.Withdraw_amount <= my_Balance){
            my_Balance -= ans.Withdraw_amount
            console.log(my_Balance);
            
        }else{
            console.log("not enough money");
            
        }
    }
    // ------------------------------Fast Cash--------------------------------

    else if(ans.list === "Fast Cash"){
        let ans = await inquirer.prompt({
            type:"list",
            name:"Fast_Cash",
            message:"please select one",
            choices:["500","1000","2000"]
        })
        if(ans.Fast_Cash <= my_Balance){
            if(ans.Fast_Cash === "500"){
                my_Balance -= ans.Fast_Cash
                console.log(my_Balance);
                
            }else if(ans.Fast_Cash === "1000"){
                my_Balance -= ans.Fast_Cash
                console.log(my_Balance);


        }else if(ans.Fast_Cash === "2000"){
                my_Balance -= ans.Fast_Cash
                console.log(my_Balance);
    }
        }
    }
// --------------------------check balance----------------------------
    else if(ans.list === "Balance Check"){
        console.log(`your balance is ${my_Balance}`);
        
    }
// --------------------------while balance----------------------------
    let while_ans = await inquirer.prompt({
        type:"confirm",
        name:"condition",
        message:"do you want to continue"
    })
    if(while_ans.condition === false){
        isContinue = false
    }

} while (isContinue);
}else{
    console.log("incorrect password.");
    
}


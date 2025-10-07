import inquirer from "inquirer";
let todo_list :string[] = [];

let while_loop:boolean = true;

while (while_loop === true) {
    // ----------------------------options-------------------------------
    let option = await inquirer.prompt([{
        type:"list",
        name:"check_option",
        message:"select an option",
        choices:["add","remove"]
    }])
     // ----------------------------add-------------------------------
     if(option.check_option === "add"){
        let add_cart = await inquirer.prompt([{
            type:"input",
            name:"add_cart_check",
            message:"write something  to add int the list"
        }])
        if(add_cart.add_cart_check !== " "){
            todo_list.push(add_cart.add_cart_check)
            console.log(todo_list);
        }else{
            console.log("Please write something  to add in the list");
        }
     }
     else if(option.check_option === "remove"){
        let remove_cart = await inquirer.prompt([{
            type:"list",
            name:"remove_cart_check",
            message:"select item to remove",
            choices:todo_list
        }]);
        let index_romove = todo_list.indexOf(remove_cart.remove_cart_check)
        if(index_romove >= 0){
            todo_list.splice(index_romove,1)
            console.log("you  removes: ",remove_cart.remove_cart_check);
            console.log(todo_list);
            
            
        }
     }
     let condition = await inquirer.prompt([{
        type:"confirm",
        name:"user_condition",
        message:"do you want to continue",
        default:true
     }])
     if(condition.user_condition === false){
        while_loop = false
     }
}
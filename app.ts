#! /usr/bin/env node

import inquirer from "inquirer"

let toDo=["Red","Blue","Yellow"]
do{
let res= await inquirer.prompt({
    name:"input", type:"list",
    message: "Choose an Action :",
    choices:["add","update","view","delete"]
})
if(res.input =="add") {
    let user= await inquirer.prompt({
        name:"item" ,type:"input",
        message:"Which item you will like to add ?"
    })
    toDo.push(user.item)
    console.log(toDo)
}

if(res.input == "update"){
    let user= await inquirer.prompt({
        name:"item" ,type:"list",
        message:"Which item you will like to update ?",
        choices:toDo.map(val=>val)
    })
    let updateToDo= toDo.filter(val=>val !== user.item)
    
    let update= await inquirer.prompt({
    name:"item" ,type:"input",
    message:"Enter the Item: "
})
   toDo=[...updateToDo,update.item]
   
}

if(res.input == "delete"){
    let user= await inquirer.prompt({
        name:"del" ,type:"list",
        message:"Which item you will like to update ?",
        choices:toDo.map(val=>val)   
    })
    let todo=toDo.filter(val=>val !== user.del)
    toDo=[...todo]
    console.log(toDo)
}

if(res.input == "view"){
    console.log(toDo)
}
} while(true)

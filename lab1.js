// Student name: Navdeep Kaur
// Student ID: 200488890

// prompt for user choice
let userSelection = prompt("Choose Between Rock(r), Paper(p) or Scissor(s)");
let computerSelection = Math.random();

// printing the user selected output to console
if(userSelection == "r"){
    console.log("User selection => Rock");
}
else if(userSelection == "p"){
    console.log("User selection => Paper");
}
else if(userSelection == "s"){
    console.log("User selection => Scissors");
}
else{
    console.log("Wrong input, only choose between (r,p,s)")
}

// if computer selected paper
if(computerSelection <= 0.34){
    console.log("Computer selection => Paper");
    if(userSelection == 'p'){
        console.log("it's a tie")
    }
    else if(userSelection == 'r'){
        console.log("Computer Wins")
    }
    else if(userSelection == 's'){
        console.log("User Wins")
    }
}
else if(computerSelection <= 0.67){
    console.log("Computer selection => Scissors");
    if(userSelection == 's'){
        console.log("it's a tie")
    }
    else if(userSelection == 'p'){
        console.log("Computer Wins")
    }
    else if(userSelection == 'r'){
        console.log("User Wins")
    }
}

else{
    console.log("Computer selection => Rock");
    if(userSelection == 'r'){
        console.log("it's a tie")
    }
    else if(userSelection == 's'){
        console.log("Computer Wins")
    }
    else if(userSelection == 'p'){
        console.log("User Wins")
    }
}



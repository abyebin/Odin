/*
function computerSelection(){
    let selectio = Math.floor(Math.random()*3);
    switch (selectio){
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors"
    }
}

function playRound(playerSelection,computerSelection){
    let choice = ["rock","paper","scissors"]
    let inNum = choice.indexOf(playerSelection) - choice.indexOf(computerSelection)//0 - 1
    if(inNum === 1 || inNum === -2){
        return ["You Win "+playerSelection+" beats "+computerSelection,1]
    }  
    else if (inNum === -1 || inNum === 2){
        return ["You Lose " + computerSelection+" beats "+ playerSelection,-1]
    }
    else if( inNum === 0){
        return ["Tie",0]
    } 
}

function game(){
    let count = 0
    for (let i = 0; i < 5;i++){
        let p = prompt("Input rock/paper/scissors")
        let compSel = computerSelection()
        let arr = ["rock","paper","scissors"]
        let ply = p.toLowerCase()
        let id = arr.indexOf(ply)
        if(id === -1){
            console.log("Type valid input")

        }
        else{
            let x = playRound(p,compSel)
            console.log(x)
            count+=x[1]
        }
    }
    if(count < 0){
        return "You Lose"
    }
    else if (count > 0){
        return "Congratulation You won"
    }
    else if (count === 0){
        return "Tie"
    }
}
console.log(game())

*/


function computerSelection(){
    let selectio = Math.floor(Math.random()*3);
    let y = ["rock","paper","scissors"]
    return y[selectio]
}

function playRound(playerSelection,computerSelection){
    let choice = ["rock","paper","scissors"]
    let inNum = choice.indexOf(playerSelection) - choice.indexOf(computerSelection)//0 - 1
    if(inNum === 1 || inNum === -2){
        return ["You Win "+playerSelection+" beats "+computerSelection,1]
    }  
    else if (inNum === -1 || inNum === 2){
        return ["You Lose " + computerSelection+" beats "+ playerSelection,-1]
    }
    else if( inNum === 0){
        return ["Tie",0]
    } 
}

function game(){
    let count = 0
    for (let i = 0; i < 5;i++){
        let p = prompt("Input rock/paper/scissors")
        let compSel = computerSelection()
        let arr = ["rock","paper","scissors"]
        let ply = p.toLowerCase()
        let id = arr.indexOf(ply)
        if(id === -1){
            console.log("Type valid input")

        }
        else{
            let x = playRound(p,compSel)
            console.log(x)
            count+=x[1]
        }
    }
    if(count < 0){
        return "You Lose"
    }
    else if (count > 0){
        return "Congratulation You won"
    }
    else if (count === 0){
        return "Tie"
    }
}
console.log(game())



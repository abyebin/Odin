function computerSelection(){
    let r = Math.floor(Math.random()*3+1);
    console.log(r);
    if(r === 1)
        return "rock";
    else if(r === 2)
        return "paper";
    else
        return "scissors";
}

function playerSelection(){
    let n = prompt(" type rock, paper or scissors");

    return n.toLowerCase();
}

function playRound(playerselection, computerselection){
    if(playerselection == computerselection)
        return "tie";

    else if(playerselection=="rock" && computerselection=="scissors")
        return "win";
    else if(playerselection=="scissors" && computerselection=="paper")
        return "win";
    else if(playerselection=="paper" && computerselection=="rock")
        return "win";
    else
        return "lose";
}
let playerselection = playerSelection();
let computerselection = computerSelection();

console.log(playRound(playerselection, computerselection));

function game(){
    let count = 0;
    let x = 0;
    for(let i=0; i<5; i++){
        
        let res = playRound(playerselection, computerselection);
        if(res === "win")
        count++;
        else if(res === "lose")
        x++;
    }

    if(count > x)
        console.log("You win");
    else if(count === x)
        console.log("Tie");
    else
        console.log("Computer win");
}

game();
function computerSelection(){
    let r = Math.floor(Math.random()*3+1);
    if(r === 1)
        return "rock";
    else if(r === 2)
        return "paper";
    else
        return "scissors";
}
console.log(computerSelection());
function playerSelection(){
    let n = prompt(" type rock, paper or scissors");

    return n.toLowerCase();
}

console.log(playerSelection());



function playRound(playerselection, computerselection){
    if(playerselection == computerselection)
        return "Tie";

    else if(playerselection=="rock" && computerselection=="scissors")
        return "You Win";
    else if(playerselection=="scissors" && computerselection=="paper")
        return "You Win";
    else if(playerselection=="paper" && computerselection=="rock")
        return "You Win";
    else
        return "Computer Wins";
}
let playerselection = playerSelection();
let computerselection = computerSelection();
console.log(playRound(playerselection, computerselection));
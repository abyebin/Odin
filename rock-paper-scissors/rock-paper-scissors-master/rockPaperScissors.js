function computerPlay(){
    const id = Math.floor(Math.random()*3);
    let choix = ['rock', 'paper', 'scissors'];
    return choix[id];
}

function playRound(playerSelection, computerSelection){
    let choix = ['rock', 'paper', 'scissors'];
    let a = choix.indexOf(playerSelection) - choix.indexOf(computerSelection);
    // a peut etre egal à: 1 ou -2 en cas de victoire
    if(a === 1 || a === -2){
        return ["You Win! " + playerSelection + " beats " + computerSelection, 1];
    }
    //a peut etre egal à: -1 ou 2 en cas de defaite
    else if(a === -1 || a === 2){
        return ["You Lose! " + computerSelection + " beats " + playerSelection, -1];
    }
    //a est egal a 0 en cas de match nul
    else if(a === 0){
        return ["Tie", 0];
    } 
    
}

function game(){
    let compteur = 0;
    let i = 0;
    while(i < 5){
        let computerSelection = computerPlay();
        let playerSelection = prompt();
        let choix = ['rock', 'paper', 'scissors'];
        let player = playerSelection.toLowerCase();

        let id = choix.indexOf(player);
    
        
        if(id === -1){
                console.log('entrez un choix adéquat');
                
        }
        else{
            let msg = playRound(playerSelection, computerSelection);[0, 1]

            console.log(msg);
            compteur +=  msg[1];
            i++;
        }        
    }

    if(compteur < 0){
        return 'You lose!'
    }
    else if(compteur > 0){
        return 'Congratulation, You Win!'
    }
    else if(compteur === 0){
        return 'Tie!'
    }
}
console.log(game());

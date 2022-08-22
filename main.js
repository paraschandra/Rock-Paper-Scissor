let cScore=0;
let pScore=0;

function getComputerChoice(){
    const bot = ['rock','paper','scissor'];
    return (bot[Math.floor(Math.random()*bot.length)]);
}

function game(player,computer){
    if (player==='rock' && computer==='paper'){
        cScore+=1;
        return ("Bot wins");
    }
    else if (player==='paper' && computer==='rock'){
        pScore+=1;
        return ("You win!");
    }
    else if (player==='scissor' && computer==='rock'){
        cScore+=1;
        return ("Bot wins");
    }
    else if (player==='rock' && computer==='scissor'){
        pScore+=1;
        return ("You win!");
    }
    else if(player==='paper' && computer==='scissor'){
        cScore+=1;
        return ("Bot wins");
    }
    else if (player==='scissor' && computer==='paper'){
        pScore+=1;
        return ("You win!");
    }
    else if (player===computer){
        return ("tied");
    }
    else{
        return ("Invalid input!!!");
    }
}

console.log("Rock | Paper | Scissor");
console.log("__________________________________________");

for (let i=1;i<=5;i++){
    console.log("Player: "+pScore+" Bot: "+cScore);
    console.log("__________________________________________");
    let player = prompt("Enter your choice: ");
    let computer = getComputerChoice();
    console.log(game(player,computer));
    console.log("__________________________________________");
}

if (pScore>cScore){
    console.log("You won the game!!!");
}
else if (pScore===cScore){
    console.log("Game Tied");
}
else{
    console.log("Bot Won the game!!!");
}
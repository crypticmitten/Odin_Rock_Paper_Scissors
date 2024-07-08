
const CHOICES = ["rock","paper","scissors"];
const values = {
    "rock":[1],
    "paper":[2],
    "scissors":[3]};

function choose(){
    let choice = CHOICES[Math.floor(Math.random()*3)];
    return choice
}
console.log("Rock, Paper or Scissors")
var playerscore = 0
var computerscore = 0

function playRound(e){
    const choice = e.target.id;
    const opponent = choose();
    if(!choice){
        return
    }
    console.log(opponent)
    const result = document.getElementById("result");
    result.textContent=opponent;
    if (choice == opponent){
        result.textContent = "Draw";
    }
    else if(values[choice] - values[opponent] == 1 || choice=="rock" && opponent=="scissors"){
        result.textContent = "You Win";
    }
    else{
        result.textContent = "I win";
    }
}

document.addEventListener("click",(e) => playRound(e))
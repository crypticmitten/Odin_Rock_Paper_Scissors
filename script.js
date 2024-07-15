
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

var slideimages = new Array();
slideimages[0] = new Image();
slideimages[0].src = "images/rock.jpeg";
slideimages[1] = new Image();
slideimages[1].src = "images/paper.jpeg";
slideimages[2] = new Image();
slideimages[2].src = "images/scissors.png";

var step = 0
var play = true

function playRound(e){
    const choice = e.target.id;
    let opponent = choose();
    if(!choice){
        return
    }
    console.log(opponent)
    const result = document.getElementById("result");
    if (choice == opponent){
        result.textContent = "Draw";
    }
    else if(values[choice] - values[opponent] == 1 || choice=="rock" && opponent=="scissors"){
        result.textContent = "You Win";
    }
    else{
        result.textContent = "I win";
    }
    play = false;
    document.getElementById("slide").src = slideimages[values[opponent]-1].src
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("reset").style.visibility = 'visible';
    if (choice == "reset"){
        play = true;
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
        document.getElementById("reset").style.visibility = 'hidden';
        document.getElementById("result").textContent = "VS"
    }
}

function slideit(){
    if (play){
        let image = document.getElementById("slide");
        image.src = slideimages[step].src;
        if (step<2){
            step++;
        }
        else{
            step = 0;
        }
    }
    setTimeout("slideit()",500);
}


document.addEventListener("DOMContentLoaded", () => slideit());

document.addEventListener("click",(e) => playRound(e));
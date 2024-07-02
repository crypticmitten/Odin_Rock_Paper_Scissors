
const CHOICES = ["rock","paper","scissors"];

function choose(){
    let choice = CHOICES[Math.floor(Math.random()*3)];
    return choice
}
console.log("Rock, Paper or Scissors")
var playerscore = 0
var computerscore = 0

Object.defineProperty(window,"rock",{
    get: function(){
        let choice = choose();
        if (choice == "rock"){
            console.log("draw");
        }
        else if(choice == "paper"){
            console.log("%cI win! HAHAHA","color:red;");
            computerscore++;
        }
        else{
            console.log("%cYou win",'color:green;');
            playerscore++
        }
        console.log(playerscore,computerscore);
    }
})
Object.defineProperty(window,"paper",{
    get: function(){
        let choice = choose();
        if (choice == "paper"){
            console.log("draw");
        }
        else if(choice == "scissors"){
            console.log("%cI win! HAHAHA","color:red;");
            computerscore++;
        }
        else{
            console.log("%cYou win",'color:green;');
            playerscore++;
        }
        console.log(playerscore,computerscore);
    }
})
Object.defineProperty(window,"scissors",{
    get: function(){
        let choice = choose();
        if (choice == "scissors"){
            console.log("draw");
        }
        else if(choice == "rock"){
            console.log("%cI win! HAHAHA","color:red;");
            computerscore++;
        }
        else{
            console.log("%cYou win",'color:green;');
            playerscore++;
        }
        console.log(playerscore,computerscore);
    }
})
const input = require('readline-sync');

class Game{
    constructor(){
        this.sPrompt = "I am thinking of a number between 1 and 100 ... can you guess it? ";
        // Math.random() returns a number between 0 and 1 ... we round up
        this.nComputer = Math.ceil(Math.random() * 100);
        this.bDone = false;  
    }
    prompt(){
        return this.sPrompt;
    }
    takeATurn(sInput){
        let aResponses = [];
        if(isNaN(sInput)){
            aResponses.push("Please enter a number");
        }else if(sInput > this.nComputer){
            aResponses.push("Too high");
        }else if(sInput < this.nComputer){
            aResponses.push("Too low");
        }else{
            aResponses.push("Correct");
            this.bDone = true;   
        }
        return aResponses;
    }
    isDone(){
        return this.bDone;
    }
}

const oGame = new Game();

while(!oGame.isDone()){
    const sInput = input.question(oGame.prompt());
    console.log(oGame.takeATurn(sInput));
}
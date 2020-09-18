const input = require('readline-sync');

class Game{
    constructor(){
        this.sPrompt = "What are you? ";
    }
    prompt(){
        return this.sPrompt;
    }
    takeATurn(){
        let aResponses = [];
        aResponses.push("I know you are but what am I?");
        return aResponses;
    }
    isDone(){
        return false;
    }
}

const oGame = new Game();

while(!oGame.isDone()){
    const sInput = input.question(oGame.prompt());
    console.log(oGame.takeATurn(sInput));
}
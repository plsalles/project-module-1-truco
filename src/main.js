class Player {
    constructor (){
        this.score = 0;
    }

}

class Game {
    constructor(player1,player2){
        this.cards =   [{card: '4', nipe: 'diamonds', img: '4-diamonds.jpg'},
                        {card: '4', nipe: 'spade', img: '4-spade.jpg'},
                        {card: '4', nipe: 'hearts', img: '4-hearts.jpg'},
                        {card: '4', nipe: 'clubs', img: '4-clubs.jpg'},
                        {card: '5', nipe: 'diamonds', img: '5-diamonds.jpg'},
                        {card: '5', nipe: 'spade', img: '5-spade.jpg'},
                        {card: '5', nipe: 'hearts', img: '5-hearts.jpg'},
                        {card: '5', nipe: 'clubs', img: '5-clubs.jpg'},
                        {card: '6', nipe: 'diamonds', img: '6-diamonds.jpg'},
                        {card: '6', nipe: 'spade', img: '6-spade.jpg'},
                        {card: '6', nipe: 'hearts', img: '6-hearts.jpg'},
                        {card: '6', nipe: 'clubs', img: '6-clubs.jpg'},
                        {card: '7', nipe: 'diamonds', img: '7-diamonds.jpg'},
                        {card: '7', nipe: 'spade', img: '7-spade.jpg'},
                        {card: '7', nipe: 'hearts', img: '7-hearts.jpg'},
                        {card: '7', nipe: 'clubs', img: '7-clubs.jpg'},
                        {card: 'Q', nipe: 'diamonds', img: 'Q-diamonds.jpg'},
                        {card: 'Q', nipe: 'spade', img: 'Q-spade.jpg'},
                        {card: 'Q', nipe: 'hearts', img: 'Q-hearts.jpg'},
                        {card: 'Q', nipe: 'clubs', img: 'Q-clubs.jpg'},
                        {card: 'J', nipe: 'diamonds', img: 'J-diamonds.jpg'},
                        {card: 'J', nipe: 'spade', img: 'J-spade.jpg'},
                        {card: 'J', nipe: 'hearts', img: 'J-hearts.jpg'},
                        {card: 'J', nipe: 'clubs', img: 'J-clubs.jpg'},
                        {card: 'K', nipe: 'diamonds', img: 'K-diamonds.jpg'},
                        {card: 'K', nipe: 'spade', img: 'K-spade.jpg'},
                        {card: 'K', nipe: 'hearts', img: 'K-hearts.jpg'},
                        {card: 'K', nipe: 'clubs', img: 'K-clubs.jpg'},
                        {card: 'A', nipe: 'diamonds', img: 'A-diamonds.jpg'},
                        {card: 'A', nipe: 'spade', img: 'A-spade.jpg'},
                        {card: 'A', nipe: 'hearts', img: 'A-hearts.jpg'},
                        {card: 'A', nipe: 'clubs', img: 'A-clubs.jpg'},
                        {card: '2', nipe: 'diamonds', img: '2-diamonds.jpg'},
                        {card: '2', nipe: 'spade', img: '2-spade.jpg'},
                        {card: '2', nipe: 'hearts', img: '2-hearts.jpg'},
                        {card: '2', nipe: 'clubs', img: '2-clubs.jpg'},
                        {card: '3', nipe: 'diamonds', img: '3-diamonds.jpg'},
                        {card: '3', nipe: 'spade', img: '3-spade.jpg'},
                        {card: '3', nipe: 'hearts', img: '3-hearts.jpg'},
                        {card: '3', nipe: 'clubs', img: '3-clubs.jpg'}];

        this.turns = JSON.parse(JSON.stringify(this.cards));
        this.player1 = player1;
        this.player2 = player2;
        this.round;
        this.turnTie = false;
        this.turnIndex = 0;
        this.roundTurn = [];
        this.roundTurnCards = [];
        this.roundInitialization = true;
        this.cardsPlayed = 0;
        this.cardIndex;
        this.cardPlayer1Played;
        this.cardPlayer2Played;
        this.cardPlayer1Index;
        this.cardPlayer2Index;
        this.rodadaPlayer1Won = 0;
        this.rodadaPlayer2Won = 0;
        this.htmlPlayer1 = "";
        this.htmlPlayer2 = "";
        this.htmlTable = "";
        this.htmlScore = "";
        this.htmlPlayerTurn = "";
        this.htmlTrucoPlayerButtons = "";
        this.whoInitiateTheTurn = this.whoIsTheTurn();
        this.gameFinshed = false;
        this.truco = false;
        this.trucoPlayer1 = false;
        this.trucoPlayer2 = false;
        this.trucoMultiplier = 1;
        this.firstAskTruco = '';
        this.trucoIndex = 1;
        this.responseOnly = false;

        
        

        
         
        
    }

    
    

    whoIsTheTurn = () => {
        let players = ["Player1", "Player2"];
        return players[Math.floor(Math.random() * players.length)];

    }

    turnPlayerCards = () => {
        console.log('turn player cards')
        if(this.playerTurn == "Player1" ){
            document.querySelectorAll('.cards-player2').forEach((card) => {
                card.classList.add('back');
            });
            document.querySelectorAll('.cards-player1').forEach((card) => {
                card.classList.remove('back');
            });
    
        }
        if(this.playerTurn == "Player2" ){
            document.querySelectorAll('.cards-player1').forEach((card) => {
                card.classList.add('back');
            });
            document.querySelectorAll('.cards-player2').forEach((card) => {
                card.classList.remove('back');
            });
    
        }


    }

    newRound = () => {
        this.round = new Round(this.cards,this.roundTurn,this.roundTurnCards);
        this.round.distributeCards();
        this.playerTurn = this.whoInitiateTheTurn;
        this.trucoMultiplier = 1;

       if (this.whoInitiateTheTurn === "Player1"){
            this.whoInitiateTheTurn === "Player2";
        }
        
        if (this.whoInitiateTheTurn === "Player2"){
            this.whoInitiateTheTurn === "Player1";
        }

        this.round.cardsPlayer1.forEach((card,i) => {
            this.htmlPlayer1 += `<div class="cards card${i+1}-player1 cards-player1" style="background: url(images/${card.img}) no-repeat" ></div>`;
        });
      
        this.round.cardsPlayer2.forEach((card,i) => {
            this.htmlPlayer2 += `<div class="cards card${i+1}-player2 cards-player2" style="background: url(images/${card.img}) no-repeat"></div>`;
        });
        
        this.htmlTable += `<div class="cards card-turn" style="background: url(images/${this.round.cardTurn.img}) no-repeat"></div>`;
        this.htmlTable += `<div class="cards back-turn"></div>`;
        
        
        this.htmlScore += `<div class="score-players"><h1>Score Player1: ${this.player1.score}</h1></div>`;
        this.htmlScore += `<div class="score-players"><h1>Score Player2: ${this.player2.score}</h1></div>`;
        this.htmlScore += `<div class="player-turn"><h1>Player Turn: ${this.playerTurn}</h1></div>`;
        
        this.htmlTrucoPlayerButtons += `<div>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer"  id="truco-player1">TRUCO</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="player1-6">6</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="player1-9">9</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="player1-12">12</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="yes-player1">YES</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="no-player1">NO</button>`;
        this.htmlTrucoPlayerButtons += `</div>`;
        this.htmlTrucoPlayerButtons += `<div></div>`;
        this.htmlTrucoPlayerButtons += `<div>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer"  id="truco-player2">TRUCO</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="player2-6">6</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="player2-9">9</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="player2-12">12</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="yes-player2">YES</button>`;
        this.htmlTrucoPlayerButtons += `<button class="cards button-footer disabled"  id="no-player2">NO</button>`;
        this.htmlTrucoPlayerButtons += `</div>`;


        document.querySelector("#player1").innerHTML = this.htmlPlayer1;

        document.querySelector("#player2").innerHTML = this.htmlPlayer2;

        document.querySelector("#cardTurn").innerHTML = this.htmlTable;

        document.querySelector("#score").innerHTML = this.htmlScore;

        document.querySelector("#footer").innerHTML = this.htmlTrucoPlayerButtons;
     
        if(this.playerTurn == "Player1" ){
            document.querySelectorAll('.cards-player2').forEach((card) => {
                
                card.classList.add('back');
            });
                     
        }
        if(this.playerTurn == "Player2" ){
            document.querySelectorAll('.cards-player1').forEach((card) => {
                card.classList.add('back');
            });
                
        }


        document.querySelectorAll(".cards").forEach((card) => {
            card.addEventListener("click", () => {

                if (this.cardsPlayed < 2){  
                    if(this.playerTurn == "Player1"){

                        if(this.truco === false){
                        
                            if(card === document.querySelector('.card1-player1')){
                                
                                this.cardPlayer1Played = this.round.cardsPlayer1[0];
                                this.moveCard(this.cardPlayer1Played,'player1',1);
                                this.cardsPlayed +=1;
                                this.playerTurn = "Player2";
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                             }

                            if(card === document.querySelector('.card2-player1')){
                                
                                this.cardPlayer1Played = this.round.cardsPlayer1[1];
                                this.moveCard(this.cardPlayer1Played,'player1',2);
                                this.cardsPlayed +=1;
                                this.playerTurn = "Player2";
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(card === document.querySelector('.card3-player1')){
                                
                                this.cardPlayer1Played = this.round.cardsPlayer1[2];
                                this.moveCard(this.cardPlayer1Played,'player1',3);
                                this.cardsPlayed +=1;
                                this.playerTurn = "Player2";
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(card === document.querySelector('#truco-player1')){
                                
                                this.truco = true;
                                this.trucoPlayer1 = true;
                                this.firstAskTruco = 'Player1';
                                this.trucoIndex = 3;
                                this.playerTurn = "Player2";
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                
                            }

                            if(this.firstAskTruco === 'Player2' && this.truco === false && this.trucoMultiplier === 3 && card === document.querySelector('#player1-6')){
                                
                                this.truco = true;
                                this.trucoPlayer1 = true;
                                this.playerTurn = "Player2";
                                this.trucoIndex = 6;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                    
                                
                            }

                            if(this.firstAskTruco === 'Player1' && this.truco === false && this.trucoMultiplier === 6 && card === document.querySelector('#player1-9')){

                                this.truco = true;
                                this.trucoPlayer1 = true;
                                this.playerTurn = "Player2";
                                this.trucoIndex = 9;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                    
                          }

                            if(this.firstAskTruco === 'Player2' && this.trucoMultiplier === 9 && card === document.querySelector('#player1-12')){

                                this.truco = true;
                                this.trucoPlayer1 = true;
                                this.playerTurn = "Player2";
                                this.trucoIndex = 12;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                    
                                
                            }

                        }
                    } 
                        
                        if (this.truco === true && this.trucoPlayer1 === false){

                            if(card === document.querySelector('#yes-player1')){
                                this.truco = false;
                                this.trucoPlayer2 = false;
                                
                                if (this.responseOnly === true && this.playerTurn === 'Player1'){
                                    this.responseOnly = false;
                                } else {this.playerTurn = "Player2";}
                                
                                document.querySelector('#yes-player1').classList.add('disabled');
                                document.querySelector('#no-player1').classList.add('disabled');
                                this.updateTrucoMultiplier();
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                
                            }

                            if(this.firstAskTruco === "Player2" && this.trucoIndex === 3 && card === document.querySelector('#player1-6')){
                                
                                this.truco = true;
                                this.trucoPlayer1 = true;
                                this.trucoPlayer2 = false;
                                this.playerTurn = "Player2";
                                this.trucoMultiplier = 3;
                                this.trucoIndex = 6;
                                this.responseOnly = true;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();

                            }

                            if(this.firstAskTruco === "Player1" && this.trucoIndex === 6 && card === document.querySelector('#player1-9')){
                                
                                this.truco = true;
                                this.trucoPlayer1 = true;
                                this.trucoPlayer2 = false;
                                this.playerTurn = "Player2";
                                this.trucoMultiplier = 6;
                                this.trucoIndex = 9;
                                this.responseOnly = false;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(this.firstAskTruco === "Player2" && this.trucoIndex === 9 && card === document.querySelector('#player1-12')){
                                
                                this.truco = true;
                                this.trucoPlayer1 = true;
                                this.trucoPlayer2 = false;
                                this.playerTurn = "Player2";
                                this.trucoMultiplier = 9;
                                this.trucoIndex = 12;
                                this.responseOnly = true;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(card === document.querySelector('#no-player1')){
                                
                                this.player2.score += this.trucoMultiplier;
                                this.truco = false;
                                this.trucoPlayer1 = false;
                                this.trucoPlayer2 - false;
                                this.clearTable();
                                this.generateNewRound();
                             }
                        }
                    }
            
                    if(this.playerTurn == "Player2"){
                       
                        if(this.truco === false){
                        
                            if(card === document.querySelector('.card1-player2')){
                                
                                this.cardPlayer2Played = this.round.cardsPlayer2[0];
                                this.moveCard(this.cardPlayer2Played,'player2',1);
                                this.cardsPlayed +=1;
                                this.playerTurn = "Player1";
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(card === document.querySelector('.card2-player2')){
                               
                                this.cardPlayer2Played = this.round.cardsPlayer2[1];
                                this.moveCard(this.cardPlayer2Played,'player2',2);
                                this.cardsPlayed +=1;
                                this.playerTurn = "Player1";
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(card === document.querySelector('.card3-player2')){
                                
                                this.cardPlayer2Played = this.round.cardsPlayer2[2];
                                this.moveCard(this.cardPlayer2Played,'player2',3);
                                this.cardsPlayed +=1;
                                this.playerTurn = "Player1";
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(card === document.querySelector('#truco-player2') && this.truco === false){

                                this.truco = true;
                                this.trucoPlayer2 = true;
                                this.firstAskTruco = 'Player2';
                                this.trucoIndex = 3;
                                this.playerTurn = "Player1";
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                
                            }

                            if(this.firstAskTruco === 'Player1' && this.truco === false && this.trucoMultiplier === 3 && card === document.querySelector('#player2-6')){
                                
                                this.truco = true;
                                this.trucoPlayer2 = true;
                                this.trucoPlayer1 = false;
                                this.playerTurn = "Player1";
                                this.trucoIndex = 6;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                    
                                
                            }

                            if(this.firstAskTruco === 'Player2' && this.truco === false && this.trucoMultiplier === 6 && card === document.querySelector('#player2-9')){
                                
                                this.truco = true;
                                this.trucoPlayer2 = true;
                                this.trucoPlayer1 = false;
                                this.playerTurn = "Player1";
                                this.trucoIndex = 9;
                                this.responseOnly = false;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                    
                                
                            }

                            if(this.firstAskTruco === 'Player1' && this.trucoMultiplier === 9 && card === document.querySelector('#player2-12')){

                                this.truco = true;
                                this.trucoPlayer2 = true;
                                this.trucoPlayer1 = false;
                                this.playerTurn = "Player1";
                                this.trucoIndex = 12;
                                this.responseOnly = true;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                    
                                
                            }
                        }
                        
                        if (this.truco === true && this.trucoPlayer2 === false){
                            
                            if(card === document.querySelector('#yes-player2')){
                                this.truco = false;
                                this.trucoPlayer1 = false;
                                
                                if (this.responseOnly === true && this.playerTurn === 'Player2'){
                                    this.responseOnly = false;
                                } else {this.playerTurn = "Player1";}

                                document.querySelector('#yes-player2').classList.add('disabled');
                                document.querySelector('#no-player2').classList.add('disabled');
                                this.updateTrucoMultiplier();
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                                
                            }

                            if(this.firstAskTruco === "Player1" && this.trucoIndex === 3 && card === document.querySelector('#player2-6')){

                                this.truco = true;
                                this.trucoPlayer2 = true;
                                this.trucoPlayer1 = false;
                                this.playerTurn = "Player1";
                                this.trucoMultiplier = 3;
                                this.trucoIndex = 6;
                                this.responseOnly = true;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(this.firstAskTruco === "Player2" && this.trucoIndex === 6 && card === document.querySelector('#player2-9')){
                                
                                this.truco = true;
                                this.trucoPlayer2 = true;
                                this.trucoPlayer1 = false;
                                this.playerTurn = "Player1";
                                this.trucoMultiplier = 6;
                                this.trucoIndex = 9;
                                this.responseOnly = false;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(this.firstAskTruco === "Player1" && this.trucoIndex === 9 && card === document.querySelector('#player2-12')){
                                
                                this.truco = true;
                                this.trucoPlayer2 = true;
                                this.trucoPlayer1 = false;
                                this.playerTurn = "Player1";
                                this.trucoMultiplier = 9;
                                this.trucoIndex = 12;
                                this.responseOnly = true;
                                this.updateTrucoButtonsUsingTrucoIndex(this.trucoIndex);
                                this.updatePlayerTurn();
                                this.turnPlayerCards();
                            }

                            if(card === document.querySelector('#no-player2')){

                                this.player1.score += this.trucoMultiplier;
                                this.truco = false;
                                this.trucoPlayer1 = false;
                                this.trucoPlayer2 - false;
                                this.clearTable();
                                this.generateNewRound();
 

                                
                            }
                        }
                    
                    if(this.cardsPlayed === 2){
                        this.checkWhoWinTheTurn();
                    }
                    
                }  
                
            });
        });
        
    }

    updateTrucoButtonsUsingTrucoIndex = (truco) => {

        switch (truco){
            case 3: 
                document.querySelector('#truco-player1').classList.add('disabled');
                document.querySelector('#truco-player2').classList.add('disabled');
                if(this.firstAskTruco === 'Player1'){
                    document.querySelector('#player2-6').classList.remove('disabled');
                    document.querySelector('#yes-player2').classList.remove('disabled');
                    document.querySelector('#no-player2').classList.remove('disabled');
                } else {document.querySelector('#player1-6').classList.remove('disabled');
                        document.querySelector('#yes-player1').classList.remove('disabled');
                        document.querySelector('#no-player1').classList.remove('disabled');           
                }
                
                break;
            case 6:
                if(this.firstAskTruco === 'Player1'){
                    document.querySelector('#player2-6').classList.add('disabled');
                    document.querySelector('#player1-9').classList.remove('disabled');
                    document.querySelector('#yes-player1').classList.remove('disabled');
                    document.querySelector('#no-player1').classList.remove('disabled');
                    document.querySelector('#yes-player2').classList.add('disabled');
                    document.querySelector('#no-player2').classList.add('disabled');


                } else {document.querySelector('#player1-6').classList.add('disabled');           
                        document.querySelector('#player2-9').classList.remove('disabled');
                        document.querySelector('#yes-player2').classList.remove('disabled');
                        document.querySelector('#no-player2').classList.remove('disabled');
                        document.querySelector('#yes-player1').classList.add('disabled');
                        document.querySelector('#no-player1').classList.add('disabled'); }
                break;
            case 9:
                    if(this.firstAskTruco === 'Player1'){
                        document.querySelector('#player1-9').classList.add('disabled');
                        document.querySelector('#player2-12').classList.remove('disabled');
                        document.querySelector('#yes-player2').classList.remove('disabled');
                        document.querySelector('#no-player2').classList.remove('disabled');
                        document.querySelector('#yes-player1').classList.add('disabled');
                        document.querySelector('#no-player1').classList.add('disabled');
    
                    } else {document.querySelector('#player2-9').classList.add('disabled');           
                            document.querySelector('#player1-12').classList.remove('disabled');
                            document.querySelector('#yes-player1').classList.remove('disabled');
                            document.querySelector('#no-player1').classList.remove('disabled');
                            document.querySelector('#yes-player2').classList.add('disabled');
                            document.querySelector('#no-player2').classList.add('disabled'); }
                    break;
            case 12:
                if(this.firstAskTruco === 'Player1'){
                    document.querySelector('#player2-12').classList.add('disabled');
                    document.querySelector('#yes-player1').classList.remove('disabled');
                    document.querySelector('#no-player1').classList.remove('disabled');
                    document.querySelector('#yes-player2').classList.add('disabled');
                    document.querySelector('#no-player2').classList.add('disabled');
                    

                } else {document.querySelector('#player1-12').classList.add('disabled');
                        document.querySelector('#yes-player2').classList.remove('disabled');
                        document.querySelector('#no-player2').classList.remove('disabled');                        
                        document.querySelector('#yes-player1').classList.add('disabled');
                        document.querySelector('#no-player1').classList.add('disabled');           
                }
                break;
        }
    }

    
    
    updateTrucoMultiplier = () => {
        switch (this.trucoMultiplier){
            case 1: 
                this.trucoMultiplier = 3;
                break;
            case 3: 
                this.trucoMultiplier = 6;
                break;
            case 6: 
                this.trucoMultiplier = 9;
                break;
            case 9: 
                this.trucoMultiplier = 12;
                break;
             
        }
    }

    isGameOver = () => {
        if(this.player1.score >= 12 || this.player2.score >= 12){
            return true;
        } else { return false;}

    }

    start = () => {
        
        this.newRound();
       
    }

    moveCard = (card,player,index) => {
        
        let html = "";
        let elem = "";

        html = `<div class="cards table table-players card-table-${player}" style="background: url(images/${card.img}) no-repeat"></div>`;
        document.querySelector(`#table-${player}`).innerHTML = html;
        elem = document.querySelector(`.card${index}-${player}`);
        elem.parentNode.removeChild(elem);
        this.updatePlayerTurn();
    }

    updatePlayerTurn = () => {
        let turn = "";
        let parent = "";
        let updateTurn = document.createElement('div');
        turn = document.querySelector('.player-turn');
        turn.parentNode.removeChild(turn);

        if(!this.gameFinshed === true){
            parent = document.querySelector('#score');
        updateTurn.innerHTML = `<div class="player-turn"><h1>Player Turn: ${this.playerTurn}</h1></div>`;
        parent.appendChild(updateTurn);
        }
        
    }

    removeCardTable = () => {
        const timeoutId = setTimeout(() => {
            let elem = "";
            elem = document.querySelectorAll('.table-players');
            let i = 0;
            while ( i < elem.length){
            elem[i].parentNode.removeChild(elem[i]);
            i++;
            }
            
        }, 1500);

    }

    generateNewRound = () => {
        this.newRound();
            
    }
    clearTable = () => {
        this.htmlPlayer1 = "";
        this.htmlPlayer2 = "";
        this.htmlTable = "";
        this.htmlScore = "";
        this.htmlTrucoPlayerButtons = "";
        this.cardsPlayed = 0;
        this.cardPlayer1Played = "";
        this.cardPlayer2Played = "";
        this.rodadaPlayer1Won = 0;
        this.rodadaPlayer2Won = 0;
        this.turnTie = false;
        let elem = document.querySelectorAll('.cards');
        let i = 0;
        while (i < elem.length){
            elem[i].parentNode.removeChild(elem[i]);
            i++;
        }
        elem = [];
        this.roundTurn = [];
        let score = document.querySelectorAll('.score-players');
        
        
        i = 0;
        while (i < score.length){
            score[i].parentNode.removeChild(score[i]);
            i++;
        }
        
        if(this.whoInitiateTheTurn === "Player1"){
            this.whoInitiateTheTurn = "Player2";
        } else{this.whoInitiateTheTurn = "Player1";}
        


    }

    clearCounters = () => {
        this.cardsPlayed = 0;
        this.cardPlayer1Played = "";
        this.cardPlayer2Played = "";


    }

    compareCards = () => {
        if(this.cardPlayer1Index === 36 || this.cardPlayer1Index === 37 || this.cardPlayer1Index === 38 ||this.cardPlayer1Index === 39 ||this.cardPlayer2Index === 36 || this.cardPlayer2Index === 37 || this.cardPlayer2Index === 38 ||this.cardPlayer2Index === 39){
            if(this.cardPlayer1Index > this.cardPlayer2Index){
                console.log("carta player1 é mais forte");
                return 0;
            } else {console.log("carta player2 é mais forte");
                    return 1;
                }
        }

        if (this.cardPlayer1Played.card === this.cardPlayer2Played.card){
            return 2;
        } else if(this.cardPlayer1Index > this.cardPlayer2Index){
            return 0;
        } else{ return 1;}
            
        
    }
    
    isRoundOver = () => {
        

        if (this.rodadaPlayer1Won ===1 && this.rodadaPlayer2Won===1 && this.turnTie === true){

            if(this.roundTurn[0]="Player1"){
                this.player1.score += 1 * this.trucoMultiplier;
                return true;  
            }
            if(this.roundTurn[0]="Player2"){
                this.player2.score += 1 * this.trucoMultiplier;
                return true;  
            }


        }
        if (this.turnTie === true){
            if(this.rodadaPlayer1Won ===1){
                this.player1.score += 1 * this.trucoMultiplier;
                return true;
            } else if(this.rodadaPlayer2Won ===1){
                this.player2.score += 1 * this.trucoMultiplier;
                return true;
            } else { return false;}

        }
        if (this.rodadaPlayer1Won ===2){
            this.player1.score += 1 * this.trucoMultiplier;
            return true;
        } else if (this.rodadaPlayer2Won === 2){
            this.player2.score += 1 * this.trucoMultiplier;
            return true;
        } else {return false;} 
    }

    checkWhoWinTheTurn = () => {
       
        this.round.bestCards.forEach((element, i) => {
  
                
                if(this.cardPlayer1Played.card === element.card && this.cardPlayer1Played.nipe === element.nipe){
                    this.cardPlayer1Index = i;
                 
                }

                if(this.cardPlayer2Played.card === element.card && this.cardPlayer2Played.nipe === element.nipe){
                    this.cardPlayer2Index = i;
                   
                  }                  
        });

        if (this.compareCards()===0){
            this.rodadaPlayer1Won +=1;
            this.playerTurn = "Player1";
            this.updatePlayerTurn();
            this.roundTurn.push('Player1');
            this.turnPlayerCards();
        }

        if (this.compareCards()===1){
            this.rodadaPlayer2Won +=1;
            this.playerTurn = "Player2";
            this.updatePlayerTurn();
            this.roundTurn.push('Player2');
            this.turnPlayerCards();
        }

        if (this.compareCards()===2){
            this.turnTie = true;
            this.roundTurn.push('Empate');
        }
        

        if (this.isRoundOver()){
            const timeoutId = setTimeout(() => {
                this.clearTable();
                
                if(this.isGameOver()){
                this.terminateGame();
                } else { this.generateNewRound();}
            }, 1500);
        } else {
            this.turnNumber += 1;
            this.clearCounters();
            this.removeCardTable();
        }


        
    }
    
    terminateGame = () => {
        let html = "";
        this.clearTable();
        this.gameFinshed = true;
        this.updatePlayerTurn();
        if(this.player1.score >= 12){
            html += `<div class="winner"><h1>Player 1 won the game</h1></div>`;
            document.querySelector("#table").innerHTML = html;

        }

        if(this.player2.score >= 12){
            html += `<div class="winner"><h1>Player 2 won the game</h1></div>`;
            document.querySelector("#table").innerHTML = html;

        }



    }

}

class Round {
    constructor(cards,roundTurn,roundTurnCards){
        this.cards = JSON.parse(JSON.stringify(cards));
        this.cardsPlayer1 = [];
        this.cardsPlayer2 = [];
        this.bestCards = JSON.parse(JSON.stringify(cards));
        this.cardTurn;
        this.turnCards = JSON.parse(JSON.stringify(this.cards));
        this.shuffledCards;
        this.turnIndex = this.turnIndex;
        this.turn1Winner;
        this.turn2Winner;
        this.turn3Winner;
        this.round;
        this.roundTurn = roundTurn;
        this.roundTurnCards = roundTurnCards;
        
    }

    suffledCards = (array) => {
        let arrayCards = JSON.parse(JSON.stringify(array));   
        var m = array.length, t, i;

  // While there remain elements to shuffle…
        while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = arrayCards[m];
        arrayCards[m] = arrayCards[i];
        arrayCards[i] = t;
    
        this.shuffledCards = arrayCards;
        }
    }
    distributeCards = () => {
        let index = 0;
        let counter = 0;
        let tempArray = [];
        let htmlPlayer1 = "";
        let htmlPlayer2 = "";
        let round = "";
        this.turnIndex = 0;
        
        while (counter <3){
            index = Math.floor(Math.random() * this.turnCards.length);
            this.cardsPlayer1.push(this.turnCards[index]);
            this.turnCards.splice(index,1);
            index = Math.floor(Math.random() * this.turnCards.length);
            this.cardsPlayer2.push(this.turnCards[index]);
            this.turnCards.splice(index,1);
            counter += 1; 
        }
      
        index = Math.floor(Math.random() * this.turnCards.length);
        this.cardTurn = this.turnCards[index];
        this.turnCards.splice(index,1);
        
        
        if (this.cardTurn.card === '2' || this.cardTurn.card === '3'){
          if (this.cardTurn.card === '3'){
            tempArray.push(this.bestCards[0])
            tempArray.push(this.bestCards[1])
            tempArray.push(this.bestCards[2])
            tempArray.push(this.bestCards[3])
            this.bestCards.splice(0,4);
                
            
            tempArray.forEach(element => {
                this.bestCards.push(element);  
            });
          }
        } else {
            for(let i = 0; i < this.cards.length-4; i++){
              if (this.cards[i].card === this.cardTurn.card){
                    
                  tempArray.push(this.bestCards[i+4])
                  tempArray.push(this.bestCards[i+5])
                  tempArray.push(this.bestCards[i+6])
                  tempArray.push(this.bestCards[i+7])
                  this.bestCards.splice(i+4,4);
                  
                  
                  tempArray.forEach(element => {
                    this.bestCards.push(element);  
                  });
                  break;
              }
        
            }
          }

        



        
      }


}

window.addEventListener("load", event => {
    
    document.getElementById('start-button').onclick = () => {
        
        let player1 = new Player();
        let player2 = new Player();
        let game = new Game(player1,player2);
        
        game.start();

        
        
        
        
       

    };
});







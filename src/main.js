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
        this.whoInitiateTheTurn = this.whoIsTheTurn();
        
        

        
         
        
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
        console.log("creating new round")
        this.round = new Round(this.cards,this.roundTurn,this.roundTurnCards);
        this.round.distributeCards();
        console.log(this.round)
        console.log(this.round.cardTurn)
        this.playerTurn = this.whoInitiateTheTurn;


        
        if (this.whoInitiateTheTurn === "Player1"){
            this.whoInitiateTheTurn === "Player2";
        }
        
        if (this.whoInitiateTheTurn === "Player2"){
            this.whoInitiateTheTurn === "Player1";
        }

        this.round.cardsPlayer1.forEach((card,i) => {
            // htmlPlayer1 += `<div class="card" data-card-name="${card.img}">`;
            //this.htmlPlayer1 += `<div class="cards back" name="style="background: url(images/back.jpg) no-repeat""></div>`;
            this.htmlPlayer1 += `<div class="cards card${i+1}-player1 cards-player1" style="background: url(images/${card.img}) no-repeat" ></div>`;
            //htmlPlayer1 += `</div>`;
        });
      
        this.round.cardsPlayer2.forEach((card,i) => {
            
            //htmlPlayer2 += `<div class="card" data-card-name="${card.img}">`;
            //htmlPlayer2 += `<div class="back" name="${card.img}"></div>`;
            this.htmlPlayer2 += `<div class="cards card${i+1}-player2 cards-player2" style="background: url(images/${card.img}) no-repeat"></div>`;
            //htmlPlayer2 += `</div>`;
        });
        
        this.htmlTable += `<div class="card-turn" style="background: url(images/${this.round.cardTurn.img}) no-repeat"></div>`;
        this.htmlTable += `<div class="back-turn"></div>`;
        
        
        this.htmlScore += `<div class="score-players"><h1>Score Player1: ${this.player1.score}</h1></div>`;
        this.htmlScore += `<div class="score-players"><h1>Score Player2: ${this.player2.score}</h1></div>`;
        this.htmlScore += `<div class="player-turn"><h1>Player Turn: ${this.playerTurn}</h1></div>`;
        


        document.querySelector("#player1").innerHTML = this.htmlPlayer1;

        document.querySelector("#player2").innerHTML = this.htmlPlayer2;

        document.querySelector("#cardTurn").innerHTML = this.htmlTable;

        document.querySelector("#score").innerHTML = this.htmlScore;
     


        console.log(document.querySelectorAll('.cards-player2'))

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
                        // document.querySelectorAll('.cards-player2').forEach((card) => {
                        //     card.classList.toggle('back');
                        // });
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
                    }
                    if(this.playerTurn == "Player2"){
                        
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
                    }
                    if(this.cardsPlayed === 2){
                        this.checkWhoWinTheTurn();
                    }
                    
                }  
                
            });
        });
        
    }


    isGameOver = () => {
        if(player1.score === 12 || player2.score === 12){
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

        parent = document.querySelector('#score');
        updateTurn.innerHTML = `<div class="player-turn"><h1>Player Turn: ${this.playerTurn}</h1></div>`;
        parent.appendChild(updateTurn);
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
            
        }, 2000);

    }

    generateNewRound = () => {
        this.newRound();
            
    }
    clearTable = () => {
        this.htmlPlayer1 = "";
        this.htmlPlayer2 = "";
        this.htmlTable = "";
        this.htmlScore = "";
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
        console.log('printing score')
        console.log(score.length)
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
        
        console.log('rodadas player 1 won'+this.rodadaPlayer1Won)
        console.log('rodadas player 2 won'+this.rodadaPlayer2Won)
        if (this.rodadaPlayer1Won ===1 && this.rodadaPlayer2Won===1 && this.turnTie === true){
            console.log(this.roundTurn)
            if(this.roundTurn[0]="Player1"){
                this.player1.score +=1;
                console.log('Player 1 won because won the first turn');
                console.log(this.player1.score)
                return true;  
            }
            if(this.roundTurn[0]="Player2"){
                this.player2.score +=1;
                console.log('Player 2 won because won the first turn');
                console.log(this.player2.score)
                return true;  
            }


        }
        if (this.turnTie === true){
            if(this.rodadaPlayer1Won ===1){
                this.player1.score +=1;
                return true;
            } else if(this.rodadaPlayer2Won ===1){
                this.player2.score +=1;
                return true;
            } else { return false;}

        }
        if (this.rodadaPlayer1Won ===2){
            this.player1.score +=1;
            console.log('player1 ganhou a rodada')
            return true;
        } else if (this.rodadaPlayer2Won === 2){
            this.player2.score +=1;
            console.log('player2 ganhou a rodada')
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
        
        console.log(this.playerTurn)

        if (this.isRoundOver()){
            this.clearTable();
            console.log('teste')
            console.log(this.isGameOver());
            if(!this.isGameOver()){
                this.generateNewRound();
            } else {this.terminateGame();
            }
        } else {
            this.turnNumber += 1;
            this.clearCounters();
            this.removeCardTable();
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
        
        console.log(this.cardTurn)
        
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
                  console.log(this.bestCards)
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







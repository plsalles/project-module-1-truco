class Player {
    constructor (score){
        this.score = score;
    }

}

class Game {
    constructor(arrayCards,arrayTurns){
        this.cards =   [{card: '4', nipe: 'diamonds'},
                        {card: '4', nipe: 'spade'},
                        {card: '4', nipe: 'hearts'},
                        {card: '4', nipe: 'clubs'},
                        {card: '5', nipe: 'diamonds'},
                        {card: '5', nipe: 'spade'},
                        {card: '5', nipe: 'hearts'},
                        {card: '5', nipe: 'clubs'},
                        {card: '6', nipe: 'diamonds'},
                        {card: '6', nipe: 'spade'},
                        {card: '6', nipe: 'hearts'},
                        {card: '6', nipe: 'clubs'},
                        {card: '7', nipe: 'diamonds'},
                        {card: '7', nipe: 'spade'},
                        {card: '7', nipe: 'hearts'},
                        {card: '7', nipe: 'clubs'},
                        {card: 'Q', nipe: 'diamonds'},
                        {card: 'Q', nipe: 'spade'},
                        {card: 'Q', nipe: 'hearts'},
                        {card: 'Q', nipe: 'clubs'},
                        {card: 'J', nipe: 'diamonds'},
                        {card: 'J', nipe: 'spade'},
                        {card: 'J', nipe: 'hearts'},
                        {card: 'J', nipe: 'clubs'},
                        {card: 'K', nipe: 'diamonds'},
                        {card: 'K', nipe: 'spade'},
                        {card: 'K', nipe: 'hearts'},
                        {card: 'K', nipe: 'clubs'},
                        {card: 'A', nipe: 'diamonds'},
                        {card: 'A', nipe: 'spade'},
                        {card: 'A', nipe: 'hearts'},
                        {card: 'A', nipe: 'clubs'},
                        {card: '2', nipe: 'diamonds'},
                        {card: '2', nipe: 'spade'},
                        {card: '2', nipe: 'hearts'},
                        {card: '2', nipe: 'clubs'},
                        {card: '3', nipe: 'diamonds'},
                        {card: '3', nipe: 'spade'},
                        {card: '3', nipe: 'hearts'},
                        {card: '3', nipe: 'clubs'}];
        this.turns = arrayTurns;
        
    }
}

class Round {
    constructor(cards,cardsPlayer1,cardsPlayer2){
        this.cards = cards;
        this.cardsPlayer1 = [];
        this.cardsPlayer2 = [];
        this.bestCards;
        this.cardTurn;
        this.turnCards = [];
        this.shuffledCards;
    }

    suffledCards = (array) => {
        let array = JSON.parse(JSON.stringify(this.Cards));   
        var m = array.length, t, i;

  // While there remain elements to shuffle…
        while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    
        this.shuffledCards = array;
        }
    }
    distributeCards = (cards) => {
        let index = 0;
        let counter = 0;
      
        this.turnCards = JSON.parse(JSON.stringify(cards));  
      
        while (counter < 3){
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
         
        
      
      }

    defineBestCards = () => {

    }
}






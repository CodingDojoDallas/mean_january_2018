function Deck() {
    const self = this;
    this.cards = ["1","2","3","4","5","6","7","8","9","10"];

    this.shuffle = function() {
        var m = this.cards.length, t, i;
          // While there remain elements to shuffle…
          while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
          }
        return this; 
    }
    this.reset = function() {
        this.cards = ["1","2","3","4","5","6","7","8","9","10"];
        return this; 
    }
    this.deal = function() {
        return this.cards.pop(); 
    }
    this.show = function() {
        console.log("Deck: ["+this.cards.join(', ')+"]")
        //console.log(this.cards)
        return this; 
    }
}

function Player(name) {
    const self = this;
    this.name = name;
    this.hand = [];

    this.take = function(deck) {
        this.hand.push(deck.deal());
        return this; 
    }

    this.discard = function(deck) {
        var card = this.hand.pop();
        console.log("Discarting card: " + card);
        deck.cards.push(card);
        return this; 
    }

    this.show = function() {
        console.log(this.name+"'s cards: "+this.hand)
        return this; 
    }
}

console.log("\U+1F0BF")

const deck1 = new Deck();
deck1.show();
deck1.shuffle();
deck1.show();

const player1 = new Player("Joe");
player1.show();
player1.take(deck1).take(deck1).take(deck1).take(deck1).take(deck1);
deck1.show();
player1.show();
player1.discard(deck1).discard(deck1).discard(deck1);
deck1.show();



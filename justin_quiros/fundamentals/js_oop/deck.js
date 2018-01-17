class Deck{
	constructor(){
		this.cards = [1,2,3,4,5,6,7,8,9,10,
		11,12,13,14,15,16,17,18,19,20,21,22,
		23,24,25,26,27,28,29,30,31,32,33,34,
		35,36,37,38,39,40,41,42,43,44,45,46,
		47,48,49,50,51,52]
	}

	shuffle() {
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

	  console.log(this.cards);
	}

	deal(){
		var card = this.cards.pop();
		return(card);
	}

	reset(){
		this.cards = [1,2,3,4,5,6,7,8,9,10,
		11,12,13,14,15,16,17,18,19,20,21,22,
		23,24,25,26,27,28,29,30,31,32,33,34,
		35,36,37,38,39,40,41,42,43,44,45,46,
		47,48,49,50,51,52]
	}
}

class Player{
	constructor(name){
		this.name = name
		this.hand = [] 
	}

	take(deck){
		this.hand.push(deck.deal())
		return this
	}

	show(){
		console.log(this.hand)
	}

	discard(){
		this.hand.pop
		return this
	}
}

const deck1 = new Deck();
console.log(deck1.cards);
const play1 = new Player("Justin")
const play2 = new Player("Corie")
const play3 = new Player("Mike")

deck1.shuffle()
play1.take(deck1).take(deck1).take(deck1).show()
play2.take(deck1).take(deck1).take(deck1).show()
play3.take(deck1).take(deck1).take(deck1).show()
deck1.reset()
console.log(deck1.cards);


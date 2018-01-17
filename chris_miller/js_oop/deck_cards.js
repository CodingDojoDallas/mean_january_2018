class Deck 
{
	constructor()
	{
		const self = this;
		this.values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
		this.suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
		this.deck = [];
		for (var i = 0; i < this.suits.length; i++)
		{
			for ( var j = 0; j < this.values.length; j++)
			{
				var card = {Value: this.values[j], Suit: this.suits[i]}
				this.deck.push(card);
			}
		}
	}
}

Deck.prototype.shuffle = function() {

	var m = this.length, temp, i;

	while(m)
	{
		i = Math.floor(Math.random() * m--)
	}
	
	temp = this.deck[m];
	this.cards[m] = this.cards[i];
	this.cards[i] = temp;

	return this.deck;
};

deck1 = new Deck();
console.log(deck1);
deck1.shuffle();
console.log(deck1);
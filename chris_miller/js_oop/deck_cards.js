class Deck 
{
	constructor()
	{
		const self = this;
		this.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
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

Deck.prototype.shuffle = function(arr) {
	var new_deck = [];
	m = arr.length -1;
	for (var i = 0; i < arr.length, i++)
	{
		var rand = Math.floor(Math.random()*m);
		//swap stuff here
		m--;
	}
};

deck1 = new Deck();
console.log(deck1);
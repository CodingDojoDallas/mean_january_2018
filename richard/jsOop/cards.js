// var deck = new Array();
// var suits = ['Hearts','Diamonds','Spades','Clubs']; 
// var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function Deck(){
    var deck = new Array();
    var suits = ['Hearts','Diamonds','Spades','Clubs']; 
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K','A'];

    for(var i=0; i<suits.length; i++){
        for(var x=0; x<values.length;x++){
            var card = {Value: values[x], Suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}

function shuffle(deck) {
    var m = deck.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
    }
    return deck;
  }

// function (name){
//     this.name = name;
//     this.hand = hand;
// }
function deal(shuffle(deck))
  

console.log(shuffle(Deck()))
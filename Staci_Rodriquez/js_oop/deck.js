//Deck of Cards//

class Deck{
	constructor(){
		this.cards = ["D2","D3","D4","D5","D6","D7","D8","D9","D10","DJ","DQ","DK","DA","H2","H3","H4","H5","H6","H7","H8","H9","H10","HJ","HQ","HK","HA","S2","S3","S4","S5","S6","S7","S8","S9","S10","SJ","SQ","SK","SA","C2","C3","C4","C5","C6","C7","C8","C9","C10","CJ","CQ","CK","CA"]
	}
	shuffle(array){
		var m = array.length, t, i;
		while (m){
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		console.log(array);
		return this;
	}
	reset(array){

	}
	deal(array){
		var h = array.pop();
		console.log(h);
		return this;
	}
}
var d1 = new Deck();
d1.shuffle(d1.cards).deal(d1.cards).deal(d1.cards);
console.log(d1.cards);

class 
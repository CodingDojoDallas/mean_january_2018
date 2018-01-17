class Ninja {
	constructor(name){
		this.name = name;
		this.speed = 3;
		this.strength = 3;
		this.health = 100;
	}

	sayName(){
		console.log(this.name);
		return this;
	}

	showStats(){
		console.log(this.strength);
		console.log(this.speed);
		console.log(this.health);
		return this;
	}

	drinkSake(){
		this.health += 10;
		return this;
	}
}

const ninja1 = new Ninja("Justin")

// ninja1.drinkSake().drinkSake()
// ninja1.showStats()

class Sensei extends Ninja {
	constructor(name){
		super(name);
		this.health = 200;
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	}

	speakWisdom(){
		const wisdom = super.drinkSake();
		console.log("Do not eat yellow snow.");
		return this
	}
}

const sensei1= new Sensei("Corie")

sensei1.speakWisdom().showStats()
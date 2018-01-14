
class ninja {
	constructor(name){
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strenght = 3;
	}

	sayName(){
		console.log("My name is " + this.name);
	}

	showStats(){
		var message = `Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strenght}`;
		console.log(message);
		return this
	}

	drinkSake(){
		this.health += 10;
		return this
	}
}

class sensei extends ninja {
	constructor(name, wisdom){
		super(name);
		this.health = 200;
		this.speed = 10;
		this.strenght = 10;
		this.wisdom = 10;
	}

	speakWisdom() {
		const drink = super.drinkSake();
		console.log("wise quote")
		return this
	}
}

const leidig = new sensei("Master aikido")
leidig.speakWisdom().showStats();
// const daniel = new ninja("daniel");
// daniel.sayName()
// daniel.showStats().drinkSake().showStats()
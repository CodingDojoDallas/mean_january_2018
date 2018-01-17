//Part 1 ES6
class Ninja{
	constructor(name){
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strength = 3;
	}

	sayName(){
		console.log(`My ninja name is ${this.name}!`);
	}

	showStats(){
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
	}

	drinkSake(){
		this.health += 10;
		console.log("My health has increased by 10!");
	}
}

//Part 2 ES6
class Sensei extends Ninja{
	constructor(name){
		super(name)
		this.health = 200;
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	}

	speakWisdom(){
		super.drinkSake();
		console.log("You have done well young grasshopper!");
	}
}

const staci = new Ninja("Staci");
staci.showStats();
staci.sayName();
staci.drinkSake();
staci.showStats();

const master = new Sensei("Master Splinter");
master.speakWisdom();
master.showStats();
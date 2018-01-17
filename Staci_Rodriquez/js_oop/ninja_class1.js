//ES5
function Ninja(name) {
	this.name = name;
	this.health = 100;
	const speed = 3;
	const strength = 3;
	this.showStats = function() {
		console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
	}
}

Ninja.prototype.sayName = function() {
	console.log("My ninja name is " + this.name + "!");
}

Ninja.prototype.drinkSake = function() {
	this.health += 10;
	console.log("My health has increased by 10!");
}

const staci = new Ninja("Staci");
console.log(staci);
staci.showStats();
staci.sayName();
staci.drinkSake();
console.log(staci);
staci.showStats();
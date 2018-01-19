function Ninja(name) {
	this.name = name;
	this.health = 100;
	this.speed = 3;
	this.strength = 3;
}

Ninja.prototype.showStats = function() {
	console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
	return this;
}

Ninja.prototype.sayName = function() {
	console.log("My ninja name is " + this.name + "!");
	return this;
}

Ninja.prototype.drinkSake = function() {
	this.health += 10;
	console.log("My health has increased by 10!");
	return this;
}

Ninja.prototype.punch = function(ninja) {
	if(ninja instanceof Ninja){
		ninja.health -= 5;
		console.log(ninja.name + " was punched by " + this.name + " and lost 5 health!");
		return this;
	}
}

Ninja.prototype.kick = function(ninja) {
	if(ninja instanceof Ninja){
		var lost_health = 15 * this.strength;
		ninja.health -= lost_health;
		console.log(ninja.name + " was kicked by " + this.name + " and lost " + lost_health + " health!");
		return this;
	}
}


const staci = new Ninja("Staci");
staci.showStats().sayName().drinkSake().showStats();

const beast = new Ninja("Beast");
beast.showStats();
staci.punch(beast);
beast.showStats();
staci.kick(beast);
beast.showStats();
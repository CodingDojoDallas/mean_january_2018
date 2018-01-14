function Ninja(name)
{
	const self = this;
	this.speed = 3;
	this.strength = 3;

	this.name = name;
	this.health = 100;

	this.sayName = function()
	{
		console.log(this.name);
	}

	this.showStats = function()
	{
		console.log(this.name);
		console.log("Strength: " + this.strength);
		console.log("Speed: " + this.speed);
		console.log("Health: " + this.health);
	}

	this.drinkSake = function()
	{
		this.health += 10;
	}

}

Ninja.prototype.punch = function(ninja) 
{
	ninja.health -= 5;
};

Ninja.prototype.kick = function(ninja) 
{
	var hit = this.strength * 15;
	ninja.health -= hit;
};



var eric = new Ninja("Eric");
eric.health = 50;
eric.drinkSake();
eric.showStats();
console.log("");

var caleb = new Ninja("Caleb");
caleb.health = 80;
caleb.showStats();
console.log("");

eric.punch(caleb);
caleb.showStats();
console.log("");

eric.kick(caleb);
caleb.showStats();
console.log("");
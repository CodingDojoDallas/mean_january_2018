// ninja_class_3.js

class Ninja
{
	constructor(name, speed = 3, strength = 3, health = 100)
	{
		const self = this;
		this.name = name;
		this.health = health;
		this.speed = speed;
		this.strength = strength;
	}

	sayName()
	{
		console.log(this.name);
	}

	showStats()
	{
		console.log(this.name);
		console.log(`Health: ${this.health}`);
		console.log(`Speed: ${this.speed}`);
		console.log(`Strength: ${this.strength}`);
		console.log("");
	}

	drinkSake()
	{
		this.health += 10;
	}

	smokeOpium()
	{
		this.health -= 10;
	}
}

class Sensei extends Ninja
{
	constructor(name, speed = 10, strength = 10, health = 200, wisdom = 10)
	{
		super(name, speed, strength, health);
		this.wisdom = wisdom;		
	}

	speakWisdom()
	{
		this.drinkSake();
		console.log(`${this.name} says: good ninja does his own dishes.`)
	}
}

eric = new Ninja("Eric", 5, 2);
eric.smokeOpium();
eric.showStats();

caleb = new Ninja("Caleb")
caleb.drinkSake();
caleb.showStats();

matt = new Sensei("Matt");
matt.showStats();
matt.speakWisdom();
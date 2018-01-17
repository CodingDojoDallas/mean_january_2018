function Ninja(name){
	const self = this;
	var speed = 3;
	var strength = 3;

	this.name = name;
	this.health = 100;

	this.sayName = function(){
		console.log(`Hi my name is ${this.name}`);
		return this;
	}

	this.showStats = function(){
		console.log(strength);
		console.log(speed);
		console.log(this.health);
		return this;
	}

	this.drinkSake = function(){
		this.health += 10
		return this;
	}

	this.punch = function(ninj){
		if(ninj instanceof Ninja == True){
			// console.log("I'm here!");
			ninj.health -= 5
			console.log(`${ninj.name} was punched by ${this.name} and lost 5 Health!`);
			return this;
		}

		console.log("The object you punch must be a ninja.");
		return this;
	}

		this.punch = function(ninj){
		if(ninj instanceof Ninja){
			ninj.health -= 5
			console.log(`${ninj.name} was punched by ${this.name} and lost 5 Health!`);
			return this;
		}

		console.log("The object you punch must be a ninja.");
		return this;
	}

	this.kick = function(ninj){
		if(ninj instanceof Ninja){
			ninj.health -= 15 * strength
			console.log(ninj.health);
			return this;
		}

		console.log("The object you kick must be a ninja.");
		return this;
	}
}

function Cat(name){
	this.name = name;
}

const ninja1 = new Ninja("Justin")
const ninja2 = new Ninja("Corie")
const cat1 = new Cat("Freckles")
// ninja1.sayName()
// ninja1.showStats()
// ninja1.drinkSake().showStats()
// ninja1.drinkSake().drinkSake().drinkSake().drinkSake().showStats()

ninja1.kick(cat1)
ninja1.punch(cat1)
// ninja1.kick(cat1)
// ninja2.showStats()
// console.log(cat1 instanceof Ninja)

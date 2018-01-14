
function ninja(name) {

	const ninja = {};

	ninja.name = name;
	ninja.health = 100;
	const speed = 3;
	const strength = 3;

	ninja.sayName = function() {
		console.log("Hello my name is " + name);
		return this
	}

	ninja.showStats = function(){
		console.log("Name: " + name + ", Health: " + ninja.health + ", Speed: " + speed + ", Strength: " + strength);
		return this
		
	}

	ninja.drinkSake = function(){
		ninja.health += 10
		return this
	}

	return ninja;
}

const steve = ninja("steve");
steve.sayName();
steve.showStats().drinkSake().showStats()

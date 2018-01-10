
function ninja(name) {

	const ninja = {}
	
	ninja.name = name;
	ninja.str = 3;

	ninja.punch = function(victim) {
		console.log(victim.name + " was punched by " + ninja.name + " and lost 5 health!");
	}

	ninja.kick = function(victim) {
		console.log(victim.name + " was kicked by " + ninja.name + " and lost " + ninja.str*15 + " health!")
	}

	return ninja;
}

const steve = ninja("steve");
const bob = ninja("bob");
steve.punch(bob);
steve.kick(bob)
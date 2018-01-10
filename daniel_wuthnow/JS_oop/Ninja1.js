
function ninja(name) {

	const ninja = {};

	this.name = name;

	ninja.sayName = function() {
		console.log("Hello my name is " + name)
	}

	return ninja;
}

const steve = ninja("steve")
steve.sayName()
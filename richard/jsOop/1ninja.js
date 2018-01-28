
function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.getSpeed = function() {
        return speed;
    };
    this.getStrength = function() {
        return strength;
    };
}

Ninja.prototype = {
    sayName: function() {
        console.log("My ninja name is", this.name);
    },
    showStats: function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.getSpeed() + ", Strength: " + this.getStrength());
    },
    drinkSake: function() {
        this.health += 10;
        console.log(this.name + " drank some Sake and gained 10 health!");
    }
};

const rich = new Ninja("Rich");
rich.sayName();
rich.showStats();
rich.drinkSake();
rich.showStats();
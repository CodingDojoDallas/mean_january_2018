function Ninja(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
}

Ninja.prototype = {
    sayName: function() {
        console.log("My ninja name is", this.name);
    },
    showStats: function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    },
    drinkSake: function() {
        this.health += 10;
        console.log(this.name + " drank some Sake and gained 10 health!");
    },
    punch: function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 health.");
        }
        else {
            console.log("Ninjas may only punch other ninjas");
        }
    },
    kick: function(ninja) {
        if (ninja instanceof Ninja) {
            var lost_health = 15*this.strength;
            ninja.health -= lost_health;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + lost_health + " health.");
        }
        else {
            console.log("Ninjas may only kick other ninjas");
        }
    }
};

var rich = new Ninja("Rich");
rich.sayName();
rich.showStats();
rich.drinkSake();
rich.showStats();
var other_guy = new Ninja("Other Guy");
rich.punch(other_guy);
other_guy.showStats();
rich.punch([1,2,3]);
rich.punch({'name': 'ninja'});
other_guy.kick(rich);
rich.showStats();
rich.sayName();
rich.showStats();
rich.drinkSake();
rich.showStats();
rich.punch(other_guy);
other_guy.showStats();
rich.punch([1,2,3]);
rich.punch({'name': 'ninja'});
other_guy.kick(rich);
rich.showStats();
other_guy.kick("This shouldn't work");
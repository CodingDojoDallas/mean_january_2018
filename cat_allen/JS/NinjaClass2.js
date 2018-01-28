function Ninja(name){
    var self = this;
    this.name = name
    this.health = 100
    self.speed = 3
    self.strength = 3
}

Ninja.prototype.sayName = function(){
    console.log("My ninja name is " + this.name + "!");
    return this;
}
Ninja.prototype.showStats = function(){
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    return this;
}
Ninja.prototype.punch = function(Ninja){
    Ninja.health -= 5;
    console.log(Ninja.name + " was punched by " + this.name + " and lost 5 Health!");
}
Ninja.prototype.kick = function(Ninja){
    for(i=0; i < Ninja.strength; i++){
        Ninja.health -= 25;
    }
    console.log(Ninja.name + " was kicked by " + this.name + " and lost 15 Health!");
    return this;
}

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
redNinja.showStats();
blueNinja.showStats();
blueNinja.kick(redNinja);
redNinja.showStats();
blueNinja.showStats();
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

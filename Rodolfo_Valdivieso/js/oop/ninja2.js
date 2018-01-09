function Ninja(name) {
    // create a private variable that stores a reference to the new object we create
    const self = this;
    const speed = 3;
    const strength = 3;
    /*const privateMethod = function() {
        console.log("this is a private method for " + self.name);
        console.log(self);
    }*/
    this.name = name;
    this.health = 100;
    this.sayName = function() {
        console.log("My ninja name is " + this.name);
        return this; 
        // we can access our attributes within the constructor!
        //console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
       // privateMethod();
    }
    this.showStats = function() {
        console.log("Name: " + this.name +", Strength: " + strength + ", Speed: " + speed + ", Health: " + this.health);
        return this; 
    }
    this.drinkSake = function() {
        this.health += 10;
        return this; 
    }
    this.punch = function(nin1) {
        if(nin1 instanceof Ninja){
            nin1.health -= 5;
        }
        else{
            console.log("Cannot punch other objects")
        }
        return this; 
    }
    this.kick = function(nin1) {
        if(nin1 instanceof Ninja){
            nin1.health = nin1.health - (15*strength);
            console.log(nin1.name+" was kicked by "+this.name+" and lost "+(15*strength)+" Health!");
        }
        else{
            console.log("Cannot kick other objects")
        }
        return this; 
    }
}

const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Joe");
ninja1.showStats();
ninja2.showStats();

ninja1.punch(ninja2).punch(ninja2);
ninja1.kick(ninja2);
ninja1.showStats();
ninja2.showStats();
ninja1.kick(1);

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
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
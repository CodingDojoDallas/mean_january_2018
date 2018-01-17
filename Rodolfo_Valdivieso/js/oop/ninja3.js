class Ninja {
    constructor(name){
        this.name = name
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    //const self = this;
    sayName(){
        console.log("My ninja name is " + this.name);
        return this; 
    }
    showStats(){
        console.log("Name: " + this.name +", Strength: " + this.strength + ", Speed: " + this.speed + ", Health: " + this.health);
        return this; 
    }
    drinkSake(){
        this.health += 10;
        return this; 
    }
    punch(nin1){
        if(nin1 instanceof Ninja){
            nin1.health -= 5;
        }
        else{
            console.log("Cannot punch other objects")
        }
        return this; 
    }
    kick(nin1){
        if(nin1 instanceof Ninja){
            nin1.health = nin1.health - (15*this.strength);
            console.log(nin1.name+" was kicked by "+this.name+" and lost "+(15*this.strength)+" Health!");
        }
        else{
            console.log("Cannot kick other objects")
        }
        return this; 
    }
}


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;

    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        super.drinkSake();
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

const sensei1 = new Sensei("Master");
sensei1.speakWisdom();
sensei1.showStats();
class Ninja{
    constructor(name){
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log("My ninja name is " + this.name + "!");
        return this;
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log(this.name + " just got drunk and gained 10 Health! Total Health: " + this.health);
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.name = name
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength + ", Wisdom: " + this.wisdom);
        return this;
    }
    senseiSake(){
        const message = super.drinkSake();
        console.log(message);
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }

}
// let Ninja1 = new Ninja('Bill Gates');
// Ninja1.sayName().showStats().drinkSake()

const superSensei = new Sensei("Master Splinter");
superSensei.senseiSake();
superSensi.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName() {
        console.log("My ninja name is", this.name);
    }
    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }
    drinkSake() {
        this.health += 10;
        console.log(this.name + " drank some sake and gained 10 health! He who drinks does not know the dangers of sake; he who doesn’t drink does not know its benefits.");
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Ask a question and you feel shame for a moment. Not asking and not knowing means you will feel shame for your whole life.");
    }
}

const rich = new Ninja("Rich");
rich.sayName();
rich.drinkSake();
rich.showStats();

const wise_man = new Sensei("Wise Old Man");
wise_man.speakWisdom();
wise_man.showStats();
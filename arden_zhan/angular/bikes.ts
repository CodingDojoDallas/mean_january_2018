class Bike {
    public miles: number;
    constructor(
        public price: number,
        public max_speed: number,
    ) {
        this.miles = 0;
    }

    displayInfo = () => {
        console.log("Price:", this.price);
        console.log("Max Speed:", this.max_speed);
        console.log("Total Miles:", this.miles);
    }

    ride = () => {
        console.log("Riding (+10 miles)");
        this.miles += 10;
        return this;
    }

    reverse = () => {
        console.log("Reversing (-5 miles)");
        if (this.miles <= 5) this.miles = 0;
        else this.miles -= 5;
        return this;
    }
}

let bike1 = new Bike(200, 25);
let bike2 = new Bike(100, 20);
let bike3 = new Bike(300, 30);
bike1.ride().ride().ride().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();
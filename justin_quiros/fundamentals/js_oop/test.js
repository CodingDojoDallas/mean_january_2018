// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//   		console.log("You created a Dot!");
//     }
// }
// let dot1 = new Dot(10, 10);


// // Old ES5 way
// function Dot(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Dot.prototype.showLocation = function() {
//     console.log("This Dot is at x " + this.x + " and y " + this.y);
// }
// const dot1 = new Dot(55, 20);
// dot1.showLocation();

// New ES6 way
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
     // prototype method
    showLocation() {
        console.log(`This ${ this.constructor.name } is at x ${this.x} and y ${this.y}`);
    }
    // static method
    static getHelp() {
        console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
    }

    parentFunction(){
        return "This is coming from the parent!";
    }
}
// const dot3 = new Dot(4, 2);
// // we can see showLocation from our instance...
// console.log(dot3.showLocation);
// // but we can't see getHelp
// console.log(dot3.getHelp);
// // however we can call getHelp this way:
// Dot.getHelp();

// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}
// // we can now create Circles
// const circle1 = new Circle(33, 33, 33);
// // same attributes as a Dot, plus a radius
// console.log(circle1);
// // and Circles can access Dot methods
// circle1.showLocation();

const circle = new Circle(1, 2, 3);
circle.childFunction();

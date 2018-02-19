// Debugging TypeScript and ES6

// 1. Setting Types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";

// 2. Setting the types for function parameters
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9"));

// 3. Optional Parameters
function fullName(firstName: string, lastName: string, middleName?: string){
    return firstName + (middleName ? ` ${middleName} ` : " ") + lastName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name? Add question mark in parameters to make optional
console.log(fullName("Jimbo", "Jones"));
 
// 4. Interfaces and function parameters
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

// 5. Classes and function parameters
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string
    ){
        this.fullName = `${firstName} ${lastName}`;
    }

    debug(){
       console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Shane", "Shanelast");;
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing",
    debug(){ console.log("Have to add debug to turing"); }
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));
 
 // 6. Arrow Functions
var increment = x => x + 1;
console.log(increment(3));

var square = x => x * x;
console.log(square(4));

var multiply = (x, y) => x * y;
console.log(multiply(2, 3));

var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
console.log(math(2, 3));

// 7. Arrow functions and 'this'
class Elephant {
    constructor(public age: number){}
    birthday = () => { this.age++; }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
// Something to do with how this is referenced in TypeScript. JS needs extra var _this = this to refer to within same function?
// // the naming convention for Classes and Object Constructors is that they're capitalized and singular
// function Person(name, age) {
//     const privateVariable = "This variable is private";
//     const privateMethod = function() {
//         console.log(this);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// const eliza = new Person("Eliza", 48);
// console.log(eliza.privateVariable);
// // undefined!



// function Person(name, age) {
//     // create a private variable that stores a reference to the new object we create
//     const self = this;
//     const privateVariable = "This variable is private";
//     const privateMethod = function() {
//         console.log("this is a private method for " + self.name);
//         console.log(self);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//         // we can access our attributes within the constructor!
//         console.log("Also my privateVariable says: " + privateVariable)
//         // we can access our methods within the constructor!
//         privateMethod();
//     }
// }
// const joe = new Person("Joe", 23);
// joe.greet();
// function Person(name, age) {
//     // create a private variable that stores a reference to the new object we create
//     const self = this;
//     const privateVariable = "This variable is private";
//     const privateMethod = function() {
//         console.log("this is a private method for " + self.name);
//         console.log(self);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//         // we can access our attributes within the constructor!
//         console.log("Also my privateVariable says: " + privateVariable)
//         // we can access our methods within the constructor!
//         privateMethod();
//     }
// }
// const joe = new Person("Joe", 23);
// joe.greet();

const MyObjConstructor = function(name) {
  const myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function() {
    console.log( "I am a method");
  };
}
const obj1 = new MyObjConstructor('object1');
const obj2 = new MyObjConstructor('object2');
console.log(obj1);

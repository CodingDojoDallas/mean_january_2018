// myNum = 5;
var myNum: number = 5;

// myString = "Hello Universe";
var myString: string = "Hello Universe";

// myArr = [1,2,3,4];
var myArr: number[] = [1,2,3,4];

// myObj = { name:'Bill'};
interface Obj {
    name: string
}
let myObj: Obj = { name: 'Bill' };

// anythingVariable = "Hey";
// anythingVariable = 25; 
var anythingVariable: any = "Hey";
anythingVariable = 25;

// arrayOne = [true, false, true, true];
var arrayOne: boolean[] = [true, false, true, true];

// arrayTwo = [1, 'abc', true, 2];
var arrayTwo: any[] = [1, 'abc', true, 2];

// myObj = { x: 5, y: 10 };
interface Obj2 {
    x: number,
    y: number
}
let myObj2 = {x: 5, y: 10};

// // object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
// myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);

interface NodeInterface{
    val: number, 
    _priv: number,
    doSomething(): void
}
class MyNode implements NodeInterface {
    val: number;
    _priv: number;
    constructor(val: number){
        this.val = 0;
        this.val = val;
    }
    doSomething(): void{
        this._priv = 10;
    }
}
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
// 	throw new Error('Error message');
// }
function myFunction(): void{
    console.log("Hello World");
    return;
}

function sendingErrors(): never{
    throw new Error('Error message');
}
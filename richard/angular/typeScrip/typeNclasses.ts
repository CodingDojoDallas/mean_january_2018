let x: number = 5;

let y: string = "Hello Universe";

let myArray: number[] = [1,2,3,4];

interface Object {
    name?: string,
    x?: number,
    y?: number
};

let myObj: Object = {
    name: 'Bill'
};

let anythingVariable: any = "Hey";
anythingVariable = 25;
let arrayOne: boolean[] = [true, false, true, true];
let arrayTwo: any[] = [1, 'abc', true, 2];
myObj = {
    x: 5,
    y: 10
};

// constructor
interface NodeInterface {
    val: number,
    _priv: number,
    doSomething(): void
}

class MyNode implements NodeInterface {
    val: number;
    _priv: number;
    
    constructor(val) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
}

var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void {
    console.log("Hello World");
    return;
}

function sendingErrors(): never {
    throw new Error('Error message');
}

var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1, 2, 3, 4];
var myObj: any = { name: 'Bill' };
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any[] = [1, 'abc', true, 2];
var myObj: any = { x: 5, y: 10 };


class MyNode {

    private _priv: number;
    val: number;

    constructor(val: number) {
        this.val = val;
    }

    doSomething() {
        this._priv = 10
    }
}

let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);


function myFunction(val: string): void{
    console.log(val);
    return;
}

function sendingErrors(message: string): never{
    throw new Error(message);
}

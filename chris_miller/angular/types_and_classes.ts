var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1, 3, 4, 6]
var myObj: any = { name: 'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: Array<boolean> = [true, false, true, true];
var arrayTwo: Array<any> =[1, 'abc', true, 2];
var myObj: any = { x: 5, y: 10};

class MyNode {
    val: number;
    private priv;
 
    constructor(val) {
        this.val = 0;
		this.val = val;
	}

    doSomething() {
      this.priv = 10;
	}
}

var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(val: string): void{
	console.log("Hello World");
	return;
}

function sendingErrors(): never{
	throw new Error('Error message')
}
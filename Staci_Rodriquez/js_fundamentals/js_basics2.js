//JavaScript Basics II

function magic_multiply(x, y){
	if(x.constructor === Array){
		for(var i = 0; i < x.length; i++){
			x[i] = x[i] * y;
		}
		return x;
	}
	else if(y.constructor === String){
		return "Error: Can not multiply by string";
	}
	else if(x.constructor === String){
		var s = ""
		for(let i = 0; i < y; i++){
			s += x
		}
		return s;
	}
	else{
		x = x * y
		return x;
	}
}

//Test 1
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

//Test 2
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

//Test 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

//Test 4
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

//Test 5 - Bonus
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"
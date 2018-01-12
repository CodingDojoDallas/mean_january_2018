// js_basics_2.js

function magic_multiply(x, y)
{
	if (x.constructor === Array)
	{
		var newArr = [];
		for (var i = 0; i < x.length; i++)
		{
			num = x[i] * y;
			newArr.push(num);
		}
		return newArr;
	}

	else if(x.constructor === String)
	{
		var newString = "";
		for (var i = 0; i < y; i++)
		{
			newString += x;
		}
		return newString;
	}
	else
	{
		z = x*y;
		return z;
	}
}

// Test 1
let test1 = magic_multiply(5, 2);
console.log(test1);

// Test 2
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

// Test 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

// Test 4
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

// Test 5
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"
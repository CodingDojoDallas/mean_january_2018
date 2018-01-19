// In this assignment, complete the function magic_multiply and ensure it passes all the 
// test inputs and matches their results. Modify magic_multiply until all the tests pass. 
// Do not create a new magic_multiply for each test!



function magic_multiply(x, y){
    var result = 0
    if(typeof x==="number"  && typeof y==="number"){
    	result = x*y;
    	if (result == 0){result="All inputs 0"}
    }
    else if(x.constructor === Array && typeof y==="number"){
    	result = [];
    	for (var i=0;i<x.length;i++){
    		result.push(x[i]*y);
    	}
    	
    }
    else if(typeof x==="number" || typeof y==="string"){
    	result="Error, can not multiple by string"
    }
    else if(typeof x==="string" || typeof y==="number"){
    	result =""
    	for (var i=0;i<y;i++){
    		result+=x
    	}
    }
    return result;
}

let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"
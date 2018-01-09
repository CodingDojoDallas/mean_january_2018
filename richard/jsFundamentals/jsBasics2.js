// Assignment: JavaScript Basics II

// In this assignment, complete the function magic_multiply and ensure it passes all the test inputs and matches their results. Modify magic_multiply until all the tests pass. Do not create a new magic_multiply for each test!

function magic_multiply(x, y) {
    var ret;
    if (x == 0 && y == 0) {
        ret = "All inputs 0";
    }
    else if (typeof y === 'string') {
        ret = "Cannot multiply by a string."
    }
    else if (typeof x === 'string') {
        ret = x;
        for (var i = 0; i < y-1; i++) {
            ret += x;
        }
    }
    else if (typeof x === 'number' && typeof y === 'number') {
        ret = x*y;
    }
    else if (Array.isArray(x) && typeof y === 'number') {
    // could also do something like x.constructor == Array
        for (var i = 0; i < x.length; i++) {
            x[i] *= y;
        }
        ret = x;
    }
    return ret;
}
let test1 = magic_multiply(5, 2);
console.log(test1);
let test2 = magic_multiply(0, 0);
console.log(test2);
let test3 = magic_multiply([1,2,3], 2);
console.log(test3);
let test4 = magic_multiply(7, "three");
console.log(test4);
let test5 = magic_multiply("Brendo", 4);
console.log(test5);

// Test 1
// In order to make this test pass, we will need to add logic to magic_multiply. Whenever we call magic_multiply for 5 and 2, the returned result should always be 10. Remember, we must use these specific inputs!

// let test1 = magic_multiply(5, 2);
// console.log(test1);
// => 10

// Test 2
// let test2 = magic_multiply(0, 0);
// console.log(test2);
// => "All inputs 0"

// Test 3
// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);
// => [2, 4, 6]
// Hint: You will need to handle your output differently depending on if x is an array or an integer.

// Test 4
// let test4 = magic_multiply(7, "three");
// console.log(test4);
// => "Error: Can not multiply by string"

// Test 5 - Bonus
// let test5 = magic_multiply("Brendo", 4);
// console.log(test5);
// => "BrendoBrendoBrendoBrendo"
// How could we check if an array is an array?
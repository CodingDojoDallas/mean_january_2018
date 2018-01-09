// Assignment: JavaScript Math
// Complete the below challenges using JavaScript's Math object.

// Math 1
// Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.

// Math 2
// Write a function called is_even(). This function should take an number. Return true if the input number is even, return false if the number is odd.

// Math 3
// Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.

// Math 4
// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.

// Math 5
// Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.

function zero_negativity(arr) {
    ret = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            ret = false;
            break;
        }
    }
    return ret;
}
/*
let test1 = zero_negativity([1,2,3]);
let test2 = zero_negativity([1,2,-3]);
*/
function is_even(num) {
    return num % 2 == 0;
}
/*
let test1 = is_even(5);
let test2 = is_even(6);
*/
function how_many_even(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (is_even(arr[i])) {
            count++;
        }
    }
    return count;
}
/*
let test1 = how_many_even([1,2,3,4,5]);
let test2 = how_many_even([-1,-2,-3,-4,-5,-6]);
*/
function create_dummy_array(num) {
    if (num < 1) { return []; }
    var dummy_array = [];
    for (var i = 0; i < num; i++) {
        let rng = Math.floor(Math.random()*num);
        dummy_array.push(rng);
    }
    return dummy_array;
}
/*
let test1 = create_dummy_array(5);
let test2 = create_dummy_array(0);
*/
function random_choice(arr) {
    if (arr.length < 1) { return null; }
    let rng = Math.floor(Math.random()*arr.length);
    return arr[rng];
}
let test1 = random_choice([]);
let test2 = random_choice([1,2,3,4,5]);
console.log(test1);
console.log(test2);
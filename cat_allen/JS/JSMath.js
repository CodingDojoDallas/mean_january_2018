//Math 1
// Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.


// function zero_negativity(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             return false;
//         }
//     }
//     return true;
// };
// let arr = [0, 5, -7]
// console.log(zero_negativity(arr))

// Math 2
// Write a function called is_even(). This function should take a number. Return true if the input number is even, return false if the number is odd.

// function is_even(num){
//     if(num % 2 == 0){
//         return true;
//     }
//     return false;
// };
// let num = 4
// console.log(is_even(num))

// Math 3
// Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.

// function how_many_even(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i] % 2 == 0){
//             newarr.push(arr[i]);
//         }
//     }
//     console.log(newarr.length);
// };
// let newarr = []
// let arr = [7, 6, 6, 7, 8, 9, 10, 11]
// console.log(how_many_even(arr))

// Math 4
// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.

// let n = 16
// let arr = []
// function create_dummy_array(n){
//     for(let i = 0; i < n; i++){
//         num = Math.floor(Math.random() * 10);
//         arr.push(num);
//     }
//     return arr;
// }
// console.log(create_dummy_array(n))

// Math 5
// Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.

// let arr = [7, 6, 5, "hello", "weirdo", 66, 72]
// function random_choice(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         let num = arr[Math.floor(Math.random() * arr.length)];
//         return num;
//     }
// }
// console.log(random_choice(arr))
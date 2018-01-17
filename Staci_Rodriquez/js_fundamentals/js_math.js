//JavaScript Math

//Math 1
//Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.
function zero_negativity(arr){
	var x = true;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			x = false;
		}
	}
	return x;
}
console.log(zero_negativity([1,2,3,-4]));

//Math 2
//Write a function called is_even(). This function should take an number. Return true if the input number is even, return false if the number is odd.
function is_even(num){
	var y = num % 2;
	if(y == 0){
		return true;
	}
	else{
		return false;
	}
}
console.log(is_even(9));

//Math 3
//Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
function how_many_even(arr){
	var total = 0;
	for(var i = 0; i < arr.length; i++){
		if(is_even(arr[i]) == true){
			total += 1;
		}
	}
	return total;
}
console.log(how_many_even([1,2,3,4,5,6]));

//Math 4
//Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
function create_dummy_array(num){
	var arr = [];
	for(var i = 0; i < num; i ++){
		var z = Math.floor(Math.random() * 10);
		arr.push(z);
	}
	return arr;
}
console.log(create_dummy_array(3));

//Math 5
//Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.
function random_choice(arr){
	var x = Math.floor(Math.random() * arr.length);
	return arr[x];
}
console.log(random_choice([1,2,3,4,5]));
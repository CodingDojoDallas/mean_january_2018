

//Math 1
console.log("******")
function zero_negativity(arr){
	var result = true;
	for (var i=0;i<arr.length;i++){
		if (arr[i]<0){
			result = false;
			break;
		}
	}
	return result;
}
console.log(zero_negativity([1,2,3,4,-5,6]));


//Math 2
console.log("******")
function is_even(number){
	var result = false;
	if (number % 2 === 0){ result=true;}
	return result;
}
console.log(is_even(3));


//Math 3
console.log("******")
function how_many_even(arr){
	var result = 0;
	for (var i=0;i<arr.length;i++){
		if (is_even(arr[i])){
			result += 1;
		}
	}
	return result;
}
console.log(how_many_even([1,1,3,1,5,1]));

//Math 4
console.log("******")
function create_dummy_array(n){
	var result = [];
	for (var i=0;i<n;i++){
		result.push(Math.floor(Math.random() * 10));
	}
	return result;
}
console.log(create_dummy_array(5));

//Math 5
console.log("******")
function random_choice(arr){
	return arr[Math.floor(Math.random() * arr.length)];
}
console.log(random_choice([5551,6661,7773,8881,9995,1]));

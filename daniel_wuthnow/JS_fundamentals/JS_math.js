// function zero_negativity(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i]<0){
// 			console.log(false);
// 		}
// 	}
// }

// zero_negativity([1,-2,-3])

// function is_even(num) {
// 	z = num % 2;
// 	if(z==0){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }


// function how_many_even(arr) {
// 	var count = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if(is_even(arr[i])){
// 			count += 1;
// 		}
// 	}
// 	console.log(count)
// }
// how_many_even([1,2,3,4,5,6])

// function create_dummy_array(n) {
// 	arr = [];
// 	for (var i = 0; i < n; i++) {
// 		
// 		arr.push(z)
// 	}
// 	console.log(arr);
// }
// create_dummy_array(3)

function random_choice(arr) {
	z = Math.floor(Math.random()*arr.length)
	console.log(arr[z])
}

random_choice([1,2,3,4,5,6])
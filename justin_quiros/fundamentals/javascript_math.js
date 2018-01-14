// function zero_negativity(arr){
// 	var noneg = true
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] < 0){
// 			noneg = false;
// 			console.log(noneg);
// 			break;
// 		}
// 	}
// }
// zero_negativity([2,3,-5,6])

// ---------------------------------------------

// function is_even(num){
// 	if(num % 2 == 0){
// 		console.log(true);
// 	}
// 	else{
// 		console.log(false);
// 	}
// }

// is_even(2)

// ---------------------------------------------

// function how_many_even(arr){
// 	var evencount = 0
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] % 2 == 0){
// 			evencount += 1
// 		}
// 	}
// 	console.log(evencount);
// }

// how_many_even([2,4,2,1,1,8])

// ---------------------------------------------

// function create_dummy_array(n){
// 	var newarr = []
// 	for(let i = 0; i < n; i++){
// 		newarr.push(Math.floor(Math.random()*10));
// 	}
// 	console.log(newarr);
// }

// create_dummy_array(4)

// ---------------------------------------------

// function random_choice(arr){
// 	var choice = Math.floor(Math.random()* arr.length);
// 	console.log(arr[choice]);
// }

// random_choice([3,4,2,6])
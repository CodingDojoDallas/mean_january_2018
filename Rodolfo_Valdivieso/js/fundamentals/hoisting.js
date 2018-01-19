//Predict the output of the following snippets. Do not plug these into the interpreter.

console.log(hello);
var hello = 'world';
//--> Prints undefined.


console.log("*****");
var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}
//--> Prints magnet.

console.log("*****");
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//--> Prints super cool

console.log("*****");
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//--> Prints chicken, half-chicken

// console.log("*****");
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
//--> ERROR,mean 

console.log("*****");
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//--> Prints.....


console.log("*****");
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//--> Prints.....

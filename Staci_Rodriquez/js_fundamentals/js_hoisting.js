// JS Hoisting
//Predict the output of the following snippets. Do not plug these into the interpreter.


//1
console.log(hello);
var hello = 'world';
//My Answer: undefined
//Logged: undefined


//2
var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}
//My Answer: no function test 
//Logged: magnet


//3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//My Answer: only okay, super cool
//Logged: super cool


//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//My Answer: chicken, no function eat 
//Logged: chicken, half-chicken


//5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
//My Answer: error no function for mean, chicken, fish
//Logged: ???


//6
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
//My Answer: undefined, rock, r&b, disco
//Logged: undefined, rock, r&b, disco


//7
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
//My Answer: san jose, seattle, burbank, san jose
//Logged: san jose, seattle, burbank, san jose
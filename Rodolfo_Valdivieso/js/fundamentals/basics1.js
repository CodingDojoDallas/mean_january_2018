//Assignment 1 - JavaScript Fundamentals.

//Basic 1
var x = [];
console.log(x);
x.push('coding');
x.push('dojo');
x.push('rocks');
console.log(x);
x.pop();
console.log(x);

//Basic 2
const y = [];
console.log(y);
//y = [6];
y.push(1); //Not possible to change the value of a constant var
console.log(y);

//Basic 3
var z = [9, 10, 6, 5, -1, 20, 13, 2]
for (var i=0; i<z.length;i++){
	console.log(z[i]);
}

for (var i=0; i<z.length-1;i++){
	console.log(z[i]);
}

//Basic 4
console.log("*********");
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i=0; i<names.length;i++){
	if (names[i].length==5){
		console.log(names[i].length);
	}
}

//Basic 5
console.log("*********");
function yell(str){
	return (str.toUpperCase());
}
console.log(yell("string"));


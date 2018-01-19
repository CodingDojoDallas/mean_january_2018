//Basic 1
var x = [];
console.log(x);
x.push("coding", "dojo", "rocks");
x.pop(x[2]);
console.log(x);
//Answer ["coding", "dojo"]


//Basic 2
const y = [];
console.log(y);
y.push(88);
console.log(y);
//Answer [88]


//Basic 3
var z = [9, 10, 6, 5, -1, 20, 13, 2];
console.log(z);
z.pop(z[7]);
console.log(z);
//Answer [9, 10, 6, 5, -1, 20, 13]


//Basic 4
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for(var i = 0; i < names.length; i++){
	console.log(names[i].length);
}
//Answer 5 3 5 6 8

/////////////////////////////////////////
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for(var i = 0; i < names.length; i++){
	if(names[i].length == 5){
		console.log(names[i]);
	}
}
//Answer Kadie Fritz


//Basic 5
function yell(string){
	var x = string.toUpperCase();
	console.log(x);
}
yell("hello")
//Answer HELLO
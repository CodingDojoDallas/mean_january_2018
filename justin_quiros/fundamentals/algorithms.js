
//Set myNumber to 42. Set myName to your name.
//Now swap myNumber into myName and vice versa.
// function swap(){
// var myNumber = 42;
// var myName = "Justin";
// var temp;

// temp = myNumber
// myNumber = myName
// myName = temp

// console.log(myName);
// console.log(myNumber);
// };

// swap();
//--------------------------------------------//

//Print Integers from -52 to 1066 usng a FOR loop.

// function print(){
// 	for(var i = -52; i <= 1066; i++){
// 		console.log(i);
// 	}
// }
// print();
//--------------------------------------------//

//Create beCheerful(). Within it, console.log string
//"good morning!" Call it 98 times.

// function beCheerful(){
// 	var string = "good morning";

// 	for(var i = 1; i <= 98; i++){
// 		console.log(string);
// 	}
// }
// beCheerful();

//--------------------------------------------//

//Using FOR, print multiples of 3 from -300 to 0.
//Skip -3 and -6.

// function threes(){
// 	for(var i = -300; i <= 0; i+=3){
// 		if(i != -6 && i != -3){
// 			console.log(i);
// 		}
// 	}
// }
// threes();

//--------------------------------------------//

//Print integers from 2000 to 5280, using a WHILE

// function printIt(){
// 	var x = 2000;
// 	while(x <= 5280){
// 		console.log(x);
// 		x++
// 	}
// }
// printIt();

//--------------------------------------------//

//Print all integer multiples of 5, from 512 to 4096.
//Afterward also log how many there were. 

// function fives(){
// 	var count = 0;

// 	for(var i = 515; i <= 4096; i+=5){
// 		console.log(i);
// 		count++;
// 	}
// console.log(count);
// }
// fives();

//--------------------------------------------//

//Print multiples of 6 up to 60,000, using a WHILE.

// function sixes(){
// 	var mult = 0
// 	while(mult % 6 === 0 && mult <= 60000){
// 		console.log(mult);
// 		mult+=6;
// 	}
// }
// sixes();

//--------------------------------------------//

// Print integers 1 to 100.  If divisible by 5, print
// "Coding" instead. If by 10, also print " Dojo".

// function replace(){
// 	for(var i = 1; i <= 100; i++){
// 		if(i % 10 === 0){
// 			console.log("Coding Dojo");
// 		}
// 		if
// 	}
// }

//If a new student at Coding Dojo increased his IQ everyday
//by .01 then .02 then .03 .... what would his IQ be at the end
//of 98 days?

// function iqsoar(iq){
// 	for(var i = 1; i < 99; i++){
// 		iq = iq + (i * .01)
// 	}
// 	console.log(iq);
// }
// iqsoar(101)

// function interleave(a,b){
//     var alen = a.length
//     var blen = b.length
//     var long;
//     var arr = []

//     if(alen > blen){
//         long = alen
//     }
//     else if (alen < blen){
//         long = blen
//     }
//     else{
//         long = alen
//     }

//     for(var i = 0; i < long; i++){
//         if(a[i] != null){
//             arr.push(a[i])
//         }
//         if(b[i] != null){
//             arr.push(b[i])
//         }
//     }
//     console.log(arr);
//     return arr
// }

// interleave([3,4,5,2,1], [9,4,7,6,2,1,5])

function sortSorted(a,b){
    var newarr = [];
    var stop = false;
    var x = 0
    var y = 0

    while(stop == false){
        if(a[x] < b[y]){
            newarr.push(a[x])
            x++
        }
        else{
            newarr.push(b[y])
            y++
        }

        if(x == a.length || y == b.length){
            stop = true
        }
    }

    if(x == a.length-1){
        newarr.concat(b[y, b.length-1]);
        console.log(newarr);
        }
        else{
            newarr.concat(a[x, a.length-1]);
            console.log(newarr);
        }
    }

sortSorted([3,4,7,8,11], [2,5,6,10])
//need to find out why 11 is missing from output




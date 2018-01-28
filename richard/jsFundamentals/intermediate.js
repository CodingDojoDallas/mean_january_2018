function starString(num) {
    var ret = "";
    for (var i = 0; i < num; i++) {
        ret += "*";
    }
    return ret;
}
// testing with zero and negative number, should just return empty string
let test1 = starString(0);
let test2 = starString(-1);
// testing with positive number
let test3 = starString(8);
console.log(test1);
console.log(test2);
console.log(test3);
// part 2 - creating a function drawStars
// takes an array of numbers, prints out starString for each num
function drawStars(arr) {
    for (var i = 0; i < arr.length; i++) {
        let stars = starString(arr[i]);
        console.log(stars);
    }
}
// testing - adding zero and negatives - expecting empty strings, making sure it doesnt' break
drawStars([1,0,3,-5,8]);
let x = [4,6,1,3,5,7,25];
drawStars(x);
// part 3 - modified version of drawStars, accepts strings and prints first letter, in lower case
// number of times equal to length of the word
function newStars(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            let stars = starString(arr[i]);
            console.log(stars);
        }
        else if (typeof arr[i] == 'string') {
            let first_letter = arr[i][0].toLowerCase();
            var letter_string = "";
            for (var j = 0; j < arr[i].length; j++) {
                letter_string += first_letter;
            }
            console.log(letter_string);
        }
    }
}
// testing new function with requested input
let y = [4, 'Tom', 1, 'Michael', 5, 7, 'Jimmy Smith'];
newStars(y);
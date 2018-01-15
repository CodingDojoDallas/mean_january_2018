//JavaScript Intermediate
//Part I
function starString(num){
	var str = "";
	for(var i = 0; i < num; i++){
		str += '*';
	}
	console.log(str);
}
let stars = starString(5);

//Part II
function drawStars(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].constructor === String){
			var x = arr[i].length;
			var y = "";
			for(var z = 0; z < x; z++){
				y += arr[i][0].toLowerCase();
			}
			console.log(y);
		}
		else{
			starString(arr[i]);
		}
	}
}
let x = drawStars([4, 6, 1, 3, 5, 7, 25]);

//Part III
let t = drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);
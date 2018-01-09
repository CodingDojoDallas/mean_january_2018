//Part I
console.log("--------")
function starString(n){
	var result = "";
	for (var i=0;i<n;i++){
		result+="*";
	}
	return result;
}
let stars = starString(8)
console.log(stars);


//Part II
console.log("--------")
function drawStars(arr){
	for (var i=0;i<arr.length;i++){
		if (typeof arr[i]==="number"){
			console.log(starString(arr[i]));
		}
		else{
			var result = "";
			for (var b=0;b<arr[i].length;b++){
				result += arr[i][0].toLowerCase(); 
			}
			console.log(result);
		}
	}
}
let x = [4, 6, 1, 3, 5, 7, 25]
drawStars(x);

//Part III
let z = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStars(z);
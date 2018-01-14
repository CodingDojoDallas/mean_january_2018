// function starString(num) {
// 	var star = "*";
// 	stars = star.repeat(num)
// 	console.log(stars)
// }

// starString(50)

function drawStars(arr) {
	var star = "*";
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].constructor === String){
			var letter = arr[i][0].toLowerCase()
			console.log(letter.repeat(arr[i].length))
		}


		stars = star.repeat(arr[i])
		console.log(stars)
	}
}

drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
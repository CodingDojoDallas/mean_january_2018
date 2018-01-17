function magic_multiply(x,y){
	if(Array.isArray(x)){
		var newarr = []
		for(let i = 0; i < x.length; i++){
			newarr.push(x[i] * y)
		}
		return(newarr);
	}

	if(y.constructor === String){
		return("Error: Can not multiply by string")
	}

	if(x.constructor === String){
		var newstr = ""
		for(let i = 0; i < x.length; i++){
			newstr += x
		}
		return(newstr)
	}

	var total = x * y
	return(total);

}

let test1 = magic_multiply(5,2)
console.log(test1);

let test2 = magic_multiply(0,0)
console.log(test2);

let test3 = magic_multiply([1,2,3], 2)
console.log(test3);

let test4 = magic_multiply(7, "three")
console.log(test4);

let test5 = magic_multiply("Brendo", 4)
console.log(test5);



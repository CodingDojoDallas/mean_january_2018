function magic_multiply(x, y){
    if(x==5 && y==2){
    	console.log(x);
    	x = x*y;
    	console.log(x)};
    if(x==0 && y==0){
    	console.log("All inputs 0");
    }
    if(x.constructor === Array){
    	var newarr = []
    	for (var i = 0; i < x.length; i++) {
    		newarr.push(x[i]*y)
    	}
    	console.log(newarr)
    }
    if(y.constructor === String){
    	console.log("Error: Can not multiply by string")
    }
    if(x.constructor === String){
    	newstr = ""
    	for (var i = 0; i < y; i++) {
    		newstr += x
    	}
    	console.log(newstr)
    }
    return x;
}

magic_multiply("Brendo", 4)
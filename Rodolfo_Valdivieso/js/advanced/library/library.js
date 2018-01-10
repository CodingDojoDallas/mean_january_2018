//Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}

var _ = {
   map: function(arr, mapNumbers) {
     var result = [];
     for(var i = 0; i < arr.length; i++) {
	    	result.push(mapNumbers(arr[i]));
	    }
	  return result;
   },
   reduce: function(arr, addNumbers) { 
     var result = 0;
     for(var i = 0; i < arr.length; i++) {
	    	result = addNumbers(result,arr[i]);
	    }
	  return result;
   },
   find: function(arr,num, findNumbers) {   
     for(var i = 0; i < arr.length; i++) {
	    	if (findNumbers(arr[i], num)){
	    		return arr[i];
	    	}
	    	 // invoking the callback many times... delegation!
	    }
	  return false;
   },
   filter: function(arr, evenNumbers) { 
   		var even = []
	    for(var i = 0; i < arr.length; i++) {
	    	if (evenNumbers(arr[i])){
	    		even.push(arr[i]);
	    	}
	    }
	    return even;
    },
   reject: function(arr,num, findNumbers) { 
   	 var result = [];
     for(var i = 0; i < arr.length; i++) {
	    	if (!findNumbers(arr[i], num)){
	    		result.push(arr[i]);
	    	}
	    }
	  return result;
   }
 }
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var find = _.find([1, 2, 3, 4, 5, 6], 2, function(a, b){ return a == b; });
console.log(find);

var reject = _.reject([1, 2, 3, 4, 5, 6], 3, function(a, b){ return a == b; });
console.log(reject);

var reduce = _.reduce([1, 2, 3], function(memo, num){ return memo + num; });
console.log(reduce);

var map = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(map);


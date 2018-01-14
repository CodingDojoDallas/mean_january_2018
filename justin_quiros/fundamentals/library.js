var _ = {
   map: function(arr) {
    newarr = [];
    for(let i = 0; i < arr.length; i++){
      newarr.push(arr[i] * 3)
    }
    return(newarr)
   },
   reduce: function(arr) { 
     val = 0;
     for(let i = 0; i < arr.length; i++){
      val += arr[i]
     }
     return(val)
   },
   find: function(arr, callback) {   
     for(let i = 0; i < arr.length; i++){
      if(callback(arr[i]) == true){
        return(arr[i])
      }
     }
   },
   filter: function(arr, callback) {
    newarr = [];
    for(let i = 0; i < arr.length; i++){
      if(callback(arr[i])){
        newarr.push(arr[i]);
      }
    }
      return(newarr)
   },
   reject: function(arr, callback) {
    newarr = []
    for(let i = 0; i < arr.length; i++){
      if(!callback(arr[i])){
        newarr.push(arr[i])
      }
    }
    return(newarr)
   }
 }
// you just created a library with 5 methods!


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var threes = _.map([1,2,3])
console.log(threes);

var reduce = _.reduce([1,2,3])
console.log(reduce);

var find = _.find([1,2,3,4,5,6], function(num){ return num % 2 == 0; });
console.log(find);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);



var _ = {
    map: function map(array, callback) {
        var newArray = [];
        for(var i = 0; i < array.length; i++){
            newArray.push(callback(array[i]));
        }
        console.log(newArray);
    },
    reduce: function(array, callback, memo=0) { 
        for(var i = 0; i < array.length; i++){
          memo = callback(memo, array[i])
        }
        console.log('reduce sum', memo);
    },
    find: function(array, callback) {
        for(i = 0; i < array.length; i++){
            if(array[i] % 2 == 0){
                console.log(array[i]);
                break;
            }
        }   
    },
    filter: function(array, callback) {   
        newArray = [];
        for(i = 0; i < array.length; i++){
            if(array[i] % 2 == 0){
                newArray.push(array[i]);
            }
        }
        console.log(newArray);
    },
    reject: function(array, callback) { 
        newArray = [];
        for(i = 0; i < array.length; i++){
            if(array[i] % 2 != 0){
                newArray.push(array[i]);
            }
        }
        console.log(newArray);
    }
}
_.map([1, 2, 3], function(num){ return num * 3; });
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
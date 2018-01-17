var _ = 
{
	map: function(arr, callback)
	{
		var newArr = [];
		for(var i = 0; i < arr.length; i++)
		{
			newArr.push(callback(arr[i]));
		}
		return newArr;
	},
	reduce: function()
	{
		var result = 0;
	},
	find: function(arr, callback)
	{
		for (var i = 0; i < arr.length; i++)
		{
			if (callback(arr[i]) == true)
			{
				return arr[i];
			}
		}
	},
	filter: function(arr, callback)
	{
		var newArr = [];
		for (var i = 0; i < arr.length; i++)
		{
			if (callback(arr[i]) == true)
			{
				newArr.push(arr[i]);
			}
		}
		return newArr;
	},
	reject: function(arr, callback)
	{
		var newArr = [];
		for (var i = 0; i < arr.length; i++)
		{
			if (callback(arr[i]) == false)
			{
				newArr.push(arr[i]);
			}
		}
		return newArr;
	}
}

var hello = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(hello);
// => [3, 6, 9]
// _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// // => [3, 6, 9]
// _.map([[1, 2], [3, 4]], _.first);
// // => [1, 3]
var even = _.find([1,2,3,4,5,6], function(num){ return num % 2 == 0; });
console.log(even);
// => 2
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);
// => [2, 4, 6]
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0;});
console.log(odds);
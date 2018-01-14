// js_math

// Math 1
function zero_negativity(arr)
{
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] < 0)
		{
			return false;
		}
		return true;
	}
}

var newArr = [-3, 3, 5, 8];
console.log(zero_negativity(newArr));

// Math 2
function is_even(int)
{
	if (int % 2 == 0)
	{
		return true;
	}
	return false;
}

console.log(is_even(3));

// Math 3
function how_many_even(arr)
{
	var num = 0;
	for (var i = 0; i < arr.length; i++)
	{
		if (is_even(arr[i]) == true)
		{
			num ++;
		}
	}	
	return num;
}

var newArr2 = [1, 3, 5, 4, 6, 4, 4];
console.log(how_many_even(newArr2));

// Math 4
function create_dummy_array(n)
{
	var arr = [];
	for (var i = 0; i < n; i++)
	{
		var rand = Math.floor(Math.random() * 9);
		arr.push(rand);
	}
	return arr;
}
console.log(create_dummy_array(6));

// Math 5
function random_choice(arr)
{
	var rand = Math.floor(Math.random() * arr.length);
	return arr[rand];
}

var newArr3 = [1, 3];
console.log(random_choice(newArr3));
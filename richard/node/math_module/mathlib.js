module.exports = function (){
	return {
		add: function(num1, num2) { 
			var result = num1 + num2;
			console.log(result);
		},
		multiply: function(num1, num2) {
			var result = num1 * num2;
			console.log(result);
		},
		square: function(num) {
			var result = num * num;
			console.log(result);
		},
		random: function(num1, num2) {
			var result = Math.floor(Math.random() * (num2 - num1) + num1);
			console.log(result);
		}
	}
};

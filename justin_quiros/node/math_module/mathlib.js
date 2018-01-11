module.exports = function (){
  return {
    add: function(num1, num2) { 
         var total = num1 + num2
         console.log(total)
    },
    multiply: function(num1, num2) {
         var total = num1 * num2
         console.log(total)
    },
    square: function(num) {
         var total = num * num
         console.log(total) 
    },
    random: function(num1, num2) {
         var random = Math.floor(Math.random()*(num2 - num1+1)+num1);
            console.log(random);
        }
    }
};
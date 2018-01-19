function fib() {
  // Some variables here
  var count = 0;
  var a = 1;
  var b = 1;
  var temp = 0;
  function nacci() {
  	if (count==0||count==1){
  		console.log(1);
  	}
  	else
  	{
  		console.log(a+b);
  		temp = a;
  		a=b;
  		b=temp+b;
  	}
    count++;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
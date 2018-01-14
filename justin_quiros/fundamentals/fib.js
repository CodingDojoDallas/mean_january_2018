function fib() {
	var count = 0
	var prev = 0
	var nacci1 = 0
	var temp = 0
  function nacci() {
  	if(count == 0){
  		nacci1++
  		console.log(nacci1);
  		count++
  	}
  	else if(count == 1 && prev == 0){
  		count++
  		prev++
  		console.log(nacci1);
  	}
  	else if(nacci1 == 1 && prev == 1){
  		nacci1 = nacci1 + prev
  	}
  	else{
  		temp = nacci1
  		nacci1 = nacci1 + prev
  		prev = temp
    console.log(nacci1);
  	}

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

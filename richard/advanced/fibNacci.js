function fib() {
    var one = 0, two =  1;
    function nacci() {
        var temp = one;
        one = two;
        two = temp + two
        console.log(one)
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // log "1"
  fibCounter() // log "1"
  fibCounter() // log "2"
  fibCounter() // log "3"
  fibCounter() // log "5"
  fibCounter() // log "8"
  fibCounter() // log"13"
  fibCounter() // log"21"
  fibCounter() // log"34"
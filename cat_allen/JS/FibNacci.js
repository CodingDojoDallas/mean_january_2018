function fib() {
    var sum = 0
    var x = 0
    var y = 1
    function nacci() {
        sum = x + y
        x = y
        y = sum
        console.log(sum);
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
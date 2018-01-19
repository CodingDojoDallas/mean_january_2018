function magic_multiply(x, y){
    if(x.constructor === Array){
        let arr = []
        for(let i = 0; i < x.length; i++){
            arr.push(x[i]*y);
        }
        return arr;
    }
    if(typeof y === 'string' || y instanceof String){
        return "Error: cannot multiply by string."
    }
    if(typeof x === 'string' || x instanceof String){
        return x.repeat(y);
    }
    else
        return x*y;
};
let test1 = magic_multiply(5, 2);
console.log(test1);
let test2 = magic_multiply(0, 0);
console.log('All inputs ' + test2);
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
let test4 = magic_multiply(7, "three");
console.log(test4);
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// Part I
// let num = 12
// let star = '*'
// function starString(num){
//     return star.repeat(num);
// }
// console.log(starString(num))

// Part II
// let x = [4, 6, 1, 3, 5, 7, 25]
// let star = '*'
// function drawStars(x){
//     for(let i = 0; i < x.length; i++){
//         console.log(star.repeat(x[i]));
//     }
// }
// drawStars(x)

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
let star = '*'
function drawStars(x){
    for(let i = 0; i < x.length; i++){
        if(typeof x[i] === 'number'){
            console.log(star.repeat(x[i]));
        }
        else{
            let str = x[i];
            let n = str.length;
            let res = str.charAt(0);
            console.log(res.toLowerCase().repeat(n));
        }
    }
}
drawStars(x)
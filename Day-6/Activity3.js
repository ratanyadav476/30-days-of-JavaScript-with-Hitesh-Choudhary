let arr = [1, 2, 3, 4, 5]

//map method
let newarr = arr.map(myfun)

function myfun(n) {
    return n * 2;
}
console.log(newarr);

// filter method 

let even=arr.filter(evenNum)
function evenNum(n) {
    if (n % 2 == 0) {
        return n;
    }
}
console.log(even);

//reduce method
let sumofarr=(prev,sum)=>{
    return prev+sum;
}
let reduc=arr.reduce(sumofarr)
console.log(reduc);
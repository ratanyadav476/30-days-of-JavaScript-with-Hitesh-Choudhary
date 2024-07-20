let product=(a=8,b)=>{
    return a*b;
}
console.log(product(5,6));


console.log("-------------new function------------------");
let greeting=(name,age=26)=>{
    console.log(age);
    return name;
}
console.log(greeting("ratan"));
let sumOfnums=(a,b)=>{
return a+b;
}
console.log(sumOfnums(9,7));
let str = 'To be, or not to be, that is the question.';
let checkstringspecific=(str)=>{
    console.log(str.includes('To be')); // true
    console.log(str.includes('foo')); // false

}
checkstringspecific(str)
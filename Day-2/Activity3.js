let a=8
let b=9
if (a>b) {
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${b} is greater than ${a}`); 
}

// activity3 task 2 
let fun=()=>{
    let random=parseInt(Math.random()*10+1);
    if (random >=5) {
        console.log(`${random} num is greater than 5`);
    }else if(random<=5){
       console.log(`${random} num is less than 5`); 
    }else{
        console.log(`${random}== 5`);
    }

}
fun()



if (4==4) {
    console.log("yes");
}else{
    console.log("no");
}


let x=8,y=8;
if (x===y) {
console.log("true");
}else{
    console.log("false");
}

let num=7;
num +=5
console.log(num);

let num2=7
num2 -=5
console.log(num2);
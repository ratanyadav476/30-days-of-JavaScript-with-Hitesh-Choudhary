let sayhello=()=>{
    console.log(" hi i am ratan ");
}
// let id=setInterval(sayhello, 2000);



function composeFunctions(func1,func2,value){
    return func2(func1(value))
}

function addTwo(X){
    return X+2;
}
 function multyplyByfour(X){
    return X*4;
 }
 const result=composeFunctions(addTwo,multyplyByfour,8)
 console.log(result);
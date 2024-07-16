let largestnum=(a,b,c)=>{
    if (a>b) {
        console.log(a+"  is greater than "+b);
    }else if (b>c) {
        console.log(b+" is greater than "+c);
    }else{
        console.log(c +" is greater than "+a +" and "+b);
    }
}
largestnum(9,11,9)
let chkleapyer=(year)=>{
if (year%4==0) {
    if (year%100==0) {
        if (year%400==0) {
            console.log(" year is a leap year");
        }else{
            console.log("year is not a lear year");
        }
    }else{
        console.log("not a leap year");
    }
}else{
    console.log("Not a leap year");
}
}
chkleapyer(2000)
chkleapyer(4000)
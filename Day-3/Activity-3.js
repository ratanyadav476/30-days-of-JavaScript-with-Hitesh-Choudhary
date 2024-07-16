let switchcase=(ch)=>{
switch (ch) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
  

    default:
        console.log("wrong albhabbet");
        break;
}
}
switchcase(4)
switchcase(9)
switchcase(11)
switchcase(7)


let checkGrades=(g)=>{
switch (g) {
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 50:
        console.log("E");
        break;

    default:
        console.log("your are fail");
        break;
}
}
checkGrades(60)
checkGrades(80)
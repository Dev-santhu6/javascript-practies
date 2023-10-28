//3 
let  a=4; 
let b = 3; 
console.log(a>b ? a+"is greate than"+ b :a +"is less than"+ b);

  //4
 let mark = parseInt(prompt("type your mark"));
 console.log(mark <= 100 && mark >= 80 ? alert("A") : mark <= 79 && mark >= 70 ? alert("B") : mark <= 69 && mark >= 60 ? alert("C") : mark <= 59 && mark >= 50 ? alert("D") : alert("F"));

//5
var month = prompt("type your month");
var month1 = month.toLowerCase();
switch (month1) {
    case "january":
        console.log("seson is winter");
        break;
    case "february":
        console.log("seson is winter");
        break;
    case "december":
        console.log("seson is winter");
        break;
    case "september":
        console.log("seson is Autum");
        break;
    case "october":
        console.log("seson is Autum");
        break;
    case "november":
        console.log("seson is Autum");
        break;
    case "march":
        console.log("seson is spring");
        break;
    case "april":
        console.log("seson is spring");
        break;
    case "may":
        console.log("seson is spring");
        break;
    case "june":
        console.log("seson is summer");
        break;
    case "july":
        console.log("seson is summer");
        break;
    case "auguest":
        console.log("seson is summer");
        break;
    default:
        console.log("not a month");
        break;


}

// //some switch case code
switch (month1) {
    case "january":
    case "february":
    case "december":
        console.log("seson is winter");
        break;
    case "september":
    case "october":
    case "november":
        console.log("seson is Autum");
        break;
    case "march":
    case "april":
    case "may":
        console.log("seson is spring");
        break;
    case "june":
    case "july":
    case "auguest":
        console.log("seson is summer");
    default:
        console.log("not a month");
        break;
}
//end of switch case

//function
function sum(n1, n2) {
    return n1 + n2;
}
sum(9, 8)
console.log(sum(9, 8));

// // end of function

// //1

 let userage = prompt("Type your age :");
 let allowage =18;
 console.log(allowage<userage ? "You are old enough to drive." :"You are left with"+ [allowage-userage] +"years to drive");


 //2

let age = prompt("enter your age :");
let myage =21;
console.log(myage<age ? "You are "+[age-myage]+"years older than me." :"I am"+ [myage-age] +"years older than you.");

// switch 1
let months = prompt("Type the month number:");
let year=prompt("Type the year:");
switch (months) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        console.log("month has 31 days");
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        console.log("month has 30 days");
        break;
    case "2":
        console.log(( year %4 === 0) ?"month has 29 days" : "month has 28 days");
           break;
        default:
        console.log("these are not month and year");
        break;
}


var x=2022;
var y=4;
z=x%y;
console.log(z);
//2
var x = parseInt(prompt("enter your value :"));
var y = parseInt(prompt("enter your value :"));
var calculation = prompt("enter your calculation (+,-,*,%):")
switch (calculation) {
    case "+":
        console.log(x+y);
        break;
    case "*":
        console.log(x * y);
        break;
    case "-":
        console.log(x-y);
        break;
    case "%":
        console.log(x % y);
        break;
    default:
        alert(console.log("!not a culculation"));
        break;
}


//3
let language = prompt("Type the programming language:");
var language1 = language.toLowerCase();
switch (language1) {
    case "html":
    case "css":
    case "javascript":
        console.log("This is frontend");
        break;
    case "nodejs":
    case "expressjs":
        console.log("This is backend");
        break;
    default:
        console.log("Not in list");
        break;
}

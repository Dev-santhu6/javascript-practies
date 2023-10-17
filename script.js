// day 1
//Welcome to learn Javascript.
/* Write a multiline comment which says,
  comments can make code readable, easy to reuse and informative */
  var n = "John";
  var x = true;
  var y ;
  var z = null;
console.log(typeof n);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

 //3,4

var a = 8;
var b = 7;
var c = 6;
var d = 5;

//8

var person = {
firstname :"santhu",
lastname :"jan",
maritalstatus:"single",
country:"srilanka",
age:21
}
console.log(person);

//9

var  firstname ="santhu", lastname ="jan", maritalstatus="single", country="srilanka", age=21;
console.log(firstname,age);

//10

var myage = 21;
var yourage = 47;

console.log("My age is " + myage);
console.log("Your age is " + yourage);


//day2
//start
//1,2
var j = "Learn JavaScript";
console.log(j);

//3
console.log(j.length);

//4
console.log(j.toUpperCase());

//5
console.log(j.toLowerCase());

//6
console.log(j.substr(-1));
console.log(j.substring(15));

// end with same variable j

//7
let learn = "Days Of JavaScript from learn Javascript";
console.log(learn.length);
console.log(learn.substring(19));

//8
console.log(learn.includes("hi"))  /* identify the letters in that variable */

//9
var split= 'learn JavaScript';
var split1 = split.split("");

console.log(split1);

//10
var split2= 'learn JavaScript';
var split3 = split2.split(" ");
console.log(split3);

//11
let social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let media = social.split(',');
console.log(media);

//12
let replaced = "learn Javascript";
console.log(replaced.replace("learn Javascript","learn Javascript to 30 Days Of Python "));

//13
let  character = 'learn Javascript'
console.log(character.length);
console.log( character.charAt(15)) ;

//14
let character1 = 'learn Javascript'
console.log(character1.charCodeAt(3)) //value of ASCII

//15
var position = 'learn Javascript';
console.log(position.indexOf('a'));

//16
var position1 = 'learn Javascript';
console.log(position1.lastIndexOf('a'));

//17
var position2 = "You cannot end a sentence with because because because is a conjunction";
console.log(position2.indexOf("because"));

//18
var position3 = "You cannot end a sentence with because because because is a conjunction";
console.log(position3.lastIndexOf("because"));

//19
var searchh = "You cannot end a sentence with because because because is a conjunction";
console.log(searchh.search("because"));

//20
var removespace = " You cannot end a sentence with because because because is a conjunction ";
console.log(removespace);
console.log(removespace.trim(" "));

//21
var start = 'learn Javascript';
console.log(start.startsWith("lea"));
console.log(start.startsWith("java"));

//22
var end = 'learn Javascript';
console.log(end.endsWith("lea"));
console.log(end.endsWith("Javascript"));

//23
let matchh = "learn javascript"
console.log(matchh.match("a"));

//24
let concats = 'learn javascript'
console.log(concats.concat(" 30 Days Of", " JavaScript"));

//25
let repeats= 'learn javascript'
console.log(repeats.repeat(2));


//Exercise: Level 2

//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//3
console.log(typeof 10 == typeof "10");  

//4
let p = '9.8'
console.log(parseFloat(p) == 10);

//5
var language1 = 'python';
var language2 = 'jargon';
console.log(language1.includes('on') , language2.includes('on'));

//6
var  check = "jargon";
console.log(check.includes("jargon"));

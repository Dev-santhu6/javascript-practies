 // 1
function fullName() {
    console.log("My full name is [Balamuralikirushnan Santhujan]");
  }
  fullName();
// M2
  function fullName() {
    console.log("My full name is Balamuralikirushnan Santhujan");
  }
    fullName();
 //2
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
  const myFullname = fullName("Balamuralikirushnan", "Santhujan");
  console.log("My full name is " + myFullname);

  //3
function addnum(n1,n2) {
//     return n1+n2;
    console.log(n1+n2);
  }
  addnum(5,7)
  const sum = addnum(5, 7);
console.log("The sum is: " + sum);

//4

function areaOfRectangle(length, height) {
return length * height;
  }
 console.log("The area of the rectangle is: " + areaOfRectangle(5,10));



 //5
function perimeterOfRectangle(length, width) {
    return 2*(length * width);
  }
  console.log("The perimeter of the rectangle is: " + perimeterOfRectangle(10,5) );
 


//6
  function volumeOfRectangle(length, width,height) {
    return length * width * height;
  }
console.log("The volume of the rectangle is: " + volumeOfRectangle(10,10,10));

  //7
  function areaOfCircle(radius) {
        return Math.PI * radius * radius;
      }
      console.log("The area of the circle is: " + areaOfCircle(7));

      //8
      function circumOfCircle(radius) {
           
            return 2 * Math.PI * radius;
          }
          console.log("The circumference of the circle is: " + circumOfCircle(7));

//9
function ctof(celsius) {
    return (celsius*9/5)+32;
}
console.log("Fahrenheit is "+ ctof(40)+"°C.");




//10                Kg/m2
function bmi (weight,height){
    return (weight) /(height/100*height/100);    
}
 console.log( "your bmi point is "+bmi(50,200));
console.log(bmi(50,200)<18.5 ? "you are underweight"
: bmi(50,200)>18.5 && bmi(50,200)<24.9 
? "you are normal weight" 
: bmi(50,200)>25 && bmi(50,200)<29.9 
? "you are over weight" : "you are obese");

// for (let i = 0; i < 5; i++) {
//   console.log(i);
  
// }
// let x=0
// while (x<5) {
//   console.log(x);
//   x++
// }
// x=0
// i=0
// do {
//   x=x+i;
//   console.log(x);
//   i++
// } while (i<5);




 



// let bmipoint=bmi(50,200);
//  console.log(bmipoint<18.5 ? "you are underweight" : bmipoint>18.5 && bmipoint<24.9 ? "you are normal weight" : bmipoint>25 && bmipoint<29.9 ? "you are over weight" : "you are obese");
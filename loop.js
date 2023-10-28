// //1

// for ( let i=0;i < 5; i++ ) {
//     console.log("hi john");
// //     // document.write("hi john")

// }
// //2
// let y=0;
// while (y<=10) {
//     console.log(y);
//     y++
// }

// //3
// for (let i = 1; i <= 10; i=Math.pow((i+1),2)) {
//     // const square = i * i;
//     // console.log(`The square of ${i} is ${square}`);
//     console.log(i)
//   }


//4
// for (let x = 2; x <=100; x=x+2) {
//     console.log(x);
//     }

//5
// x=0
// i=0
// do {
//   x=x+i;
//   console.log(x);
//   i++
// } while (i<=100);

// var x= parseInt(prompt("type number"));
// console.log(`sum of number ${((x*(x+1))/2)}`);

//7
//     const fruits = ["apple", "banana", "strawberry", "mango"];
//         for (let i = 0; i < fruits.length; i++) {
//       console.log(`My favorite fruit is ${fruits[i]}`);
// }

// //8
// const inputString = "learn JavaScript";
// let separatedString = "";
// let i = 0;

// while (i < inputString.length) {
//   if (i > 0) {
//     separatedString += ',';
//   }
//   separatedString += inputString[i];
//   i++;
// }

// console.log(separatedString);

//9
for (let i = 1; i <= 7; i++) {
 let line = "";
  for (let j = 1; j <= i; j++) {
    line += "#";
  }
  console.log(line);
}


for (let i = 1; i <= 45; i++) {
  let output = "";

  if (i % 3 === 0) {
    output += "Puppy";
  }

  if (i % 5 === 0) {
    output += "Pet";
  }
  if ((i % 5 === 0)&&(i % 3 === 0)) {
    output += "pappyPet";
  }

  console.log(output || i );
}


// let user = new Object();
// const user = {
//   name: "vasya",
//   age: 25,
//   hasCar: true,
//   "user hobbies": ["swimming", "cooking", "coding"],
//   address: [],
// };

// console.log(user["user hobbies"][1]);

// user.address.push("Bishkek, Sovetskay 15");

// console.log(user.address);

// delete user.address;

// console.log(user.address);

// user.name = "petya";

// console.log(user.name);

// console.log(Object.values(user));

// let a = "a";
// let b = "b";

// if (a < b) {
//   console.log("Меньше");
// } else if (a == b) {
//   console.log("Равно");
// }

// console.log(a === b);

//truthy
// все что не falsy

// falsy
// ""
// undefined
// 0
// false
// null

// let userAge = false;

// && --> and (И)
// || --> or (или)
// ! --> not (не)

// if (userAge < 14) {
//   console.log("baby");
// } else if (userAge >= 14 && userAge < 18) {
//   console.log("teenage");
// } else if (userAge >= 18 && userAge < 35) {
//   console.log("adult");
// } else {
//   console.log("old");
// }

// console.log(!userAge);

let a = 10;
let b = 20;

// console.log(a + b);

let c = 20;
let d = 20;
// console.log(c + d);

function greet() {
  console.log("hello");
}

// greet();

function calcSum(num1, num2) {
  let sum = num1 + num2;

  return sum;
}

let sum = calcSum(a, b);
console.log(sum);

calcSum(c, d);
calcSum(100, 200);

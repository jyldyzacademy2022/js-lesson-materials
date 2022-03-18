// let numbers = [100, 200, 300, 400, 500, 600, 700, 800, 700];

// let x, y, z;

// [x, y, z, ...rest] = numbers;

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(rest);

const user = {
  name: "john",
  age: 25,
  location: "NY",
  isMarried: true,
  phone: "+996 00 00 00",
};

let { firstName, age, ...rest } = user;

console.log(name);
console.log(age);
console.log(rest);

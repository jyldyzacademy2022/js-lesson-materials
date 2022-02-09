// function Person(name, birthday) {
//   this.name = name;
//   this.birthday = new Date(birthday);
// }

// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return ageDate.getUTCFullYear() - 1970;
// };

// const john = new Person("John", "10-10-1980");
// const mary = new Person("Mary", "10-10-1999");

// console.log(john.calculateAge());
// console.log(mary.calculateAge());

// const myStr = "Hello";
// console.log(myStr);

// console.log(myStr.toUpperCase());

// String.prototype.toUpperCase = function () {
//   console.log("11111");
// };

// myStr.toUpperCase();

function Auto(model, year, color, fuelLeft) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.fuelLeft = fuelLeft;
}

Auto.prototype.showInfo = function () {
  console.log(
    `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Fuel left: ${this.fuelLeft}`
  );
};

Auto.prototype.drive = function (distance) {
  if (this.fuelLeft > 0) {
    this.fuelLeft -= 10;
  } else {
    console.log("No fuel left!");
  }
};

const bmw = new Auto("BMW", "2020", "red", 10);
bmw.showInfo();
bmw.drive();
bmw.showInfo();
bmw.drive();

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  }
}

class Client extends Person {
  constructor(firstName, lastName, email, city) {
    super(firstName, lastName);
    this.email = email;
    this.city = city;
  }

  greet() {
    return super.greet() + " I'm from " + this.city;
  }

  // greet() {
  //   return `${this.firstName} Email: ${this.email}`;
  // }
}

const john = new Person("john", "doe");
console.log(john.greet());

const mary = new Client("mary", "mike", "mary@mary.com", "NY");
console.log(mary.greet());

const john = {
  name: "john",
  age: 20,
};

const pete = {
  name: "pete",
  age: 20,
};

const bob = {
  name: "bob",
  age: 20,
};

function logUser(user) {
  console.log(`My name is ${user.name}. I am ${user.age}`);
}

logUser(john);
logUser(pete);
logUser(bob);

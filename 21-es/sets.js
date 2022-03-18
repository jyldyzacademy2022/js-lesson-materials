// const set1 = new Set();

// set1.add(100);
// set1.add("a");
// set1.add({ name: "john" });
// set1.add(true);
// set1.add(100);
// set1.add("A");

const names = ["james", "john", "masha", "james", "pete", "masha"];

let uniqueNames = new Set(names);
uniqueNames = Array.from(uniqueNames);

// console.log(uniqueNames);
// console.log(names);

uniqueNames.forEach((name) => {
  console.log(name);
});

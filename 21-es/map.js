const map1 = new Map();

const key1 = "";
const key2 = {};
const key3 = function () {};

map1.set(key1, "hello");
map1.set(key2, "hello 2");
map1.set(key3, "hello 3");

// console.log(map1);

// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

for (let value of map1.values()) {
  console.log(value);
}

for (let key of map1.keys()) {
  console.log(key);
}

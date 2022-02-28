// const promise = new Promise((resolve, reject) => {
//   const sum = 1 + 2;

//   blabla;

//   if (sum === 2) {
//     resolve(sum);
//   } else {
//     reject("Что-то пошло не так...");
//   }
// });

// promise.then((result) => {
//   console.log(result);
// });

setTimeoutPromise(5000).then(() => {
  console.log("Promise");
});

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

console.log("hello");
console.log("hello 2");

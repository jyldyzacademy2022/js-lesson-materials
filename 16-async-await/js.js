// async function myCoolFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 2000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise;

//     return res;
//   } else {
//     await Promise.reject(new Error("Ошибка!!!"));
//   }
// }

// myCoolFunc()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await res.json();

  return users;
}

getUsers().then((users) => {
  console.log(users);
});

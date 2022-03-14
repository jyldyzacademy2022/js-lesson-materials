// try {
//   greet();
// } catch (error) {
//   console.log(error.name);
// } finally {
//   console.log("This is finally content");
// }

// console.log("hello2");

// function greet() {
//   console.log("hello World!");
// }

const user = { name: "john" };

try {
  if (!user.email) {
    throw new ReferenceError("User does not have an email");
  }
} catch (e) {
  console.log(e);
}

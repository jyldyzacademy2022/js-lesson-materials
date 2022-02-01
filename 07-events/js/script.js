window.addEventListener("load", function () {
  const input = document.querySelector(".input");
  const btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    const userInput = input.value;

    input.value = "";

    alert(userInput);
  });
});

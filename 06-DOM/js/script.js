const title = document.querySelector("[data-title]");
const subTitle = document.querySelector("#subtitle");
const paragraphs = document.querySelectorAll(".text");
const form = document.querySelector("form");
const inputText = document.querySelector("input[type='text']");

paragraphs.forEach((elem) => {
  elem.style.color = "yellow";
});

form.style.padding = "5rem";
form.style.border = "1px solid black";
form.style.backgroundColor = "red";

inputText.style.width = "500px";
inputText.style.height = "100px";

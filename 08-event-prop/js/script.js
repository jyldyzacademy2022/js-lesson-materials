const container = document.querySelector(".container");

const lis = document.querySelectorAll("li");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    console.log(li);
  });
});

container.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

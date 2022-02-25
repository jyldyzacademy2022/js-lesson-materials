document.getElementById("get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const numberOfJokes = document.getElementById("number").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const res = JSON.parse(this.response);

      let output = "";

      if (res.type === "success") {
        res.value.forEach((item) => {
          output += `
            <li>
              ${item.joke}
            </li>
          `;
        });
      } else {
        output += `<li>Error</li>`;
      }

      document.getElementById("jokes").innerHTML = output;

      console.log(res);
    }
  };

  xhr.send();

  e.preventDefault();
}

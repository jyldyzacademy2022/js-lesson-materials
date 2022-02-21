document.getElementById("get-user").addEventListener("click", loadUser);

function loadUser() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "user.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const user = JSON.parse(this.response);

      const output = `
        <ul>
          <li>
            <span>ID: ${user.id}</span>
            <h4>${user.name}</h4>
            <span>Age: ${user.age}</span>
          </li>
        </ul>
      `;

      document.querySelector(".output").innerHTML = output;
    }
  };

  xhr.send();
}

document.getElementById("get-users").addEventListener("click", loadUsers);

function loadUsers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "users.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const users = JSON.parse(this.response);

      let sum = 0;

      users.forEach((user) => {
        sum += user.age;
      });

      const average = sum / users.length;

      console.log(sum);

      document.querySelector(".output").innerHTML = average;
    }
  };

  xhr.send();
}

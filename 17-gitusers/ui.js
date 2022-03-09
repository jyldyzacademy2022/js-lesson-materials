class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary d-block mb-3">View Profile</a>
          </div>
          <div class="col-md-9">
            <div class="mb-3">
              <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge bg-success">Followers: ${user.followers}</span>
            </div
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Registered: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge bg-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("repos").innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(msg, className) {
    this.clearAlert();

    const div = document.createElement("div");
    div.className = className;

    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector(".search-container");
    const searchBox = document.querySelector(".search");

    container.insertBefore(div, searchBox);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}

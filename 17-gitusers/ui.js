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
}

class Github {
  constructor() {
    this.client_id = "f09a6225a36f5f2a9bd2";
    this.client_secret = "cf2d6368a6d22051a8de61ed325c924588ff03aa";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile: profile,
    };
  }
}

const data = [
  {
    name: "john",
    age: 15,
    location: "london",
    image: "https://randomuser.me/api/portraits/med/men/10.jpg",
  },
  {
    name: "pete",
    age: 15,
    location: "Bishkek",
    image: "https://randomuser.me/api/portraits/med/men/9.jpg",
  },
  {
    name: "mary",
    age: 15,
    location: "NY",
    image: "https://randomuser.me/api/portraits/med/men/79.jpg",
  },
];

// profile iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const profiles = profileIterator(data);

nextProfile();

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profile-display").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">
          <h3>Name: ${currentProfile.name}</h3>
          <p>Age: ${currentProfile.age}</p>
          <p>Location: ${currentProfile.location}</p>
        </li>
      </ul>
    `;

    document.getElementById("image-display").innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    alert("No more Users");
  }
}

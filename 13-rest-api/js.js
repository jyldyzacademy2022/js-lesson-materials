/* 
  GET
  POST
  PUT
  DELETE

  ENDPOINTS

  GET --> https://someurl.com/api/users --> Get all users
  GET --> https://someurl.com/api/users/1 --> Get single user

  POST --> https://someurl.com/api/users --> Add user

  PUT --> https://someurl.com/api/users/1 --> Update user

  DELETE --> https://someurls.com/api/users/1 --> Delete User
  
*/

const posts = [
  {
    title: "Post 1 title",
    body: "Post 1 body text",
  },
  {
    title: "Post 2 title",
    body: "Post 2 body text",
  },
];

/* function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 3000);
}

function getPosts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
} */

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject(error);
      }
    }, 3000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

getPosts();

createPost({ title: "Post 3 title", body: "Post 3 body text" })
  .then(getPosts)
  .catch((error) => {
    console.log(error);
  });

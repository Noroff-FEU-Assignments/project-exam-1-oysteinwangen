const postsContainer = document.querySelector(".posts-list");
const url = "https://headless.epokestudio.no/wp-json/wp/v2/posts?per_page=20";

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    console.log(posts);

    postsContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
      if (!posts[i]) {
        continue;
      }
      if (i >= 12) {
        break;
      }

      postsContainer.innerHTML += `
      <a href="./post.html?id=${posts[i].id}">
      <div>

        <h3>${posts[i].title.rendered}</h3>
      </div></a>
    
`;
    }
  } catch (error) {
    console.log(error);
    postsContainer.innerHTML = "";
    postsContainer.innerHTML = error;
  }
}

fetchPosts();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const postId = params.get("id");

const url = "https://headless.epokestudio.no/wp-json/wp/v2/posts/" + postId;

const postContainer = document.querySelector(".post-content");

const htmlTitle = document.querySelector("title");

async function fetchContent() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    /*productImage.innerHTML = `<img src=${details.images[0].src} />`;*/

    postContainer.innerHTML = `

<h1>${details.title.rendered}</h1>
<div class="line-divider"> </div>
<p>${details.content.rendered}</p>

    `;
    htmlTitle.innerHTML = details.title.rendered + " | Nordic Nomad";
  } catch (error) {
    console.log(error);
    postContainer.innerHTML = "";
    postContainer.innerHTML = error;
  }
}

fetchContent();

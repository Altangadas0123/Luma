const images = document.getElementById("gallery");
const loadMoreButton = document.getElementById("load-more");
const search = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");

let currentPage = 1;

const main = async () => {
  let response = await fetch(`https://api.unsplash.com/photos?page=${currentPage}`, {
    headers: {
      Authorization: "Client-ID gHEUN05WAX435CJpL33L5TM3abRTeVP5M0uycBmRJlM",
    },
  });

  if (!response.ok) {
    throw new Error("Error");
  }

  const result = await response.json();

  result.forEach((photo) => {
    const id = photo.id;
    const imageUrl = photo.urls.small;

    const imgElement = document.createElement("img");
    imgElement.className = "w-full h-auto mb-6 break-inside-avoid rounded-2xl";
    imgElement.src = imageUrl;
    imgElement.alt = id;

    images.appendChild(imgElement);
  });

  loadMoreButton.textContent = "Load more ↓";
  loadMoreButton.disabled = false;
};


searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("first");
})




loadMoreButton.addEventListener("click", async () => {
  currentPage++;
  loadMoreButton.textContent = "loading ...";
  loadMoreButton.disabled = true;
  await main();
});

main();

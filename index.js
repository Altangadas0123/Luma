const images = document.getElementById("images");

const main = async () => {
  const response = await fetch("https://api.unsplash.com/photos?page=1", {
    headers: {
      Authorization: "Client-ID gHEUN05WAX435CJpL33L5TM3abRTeVP5M0uycBmRJlM",
    }, 
  });

  if(!response.ok) {
    throw new Error("Error");
  }

  const result = await response.json();


  result.forEach((photo) => {
    const id = photo.id;
    const imageUrl = photo.urls.small;
  
    images.innerHTML += `
    <img class="w-full h-auto mb-6 break-inside-avoid rounded-2xl" src="${imageUrl}"alt="${id}">
    `;
  });
};

main();

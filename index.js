const image = document.getElementById('image');
const genreSelect = document.getElementById('genre-select');
const showImageButton = document.getElementById('show-image-button');

async function getImageUrl(genre) {
  const response = await fetch(`https://nekobot.xyz/api/image?type=${genre}`);
  const data = await response.json();
  return data.message;
}

showImageButton.addEventListener('click', async () => {
  const selectedGenre = genreSelect.value;
  const imageUrl = await getImageUrl(selectedGenre);
  image.src = imageUrl;
});

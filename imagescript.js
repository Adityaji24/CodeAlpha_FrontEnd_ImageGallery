const images = [
  { id: "img1", src: "images/im1.jpg", title: "Golden Sunrise", description: "A breathtaking view of the sun rising over the hills." },
  { id: "img2", src: "images/image2.jpg", title: "Majestic Mountains", description: "Snow-capped peaks under a clear blue sky." },
  { id: "img3", src: "images/image3.jpg", title: "Night Cityscape", description: "A bustling city illuminated by vibrant lights at night." },
  { id: "img4", src: "images/image4.jpg", title: "Enchanted Forest", description: "A peaceful trail surrounded by towering green trees." },
  { id: "img5", src: "images/image5.jpg", title: "Cascading Waterfall", description: "Crystal-clear water cascading down rocky cliffs." },
  { id: "img6", src: "images/image6.jpg", title: "Orchid Sunrise", description: "A vibrant sunrise seen through a field of blooming orchids." },
  { id: "img7", src: "images/image7.jpg", title: "Rocky Mountain View", description: "A panoramic view of rugged mountain terrain." },
  { id: "img8", src: "images/image8.jpg", title: "Dusk in the City", description: "A serene evening view of the city transitioning into night." },
  { id: "img9", src: "images/image9.jpg", title: "Mystic Forest", description: "A serene path through a dense forest blanketed with mist." },
  { id: "img10", src: "images/image10.jpg", title: "Twin Waterfalls", description: "Two waterfalls pouring into a calm pool below." },
  { id: "img11", src: "images/sunrise.jpg", title: "Sunrise Over Orchids", description: "The golden sun emerging over a field of orchids." },
  { id: "img12", src: "images/mountain3.jpg", title: "Cloud-Kissed Peaks", description: "Majestic mountains shrouded in clouds." },
  { id: "img13", src: "images/city.jpg", title: "Urban Dreamscape", description: "The city skyline under a glowing sunset." },
  { id: "img14", src: "images/forest1.jpg", title: "Path Through Pines", description: "A narrow path winding through a pine forest." },
  { id: "img15", src: "images/city1.jpg", title: "Skyline at Twilight", description: "Skyscrapers glowing as twilight descends." },
  { id: "img16", src: "images/waterfall.jpg", title: "Hidden WaterFalls", description: "A secluded waterfall surrounded by lush greenery." }
];

function renderGallery(filteredImages) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; 

  filteredImages.forEach(image => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${image.src}" alt="${image.title}">
      <div class="content">
        <h3>${image.title}</h3>
        <p>${image.description}</p>
      </div>
    `;

    gallery.appendChild(card);
  });

  if (filteredImages.length === 0) {
    gallery.innerHTML = "<p>No images found for the given title.</p>";
  }
}

function searchImage() {
  const searchInput = document.getElementById("search-input").value.trim().toLowerCase();
  const filteredImages = images.filter(image => image.title.toLowerCase().includes(searchInput));
  renderGallery(filteredImages);
}

function liveSearchImage() {
  const searchInput = document.getElementById("search-input").value.trim().toLowerCase();
  const filteredImages = images.filter(image => image.title.toLowerCase().includes(searchInput));
  renderGallery(filteredImages);
}

function resetSearch() {
  document.getElementById("search-input").value = "";
  renderGallery(images);
}

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  renderGallery([images[randomIndex]]);
}

renderGallery(images);

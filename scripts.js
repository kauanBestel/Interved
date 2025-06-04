// =========================
// Modal (abrir/fechar)
// =========================
//const openModal = document.getElementById("openModal");
//const closeModal = document.getElementById("closeModal");
//const modal = document.getElementById("myModal");
//
//openModal.addEventListener("click", () => {
//  modal.classList.remove("hidden");
//  modal.classList.add("flex");
//});
//
//closeModal.addEventListener("click", () => {
//  modal.classList.remove("flex");
//  modal.classList.add("hidden");
//});

// =========================
// Carousel individual (1 por vez com botões prev/next)
// =========================
const items = document.querySelectorAll(".carousel-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.toggle("hidden", i !== index);
    item.classList.toggle("block", i === index);
  });
}

prev?.addEventListener("click", () => {
  current = (current - 1 + items.length) % items.length;
  showItem(current);
});

next?.addEventListener("click", () => {
  current = (current + 1) % items.length;
  showItem(current);
});

// Inicializa o primeiro item visível (caso haja)
if (items.length > 0) {
  showItem(current);
}

// =========================
// Carousel em grupo (4 por vez com loop automático)
// =========================
const images = [
  "./logos/Catalent.svg",
  "./logos/Grupo_Petrópolis_logo.svg",
  "./logos/sanovo.svg",
  "./logos/Eurofarma_logo.png",
  "./logos/ihara.svg",
  "./logos/metso.svg",
  "./logos/vitopel.png",
  "./logos/LogoZanchetta.webp",
  "./logos/schaeffler-logo.svg",
  "./logos/votorantim-cimentos-seeklogo.png",
];

const carouselContainer = document.getElementById("carouselContainer");
let index = 0;
const IMAGES_PER_PAGE = 5;

function renderImages() {
  carouselContainer.innerHTML = "";

  for (let i = 0; i < IMAGES_PER_PAGE; i++) {
    const imgIndex = (index + i) % images.length;
    const img = document.createElement("img");
    img.src = images[imgIndex];
    img.className =
      "w-42 h-32 object-contain border border-gray-300 rounded p-2 shadow";
    carouselContainer.appendChild(img);
  }
}

function nextSlide() {
  carouselContainer.classList.remove("opacity-100");
  carouselContainer.classList.add("opacity-0");

  setTimeout(() => {
    index = (index + IMAGES_PER_PAGE) % images.length;
    renderImages();
    carouselContainer.classList.remove("opacity-0");
    carouselContainer.classList.add("opacity-100");
  }, 500);
}

// Inicializa carrossel em grupo com fade suave
carouselContainer.classList.add(
  "transition-opacity",
  "duration-700",
  "ease-in-out",
  "opacity-100"
);
renderImages();
setInterval(nextSlide, 3000);

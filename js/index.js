// pic gallery

const images = document.querySelectorAll(".product-thumbnail");
const productImage = document.querySelector(".product-img");
const prevArrow = document.querySelector(".icon-prev");
const nextArrow = document.querySelector(".icon-next");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    productImage.src = e.target.src.slice(0, -14) + ".jpg";
    images.forEach((img) => {
      img.classList.remove("active");
    });
    image.classList.add("active");
  });
});

prevArrow.addEventListener("click", () => {
  for (let i = images.length - 1; i >= 0; i--) {
    if (
      images[i].previousElementSibling &&
      productImage.src === images[i].src.slice(0, -14) + ".jpg"
    ) {
      productImage.src =
        images[i].previousElementSibling.src.slice(0, -14) + ".jpg";

      for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
      }

      images[i].previousElementSibling.classList.add("active");
      break;
    }
  }
});

nextArrow.addEventListener("click", () => {
  for (let i = 0; i < images.length; i++) {
    if (
      images[i].nextElementSibling &&
      productImage.src === images[i].src.slice(0, -14) + ".jpg"
    ) {
      productImage.src =
        images[i].nextElementSibling.src.slice(0, -14) + ".jpg";

      for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
      }

      images[i].nextElementSibling.classList.add("active");
      break;
    }
  }
});

// lightbox

const lightbox = document.querySelector(".lightbox");
const lightboxCloseBtn = document.querySelector(".lightbox-close");
const lightboxImage = document.querySelector(".lightbox-product");
const lightboxPrevArrow = document.querySelector(".lightbox-prev");
const lightboxNextArrow = document.querySelector(".lightbox-next");
const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");

productImage.addEventListener("click", (e) => {
  if (window.matchMedia("(min-width: 900px)").matches) {
    lightbox.classList.add("lightbox-show");
    lightboxImage.src = e.target.src;
    lightboxThumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
      if (lightboxImage.src === thumbnail.src.slice(0, -14) + ".jpg") {
        thumbnail.classList.add("active");
      }
    });
  }
});

lightboxCloseBtn.addEventListener("click", () => {
  lightbox.classList.remove("lightbox-show");
});

lightboxThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    lightboxImage.src = e.target.src.slice(0, -14) + ".jpg";
    lightboxThumbnails.forEach((img) => {
      img.classList.remove("active");
    });
    thumbnail.classList.add("active");
  });
});

lightboxPrevArrow.addEventListener("click", () => {
  for (let i = lightboxThumbnails.length - 1; i >= 0; i--) {
    if (
      lightboxThumbnails[i].previousElementSibling &&
      lightboxImage.src === lightboxThumbnails[i].src.slice(0, -14) + ".jpg"
    ) {
      lightboxImage.src =
        lightboxThumbnails[i].previousElementSibling.src.slice(0, -14) + ".jpg";

      for (let i = 0; i < lightboxThumbnails.length; i++) {
        lightboxThumbnails[i].classList.remove("active");
      }

      lightboxThumbnails[i].previousElementSibling.classList.add("active");
      break;
    }
  }
});

lightboxNextArrow.addEventListener("click", () => {
  for (let i = 0; i < lightboxThumbnails.length - 1; i++) {
    if (
      lightboxImage.src ===
      lightboxThumbnails[i].src.slice(0, -14) + ".jpg"
    ) {
      lightboxImage.src =
        lightboxThumbnails[i].nextElementSibling.src.slice(0, -14) + ".jpg";

      for (let i = 0; i < lightboxThumbnails.length; i++) {
        lightboxThumbnails[i].classList.remove("active");
      }

      lightboxThumbnails[i].nextElementSibling.classList.add("active");
      break;
    }
  }
});

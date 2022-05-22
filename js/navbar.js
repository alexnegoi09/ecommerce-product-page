const cart = document.querySelector(".cart");
const iconCart = document.querySelectorAll(".icon-cart");

const toggleCart = () => {
  cart.classList.toggle("cart-open");
};

iconCart.forEach((icon) => {
  icon.addEventListener("click", toggleCart);
});

const loadNav = () => {
  if (!window.matchMedia("(min-width: 900px)").matches) {
    const menu = document.querySelector(".menu");
    const menuOpen = document.querySelector(".icon-menu");
    const menuClose = document.querySelector(".icon-close");

    menuOpen.addEventListener("click", () => {
      menu.classList.add("menu-open");
    });

    menuClose.addEventListener("click", () => {
      menu.classList.remove("menu-open");
    });

    // remove lightbox for mobile
    document.querySelector(".lightbox").classList.remove("lightbox-show");
  }
};

window.addEventListener("load", loadNav);
window.addEventListener("resize", loadNav);

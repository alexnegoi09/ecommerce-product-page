const iconPlus = document.querySelector(".icon-plus");
const iconMinus = document.querySelector(".icon-minus");
const quantity = document.querySelector(".quantity");
const addBtn = document.querySelector(".add-btn");
const cartProducts = document.querySelector(".cart-products");
const cartIconBadges = document.querySelectorAll(".cart-icon-container span");
let cartIsEmpty = true;

// quantity

iconPlus.addEventListener("click", () => {
  quantity.stepUp();
});

iconMinus.addEventListener("click", () => {
  quantity.stepDown();
});

// add to cart

addBtn.addEventListener("click", () => {
  const productName = document.querySelector(".product-header").innerText;
  const productPrice = document.querySelector(".discount-price").innerText;
  const checkoutBtn = document.querySelector(".checkout-btn");
  cartProducts.innerHTML = `<div class="product">
                                <img src="./images/image-product-1-thumbnail.jpg" class="product-cart-image">
                                <div class="product-text">
                                    <p class="product-cart-name">${productName}</p>
                                    <p class="product-cart-price">${productPrice} x ${
    quantity.value
  } <span class="final-price">$${parseFloat(
    parseInt(productPrice.slice(1)) * parseInt(quantity.value)
  ).toFixed(2)}</span></p>
                                </div>
                                <img src="./images/icon-delete.svg" class="icon-delete">
                              </div>`;

  cartIconBadges.forEach((badge) => {
    badge.innerText = quantity.value;
  });

  checkoutBtn.classList.add("checkout-btn-show");

  cartIsEmpty = false;

  // delete from cart

  const iconDelete = document.querySelector(".icon-delete");

  iconDelete.addEventListener("click", () => {
    cartProducts.innerText = "Your cart is empty.";
    cartIconBadges.forEach((badge) => {
      badge.innerText = "0";
    });

    checkoutBtn.classList.remove("checkout-btn-show");

    cartIsEmpty = true;
  });
});

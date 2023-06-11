// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan menu
const toggle = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!toggle.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active");
  }
});

// toggle class active
const cart = document.querySelector(".shopping-cart");

// ketika button shopping cart di klik
document.querySelector("#shopping-cart-button").onclick = () => {
  cart.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan menu
const toggleCart = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!toggleCart.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
// const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

const dropdowns = document.querySelectorAll(".dropdown");
const closeButton = document.querySelector(".nav__close-menu");
const openNavButton = document.querySelector(".menu__open-nav");

dropdowns.forEach((drop) => {
  drop.addEventListener("click", handleClick);
});

function handleClick(e) {
  e.preventDefault();
  const classList = e.currentTarget.classList;

  const isOpen = classList.contains("dropdown--open");
  if (isOpen) classList.remove("dropdown--open");
  else {
    closeDropdowns();
    classList.add("dropdown--open");
  }
}

function closeDropdowns() {
  dropdowns.forEach((drop) => {
    drop.classList.remove("dropdown--open");
  });
}

closeButton.addEventListener("click", () => {
  document.getElementById("nav").style.display = "none";
  document.body.style.overflow = "auto";
  document.body.classList.remove("overlay");
});

openNavButton.addEventListener("click", (e) => {
  document.getElementById("nav").style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.classList.add("overlay");
});

const dropdowns = document.querySelectorAll(".dropdown");

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

const form = document.getElementById("form");
const selectMenu = document.getElementById("selectMenu");
const notSelected = document.getElementById("not-selected-btns");

selectMenu.addEventListener("click", () => {
  notSelected.classList.toggle("hidden");
  notSelected.classList.toggle("block");
});

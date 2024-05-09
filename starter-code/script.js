const selectMenu = document.getElementById("selectMenu");
const notSelected = document.getElementById("not-selected-btns");
const selectedBtns = document.querySelectorAll(".selected-btn");

selectedBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedText = button.querySelector(".selected-text").innerHTML;
    const choosedOption = document.getElementById("choosedOption");
    choosedOption.innerHTML = selectedText;
  });
});

selectMenu.addEventListener("click", () => {
  notSelected.classList.toggle("hidden");
  notSelected.classList.toggle("block");
});

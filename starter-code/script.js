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

// Email validaiton
// /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const email = document.querySelector(".inputTypes #email");
const emailImage = document.getElementById("emailImage");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

email.addEventListener("input", () => {
  if (emailRegex.test(email.value) || email.value == "") {
    emailImage.classList.add("invisible");
  } else {
    emailImage.classList.remove("invisible");
  }
});

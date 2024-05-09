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
// Tel validation: /^[0-9]{3,32}$/

const email = document.querySelector(".inputTypes #email");
const emailImage = document.getElementById("emailImage");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

email.addEventListener("input", () => {
  console.log(email.value);
  console.log(emailRegex.test(email.value));
  if (emailRegex.test(email.value) || email.value == "") {
    emailImage.classList.add("invisible");
  } else {
    emailImage.classList.remove("invisible");
  }
});

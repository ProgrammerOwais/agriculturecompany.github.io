/************************************************************ Hamburger coding ******************************************* */
let hamburger = document.querySelector(".header-col-2");
let hamburgerMenu = document.querySelector(".hamburger");
hamburgerMenu.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});

let radioBtn = document.querySelectorAll(".radio");
let radioPara = document.querySelectorAll(".radio-para");
let subRadio = document.querySelectorAll(".sub-radio");
let radioDiv = document.querySelectorAll(".radio-div");

for (let i = 0; i < radioDiv.length; i++) {
  radioBtn[i].addEventListener("click", () => {
    looping(i);
    radioDiv[i].classList.toggle("active");
  });
}
function looping(j) {
  for (let i = 0; i < radioDiv.length; i++) {
    if (i === j) {
      continue;
    }
    if (radioDiv[i].classList.contains("active")) {
      radioDiv[i].classList.remove("active");
    }
  }
}

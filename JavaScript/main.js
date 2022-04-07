/************************************************************ Hamburger coding ******************************************* */
let hamburger = document.querySelector(".header-col-2");
let hamburgerMenu = document.querySelector(".hamburger");
hamburgerMenu.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});
/*************************************************** Video lightbox*************************************** */

function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("myModal").style.opacity = "1";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

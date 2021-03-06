/************************************************************ Hamburger coding ******************************************* */
let hamburger = document.querySelector(".header-col-2");
let hamburgerMenu = document.querySelector(".hamburger");
hamburgerMenu.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});
/////////////////////////////////////////////////////  making sublist toggle in navbar ////////////////////////////////////////
var theme_link = document.querySelector(".themes");
var work_link = document.querySelector(".works");
var sub_list1 = document.querySelector(".sub-list1");
var sub_list2 = document.querySelector(".sub-list2");
var link_arrow = document.querySelectorAll(".link-arrow");
/*************************************************** Section 4 accordian  ************************************/
/// buttons
let infoBtn = document.querySelector(".btn-infor");
let decisionBtn = document.querySelector(".btn-decision");
let orderBtn = document.querySelector(".btn-order");
let relationshipBtn = document.querySelector(".btn-relationship");
/// text divs
let infoDiv = document.querySelector(".info");
let decision = document.querySelector(".decision");
let order = document.querySelector(".order");
let relationship = document.querySelector(".relationship");
infoBtn.classList.add("bg-color");
infoBtn.addEventListener("click", () => {
  infoBtn.classList.add("bg-color");
  decisionBtn.classList.remove("bg-color");
  orderBtn.classList.remove("bg-color");
  relationshipBtn.classList.remove("bg-color");
  // text display/hide
  infoDiv.style.display = "block";
  decision.style.display = "none";
  order.style.display = "none";
  relationship.style.display = "none";
});
orderBtn.addEventListener("click", () => {
  infoBtn.classList.remove("bg-color");
  decisionBtn.classList.remove("bg-color");
  orderBtn.classList.add("bg-color");
  relationshipBtn.classList.remove("bg-color");
  // text display/hide
  infoDiv.style.display = "none";
  decision.style.display = "none";
  order.style.display = "block";
  relationship.style.display = "none";
});
relationshipBtn.addEventListener("click", () => {
  infoBtn.classList.remove("bg-color");
  decisionBtn.classList.remove("bg-color");
  orderBtn.classList.remove("bg-color");
  relationshipBtn.classList.add("bg-color");
  // text display/hide
  infoDiv.style.display = "none";
  decision.style.display = "none";
  order.style.display = "none";
  relationship.style.display = "block";
});
decisionBtn.addEventListener("click", () => {
  infoBtn.classList.remove("bg-color");
  decisionBtn.classList.add("bg-color");
  orderBtn.classList.remove("bg-color");
  relationshipBtn.classList.remove("bg-color");
  // text display/hide
  infoDiv.style.display = "none";
  decision.style.display = "block";
  order.style.display = "none";
  relationship.style.display = "none";
});

/*************************************************** Section 4 accordian for mobile  ************************************/

let infoDiv2 = document.querySelector(".mobile-info");
let decision2 = document.querySelector(".mobile-decision");
let order2 = document.querySelector(".mobile-order");
let relationship2 = document.querySelector(".mobile-relationship");
infoBtn.classList.add("bg-color2");
infoBtn.addEventListener("click", () => {
  infoBtn.classList.toggle("bg-color2");
  infoDiv2.classList.toggle("hide-show1");
});
orderBtn.addEventListener("click", () => {
  orderBtn.classList.toggle("bg-color1");
  order2.classList.toggle("hide-show");
});
relationshipBtn.addEventListener("click", () => {
  relationshipBtn.classList.toggle("bg-color1");
  relationship2.classList.toggle("hide-show");
});
decisionBtn.addEventListener("click", () => {
  decisionBtn.classList.toggle("bg-color1");
  decision2.classList.toggle("hide-show");
});

/*************************************************** Video lightbox*************************************** */

function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("myModal").style.opacity = "1";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slider1Button = document.querySelector(".slider-1__button");
var slider2Button = document.querySelector(".slider-2__button");
var slider3Button = document.querySelector(".slider-3__button");

var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");
var slider3 = document.querySelector(".slider-3");

slider1Button.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("slider-1");
});

slider1Button.addEventListener("click", function(evt) {
  evt.preventDefault();
  slider1.classList.remove("visually-hidden");
  slider2.classList.add("visually-hidden");
  slider3.classList.add("visually-hidden");
  slider1Button.classList.add("slider-active__button");
  slider2Button.classList.remove("slider-active__button");
  slider3Button.classList.remove("slider-active__button");
});

slider2Button.addEventListener("click", function(evt) {
  evt.preventDefault();
  slider1.classList.add("visually-hidden");
  slider2.classList.remove("visually-hidden");
  slider3.classList.add("visually-hidden");
  slider1Button.classList.remove("slider-active__button");
  slider2Button.classList.add("slider-active__button");
  slider3Button.classList.remove("slider-active__button");
});

slider3Button.addEventListener("click", function(evt) {
  evt.preventDefault();
  slider1.classList.add("visually-hidden");
  slider2.classList.add("visually-hidden");
  slider3.classList.remove("visually-hidden");
  slider1Button.classList.remove("slider-active__button");
  slider2Button.classList.remove("slider-active__button");
  slider3Button.classList.add("slider-active__button");
});

var deliveryButton = document.querySelector(".delivery-button");
var guaranteeButton = document.querySelector(".guarantee-button");
var creditButton = document.querySelector(".credit-button");
var deliveryBanner = document.querySelector

deliveryButton.addEventListener("click", function(evt) {
  console.log("button-1");
  deliveryButton.classList.remove("service-menu-item");  
  deliveryButton.classList.add("active-menu-item");
  guaranteeButton.classList.remove("active-menu-item");
  guaranteeButton.classList.add("service-menu-item");
  creditButton.classList.remove("active-menu-item");
  creditButton.classList.add("service-menu-item");  
});

guaranteeButton.addEventListener("click", function(evt) {
  console.log("button-2");
  deliveryButton.classList.remove("active-menu-item");
  deliveryButton.classList.add("service-menu-item");
  guaranteeButton.classList.remove("service-menu-item");
  guaranteeButton.classList.add("active-menu-item");
  creditButton.classList.remove("active-menu-item");
  creditButton.classList.add("service-menu-item");
});

creditButton.addEventListener("click", function(evt) {
  console.log("button-3");
  deliveryButton.classList.remove("active-menu-item");
  deliveryButton.classList.add("service-menu-item");
  guaranteeButton.classList.remove("active-menu-item");
  guaranteeButton.classList.add("service-menu-item");
  creditButton.classList.remove("service-menu-item");
  creditButton.classList.add("active-menu-item");
});
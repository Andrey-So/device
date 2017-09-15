// var sliderButton = [].slice.call(document.querySelectorAll(".slider__button"));
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

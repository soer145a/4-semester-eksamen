"use strict";
import gsap from "gsap";
window.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("Hello World!");
  document.querySelector("#start").addEventListener("click", () => {
    document.querySelector("#start").style.display = "none";
    expandPageElements();
  });
}
function expandPageElements() {
  console.log("OPEN");
  let questionArea = document.querySelector("#calcCO2");
  questionArea.classList.remove("regular");
  questionArea.classList.add("expanded");
  let infoArea = document.querySelector("#info");
  infoArea.classList.remove("infoRegular");
  infoArea.classList.add("infoExpanded");
  let collabHeadline = document.querySelector("#collabHeadline");
  collabHeadline.classList.remove("collabHeadlineRegular");
  collabHeadline.classList.add("collabHeadlineExpanded");
  let collaborators = document.querySelector("#collaborators");
  collaborators.classList.remove("collaboratorsRegular");
  collaborators.classList.add("collaboratorsExpanded");
  let footer = document.querySelector("footer");
  footer.classList.remove("footerRegular");
  footer.classList.add("footerExpanded");
  document.querySelector("#goRight").style.opacity = 100;
  document.querySelector("#goRight").style.pointerEvents = "all";

  makeCalcButtons();
}
function makeCalcButtons() {
  document.querySelector("#goRight").addEventListener("click", () => {
    console.log("GO RIGHT ONCE");
    changeDirection(1);
  });
  document.querySelector("#goLeft").addEventListener("click", () => {
    console.log("GO LEFT ONCE");
    changeDirection(-1);
  });
}
let slideCounter = 1;
function changeDirection(dir) {
  slideCounter = slideCounter + dir;
  console.log(slideCounter);
  if (slideCounter == 1) {
    document.querySelector("#goLeft").style.opacity = 0;
    document.querySelector("#goLeft").style.pointerEvents = "none";
  }
  if (slideCounter > 1) {
    document.querySelector("#goLeft").style.opacity = 100;
    document.querySelector("#goLeft").style.pointerEvents = "all";
  }
  if (slideCounter == 4) {
    document.querySelector("#goRight").style.opacity = 0;
    document.querySelector("#goRight").style.pointerEvents = "none";
  }
  if (slideCounter < 4) {
    document.querySelector("#goRight").style.opacity = 100;
    document.querySelector("#goRight").style.pointerEvents = "all";
  }
  let slider = document.querySelector("#questionSlider");
  switch (slideCounter) {
    case 1:
      slider.classList = "";
      slider.classList.add("slide1");
      console.log("DETTE ER SLIDE 1");
      break;
    case 2:
      slider.classList = "";
      slider.classList.add("slide2");
      console.log("DETTE ER SLIDE 2");
      break;
    case 3:
      slider.classList = "";
      slider.classList.add("slide3");
      console.log("DETTE ER SLIDE3");
      break;
    case 4:
      slider.classList = "";
      slider.classList.add("slide4");
      console.log("DETTE ER SLIDE 4");
  }
}

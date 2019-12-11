"use strict";
import gsap from "gsap";
let globalUserQuestionSheet = {
  diet: "-placeholder-",
  foodSelectionMeat: "-placeholder",
  foodSelectionVeg: "-placeholder",
  totalCost: "-placeholder"
};
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
  startCalc();
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
function startCalc() {
  let qBoxes = document.querySelectorAll(".ID1_1");
  qBoxes.forEach(item => {
    item.addEventListener("click", () => {
      qBoxes.forEach(box => {
        box.style.backgroundColor = "white";
      });

      questionHandler1(item);
    });
  });
}
function questionHandler1(item) {
  console.log(item);
  item.style.backgroundColor = "blue";
  globalUserQuestionSheet.diet = item.dataset.type;
  console.log(globalUserQuestionSheet);
  document.querySelector(".next1").addEventListener("click", () => {
    displayQuestion2(item.dataset.type);
  });
}
function displayQuestion2(food) {
  console.log("Q 2");
  document.querySelector("#questionID1_1").style.opacity = 0;
  setTimeout(() => {
    document.querySelector("#questionID1_1").style.display = "none";
    if (food == "vegetar" || food == "veganer") {
      document.querySelector("#questionID1_3").style.display = "block";
      setTimeout(() => {
        document.querySelector("#questionID1_3").style.opacity = 100;
        questionHandler3();
      }, 200);
    } else {
      document.querySelector("#questionID1_2").style.display = "block";
      setTimeout(() => {
        document.querySelector("#questionID1_2").style.opacity = 100;
        questionHandler2();
      }, 200);
    }
  }, 200);
}
function questionHandler2() {
  let qBoxes = document.querySelectorAll(".ID1_2");
  console.log(qBoxes);
  let foodArrayMeat = [];
  qBoxes.forEach(item => {
    item.style.backgroundColor = "white";
    item.addEventListener("click", () => {
      if (item.style.backgroundColor == "white") {
        item.style.backgroundColor = "blue";
      } else {
        item.style.backgroundColor = "white";
      }
      foodArrayMeat = [];
      qBoxes.forEach(obj => {
        if (obj.style.backgroundColor == "blue") {
          foodArrayMeat.push(obj.dataset.type);
          console.log(foodArrayMeat);
        }
      });
    });
  });
  document.querySelector(".next2").addEventListener("click", () => {
    globalUserQuestionSheet.foodSelectionMeat = foodArrayMeat;
    console.log(globalUserQuestionSheet);
    displayQuestion3();
  });
}
function displayQuestion3() {
  console.log("Q 3");
  document.querySelector("#questionID1_2").style.opacity = 0;
  setTimeout(() => {
    document.querySelector("#questionID1_2").style.display = "none";
    document.querySelector("#questionID1_3").style.display = "block";
    setTimeout(() => {
      document.querySelector("#questionID1_3").style.opacity = 100;
      questionHandler3();
    }, 200);
  }, 200);
}
function questionHandler3() {
  let qBoxes = document.querySelectorAll(".ID1_3");
  console.log(qBoxes);
  let foodArrayVeg = [];
  qBoxes.forEach(item => {
    item.style.backgroundColor = "white";
    item.addEventListener("click", () => {
      if (item.style.backgroundColor == "white") {
        item.style.backgroundColor = "blue";
      } else {
        item.style.backgroundColor = "white";
      }
      foodArrayVeg = [];
      qBoxes.forEach(obj => {
        if (obj.style.backgroundColor == "blue") {
          foodArrayVeg.push(obj.dataset.type);
          console.log(foodArrayVeg);
        }
      });
    });
  });
  document.querySelector(".next3").addEventListener("click", () => {
    globalUserQuestionSheet.foodSelectionVeg = foodArrayVeg;
    console.log(globalUserQuestionSheet);
    changeDirection(1);
  });
}

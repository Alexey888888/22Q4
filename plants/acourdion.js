const b1 = document.getElementById("1");
const b2 = document.getElementById("2");
const b3 = document.getElementById("3");
const accordionItem = document.querySelectorAll(".accourdion__item");
const arrow1 = document.getElementById("11");
const arrow2 = document.getElementById("22");
const arrow3 = document.getElementById("33");

b1.addEventListener("click", () => {
  accordionItem[0].classList.toggle("open");
  b1.classList.toggle("pi-activ");
  accordionItem[1].classList.remove("open");
  b2.classList.remove("pi-activ");
  accordionItem[2].classList.remove("open");
  b3.classList.remove("pi-activ");
  arrow1.classList.toggle("prices__arraw__active");
  arrow2.classList.remove("prices__arraw__active");
  arrow3.classList.remove("prices__arraw__active");
});

b2.addEventListener("click", () => {
  accordionItem[1].classList.toggle("open");
  b2.classList.toggle("pi-activ");
  accordionItem[0].classList.remove("open");
  b1.classList.remove("pi-activ");
  accordionItem[2].classList.remove("open");
  b3.classList.remove("pi-activ");
  arrow2.classList.toggle("prices__arraw__active");
  arrow1.classList.remove("prices__arraw__active");
  arrow3.classList.remove("prices__arraw__active");
});

b3.addEventListener("click", () => {
  accordionItem[2].classList.toggle("open");
  b3.classList.toggle("pi-activ");
  accordionItem[0].classList.remove("open");
  b1.classList.remove("pi-activ");
  accordionItem[1].classList.remove("open");
  b2.classList.remove("pi-activ");
  arrow3.classList.toggle("prices__arraw__active");
  arrow1.classList.remove("prices__arraw__active");
  arrow2.classList.remove("prices__arraw__active");
});

//const buttons = document.querySelectorAll(".prices__item");
//const accordionItem = document.querySelectorAll(".accourdion__item");

//buttons.forEach((button) => {
// button.addEventListener("click", (event) => {
//  let pushPrice = event.target.innerHTML;
//  if (pushPrice === "Basics") {
//    accordionItem[0].classList.toggle("open");
//    buttons[0].classList.toggle("pi-activ");
//  } else if (pushPrice === "Standard") {
//    accordionItem[1].classList.toggle("open");
//    buttons[1].classList.toggle("pi-activ");
//  } else if (pushPrice === "Pro care") {
//    accordionItem[2].classList.toggle("open");
//    buttons[2].classList.toggle("pi-activ");
//  }
//});
//});

const accourdionButton = document.querySelectorAll(".prices__item");
const accordionItem = document.querySelectorAll(".accourdion__item");
const arrowAccourdion = document.querySelectorAll(".prices__arrow");

accourdionButton[0].addEventListener("click", () => {
  accordionItem[0].classList.toggle("open");
  accourdionButton[0].classList.toggle("pi-activ");
  accordionItem[1].classList.remove("open");
  accourdionButton[1].classList.remove("pi-activ");
  accordionItem[2].classList.remove("open");
  accourdionButton[2].classList.remove("pi-activ");
  arrowAccourdion[0].classList.toggle("prices__arraw__active");
  arrowAccourdion[1].classList.remove("prices__arraw__active");
  arrowAccourdion[2].classList.remove("prices__arraw__active");
});

accourdionButton[1].addEventListener("click", () => {
  accordionItem[1].classList.toggle("open");
  accourdionButton[1].classList.toggle("pi-activ");
  accordionItem[0].classList.remove("open");
  accourdionButton[0].classList.remove("pi-activ");
  accordionItem[2].classList.remove("open");
  accourdionButton[2].classList.remove("pi-activ");
  arrowAccourdion[1].classList.toggle("prices__arraw__active");
  arrowAccourdion[0].classList.remove("prices__arraw__active");
  arrowAccourdion[2].classList.remove("prices__arraw__active");
});

accourdionButton[2].addEventListener("click", () => {
  accordionItem[2].classList.toggle("open");
  accourdionButton[2].classList.toggle("pi-activ");
  accordionItem[0].classList.remove("open");
  accourdionButton[0].classList.remove("pi-activ");
  accordionItem[1].classList.remove("open");
  accourdionButton[1].classList.remove("pi-activ");
  arrowAccourdion[2].classList.toggle("prices__arraw__active");
  arrowAccourdion[0].classList.remove("prices__arraw__active");
  arrowAccourdion[1].classList.remove("prices__arraw__active");
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

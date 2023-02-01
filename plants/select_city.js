const cityButton = document.querySelector(".menu-city");
const selectBox = document.querySelector(".select-box");
const cityInfo = document.querySelector(".city__info");
const cyty_Name = document.querySelectorAll(".city-name");
const ny = document.getElementById("ny");
const can = document.getElementById("can");
const yon = document.getElementById("yon");
const sher = document.getElementById("sher");
const cityValue = document.querySelector(".city__value");
const phoneValue = document.querySelector(".phone__value");
const officeValue = document.querySelector(".office__value");
const cityName = document.querySelector(".contact__city");
const tel = document.querySelector(".office__button");
const contactArrow = document.querySelector(".arrow--img");

cityButton.addEventListener("click", function () {
  selectBox.classList.toggle("active");
  contactArrow.classList.toggle("contacts__arraw__active");
  //cityBox.classList.add("actives");
});
//

cyty_Name.forEach((row) => {
  row.addEventListener("click", () => {
    cityInfo.classList.add("actives");
    cityName.classList.add("act");
  });

  //selectBox.classList.remove("active");
  ny.addEventListener("click", () => {
    cityValue.innerHTML = "New York City";
    phoneValue.innerHTML = "+1	212	456 0002";
    officeValue.innerHTML = "9 East 91st Street";
    cityName.innerHTML = cityValue.innerHTML;
    tel.setAttribute("href", `tel:${phoneValue.innerHTML}`);
  });
  can.addEventListener("click", () => {
    cityValue.innerHTML = "Canandaigua, NY";
    phoneValue.innerHTML = "+1	585	393 0001";
    officeValue.innerHTML = "151 Charlotte Street";
    cityName.innerHTML = cityValue.innerHTML;
    tel.setAttribute("href", `tel:${phoneValue.innerHTML}`);
  });
  sher.addEventListener("click", () => {
    cityValue.innerHTML = "Sherrill, NY";
    phoneValue.innerHTML = "+1	315	908 0004";
    officeValue.innerHTML = "14 WEST Noyes BLVD";
    cityName.innerHTML = cityValue.innerHTML;
    tel.setAttribute("href", `tel:${phoneValue.innerHTML}`);
  });
  yon.addEventListener("click", () => {
    cityValue.innerHTML = "Yonkers, NY";
    phoneValue.innerHTML = "+1	914	678 0003";
    officeValue.innerHTML = "511 Warburton Ave";
    cityName.innerHTML = cityValue.innerHTML;
    tel.setAttribute("href", `tel:${phoneValue.innerHTML}`);
  });
});

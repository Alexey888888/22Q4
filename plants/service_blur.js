const buttonsService = document.querySelectorAll(".button_bordered_colored");
const cardsItem = document.querySelectorAll(".services__card");

let i = 0;

buttonsService.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (i == 0) {
      cardsItem.forEach((card) => {
        card.classList.add("blur");
      });
    }

    let pushButton = event.target.innerHTML;

    if (pushButton === "Gardens") {
      cardsItem[0].classList.toggle("blur");
      cardsItem[4].classList.toggle("blur");
      buttonsService[0].classList.toggle("bbc-active");
      if (buttonsService[0].classList.contains("bbc-active")) {
        i++;
      } else i--;
      console.log(i);
    } else if (pushButton === "Lawn") {
      cardsItem[2].classList.toggle("blur");
      buttonsService[1].classList.toggle("bbc-active");
      if (buttonsService[1].classList.contains("bbc-active")) {
        i++;
      } else i--;
      console.log(i);
    } else if (pushButton === "Planting") {
      cardsItem[1].classList.toggle("blur");
      cardsItem[3].classList.toggle("blur");
      cardsItem[5].classList.toggle("blur");
      buttonsService[2].classList.toggle("bbc-active");
      if (buttonsService[2].classList.contains("bbc-active")) {
        i++;
      } else i--;
      console.log(i);
    }
    ///////////////////////////////////////////////////////
    if (i == 2) {
      buttonsService.forEach((button) => {
        if (!button.classList.contains("bbc-active")) {
          button.disabled = true;
        }
      });
    } else
      buttonsService.forEach((button) => {
        button.disabled = false;
      });

    //       if (i > 2) {
    //           buttonsService.forEach((button) => {
    //             button.classList.remove("bbc-active");
    //             i = 0;
    //           });
    //         }

    if (i === 0) {
      cardsItem.forEach((card) => {
        card.classList.remove("blur");
      });
    }
  });
});

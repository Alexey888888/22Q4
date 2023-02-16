const timeOnPage = document.querySelector(".time");
const dateOnPage = document.querySelector(".date");

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  timeOnPage.innerHTML = currentTime;
  setTimeout(showTime, 1000);
  showDate();
}

function showDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("en-US", options);
  dateOnPage.innerHTML = currentDate;
}

showTime();

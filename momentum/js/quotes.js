const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const change = document.querySelector(".change-quote");
let randomNum = getRandomNum();
getRandomNum();
async function getQuotes() {
  getRandomNum();
  randomNum++;
  if (randomNum > 20) randomNum = 0;
  console.log(randomNum);
  const quotes = "assets/json/quoteBook.json";
  const res = await fetch(quotes);
  const data = await res.json();
  const arr = data;
  quote.textContent = arr[randomNum].text;
  author.innerHTML = arr[randomNum].author;
}
getQuotes();

function getRandomNum() {
  return Math.floor(Math.random() * 20);
}

change.addEventListener("click", getQuotes);

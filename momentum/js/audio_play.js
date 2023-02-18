import playList from "./playList.js";

const prev = document.querySelector(".play-prev");
const next = document.querySelector(".play-next");
const btnPlay = document.querySelector(".play");
const playListContainer = document.querySelector(".play-list");
let playItem;
let isPlay = false;
let playNum = 0;

const audio = new Audio();

function makePlayList() {
  playList.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add("play-item");
    li.textContent = el.title;
    playListContainer.append(li);
    playItem = document.querySelectorAll(".play-item");
  });
}

makePlayList();

function playAudio() {
  if (playNum > 3) playNum = 0;
  if (playNum < 0) playNum = 3;
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  toggleBtn();
  playItem[playNum].classList.toggle("item-active");
  if (!isPlay) {
    isPlay = true;
    audio.play();
  } else {
    audio.pause();
    isPlay = false;
  }
  audio.addEventListener("ended", playNext);
}

function playNext() {
  playNum++;
  isPlay = false;
  resetPlayItem();
  playAudio();
}

function playPrev() {
  playNum--;
  isPlay = false;
  resetPlayItem();
  playAudio();
}

function toggleBtn() {
  if (!isPlay) {
    btnPlay.classList.add("pause");
  } else btnPlay.classList.remove("pause");
}

function resetPlayItem() {
  playItem.forEach((el) => {
    el.classList.remove("item-active");
  });
}

btnPlay.addEventListener("click", playAudio);

next.addEventListener("click", playNext);
prev.addEventListener("click", playPrev);

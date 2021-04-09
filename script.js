// Variables

var play = document.getElementById("play");
var display = document.getElementById("display");
var album = document.getElementById("album");
var mySound = document.getElementById("sound");
var albumTitle = document.getElementById("album_title");
var artist = document.getElementById("artist");
var i = 0;

//Lists
var SongList = [
  "slow up.mp3",
  "human.mp3",
  "vain.mp3",
  "trouble.mp3",
  "evergreen.mp3",
  "pain.mp3",
];
var PictureList = [
  "jacob banks.jpeg",
  "jon bellion.png",
  "kirby.jpeg",
  "trouble.jpg",
  "yebba.jpeg",
  "foy vance.jpeg",
];
var ArtistList = [
  "Jacob Banks",
  "Jon Bellion",
  "Kirby",
  "Ray Lamontagne",
  "Yebba",
  "Foy Vance",
];
var TitleList = [
  "Slow Up",
  "Human",
  "Vain",
  "Trouble",
  "Evergreen",
  "Pain Never Hurt Me Like Love",
];

function backgroundChange(int) {
  imgUrl = `url("./images/${PictureList[int]}")`;

  display.style.background = imgUrl;
  display.style.backgroundSize = "cover";
  display.style.backgroundPosition = "center";
  display.style.backgroundRepeat = "no-repeat";

  album.style.background = imgUrl;
  album.style.backgroundSize = "cover";
  album.style.backgroundPosition = "center";
  album.style.backgroundRepeat = "no-repeat";
}

backgroundChange(0);

function Next() {
  i == SongList.length - 1 ? (i = 0) : i++;
  SelectedSong();
}

function Previous() {
  i == 0 ? (i = SongList.length - 1) : i--;
  SelectedSong();
}

play.addEventListener("click", () => {
  if (play.name == "play-outline") {
    addClass();
    play.name = "pause-outline";
    mySound.play();
  } else {
    removeClass();
    play.name = "play-outline";
    mySound.pause();
  }
});

function SelectedSong() {
  mySound.src = `./songs/${SongList[i]}`;
  mySound.autoplay = true;
  play.name = "pause-outline";
  albumTitle.innerHTML = i + 1 + ". " + TitleList[i];
  artist.innerHTML = ArtistList[i];

  backgroundChange(i);
  addClass();
}

function addClass() {
  display.classList.add("active");
  album.classList.add("rotate-image");
}

function removeClass() {
  display.classList.remove("active");
  album.classList.remove("rotate-image");
}

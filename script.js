var play = document.getElementById("play");
var display = document.getElementById("display");
var album = document.getElementById("album");
var mySound = document.getElementById("sound");
var circle = document.getElementById("audio_circle");
var bar = document.getElementById("audio_bar");
var totalTime = document.getElementById("total_time");
var currentTime = document.getElementById("current");
var songList = document.getElementById("song_list");
var List = [
  "slow up.mp3",
  "human.mp3",
  "vain.mp3",
  "trouble.mp3",
  "evergreen.mp3",
  "pain.mp3",
];
var Picture = [
  "jacob banks.jpeg",
  "jon bellion.png",
  "kirby.jpeg",
  "trouble.jpg",
  "yebba.jpeg",
  "foy vance.jpeg",
];
var Artists = [
  "Jacob Banks",
  "Jon Bellion",
  "Kirby",
  "Ray Lamontagne",
  "Yebba",
  "Foy Vance",
];
var Titles = [
  "Slow Up",
  "Human",
  "Vain",
  "Trouble",
  "Evergreen",
  "Pain Never Hurt Me Like Love",
];
var albumTitle = document.getElementById("album_title");
var artist = document.getElementById("artist");
var fft;
var pSong;
var song = 0;

var songToPlay;
var fft;
var particles = [];

function backgroundChange(int) {
  display.style.background = `url("./images/${Picture[int]}")`;

  display.style.backgroundSize = "cover";
  display.style.backgroundPosition = "center";
  display.style.backgroundRepeat = "no-repeat";

  album.style.background = `url("./images/${Picture[int]}")`;

  album.style.backgroundSize = "cover";
  album.style.backgroundPosition = "center";
  album.style.backgroundRepeat = "no-repeat";
}

backgroundChange(0);

function Next() {
  if (song == List.length - 1) {
    song = 0;
  } else {
    song += 1;
  }
  display.classList.add("active");
  album.classList.add("rotate-image");

  SelectedSong();
}

function Previous() {
  if (song == 0) {
    song = List.length - 1;
  } else {
    song--;
  }
  display.classList.add("active");
  album.classList.add("rotate-image");

  SelectedSong();
}

play.addEventListener("click", () => {
  console.log(mySound.duration);
  if (play.name == "play-outline") {
    display.classList.add("active");
    album.classList.add("rotate-image");
    play.name = "pause-outline";
    mySound.play();
  } else {
    play.name = "play-outline";
    album.classList.remove("rotate-image");
    mySound.pause();
    display.classList.remove("active");
  }
});

function SelectedSong() {
  mySound.src = `./songs/${List[song]}`;
  mySound.autoplay = true;
  play.name = "pause-outline";
  backgroundChange(song);
  albumTitle.innerHTML = song + 1 + ". " + Titles[song];
  artist.innerHTML = Artists[song];
}

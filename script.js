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
  "https://i1.sndcdn.com/avatars-000334778436-ijdn6o-t500x500.jpg",
  "https://www.coupdemainmagazine.com/sites/default/files/styles/feature_header_image/public/feature/16221/head-16221-1575065731.jpg?itok=dEnrPdV8",
  "https://i.ytimg.com/vi/bNEo25IY9gM/maxresdefault.jpg",
  "http://images.genius.com/62778cea806168eca314fe7f855993dd.1000x1000x1.jpg",
  "https://images.squarespace-cdn.com/content/v1/5a9b0fa0620b8564e4ffac6f/1520978909432-LH65HXCG9EJPIYQZDDQO/ke17ZwdGBToddI8pDm48kO_4ba_0ZmyVDztI1s1JFVJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICagYbBMU432PyN5R4cw3Py1Wmak9RogInrz3WCVklOcKMshLAGzx4R3EDFOm1kBS/YEBBA+evergreen.jpg?format=1500w",
  "https://www.irishtimes.com/polopoly_fs/1.1496411.1376667596!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
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
  imgUrl = `url("${PictureList[int]}")`;

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

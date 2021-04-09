var play = document.getElementById("play");
var display = document.getElementById("display");
var album = document.getElementById("album");
var mySound = document.getElementById("sound");
var circle = document.getElementById("audio_circle");
var bar = document.getElementById("audio_bar");
var totalTime = document.getElementById("total_time");
var currentTime = document.getElementById("current");
var songList = document.getElementById("song_list");
var List = ["slow up.mp3", "human.mp3", "vain.mp3"];
var Picture = ["jacob banks.jpeg", "jon bellion.png", "kirby.jpeg"];
var Artists = ["Jacob Banks", "Jon Bellion", "Kirby"];
var songTitles = ["Slow Up", "Human", "Vain"];
var albumTitle = document.getElementById("album_title");
var artist = document.getElementById("artist");
var fft;
var pSong;
var song = 0;

var songToPlay;
var fft;
var particles = [];

function preload() {
  songToPlay = loadSound(`./songs/${List[song]}`);
  img = loadImage("./images/background.jpeg");
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  fft = new p5.FFT();
}

function draw() {
  background(img);
  noFill();

  translate(width / 2, height / 2);

  var wave = fft.waveform();

  for (var t = -1; t <= 1; t += 2) {
    beginShape();
    for (var i = 0; i <= 180; i++) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));

      var r = map(wave[index], -1, 1, 150, 350);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();
  }
  CreateParticles();
}

function CreateParticles() {
  var p = new Particle();
  particles.push(p);

  for (var i = particles.length - 1; i >= 0; i--) {
    if (!particles[i].edges()) {
      particles[i].update();
      particles[i].show();
    } else {
      particles.splice(i, 1);
    }
  }
}

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
  SelectedSong();
}

function Previous() {
  if (song == 0) {
    song = List.length - 1;
  } else {
    song--;
  }
  display.classList.add("active");
  SelectedSong();
}

play.addEventListener("click", () => {
  CreateParticles();
  console.log(mySound.duration);
  if (play.name == "play-outline") {
    display.classList.add("active");
    play.name = "pause-outline";
    mySound.play();
  } else {
    play.name = "play-outline";
    mySound.pause();
    display.classList.remove("active");
  }
});

function SelectedSong() {
  mySound.src = `./songs/${List[song]}`;
  mySound.autoplay = true;
  play.name = "pause-outline";
  backgroundChange(song);
  albumTitle.innerHTML = song + 1 + ". " + songTitles[song];
  artist.innerHTML = Artists[song];
}

class Particle {
  constructor() {
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0, 0);
    this.acc = this.pos.copy().mult(random(0.00001));

    this.w = random(3, 5);

    this.color = [random(150, 255), random(150, 255), random(150, 255)];
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  edges() {
    if (
      this.pos.x < -width / 2 ||
      this.pos.x > width / 2 ||
      this.pos.y < -height / 2 ||
      this.pos.y > height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}

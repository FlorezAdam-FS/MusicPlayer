function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
    noLoop();
  } else {
    song.play();
    Loop();
  }
}

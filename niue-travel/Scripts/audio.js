function initAudioPlayer() {
  const audio = document.getElementById("audio");

  if (!audio || typeof Plyr === "undefined") {
    return;
  }

  const player = new Plyr(audio, {
    controls: ["play", "progress", "current-time", "mute", "volume"],
    settings: [],
    hideControls: false,
  });

  const subtitle = document.querySelector(".hero__subtitle");
  subtitle.addEventListener("click", function () {
    player.play();
  });
}

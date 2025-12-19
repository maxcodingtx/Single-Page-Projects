var numClicks = 0;
var started = false;

// cps = clicks per second
function getCPS() {
  numClicks += 1;
  const totalClicksElement = document.getElementById("totalClicks");
  totalClicksElement.innerHTML = numClicks;
  if (window.started) {
    return;
  }
  window.started = true;

  let timeSelected = document.getElementsByClassName("is-active")[0].id;
  timeSelected *= 1;

  if (numClicks === 1) {
    setTimeout(() => {
      let cps = (numClicks / timeSelected).toFixed(2);

      alert("Your cps rate was " + cps);

      numClicks = 0;
      window.started = false;
    }, 1000 * timeSelected);
  }
}

function timer() {
  var timeSelected = document.getElementsByClassName("is-active")[0].id;
  timeSelected *= 1;

  // on the first click, countdown timer will start,
  // due to drift different timers have different delays.
  if (!window.intervalId) {
    const timeLeftEl = document.getElementById("timeLeft");
    timeLeftEl.innerHTML =
      timeSelected < 30 ? timeSelected.toFixed(2) : timeSelected.toFixed();
    window.handleTimeSelection(timeSelected);
  }
}

const cpsButton = document.getElementById("cpsButton");
cpsButton.addEventListener("click", () => {
  getCPS();
  timer();
});

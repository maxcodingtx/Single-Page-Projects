var numClicks = 0;
var started = false;

// cps = clicks per second




function getCPS() {
  numClicks += 1;
  const totalClicksElement = document.getElementById("total-clicks");
  totalClicksElement.innerHTML = numClicks;
  if (window.started) {
    return;
  }
  window.started = true;

  const activeElement = document.getElementsByClassName("time__option--active")[0]

  if (!activeElement) {
    alert("Please select a time duration");
    window.location.reload()
  }

  const timeSelectedId = document.getElementsByClassName("time__option--active")[0].id;
  const timeSelectedFixed = Number(timeSelectedId.slice(0, -1));

  if (numClicks === 1) {
    setTimeout(() => {
      let cps = (numClicks / timeSelectedFixed).toFixed(2);

      alert("Your cps rate was " + cps);

      numClicks = 0;
      window.started = false;
    }, 1000 * timeSelectedFixed);
  }
}

function timer() {
  const activeElement = document.getElementsByClassName("time__option--active")[0]

  if (!activeElement) {
    alert("Please select a time duration");
    window.location.reload();
  }
  const timeSelectedId = document.getElementsByClassName("time__option--active")[0].id
  const timeSelectedFixed = Number(timeSelectedId.slice(0, -1))



  // on the first click, countdown timer will start,
  // due to drift different timers have different delays.
  if (!window.intervalId) {
    const timeLeftEl = document.getElementById("time-remaining");
    timeLeftEl.innerHTML =
      timeSelectedFixed < 30 ? timeSelectedFixed.toFixed(2) : timeSelectedFixed.toFixed();
    window.handleTimeSelection(timeSelectedFixed);
  }
}

const cpsButton = document.getElementById("click-test-button");
cpsButton.addEventListener("click", () => {
  getCPS();
  timer();
});

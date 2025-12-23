var intervalId = null;

var handleTimeSelection = function (timeSelected) {
  if (window.intervalId) {
    return;
  }

  switch (timeSelected) {
    case 1:
      window.intervalId = setInterval(() => {
        timeSelected -= 0.1;
        document.getElementById("time-remaining").innerHTML = timeSelected.toFixed(2);

        if (timeSelected <= 0) {
          clearInterval(window.intervalId);
          window.intervalId = null;
          document.getElementById("time-remaining").innerHTML = 0;
          window.started = false;
        }
      }, 90);
      break;

    case 5:
      window.intervalId = setInterval(() => {
        timeSelected -= 0.1;
        document.getElementById("time-remaining").innerHTML = timeSelected.toFixed(2);

        if (timeSelected <= 0) {
          clearInterval(window.intervalId);
          window.intervalId = null;
          document.getElementById("time-remaining").innerHTML = 0;
          window.started = false;
        }
      }, 92);
      break;

    case 15:
      window.intervalId = setInterval(() => {
        timeSelected -= 0.1;
        document.getElementById("time-remaining").innerHTML = timeSelected.toFixed(2);

        if (timeSelected <= 0) {
          clearInterval(window.intervalId);
          window.intervalId = null;
          document.getElementById("time-remaining").innerHTML = 0;
          window.started = false;
        }
      }, 92);
      break;

    case 30:
      window.intervalId = setInterval(() => {
        timeSelected -= 1;
        document.getElementById("time-remaining").innerHTML = timeSelected.toFixed();

        if (timeSelected <= 0) {
          clearInterval(window.intervalId);
          window.intervalId = null;
          document.getElementById("time-remaining").innerHTML = 0;
          window.started = false;
        }
      }, 1000);
      break;

    case 45:
      window.intervalId = setInterval(() => {
        timeSelected -= 1;
        document.getElementById("time-remaining").innerHTML = timeSelected.toFixed();

        if (timeSelected <= 0) {
          clearInterval(window.intervalId);
          window.intervalId = null;
          document.getElementById("time-remaining").innerHTML = 0;
          window.started = false;
        }
      }, 1000);
      break;

    case 60:
      window.intervalId = setInterval(() => {
        timeSelected -= 1;
        document.getElementById("time-remaining").innerHTML = timeSelected.toFixed();

        if (timeSelected <= 0) {
          clearInterval(window.intervalId);
          window.intervalId = null;
          document.getElementById("time-remaining").innerHTML = 0;
          window.started = false;
        }
      }, 1000);
      break;
  }
};

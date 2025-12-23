const timeSelectElements = [...document.getElementsByClassName("time__option")];

timeSelectElements.forEach((element) => {
  element.addEventListener("click", activeClassHandling);
});

function activeClassHandling(event) {
  if (window.started) {
    return;
  }
  var active = document.getElementsByClassName("time__option--active");

  if (active.length > 0) {
    active[0].className = active[0].className.replace(" time__option--active", "");
  }
  event.target.className += " time__option--active";
}

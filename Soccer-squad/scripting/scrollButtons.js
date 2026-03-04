const scrollContainerIds = {
  1: "goalkeeperContainer",
  2: "defenderContainer",
  3: "midfielderContainer",
  4: "forwardContainer",
};

function scrollGroupByButton(event, direction /* 1 for right, -1 for left */) {
  const buttonId = event.currentTarget.id;
  const buttonNumber = Number(buttonId.slice(-1));
  const containerId = scrollContainerIds[buttonNumber];
  const container = document.getElementById(containerId);

  if (!container) return;

  container.scrollLeft += 250 * direction;
}

$(document).ready(function () {
  $(".scroll-button-right").click(function (event) {
    scrollGroupByButton(event, 1);
  });

  $(".scroll-button-left").click(function (event) {
    scrollGroupByButton(event, -1);
  });
});

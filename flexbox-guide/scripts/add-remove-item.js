// flex container item management functions
function addFlexItem() {
  let itemCount = document.getElementById("numItem").innerHTML * 1;

  if (itemCount < 12) {
    itemCount += 1;
    document.getElementById("numItem").innerHTML = itemCount;

    const flexContainer = document.querySelector("#divFlex");
    flexContainer.insertAdjacentHTML(
      "afterbegin",
      `<p class="flex-playground__item">${itemCount}</p>`
    );

    updateStatusDisplay();
  }
}

function removeFlexItem() {
  let itemCount = document.getElementById("numItem").innerHTML * 1;

  if (itemCount > 1) {
    itemCount -= 1;
    document.getElementById("numItem").innerHTML = itemCount;

    const flexContainer = document.querySelector("#divFlex");
    const firstItem = flexContainer.querySelector(".flex-playground__item");

    if (firstItem) {
      firstItem.remove();
    }

    updateStatusDisplay();
  }
}

// flex utility classes
const flexClasses = {
  direction: [
    "flex-direction-row",
    "flex-direction-column",
    "flex-direction-row-reverse",
    "flex-direction-column-reverse",
  ],
  alignItems: [
    "align-items-flex-start",
    "align-items-center",
    "align-items-flex-end",
    "align-items-stretch",
  ],
  justifyContent: [
    "justify-content-start",
    "justify-content-center",
    "justify-content-end",
    "justify-content-between",
    "justify-content-around",
    "justify-content-evenly",
  ],
  alignContent: [
    "align-content-start",
    "align-content-center",
    "align-content-end",
    "align-content-stretch",
    "align-content-between",
    "align-content-around",
  ],
};

// FLEXBOX UTILITY FUNCTION
//Applies a flexbox class to the demo box, removing any conflicting classes

function applyFlexClass(category, className) {
  const element = document.getElementById("divFlex");
  const classArray = flexClasses[category];

  element.classList.remove(...classArray);
  element.classList.add(className);

  updateStatusDisplay();
}

// STATUS DISPLAY - Update Active Styles

function updateStatusDisplay() {
  const num = document.getElementById("numItem").innerHTML * 1;

  if (num > 0) {
    const element = document.getElementById("divFlex");
    const style = window.getComputedStyle(element);

    document.getElementById(
      "containerFlexDirection"
    ).textContent = `flex-direction: ${style.getPropertyValue(
      "flex-direction"
    )}`;

    document.getElementById(
      "containerAlignItems"
    ).textContent = `align-items: ${style.getPropertyValue("align-items")}`;

    document.getElementById(
      "containerJustifyContent"
    ).textContent = `justify-content: ${style.getPropertyValue(
      "justify-content"
    )}`;

    document.getElementById(
      "containerAlignContent"
    ).textContent = `align-content: ${style.getPropertyValue("align-content")}`;
  } else {
    document.getElementById("containerFlexDirection").textContent = "none";
    document.getElementById("containerAlignItems").textContent = "";
    document.getElementById("containerJustifyContent").textContent = "";
    document.getElementById("containerAlignContent").textContent = "";
  }
}

// CLEAR CLASSES FUNCTION - resets flexbox container to default state
function clearClasses() {
  const element = document.getElementById("divFlex");
  element.removeAttribute("class");
  element.classList.add("flex-playground__demo-box");
  updateStatusDisplay();
}

// IIFE - shows active styles on page load
(function initializeStatusDisplay() {
  window.onload = () => {
    updateStatusDisplay();
  };
})();

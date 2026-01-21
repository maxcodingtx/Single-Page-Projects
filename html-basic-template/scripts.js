window.onload = () => {
  document.getElementById("homeLink").click();
};

// function which displays tab when clicked on
function openTab(evt, tabName) {
  var tabPanels = document.getElementsByClassName("tab-panel");
  for (i = 0; i < tabPanels.length; i++) {
    tabPanels[i].style.display = "none";
  }

  // removing 'header__nav-tab--active' class from tab links (nav buttons)
  var navTabs = document.getElementsByClassName("header__nav-tab");
  for (i = 0; i < navTabs.length; i++) {
    navTabs[i].classList.remove("header__nav-tab--active");
  }

  //show current tab and add 'header__nav-tab--active' class to button that currently selected
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("header__nav-tab--active");
}

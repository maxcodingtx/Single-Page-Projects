
// 'home' tab selected by default
window.onload = () => {
    document.getElementById('homeLink').click()
}

// function which displays tab when clicked on
function openTab(evt, cityName) {

    // setting tabContent divs to not be displayed (display: none)
    var tabContent = document.getElementsByClassName("tabContent");
    for (i=0; i<tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // removing 'active class' from tab links (nav buttons)
    var tabLinks = document.getElementsByClassName("tabLink");
    for (i=0; i<tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "")
    }

    //show current tab and add 'active' class to button that currently selected
    document.getElementById(cityName).style.display = "block"
    evt.currentTarget.className += " active"
}


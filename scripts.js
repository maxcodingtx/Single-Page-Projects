
function openTab(evt, cityName) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i=0; i<tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLink");
    for (i=0; i<tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "")
    }

    
    document.getElementById(cityName).style.display = "block"
    evt.currentTarget.className += " active"
}


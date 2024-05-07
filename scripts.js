
var count = 0;

// calculates total amount of times button has been clicked on
function totalClicks() {
    var totalClicks = document.getElementById('totalClicks')

    count += 1;
    totalClicks.innerHTML = count
};

// adds 'is-active' class when clicked on
function active(event) {
    var active = document.getElementsByClassName('is-active')

    // if another element has 'is-active' class, remove it
    if (active.length > 0) {
        active[0].className = active[0].className.replace(' is-active', '');
    }
    // then, add 'is-active' class to element
    event.target.className += ' is-active'

}


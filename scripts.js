

var count = 0;

function totalClicks() {
    var totalClicks = document.getElementById('totalClicks')

    count += 1;
    totalClicks.innerHTML = count
};


function active(event) {
    var active = document.getElementsByClassName('is-active')

    if (active.length > 0) {
        active[0].className = active[0].className.replace(' is-active', '');
    }
    event.target.className += ' is-active'

}







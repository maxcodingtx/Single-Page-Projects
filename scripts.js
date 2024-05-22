


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


var numClicks = 0

function getCPS() {
    // adding to the number of clicks, showing total number of clicks in 'totalClicks' element
    numClicks += 1
    var totalClicks = document.getElementById('totalClicks')
    totalClicks.innerHTML = numClicks

    // gettind id of element with 'is-active' class (active element)
    var timeSelected = document.getElementsByClassName('is-active')[0].id;
    timeSelected*=1 

    // on first click, create setTimout function
    if (numClicks === 1) {

        // once the time selected has passed, show clicks per second
        setTimeout(() => {
            // calculating clicks per second and showing only two decimal points
            let cps = (numClicks/timeSelected).toFixed(2)

            alert('Your cps rate was ' + cps)
            // reseting total number of clicks
            numClicks = 0;

        }, 1000*timeSelected);
    }

};

function createRipple (event) {
    const BUTTON = event.currentTarget;
    // creating span element, where ripples take place
    const CIRCLE = document.createElement('span')
    // calculating diameter and radius of span element
    const DIAMETER = Math.max(BUTTON.clientWidth, BUTTON.clientHeight);
    const RADIUS = DIAMETER / 2;

    //calculating width, left, top, of ripples
    CIRCLE.style.width = CIRCLE.style.height = `${DIAMETER}px`;
    CIRCLE.style.left = `${event.clientX - (BUTTON.offsetLeft + RADIUS)}px`;
	CIRCLE.style.top = `${event.clientY - (BUTTON.offsetTop + RADIUS)}px`;
    // adding 'ripple' class to span element
	CIRCLE.classList.add('ripple'); 

    const RIPPLE = BUTTON.getElementsByClassName('ripple')[0];
    // removing leftover ripple made by previous click, if any.
    if (RIPPLE) {
        RIPPLE.remove();
    };

    // adding span element as child to button
    BUTTON.appendChild(CIRCLE);

}

// causing ripples when button is clicked
var BUTTON = document.getElementById('cps')
BUTTON.addEventListener('click', createRipple)
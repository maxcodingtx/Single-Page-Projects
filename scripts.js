


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
    /*since 'timeSelected' will be getting decreased in interval, another variable is
    used to keep track of original value of timeSelected*/
    var time = timeSelected


    /* at the first click, start an interval and track time.
    when time is out, show clicks per second (cps) and reset stats */
    if (numClicks === 1) {
        var x = setInterval(() => {
            let cps = (numClicks/time).toFixed(2)
            // timeSelected is decreased by .01 every 10 milliseconds
            timeSelected-=.01;
            // 'timeLeft' element keeps track of time left
            document.getElementById('timeLeft').innerHTML = timeSelected.toFixed(2)

            // if theres no time left, show clicks per second and reset stats
            if (timeSelected <= 0) {
                alert('your cps was ' + cps)
                numClicks = cps = 0

                clearInterval(x);
                document.getElementById('timeLeft').innerHTML = 0;
            }
        }, 10);

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

    const ripple = BUTTON.getElementsByClassName('ripple')[0];
    // removing leftover ripple made by previous click, if any.
    if (ripple) {
        ripple.remove();
    };

    // adding span element as child to button
    BUTTON.appendChild(CIRCLE);

}

// causing ripples when button is clicked
var BUTTON = document.getElementById('cps')
BUTTON.addEventListener('click', createRipple)
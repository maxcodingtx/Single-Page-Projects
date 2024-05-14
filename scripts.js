


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
var start = 0

function getCPS() {
    numClicks += 1

    var time = document.getElementsByClassName('is-active')[0].id;
    time*=1 
    
    var timeLeft = time

    var totalClicks = document.getElementById('totalClicks')
    totalClicks.innerHTML = numClicks


	if (!start) start = new Date/1000
	var timePassed = new Date/1000 - start
	var cps = numClicks / (timePassed)

	if (timePassed >= time) {
		alert('your cps was ' + cps.toFixed(2))
        numClicks = start = cps = 0
	}

    if (numClicks === 1) {
        var x = setInterval(() => {
            timeLeft--;
            document.getElementById('timeLeft').innerHTML = timeLeft

            if (timeLeft == 0) {
                clearInterval(x);
                document.getElementById('timeLeft').innerHTML = 0;
            }
        }, 1000);

    }

};
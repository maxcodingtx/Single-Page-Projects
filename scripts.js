


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
    numClicks += 1
    var totalClicks = document.getElementById('totalClicks')
    totalClicks.innerHTML = numClicks


    var timeSelected = document.getElementsByClassName('is-active')[0].id;
    timeSelected*=1 
    var time = timeSelected



    if (numClicks === 1) {
        var x = setInterval(() => {
            let cps = (numClicks/time).toFixed(2)
            timeSelected-=.01;
            document.getElementById('timeLeft').innerHTML = timeSelected.toFixed(2)

            if (timeSelected <= 0) {
                alert('your cps was ' + cps)

                numClicks = cps = 0


                clearInterval(x);
                document.getElementById('timeLeft').innerHTML = 0;
            }
        }, 10);

    }

};
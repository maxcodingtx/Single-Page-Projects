
window.onload = () => {
    stake.value = rangeSlider.value
}

const numericInputs = document.querySelectorAll("[inputmode='numeric']"); //apply to all inputs
numericInputs.forEach((input) => {
    checkInput(input);
});
function checkInput(el) {
    el.addEventListener("beforeinput", function (e) {
    // keeping track of value before being modified
    let beforeValue = el.value;
    /* 
    When input is being changed, new event listener is created.
    This new event listener will check to see if user input is 
    within regex set in pattern attribute in HTML.
    If it is not within the pattern limits, value remains as before.
    If it is within pattern limits, value is allowed to be changed.
    */
    e.target.addEventListener(
    "input",
    function () {
        /*
        If what user attempted to input is not within the regex
        bounds set inside the pattern attribute, the value is "changed"
        to value before user input
        */
        if (el.validity.patternMismatch) {
            el.value = beforeValue;
        }
    },{ once: true } //makes sure this event listener is executed only once
    );
});
}

const winnings = document.getElementById('winnings')
const payout = document.getElementById('payout')

// calculating winnings and payout on user input
addEventListener('input', function() {
    payout.innerHTML = (stake.value * decimalOdds.value).toFixed(2)
    winnings.innerHTML = ((stake.value * decimalOdds.value)- stake.value).toFixed(2)
})

const rangeSlider = document.getElementById('moneyRange')
// setting stake value equal to slider value when slider value changes
rangeSlider.oninput = () => {
    stake.value = rangeSlider.value
}

const stake = document.getElementById('inputMoney')
// setting slider value when stake value changes
stake.oninput =  () => {
    rangeSlider.value = stake.value
}

const americanOdds = document.getElementById('americanOdds')
const decimalOdds = document.getElementById('decimalOdds')
// listener for all inputs, each input updates the winnings and payout

// calculating decimal odds from american odds
americanOdds.addEventListener('input', function() {
    let oddsInteger = Math.abs(americanOdds.value)
    // calculating is only done when american odds input is valid
    if (americanOdds.value.length >= 4) {
        if(americanOdds.value[0] == '-') {
            // formula to calculate decimal odds with negative american odds
            decimalOdds.value = ((100/oddsInteger) + 1) 
        } else {
            // formula to calculate decimal odds with positive american odds
            decimalOdds.value = ((oddsInteger/100) + 1)
        }
    }
})

// calculating american odds from decimal odds 
decimalOdds.addEventListener('input', function () {
    // using appropriate formula for when decimal odds are between 1.00 and 2.00
    if (decimalOdds.value > 1 && decimalOdds.value < 2) {
        americanOdds.value = -100/(decimalOdds.value-1)
    }
    // using appropriate formula for when decimal odds are more than 2.00
    else if (decimalOdds.value > 2) {
        americanOdds.value = (decimalOdds.value -1 )*100
    }
})

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

const rangeSlider = document.getElementById('moneyRange')
rangeSlider.oninput = () => {
    document.getElementById('inputMoney').value = rangeSlider.value
}

const stake = document.getElementById('inputMoney')
stake.addEventListener('input', function () {
    rangeSlider.value = stake.value
})

const americanOdds = document.getElementById('americanOdds')
const decimalOdds = document.getElementById('decimalOdds')
americanOdds.addEventListener('input', function() {
    let oddsInteger = Math.abs(americanOdds.value)
    if (americanOdds.value.length >= 4) {
        if(americanOdds.value[0] == '-') {
            decimalOdds.value = ((100/oddsInteger) + 1) 
        } else {decimalOdds.value = ((oddsInteger/100) + 1)}
    }
})

decimalOdds.addEventListener('input', function () {
    if (decimalOdds.value > 1 && decimalOdds.value < 2) {
        americanOdds.value = -100/(decimalOdds.value-1)
    } else if (decimalOdds.value > 2) {
        americanOdds.value = (decimalOdds.value -1 )*100
    }
})

const BUTTONS_RIGHT = document.querySelectorAll('.scroll-button-right');

BUTTONS_RIGHT.forEach(button => {
    button.addEventListener('click', (evt) => {
        var buttonId = evt.target.id
        // getting the number in the class name of button and implicitly coercing it.
        var buttonNumber = buttonId.slice(-1)*1
        // using the number above to link the button and the div it will scroll on.
        var container = document.getElementById(`card-container${buttonNumber}`)
        container.scrollLeft += 250
    });
});

const BUTTONS_LEFT = document.querySelectorAll('.scroll-button-left');
BUTTONS_LEFT.forEach(button => {
    button.addEventListener('click', (evt) => {
        var buttonId = evt.target.id
        // getting the number in the class name of button and implicitly coercing it.
        var buttonNumber = buttonId.slice(-1)*1
        // using the number above to link the button and the div it will scroll on.
        var container = document.getElementById(`card-container${buttonNumber}`)
        container.scrollLeft -= 250
    });
});
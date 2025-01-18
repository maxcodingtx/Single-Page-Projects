
class Music {
    constructor(buttonSelector) {
        this.buttons = document.querySelectorAll(buttonSelector);
        this.addEventListeners();
    }

    addEventListeners() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (event) => this.toggle(event));
        });
    }

    toggle(event) {
        const button = event.target;
        const trackList = button.dataset.track;
        const trackListElement = document.getElementById(trackList);

        if (trackListElement.classList.contains('is-visible')) {
            trackListElement.classList.remove('is-visible');
            button.innerHTML = 'Show';
        } else {
            trackListElement.classList.add('is-visible');
            button.innerHTML = 'Hide';
        }
    }
}

const music = new Music('.button');
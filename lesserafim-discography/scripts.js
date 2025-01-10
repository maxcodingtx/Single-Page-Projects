

class Music {
    constructor(buttonSelector, trackListSelector) {
        this.button = document.querySelector(buttonSelector);
        this.trackList = document.getElementById(trackListSelector);
        this.init()
    }

    init() {
        this.button.addEventListener('click', () => {
            this.toggle();
    });}

    toggle() {
        if (this.trackList.classList.contains('is-visible')) {
            this.trackList.classList.remove('is-visible');
            this.button.innerHTML = 'Show';
        } else {
            this.trackList.classList.add('is-visible');
            this.button.innerHTML = 'Hide';
        }
    }
}

const music = new Music('.button',`trackList${this.button.dataset.track}`);
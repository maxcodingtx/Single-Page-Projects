

// class Music {
//     constructor(buttonSelector, trackListSelector) {
//         this.button = document.querySelector(buttonSelector);
//         this.trackList = document.getElementById(trackListSelector);
//         this.currentButton = `${buttonSelector}${this.button.dataset.track}`;
//         this.init()
//     }

//     init() {
//         this.button.addEventListener('click', () => {
//             this.toggle();
//     });}

//     toggle() {
//         if (this.trackList.classList.contains('is-visible')) {
//             this.trackList.classList.remove('is-visible');
//             this.button.innerHTML = 'Show';
//         } else {
//             this.trackList.classList.add('is-visible');
//             this.button.innerHTML = 'Hide';
//         }
//     }
// }


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
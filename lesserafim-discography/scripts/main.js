class TracklistToggle {
  constructor(buttonSelector) {
    this.buttons = document.querySelectorAll(buttonSelector);
    this.addEventListeners();
  }

  addEventListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", (event) => this.toggle(event));
    });
  }

  toggle(event) {
    const button = event.target;
    const trackList = button.dataset.track;
    const trackListElement = document.getElementById(trackList);

    if (trackListElement.classList.contains("is-visible")) {
      trackListElement.classList.remove("is-visible");
      button.innerHTML = "Show";
    } else {
      trackListElement.classList.add("is-visible");
      button.innerHTML = "Hide";
    }
  }
}

async function initDiscography() {
  try {
    const response = await fetch("data/discography.json");
    const data = await response.json();

    const renderer = new DiscographyRenderer(data);
    renderer.renderAll();

    const tracklistToggle = new TracklistToggle(".button");

    const search = new DiscographySearch(data);

    const filter = new DiscographyFilter();

    console.log("Discography loaded successfully");
  } catch (error) {
    console.error("Failed to load discography:", error);
  }
}

document.addEventListener("DOMContentLoaded", initDiscography);

class DiscographyRenderer {
  constructor(data) {
    this.data = data;
    this.albumContainer = document.querySelector(".discography__album");
    this.epContainer = document.querySelector(".EPs");
    this.singlesContainer = document.querySelector(".singles-container");
  }

  renderAll() {
    this.renderAlbums();
    this.renderEPs();
    this.renderSingles();
  }

  renderAlbums() {
    const albumsHTML = this.data.albums
      .map(
        (album) => `
      <div class="discography__album-info" data-type="album" data-id="${album.id}">
        <img src="${album.image}" alt="${album.title}" class="box-shadow-theme">
        <h3>${album.title}</h3>
        <p>Released: ${this.formatDate(album.releaseDate)}</p>
        <div class="discography__tracklist-container">
          <div class="l-discography__tracklist-header">
            <h4>Tracklist</h4>
            <button class="button discography__tracklist-button" data-track="album-${album.id}">Show</button>
          </div>
          <ol class="discography__tracklist-list" id="album-${album.id}">
            ${album.tracklist.map((track) => `<li>${track}</li>`).join("")}
          </ol>
        </div>
      </div>
    `,
      )
      .join("");

    // Preserve the heading and insert albums
    const heading = this.albumContainer.querySelector("h2");
    const hr = this.albumContainer.querySelector("hr");
    this.albumContainer.innerHTML = "";
    this.albumContainer.appendChild(heading);
    this.albumContainer.appendChild(hr);
    this.albumContainer.insertAdjacentHTML("beforeend", albumsHTML);
  }

  renderEPs() {
    const epsHTML = this.data.eps
      .map(
        (ep) => `
      <div class="discography__ep" data-type="ep" data-id="${ep.id}">
        <div class="box-shadow-theme ${ep.imageClass}"></div>
        <h3>${ep.title}</h3>
        <p>Released: ${this.formatDate(ep.releaseDate)}</p>
        <div class="discography__tracklist">
          <div class="l-discography__tracklist-header">
            <h4>Tracklist</h4>
            <button class="button discography__tracklist-button" data-track="ep-${ep.id}">Show</button>
          </div>
          <ol class="discography__tracklist-list" id="ep-${ep.id}">
            ${ep.tracklist.map((track) => `<li>${track}</li>`).join("")}
          </ol>
        </div>
      </div>
    `,
      )
      .join("");

    // Preserve heading and insert EPs
    const heading = this.epContainer.querySelector("h2");
    const hr = this.epContainer.querySelector("hr");
    this.epContainer.innerHTML = "";
    this.epContainer.appendChild(heading);
    this.epContainer.appendChild(hr);
    this.epContainer.insertAdjacentHTML("beforeend", epsHTML);
  }

  renderSingles() {
    const singlesHTML = `
      <div class="singles__tracklist-container" data-type="singles">
        <h4>Korean Singles</h4>
        <ul class="singles-list">
          ${this.data.singles.korean.map((single) => `<li>${single}</li>`).join("")}
        </ul>
        <h4>Japanese Singles</h4>
        <ul class="singles-list">
          ${this.data.singles.japanese.map((single) => `<li>${single}</li>`).join("")}
        </ul>
        <h4>English Singles</h4>
        <ul class="singles-list">
          ${this.data.singles.english.map((single) => `<li>${single}</li>`).join("")}
        </ul>
        <h4>Promotional Singles</h4>
        <ul class="singles-list">
          ${this.data.singles.promotional.map((single) => `<li>${single}</li>`).join("")}
        </ul>
      </div>
    `;

    const heading = this.singlesContainer.querySelector("h2");
    const hr = this.singlesContainer.querySelector("hr");
    this.singlesContainer.innerHTML = "";
    this.singlesContainer.appendChild(heading);
    this.singlesContainer.appendChild(hr);
    this.singlesContainer.insertAdjacentHTML("beforeend", singlesHTML);
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}

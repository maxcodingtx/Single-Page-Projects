class DiscographySearch {
  constructor(data) {
    this.data = data;
    this.miniSearch = new MiniSearch({
      fields: ["title", "tracklist", "type"],
      storeFields: ["id", "title", "type"],
      searchOptions: {
        boost: { title: 2 },
        fuzzy: 0.2,
        prefix: true,
      },
    });

    this.indexData();
    this.initUI();
  }

  indexData() {
    this.data.albums.forEach((album) => {
      this.miniSearch.add({
        id: `album-${album.id}`,
        title: album.title,
        tracklist: album.tracklist.join(" "),
        type: "album",
      });
    });

    this.data.eps.forEach((ep) => {
      this.miniSearch.add({
        id: `ep-${ep.id}`,
        title: ep.title,
        tracklist: ep.tracklist.join(" "),
        type: "ep",
      });
    });

    const allSingles = [
      ...this.data.singles.korean,
      ...this.data.singles.japanese,
      ...this.data.singles.english,
      ...this.data.singles.promotional,
    ];

    allSingles.forEach((single, index) => {
      this.miniSearch.add({
        id: `single-${index}`,
        title: single,
        tracklist: "",
        type: "singles",
      });
    });
  }

  initUI() {
    this.searchInput = document.getElementById("search-input");
    this.searchInput?.addEventListener("input", (e) =>
      this.handleSearch(e.target.value),
    );
  }

  handleSearch(query) {
    if (!query || query.length < 2) {
      this.showAll();
      return;
    }

    const results = this.miniSearch.search(query);
    const resultIds = results.map((r) => r.id);

    this.filterByResults(resultIds);
  }

  filterByResults(resultIds) {
    // removing all albums, eps, singles
    document.querySelectorAll("[data-type]").forEach((e) => {
      e.style.display = "none";
    });

    resultIds.forEach((id) => {
      const element = document.querySelector(
        `[data-id="${id.replace(/^(album|ep|single)-/, "")}"]`,
      );
      if (element) {
        element.style.display = "";
      }
    });

    const singlesVisible = resultIds.some((id) => id.startsWith("single-"));
    // showing/hiding singles
    const singlesContainer = document.querySelector('[data-type="singles"]');
    if (singlesContainer) {
      singlesContainer.style.display = singlesVisible ? "" : "none";
    }
  }

  showAll() {
    document.querySelectorAll("[data-type]").forEach((e) => {
      e.style.display = "";
    });
  }
}

class DiscographyFilter {
  constructor() {
    this.activeFilter = "all";
    this.initUI();
    this.initKeyboardNav();
  }

  initUI() {
    this.filterButtons = document.querySelectorAll("[data-filter]");
    this.filterButtons.forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.handleFilter(e.target.dataset.filter),
      );
    });
  }

  handleFilter(filterType) {
    this.activeFilter = filterType;

    // Update active button state and ARIA
    this.filterButtons.forEach((btn) => {
      const isActive = btn.dataset.filter === filterType;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-checked", isActive ? "true" : "false");
    });

    if (filterType === "all") {
      this.showAll();
    } else {
      this.filterByType(filterType);
    }
  }

  filterByType(type) {
    const albumContainer = document.querySelector(".discography__album");
    albumContainer.style.display =
      type === "all" || type === "albums" ? "" : "none";

    const epContainer = document.querySelector(".EPs");
    if (epContainer) {
      epContainer.style.display =
        type === "all" || type === "eps" ? "" : "none";
    }

    const singlesContainer = document
      .querySelector('[data-type="singles"]')
      ?.closest(".singles-container");
    if (singlesContainer) {
      singlesContainer.style.display =
        type === "all" || type === "singles" ? "" : "none";
    }
  }

  showAll() {
    document.querySelector(".discography__album").style.display = "";
    const epContainer = document.querySelector(".EPs");
    if (epContainer) {
      epContainer.style.display = "";
    }
    const singlesContainer = document
      .querySelector('[data-type="singles"]')
      ?.closest(".singles-container");
    if (singlesContainer) {
      singlesContainer.style.display = "";
    }
  }

  initKeyboardNav() {
    this.filterButtons.forEach((btn, index) => {
      btn.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          const nextBtn =
            this.filterButtons[index + 1] || this.filterButtons[0];
          nextBtn.focus();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          const prevBtn =
            this.filterButtons[index - 1] ||
            this.filterButtons[this.filterButtons.length - 1];
          prevBtn.focus();
        }
      });
    });
  }
}

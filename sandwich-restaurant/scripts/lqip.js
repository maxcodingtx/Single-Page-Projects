const generateLqip = (function () {
  const config = {
    rootMargin: "50px",
    threshold: 0.01,
  };

  function loadImage(img) {
    const src = img.dataset.src;
    if (!src) return;

    const fullImage = new Image();

    fullImage.onload = function () {
      img.src = src;
      img.classList.remove("lqip");
      img.classList.add("loaded");
      delete img.dataset.src;
    };

    fullImage.src = src;
  }

  function observeImages() {
    const images = document.querySelectorAll("img[data-src].lqip");

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImage(img);
          observer.unobserve(img);
        }
      });
    }, config);

    images.forEach((img) => imageObserver.observe(img));
  }

  function init() {
    observeImages();

    const menuContainer = document.getElementById("menu-container");
    if (menuContainer) {
      const containerObserver = new MutationObserver(observeImages);
      // observing anything inside the menu container
      containerObserver.observe(menuContainer, {
        childList: true,
        subtree: true,
      });
    }
  }

  return { init };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", generateLqip.init);
} else {
  generateLqip.init();
}

const CartModule = (function () {
  const storageKey = "iphoneCart";
  const basePrice = 899;

  let state = {
    basePrice: basePrice,
    selectedColor: "black",
    selectedStorage: 100, // 128GB price
    selectedDelivery: 0,
  };

  let elements = {};

  function cacheElements() {
    elements = {
      phonePicture: document.getElementById("phone-picture"),
      phoneImage: document.getElementById("phone-image"),
      phoneSource: document.querySelector("#phone-picture source"),
      storagePrice: document.getElementById("storagePrice"),
      deliveryPrice: document.getElementById("deliveryPrice"),
      totalPrice: document.getElementById("totalPrice"),
      colorButtons: document.querySelectorAll("[data-color]"),
      storageButtons: document.querySelectorAll("[data-storage]"),
      deliveryButtons: document.querySelectorAll("[data-delivery]"),
    };
  }

  function calculateTotal() {
    return state.basePrice + state.selectedStorage + state.selectedDelivery;
  }

  function updateUI() {
    const color = state.selectedColor;

    // Update WebP source srcset
    elements.phoneSource.srcset = `
      img/iphone-16-plus-${color}_320.webp 320w,
      img/iphone-16-plus-${color}_640.webp 640w,
      img/iphone-16-plus-${color}_1024.webp 1024w
    `;

    // Update JPEG img srcset and src
    elements.phoneImage.srcset = `
      img/iphone-16-plus-${color}_320.jpg 320w,
      img/iphone-16-plus-${color}_640.jpg 640w,
      img/iphone-16-plus-${color}_1024.jpg 1024w
    `;
    elements.phoneImage.src = `img/iphone-16-plus-${color}.jpg`;
    elements.phoneImage.alt = `iPhone 16 Plus in ${color}`;

    elements.storagePrice.innerText = `$${state.selectedStorage}`;
    elements.deliveryPrice.innerText = `$${state.selectedDelivery}`;
    elements.totalPrice.innerHTML = `Total - $${calculateTotal()}`;

    updateButtonAria();
  }

  function updateButtonAria() {
    elements.colorButtons.forEach((button) => {
      const isPressed = button.dataset.color === state.selectedColor;
      button.setAttribute("aria-pressed", isPressed);
    });

    elements.storageButtons.forEach((button) => {
      const isPressed =
        parseInt(button.dataset.storage) === state.selectedStorage;
      button.setAttribute("aria-pressed", isPressed);
    });
    elements.deliveryButtons.forEach((button) => {
      const isPressed =
        parseInt(button.dataset.delivery) === state.selectedDelivery;
      button.setAttribute("aria-pressed", isPressed);
    });
  }

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (e) {
      console.warn("localStorage not available:", e);
    }
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const savedState = JSON.parse(saved);
        state = { ...state, ...savedState };
      }
    } catch (e) {
      console.warn("Could not load saved cart:", e);
    }
  }

  function attachEventListeners() {
    elements.colorButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const color = e.currentTarget.dataset.color;
        stateInterface.updateColor(color);
      });
    });
    elements.storageButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const price = parseInt(e.currentTarget.dataset.storage);
        stateInterface.updateStorage(price);
      });
    });

    elements.deliveryButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const price = parseInt(e.currentTarget.dataset.delivery);
        stateInterface.updateDelivery(price);
      });
    });
  }

  function init() {
    cacheElements();
    loadState();
    updateUI();
    attachEventListeners();
  }

  const stateInterface = {
    updateColor(color) {
      state.selectedColor = color;
      updateUI();
      saveState();
    },

    updateStorage(price) {
      state.selectedStorage = price;
      updateUI();
      saveState();
    },

    updateDelivery(price) {
      state.selectedDelivery = price;
      updateUI();
      saveState();
    },

    getTotal() {
      return calculateTotal();
    },

    getCartState() {
      return { ...state };
    },

    init,
  };

  return stateInterface;
})();

document.addEventListener("DOMContentLoaded", () => {
  CartModule.init();
});

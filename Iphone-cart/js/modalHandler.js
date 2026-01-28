const ModalHandler = (function () {
  let elements = {};
  let focusTrap = null;
  let checkoutButton = null;

  function cacheElements() {
    elements = {
      modal: document.getElementById("checkout-modal"),
      backdrop: document.querySelector(".modal-backdrop"),
      closeBtn: document.querySelector(".modal-close"),
      cancelBtn: document.querySelector(".btn-cancel"),
      checkoutBtn: document.getElementById("checkout-btn"),
      form: document.getElementById("checkout-form"),
      modalTotal: document.getElementById("modal-total"),
      successMessage: document.getElementById("success-message"),
      modalContent: document.querySelector(".modal-content"),
    };
    checkoutButton = elements.checkoutBtn;
  }

  function openModal() {
    const total = CartModule.getTotal();
    elements.modalTotal.textContent = `$${total}`;

    elements.modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";

    initializeFocusTrap();

    const firstInput = document.getElementById("customer-name");
    setTimeout(() => firstInput.focus(), 100);
  }

  function closeModal() {
    if (focusTrap) {
      focusTrap.deactivate();
      focusTrap = null;
    }

    elements.modal.setAttribute("hidden", "");
    document.body.style.overflow = "";

    elements.form.reset();
    elements.successMessage.setAttribute("hidden", "");
    elements.form.removeAttribute("hidden");

    if (checkoutButton) {
      checkoutButton.focus();
    }
  }

  function initializeFocusTrap() {
    if (typeof focusTrap === "undefined" || !window.focusTrap) {
      console.warn("focus-trap library not loaded");
      return;
    }

    focusTrap = window.focusTrap.createFocusTrap(elements.modal, {
      initialFocus: "#customer-name",
      escapeDeactivates: true,
      clickOutsideDeactivates: false,
      onDeactivate: closeModal,
    });

    focusTrap.activate();
  }

  function handleBackdropClick(e) {
    if (e.target === elements.backdrop) {
      closeModal();
    }
  }

  function handleEscapeKey(e) {
    if (e.key === "Escape" && !elements.modal.hasAttribute("hidden")) {
      closeModal();
    }
  }

  // only runs when submit button is not disabled
  function handleFormSubmit(e) {
    e.preventDefault();

    showSuccessMessage();

    setTimeout(() => {
      closeModal();
    }, 3000);
  }

  function showSuccessMessage() {
    elements.form.setAttribute("hidden", "");
    elements.successMessage.removeAttribute("hidden");
  }

  function attachEventListeners() {
    elements.checkoutBtn.addEventListener("click", openModal);
    elements.closeBtn.addEventListener("click", closeModal);
    elements.cancelBtn.addEventListener("click", closeModal);
    elements.backdrop.addEventListener("click", handleBackdropClick);
    elements.form.addEventListener("submit", handleFormSubmit);
    document.addEventListener("keydown", handleEscapeKey);
  }

  function init() {
    cacheElements();
    attachEventListeners();
  }

  return {
    init,
    openModal,
    closeModal,
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  ModalHandler.init();
});

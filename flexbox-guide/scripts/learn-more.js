function toggleLearnMore() {
  const content = document.getElementById("learnMoreContent");
  const icon = document.getElementById("toggleIcon");
  const button = document.querySelector(".learn-more__toggle");

  const isOpen = content.classList.contains("learn-more__content--open");

  if (isOpen) {
    content.classList.remove("learn-more__content--open");
    icon.classList.remove("learn-more__icon--open");
    button.setAttribute("aria-expanded", "false");
  } else {
    content.classList.add("learn-more__content--open");
    icon.classList.add("learn-more__icon--open");
    button.setAttribute("aria-expanded", "true");
  }
}

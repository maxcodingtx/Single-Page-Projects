// render menu.json data to the menu page

async function getMenu() {
  try {
    const response = await fetch("./data/menu.json");
    const data = await response.json();
    console.table(data);
    return data;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null;
  }
}

function createMenuItem(item) {
  const card = document.createElement("div");
  card.className = "menu__card fontsize--1";
  card.setAttribute("data-item-id", item.id);

  card.innerHTML = `
  <div class="menu__card-image-wrapper">
    <img src="${item.image}" alt="${item.name}" class="menu__card-image" loading="lazy">
  </div>
  <h3 class="menu__card-title">${item.name}</h3>
  <p class="menu__card-description">${item.description}</p>
  <div class="menu__card-meta">
    <p class="menu__card-price">$${item.price.toFixed(2)}</p>
    ${item.popular ? '<span class="menu__card-popular">Popular</span>' : ""}
  </div>
  <button class="menu__card-order">Order Now</button>
  `;
  return card;
}

function createCategorySection(category) {
  const section = document.createElement("section");
  section.className = "menu__category";
  section.id = `category-${category.id}`;

  section.innerHTML = `
      <button 
        class="menu__category-toggle" 
        aria-expanded="false"
        aria-controls="items-${category.id}">
        <h2 class="menu__category-title">${category.name}</h2>
        <span class="menu__category-icon" >+</span>
      </button>
      <p class="menu__category-description">${category.description}</p>
      <div class="menu__category-items l-menu-cards" id="items-${category.id}">
      </div>
    `;

  const itemsContainer = section.querySelector(".menu__category-items");
  category.items.forEach((item, i) => {
    const itemCard = createMenuItem(item);
    itemsContainer.appendChild(itemCard);

    if (i < category.items.length - 1) {
      const separator = document.createElement("hr");
      separator.className = "menu__item-separator";
      itemsContainer.appendChild(separator);
    }
  });
  return section;
}

function addToggleListeners() {
  const toggles = document.querySelectorAll(".menu__category-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "false";
      const targetId = toggle.getAttribute("aria-controls");
      const targetSection = document.getElementById(targetId);
      const icon = toggle.querySelector(".menu__category-icon");

      toggle.setAttribute("aria-expanded", isExpanded);
      console.log(isExpanded);
      targetSection.style.display = isExpanded ? "flex" : "none";
      icon.textContent = isExpanded ? "-" : "+";
    });
  });
}

async function renderMenu(containerId = "menu-container") {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }
  const data = await getMenu();
  if (!data) {
    console.error("Invalid menu data:", data);
    return;
  }

  container.innerHTML = "";
  data.categories.forEach((category) => {
    const categorySection = createCategorySection(category);
    container.appendChild(categorySection);
  });

  addToggleListeners();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
});

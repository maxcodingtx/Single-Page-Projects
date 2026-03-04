const scrollContainerIds = {
  1: "goalkeeperContainer",
  2: "defenderContainer",
  3: "midfielderContainer",
  4: "forwardContainer",
};

function scrollGroupByButton(event, direction /* 1 for right, -1 for left */) {
  const buttonId = event.currentTarget.id;
  const buttonNumber = Number(buttonId.slice(-1));
  const containerId = scrollContainerIds[buttonNumber];
  const container = document.getElementById(containerId);

  if (!container) return;

  container.scrollLeft += 250 * direction;
}

const rightButtons = document.querySelectorAll(".scroll-button-right");
rightButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    scrollGroupByButton(event, 1);
  });
});
const leftButtons = document.querySelectorAll(".scroll-button-left");
leftButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    scrollGroupByButton(event, -1);
  });
});

function showLoading() {
  const loadingContainer = document.getElementById("loadingContainer");
  const playerContainer = document.getElementById("playerContainer");
  const loadingElement = document.createElement("div");
  loadingElement.classList.add("loading");
  loadingElement.textContent = "Loading...";
  loadingElement.style.display = "block";
  playerContainer.style.display = "none";

  loadingContainer.appendChild(loadingElement);
}

function hideLoading() {
  const loadingElement = document.querySelector(".loading");
  const playerContainer = document.getElementById("playerContainer");
  if (loadingElement) {
    loadingElement.style.display = "none";
    const errorElement = document.querySelector(".error");

    playerContainer.style.display = errorElement ? "none" : "block";
  }
}

function showError(message) {
  const loadingContainer = document.getElementById("loadingContainer");
  const playerContainer = document.getElementById("playerContainer");
  const errorElement = document.createElement("div");
  const tryAgainButton = document.createElement("button");
  errorElement.classList.add("error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
  playerContainer.style.display = "none";
  loadingContainer.appendChild(errorElement);
  tryAgainButton.classList.add("try-again-button");
  tryAgainButton.textContent = "Try Again?";
  tryAgainButton.addEventListener("click", () => {
    errorElement.innerHTML = "Refreshing!";
    setTimeout(() => {
      window.location.reload();
    }, 300);
  });
  loadingContainer.appendChild(tryAgainButton);
}
async function fetchData() {
  showLoading();
  try {
    const response = await fetch("./data/roster.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    showError("Failed to fetch data: " + error.message);
    hideLoading();
    throw error;
  } finally {
    // artificial delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 250));
    hideLoading();
  }
}

function createPlayerCard(player) {
  const card = document.createElement("div");
  card.classList.add("player__card");

  card.innerHTML = `
    <img src="${player.image}" alt="${player.name} Image" >
    <div class="info-player__card">                        
        <p class="info-player__card-name">${player.name}</p>
        <p class="info-player__card-number">Number - ${player.number}</p>
        <div class="info-player__card-country">
            <img src="img/Flags/${player.country}.png" alt="${player.country} Flag">
            <p>${player.country}</p>
        </div>
    </div>
    `;

  return card;
}

function groupPlayersByPosition(players) {
  return players.reduce((groups, player) => {
    const position = player.positionGroup;
    if (!groups[position]) {
      groups[position] = [];
    }
    groups[position].push(player);
    return groups;
  }, {});
}

async function renderGroups() {
  const data = await fetchData();

  const groupedPlayers = groupPlayersByPosition(data.players);
  const [goalkeepers, defenders, midfielders, forwards] =
    Object.values(groupedPlayers);

  const playerCardsByGroup = {
    goalkeepers: goalkeepers.map(createPlayerCard),
    defenders: defenders.map(createPlayerCard),
    midfielders: midfielders.map(createPlayerCard),
    forwards: forwards.map(createPlayerCard),
  };
  const containerIds = {
    goalkeepers: "goalkeeperContainer",
    defenders: "defenderContainer",
    midfielders: "midfielderContainer",
    forwards: "forwardContainer",
  };

  for (const [group, cards] of Object.entries(playerCardsByGroup)) {
    const container = document.getElementById(containerIds[group]);
    cards.forEach((card) => container.appendChild(card));
  }
}

renderGroups();

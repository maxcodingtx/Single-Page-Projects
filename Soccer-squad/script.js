// temporarily not working, will fix later
const BUTTONS_RIGHT = document.querySelectorAll(".scroll-button-right");
BUTTONS_RIGHT.forEach((button) => {
  button.addEventListener("click", (evt) => {
    var buttonId = evt.target.id;
    var buttonNumber = buttonId.slice(-1) * 1;
    var container = document.getElementById(`card-container${buttonNumber}`);
    container.scrollLeft += 250;
  });
});
const BUTTONS_LEFT = document.querySelectorAll(".scroll-button-left");
BUTTONS_LEFT.forEach((button) => {
  button.addEventListener("click", (evt) => {
    var buttonId = evt.target.id;
    var buttonNumber = buttonId.slice(-1) * 1;
    var container = document.getElementById(`card-container${buttonNumber}`);
    container.scrollLeft -= 250;
  });
});

// new code
async function fetchData() {
  try {
    const response = await fetch("./data/roster.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
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

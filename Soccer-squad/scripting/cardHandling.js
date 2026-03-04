function showLoading() {
  const $loadingContainer = $("#loadingContainer");
  const $playerContainer = $("#playerContainer");

  $loadingContainer.empty();
  const $loadingElement = $("<div>", {
    class: "loading",
    text: "Loading...",
  }).css("display", "block");

  $playerContainer.hide();
  $loadingContainer.append($loadingElement);
}

function hideLoading() {
  const $loadingElement = $(".loading").first();
  const hasError = $(".error").length > 0;

  if ($loadingElement.length) {
    $loadingElement.hide();
    $("#playerContainer").css("display", hasError ? "none" : "block");
  }
}

function showError(message) {
  const $loadingContainer = $("#loadingContainer");
  const $playerContainer = $("#playerContainer");

  $loadingContainer.find(".error, .try-again-button").remove();

  const $errorElement = $("<div>", {
    class: "error",
    text: message,
  }).css("display", "block");

  const $tryAgainButton = $("<button>", {
    class: "try-again-button",
    text: "Try Again?",
  }).on("click", function () {
    $errorElement.text("Refreshing!");
    setTimeout(function () {
      window.location.reload();
    }, 300);
  });

  $playerContainer.hide();
  $loadingContainer.append($errorElement, $tryAgainButton);
}

async function fetchData() {
  showLoading();
  try {
    const response = await fetch("./data/roster.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    showError("Failed to fetch data: " + error.message);
    hideLoading();
    throw error;
  } finally {
    await new Promise(function (resolve) {
      setTimeout(resolve, 250);
    });
    hideLoading();
  }
}

function createPlayerCard(player) {
  const $card = $('<div class="player__card"></div>');
  const $info = $('<div class="info-player__card"></div>');
  const $country = $('<div class="info-player__card-country"></div>');

  const flagPath = player.flag || `img/Flags/${player.country}.png`;

  $card.append(
    $("<img>", {
      src: player.image,
      alt: `${player.name} Image`,
    }),
  );

  $info.append(
    $("<p>", {
      class: "info-player__card-name",
      text: player.name,
    }),
    $("<p>", {
      class: "info-player__card-number",
      text: `Number - ${player.number}`,
    }),
  );

  $country.append(
    $("<img>", {
      src: flagPath,
      alt: `${player.country} Flag`,
    }),
    $("<p>", { text: player.country }),
  );

  $info.append($country);
  $card.append($info);
  return $card;
}

function groupPlayersByPosition(players) {
  return players.reduce(function (groups, player) {
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
  const groupedPlayers = groupPlayersByPosition(data.players || []);

  const playerCardsByGroup = {
    goalkeepers: (groupedPlayers.Goalkeepers || []).map(createPlayerCard),
    defenders: (groupedPlayers.Defenders || []).map(createPlayerCard),
    midfielders: (groupedPlayers.Midfielders || []).map(createPlayerCard),
    forwards: (groupedPlayers.Forwards || []).map(createPlayerCard),
  };

  const containerIds = {
    goalkeepers: "#goalkeeperContainer",
    defenders: "#defenderContainer",
    midfielders: "#midfielderContainer",
    forwards: "#forwardContainer",
  };

  Object.entries(playerCardsByGroup).forEach(function ([group, cards]) {
    const $container = $(containerIds[group]);
    $container.empty();
    cards.forEach(function ($card) {
      $container.append($card);
    });
  });
}

$(document).ready(function () {
  renderGroups();
});

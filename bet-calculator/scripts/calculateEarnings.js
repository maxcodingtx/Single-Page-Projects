const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function () {
  const stakeAmount = parseFloat(document.getElementById("stakeInteger").value);
  const americanOdds = document.getElementById("americanOdds").value;
  const decimalOdds = document.getElementById("decimalOdds").value;

  // check which odds type are provided (not empty, using american odds by default if both are provided)
  const oddsType = !!americanOdds ? "american" : "decimal";
  // check if american odds are positive or negative
  const isPositiveAmericanOdds = americanOdds
    ? parseFloat(americanOdds) > 0
    : false;

  calculateEarnings(
    oddsType,
    isPositiveAmericanOdds,
    stakeAmount,
    americanOdds,
    decimalOdds
  );
});

function calculateEarnings(
  oddsType,
  isPositiveAmericanOdds,
  stakeAmount,
  americanOdds,
  decimalOdds
) {
  const winningsElement = document.getElementById("winnings");
  const totalPayoutElement = document.getElementById("payout");
  switch (oddsType) {
    case "american":
      if (isPositiveAmericanOdds) {
        const odds = parseFloat(americanOdds);
        const earnings = (stakeAmount / 100) * odds;
        const totalPayout = winnings + stakeAmount;
        console.log("earnings", earnings);
        console.log("winnings", winnings);
        winningsElement.textContent = `$${earnings.toFixed(2)}`;
        totalPayoutElement.textContent = `$${totalPayout.toFixed(2)}`;
      }
      // negative american odds
      else {
        const odds = Math.abs(parseFloat(americanOdds));
        const earnings = (100 / odds) * stakeAmount;
        const totalPayout = earnings + stakeAmount;
        console.log("earnings", earnings);
        console.log("winnings", winnings);
        winningsElement.textContent = `$${earnings.toFixed(2)}`;
        totalPayoutElement.textContent = `$${totalPayout.toFixed(2)}`;
      }
    case "decimal":
      const odds = parseFloat(decimalOdds);
      const earnings = stakeAmount * odds - stakeAmount;
      const totalPayout = earnings + stakeAmount;
      console.log("earnings", earnings);
      console.log("winnings", winnings);
      winningsElement.textContent = `$${earnings.toFixed(2)}`;
      totalPayoutElement.textContent = `$${totalPayout.toFixed(2)}`;
      break;
  }
}

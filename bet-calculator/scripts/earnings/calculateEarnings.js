import Decimal from "https://cdn.jsdelivr.net/npm/decimal.js@10.4.3/+esm";

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
        const stake = new Decimal(stakeAmount);
        const odds = new Decimal(americanOdds);
        const winnings = stake.dividedBy(100).times(odds);
        const totalPayout = winnings.plus(stake);

        const isValid = window.validateEarnings(winnings, totalPayout);
        if (!isValid) {
          winningsElement.textContent = "$0.00";
          totalPayoutElement.textContent = "$0.00";
          return;
        }

        winningsElement.textContent = `$${winnings.toFixed(2)}`;
        totalPayoutElement.textContent = `$${totalPayout.toFixed(2)}`;
      }
      // negative american odds
      else {
        const stake = new Decimal(stakeAmount);
        const odds = new Decimal(americanOdds).abs();
        const winnings = new Decimal(100).dividedBy(odds).times(stake);
        const totalPayout = winnings.plus(stake);

        const isValid = window.validateEarnings(winnings, totalPayout);
        if (!isValid) {
          winningsElement.textContent = "$0.00";
          totalPayoutElement.textContent = "$0.00";
          return;
        }

        winningsElement.textContent = `$${winnings.toFixed(2)}`;
        totalPayoutElement.textContent = `$${totalPayout.toFixed(2)}`;
      }
      break;
    case "decimal":
      const stake = new Decimal(stakeAmount);
      // default to 0 if decimal odds input is empty, throws error otherwise
      const odds = decimalOdds ? new Decimal(decimalOdds) : new Decimal(0);
      const winnings = stake.times(odds).minus(stake);
      const totalPayout = winnings.plus(stake);

      const isValid = window.validateEarnings(winnings, totalPayout);
      if (!isValid) {
        winningsElement.textContent = "$0.00";
        totalPayoutElement.textContent = "$0.00";
        return;
      }
      winningsElement.textContent = `$${winnings.toFixed(2)}`;
      totalPayoutElement.textContent = `$${totalPayout.toFixed(2)}`;
      break;
  }
}

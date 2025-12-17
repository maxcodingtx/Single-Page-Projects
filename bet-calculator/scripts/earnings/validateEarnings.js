window.validateEarnings = function (winnings, payout) {
  if (
    isNaN(winnings) ||
    isNaN(payout) ||
    winnings.isNegative() ||
    payout.isNegative()
  ) {
    return false;
  }
  return true;
};

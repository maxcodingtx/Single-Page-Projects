window.validateEarnings = function (earnings, payout) {
  if (isNaN(earnings) || isNaN(payout)) {
    return false;
  }
  return true;
};

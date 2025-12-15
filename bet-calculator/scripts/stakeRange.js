const stake = document.getElementById("stakeInteger");
const range = document.getElementById("stakeIntegerRange");
const defaultValue = range.value;

// to set default value on page load
(function () {
  stake.value = defaultValue;
})();

range.addEventListener("input", function () {
  stake.value = this.value;
});
stake.addEventListener("input", function () {
  range.value = this.value;
});

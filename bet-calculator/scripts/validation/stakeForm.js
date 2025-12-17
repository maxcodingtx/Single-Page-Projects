import JustValidate from "https://cdn.jsdelivr.net/npm/just-validate@4.3.0/+esm";

const stakeFormValidator = new JustValidate("#stakeForm", {
  validateOnInput: true,
  errorFieldCssClass: "is-invalid",
  successFieldCssClass: "is-valid",
});

stakeFormValidator.addField(
  "#stakeInteger",
  [
    {
      rule: "required",
      errorMessage: "Stake amount is required",
    },
    {
      rule: "minNumber",
      value: 1,
      errorMessage: "Stake amount must be at least 1",
    },
  ],
  {
    errorsContainer: "#stakeIntegerErrors",
  }
);

stakeFormValidator.addField(
  "#americanOdds",
  [
    {
      validator: (value) =>
        value.trim() !== "" ||
        document.querySelector("#decimalOdds").value.trim() !== "",
      errorMessage: "Either American odds or Decimal odds must be provided",
    },
    {
      rule: "customRegexp",
      value: /^[+\-][1-9]\d+$/,
      errorMessage: "Invalid American odds (erase if using Decimal odds)",
    },
    {
      rule: "minLength",
      value: 4,
      errorMessage:
        "American odds must be at least 4 characters long (erase if using Decimal odds)",
    },
  ],
  {
    errorsContainer: "#americanOddsErrors",
  }
);

stakeFormValidator.addField(
  "#decimalOdds",
  [
    {
      validator: (value, fields) =>
        value.trim() !== "" ||
        document.querySelector("#americanOdds").value.trim() !== "",
      errorMessage: "Either American odds or Decimal odds must be provided",
    },
    {
      rule: "minNumber",
      value: 1.01,
      errorMessage:
        "Decimal odds must be at least 1.01 (erase if using American odds)",
    },
    {
      rule: "customRegexp",
      value: /^\d*(\.\d{0,10})?$/,
      errorMessage: "Invalid Decimal odds (erase if using American odds)",
    },
  ],
  {
    errorsContainer: "#decimalOddsErrors",
  }
);

document
  .getElementById("calculateButton")
  .addEventListener("click", async () => {
    const isValid = await stakeFormValidator.validate();
    if (isValid) {
      const stakeAmount = parseFloat(
        document.getElementById("stakeInteger").value
      );
      const americanOdds = document.getElementById("americanOdds").value;
      const decimalOdds = document.getElementById("decimalOdds").value;
    }
  });

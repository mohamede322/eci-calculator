const money = document.querySelector(".money");
const btnS = document.querySelectorAll(".btn");
const tradingAmountEl = document.querySelector(".trading-amount");
const serviceChargeEl = document.querySelector(".service-charge");
const totalEl = document.querySelector(".total");
const profitEl = document.querySelector(".profit");
const calculateBtn = document.querySelector(".calculate");
let tradingAmount;
let serviceCharge;
let total;
let profit;

let value;
money.addEventListener("input", () => {
  value = money.value;
});

btnS.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnS.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

calculateBtn.addEventListener("click", () => {
  if (document.querySelector(".active") != null && value != undefined) {
    calculateTradingAmount();
    calculateServiceCharge();
    calculateTotal();
    calculateProfit();
  } else {
    alert("Please input your money or select the profit");
  }
});

function calculateTradingAmount() {
  tradingAmount = value / 822;
  tradingAmountEl.innerHTML = `Trading Amount (lots) = <span>${tradingAmount.toFixed(
    4
  )}</span>`;
}
function calculateServiceCharge() {
  serviceCharge = tradingAmount * 42;
  serviceChargeEl.innerHTML = `Service Charge = <span>${serviceCharge.toFixed(
    4
  )}$</span>`;
}
function calculateTotal() {
  const active = document.querySelector(".active").id;
  total = serviceCharge * active;
  totalEl.innerHTML = `TotalWin = <span>${total.toFixed(4)}$</span>`;
}
function calculateProfit() {
  profit = total - serviceCharge;
  profitEl.innerHTML = `Profit = <span>${profit.toFixed(4)}$</span>`;
}

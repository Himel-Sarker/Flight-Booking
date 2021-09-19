function flightHandler(type, isIncrement) {
  const firstBtn = document.getElementById(`${type}-unit`);
  let firstUnit = Number(firstBtn.value);
  if (isIncrement === false) {
    if (firstUnit != 0) firstUnit--;
  } else {
    firstUnit++;
  }
  firstBtn.value = firstUnit;
  priceCount();
}
function priceCount() {
  const firstUnit = unitCount("first");
  const economyUnit = unitCount("economy");
  let subtotal = firstUnit * 150 + economyUnit * 100;
  let vat = subtotal * 0.1;
  let total = vat + subtotal;
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("vat").innerText = vat;
  document.getElementById("total").innerText = total;
}
function unitCount(name) {
  const firstBtn = document.getElementById(`${name}-unit`);
  let firstUnit = Number(firstBtn.value);
  return firstUnit;
}

/*
let firstPrice = 0;
document
  .getElementById("first-increment")
  .addEventListener("click", function () {
    const firstIncrement = document.getElementById("first-unit");
    let firstUnit = Number(firstIncrement.value);
    firstUnit++;
    firstIncrement.value = firstUnit;
    firstPrice = firstUnit * 150;

    document.getElementById("subtotal").innerText = firstPrice;
  });
document
  .getElementById("first-decrement")
  .addEventListener("click", function () {
    const firstDecrement = document.getElementById("first-unit");
    let firstUnit = Number(firstDecrement.value);
    if (firstUnit > 0) {
      firstUnit--;
      firstDecrement.value = firstUnit;
      firstPrice = firstUnit * 150;

      document.getElementById("subtotal").innerText = firstPrice;
    }
  });
*/

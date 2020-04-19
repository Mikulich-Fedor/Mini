let office = document.getElementById("office");
let officeNname = document.getElementById("officeNname");
let currency = document.getElementById("currency");
let cursUsd = document.getElementById("cursUsd");
let valueUsd = document.getElementById("valueUsd");
let cursEuro = document.getElementById("cursEuro");
let valueEuro = document.getElementById("valueEuro");
let cursRu = document.getElementById("cursRu");
let valueRu = document.getElementById("valueRu");
let payBitcoin = document.getElementById("payBitcoin");
let apiBank = "https://www.nbrb.by/API/ExRates/Rates?Periodicity=0";

async function usd(apiBank) {
  fetch(apiBank).then((response) =>
    response.json().then((data) => {
      (cursUsd.innerHTML = data[4].Cur_Name),
        (valueUsd.innerHTML = data[4].Cur_OfficialRate.toFixed(3));
    })
  );
}
usd(apiBank);

async function euro(apiBank) {
  fetch(apiBank).then((response) =>
    response.json().then((data) => {
      (cursEuro.innerHTML = data[5].Cur_Name),
        (valueEuro.innerHTML = data[5].Cur_OfficialRate.toFixed(3));
    })
  );
}
euro(apiBank);

async function ru(apiBank) {
  fetch(apiBank).then((response) =>
    response.json().then((data) => {
      (cursRu.innerHTML = data[16].Cur_Name),
        (valueRu.innerHTML = data[16].Cur_OfficialRate.toFixed(3));
    })
  );
}
ru(apiBank);

function sorry() {
  alert("Сервис пока непоступен");
}
export { office, officeNname, payBitcoin, sorry };

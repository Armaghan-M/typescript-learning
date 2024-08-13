"use strict";
let type = document.querySelector("#type");
let form = document.querySelector("#form");
let toFrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
let listContainer = document.querySelector(".item-list");
let allPayments = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newPayment = {
        type: type.value,
        toFrom: toFrom.value,
        details: details.value,
        amount: parseInt(amount.value),
        isAdmin: true
    };
    allPayments.push(newPayment);
    allPayments.forEach((item) => {
        allPayments = [];
        let liElement = document.createElement("li");
        liElement.innerHTML = `${item.type === "Admin" ? "Admin" : "User"} | ${item.toFrom} | ${item.details} | ${item.amount}$ `;
        listContainer.append(liElement);
    });
    toFrom.value = "";
    details.value = "";
    amount.value = "";
});
//# sourceMappingURL=index.js.map
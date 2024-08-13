"use strict";
let type = document.querySelector("#type");
let form = document.querySelector("#form");
let toFrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
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
    toFrom.value = "";
    details.value = "";
    amount.value = "";
});
//# sourceMappingURL=index.js.map
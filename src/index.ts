let type = document.querySelector("#type") as HTMLSelectElement;
let form = document.querySelector("#form") as HTMLFormElement;
let toFrom = document.querySelector("#tofrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;
let listContainer = document.querySelector(".item-list") as HTMLUListElement;
interface Payment {
  type: string;
  toFrom: string;
  details: string;
  amount: number;
  isAdmin: boolean;
}
let allPayments: Payment[] = [];

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let newPayment: Payment = {
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
    liElement.innerHTML = `${item.type === "Admin" ? "Admin" : "User"} | ${
      item.toFrom
    } | ${item.details} | ${item.amount}$ `;
    listContainer.append(liElement);
  });

  toFrom.value = "";
  details.value = "";
  amount.value = "";
});

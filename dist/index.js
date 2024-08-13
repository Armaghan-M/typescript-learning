"use strict";
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("invalid");
        }
        this.balance += amount;
    }
}
const account = new Account(1, "ari", 0);
console.log(account);
//# sourceMappingURL=index.js.map
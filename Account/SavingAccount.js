import { Account } from "../Account/Account.js";

// Subclass(child) inheriting by superclass(parent)
export class SavingAccount extends Account{
    static numberSavingAccounts = 0;

    constructor(initialBalance, client, agency){
        super(initialBalance, client, agency);
        SavingAccount.numberSavingAccounts++;
    }

    // Others Methods
    withdraw(value) {
        const fee = 0.01; // 1%
        const valueWithFee = (1+fee)*value;
        return super._withdraw(valueWithFee);
    }
}
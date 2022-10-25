// Importing a class module
import { Account } from "../Account/Account.js";

// Inherit theory - Pillar of OOP Methodology
// subclass(child) inheriting by superclass(parent)
export class CurrentAccount extends Account {
    // Class static properties
    static numberCurrentAccounts = 0;

    // Defining the subclass(child) construtor
    // Polymorphism - Pillar of OOP Paradigm
    constructor(client, agency){ 
        super(0, client, agency); // Calling the superclass(parent) construtor inside the child constructor.
        CurrentAccount.numberCurrentAccounts++; 
    }

    // Others Methods
    // Polymorphism - Pillar of OOP Paradigm
    withdraw(value) { 
        // Overwriting the superclass(parent) method by the subclass(child) method.
        // Fee is a internal variable specific to the account type. In this account type, it's around 5%.
        const fee = 0.05;
        const valueWithFee = (1+fee)*value;
        return super._withdraw(valueWithFee);
    }
}
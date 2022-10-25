import { Client } from "../Client.js";

// Defining an exportable abstract class
export class Account {
    
    // Object private properties
    #client;
    #balance;
    
    // Constructor
    constructor(initialBalance, client, agency) {
        if (this.constructor == Account){   
            throw new Error("This is an abstract class, so you can't instancead it")
        }
       
        this.balance = initialBalance;
        // this.#client = client ---> Direct assignment of the private attribute
        this.client = client; // Indirect assignment of the private attribute by setter --> Forcing to check the type of value passed (InstanceOf)
        this.agency = agency; // Direct assignment of the public attribute
    }

    // Getters - Returning the private properties
    get client() {
        return this.#client;
    }
    
    get balance() {
        return this.#balance;
    }

    // Encapsulation - Pillar of OOP Methodology
    // Setters - Modifying the private properties
    set client(newObject) {
        if (newObject instanceof Client) {
            this.#client = newObject;
        }
    }

    set balance(value) {
        // this.#balance is the assignment of the private property balance
        this.#balance = value;
        // Encapsulation theory
    }

    // As 'agency' is a public property, it isn't need getter and setter!

    // Others Methods
    // Abstract method - Withdraw
    withdraw(value){
        throw new Error("This is an abstract method, so you can't call it")
    }
    
    /* I would like defining withdraw (public method) as abstract. 
    The children class have to overwriting this method calling other superclass method.  
    I can't create a private method because it can't be call out of the class.
    So, I will creating a method to work as a 'protected method': _withdraw */
    _withdraw(valueToWithdraw) { 
        // this.balance is the public method to modify(set) the private property balance
        if (this.balance >= valueToWithdraw) {
            this.balance -= valueToWithdraw;
            return valueToWithdraw;
        }
        return 0;
    }

    deposit(valueToDeposit) {
        if (valueToDeposit > 0) {
            this.balance += valueToDeposit;
        }
    }

    transfer(valueToTransfer, accountToTransfer) {
        this.withdraw(valueToTransfer);
        accountToTransfer.deposit(valueToTransfer);
    }
}
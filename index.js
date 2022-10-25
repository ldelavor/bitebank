// Importing the class' modules
import { Client } from './Client.js'
import { CurrentAccount } from './Account/CurrentAccount.js'
import { SavingAccount } from './Account/SavingAccount.js';
import { EarningAccount } from './Account/EarningAccount.js';
import { Employee } from './Employee/Employee.js';
import { AuthenticationSystem } from './AuthenticationSystem.js';

// Instancing the clients
const client1 = new Client("Ricardo", 11122233389);
const client2 = new Client("Alice", 11155566689);

// Instancing currents accounts 
const account1 = new CurrentAccount(client1, 1111);
const account2 = new CurrentAccount(client2, 3333);
const saving1 = new SavingAccount(100, client1, 1001);
const earning1 = new EarningAccount(100, client1, 1001);

// Instancing employees
const employ1 = new Employee("Lucas", 11155544489, 1383);
employ1.passwordRegistration("456");
console.log(employ1.name);

const estalogado = AuthenticationSystem.login(employ1, "456");
console.log(estalogado)
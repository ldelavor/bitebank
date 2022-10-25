import { Employee } from "../Employee/Employee.js";

export class Manager extends Employee {

    constructor(name, cpf, salary){
        super.construtor(name, cpf, salary)
        this.bonus = 1.4;
    }
}
import { Employee } from "../Employee/Employee.js";

export class Director extends Employee {
    
    constructor(name, cpf, salary){
        super.construtor(name, cpf, salary)
        this.bonus = 2.0;
    }
}